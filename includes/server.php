<?php

/**
 * Generic data fetching wrapper
 * Uses the WP-API for fetching
 */
function eb_instagram_fetchData($url)
{
	$request = wp_remote_get($url, array('timeout' => 15));

	if (is_wp_error($request) || 200 !== wp_remote_retrieve_response_code($request)) {
		return false;
	}

	return wp_remote_retrieve_body($request);
}

/**
 * Caching functions
 * The number of images is used as a suffix in the case that the user
 * adds/removes images and expects a refreshed feed.
 */
function eb_instagram_add_to_cache($result, $suffix = '', $expire = (60 * 60 * 6))
{
	$set = set_transient('eb-instagram-api_' . $suffix, $result, $expire);
}

function eb_instagram_get_from_cache($suffix = '')
{
	return get_transient('eb-instagram-api_' . $suffix);
}

/**
 * Server side rendering functions
 */
function eb_instagram_render_callback(array $attributes)
{
	if (!is_admin()) {
		wp_enqueue_script("eb-isotope");
		wp_enqueue_script("eb-imageloaded");
		wp_enqueue_script("eb-instagram-feed-block-script");
	}

	$attributes = wp_parse_args(
		$attributes,
		[
			'blockId' => '',
			'token' => '',
			'layout' => 'overlay',
			'cardStyle' => 'content__outter',
			'overlayStyle' => 'overlay__simple',
			'hasEqualImages' => true,
			'numberOfImages' => 6,
			'sortBy' => 'most_recent',
			'showCaptions' => true,
			'showProfileName' => true,
			'showProfileImg' => true,
			'showMeta' => true,
			'enableLink' => false,
			'openInNewTab' => false,
			'profileImg' => defined('EB_INSTAGRAM_BLOCK_ASSETS') ? EB_INSTAGRAM_BLOCK_ASSETS . 'images/user.png' : '',
			'profileName' => '',
			'align' => '',
		]
	);

	$token = (string) $attributes['token'];
	$blockId = sanitize_html_class($attributes['blockId']);

	$layout = $attributes['layout'];
	$cardStyle = sanitize_html_class($attributes['cardStyle']);
	$overlayStyle = sanitize_html_class($attributes['overlayStyle']);
	$hasEqualImages = $attributes['hasEqualImages'] ? ' has__equal__height' : '';
	$numberOfImages = (int) $attributes['numberOfImages'];
	$sortBy = $attributes['sortBy'];
	$showCaptions = $attributes['showCaptions'];
	$showProfileName = $attributes['showProfileName'];
	$showProfileImg = $attributes['showProfileImg'];
	$showMeta = $attributes['showMeta'];
	$enableLink = $attributes['enableLink'];
	$openInNewTab = $attributes['openInNewTab'];
	$profileImg = isset($attributes['profileImg']) ? $attributes['profileImg'] : '';
	$profileName = isset($attributes['profileName']) ? $attributes['profileName'] : '';
	$align = !empty($attributes['align']) ? ' align' . sanitize_html_class($attributes['align']) : '';


	// originally we got the user id from the token but this no longer possible

	// create a unique id so there is no double ups
	$suffix = $token . '_' . $numberOfImages;
	if (!eb_instagram_get_from_cache($suffix)) {
		// no valid cache found
		// hit the network
		$result = json_decode((string) eb_instagram_fetchData("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&limit=500&access_token=" . rawurlencode($token)));
		// Only cache a real answer, so an error response is not kept for hours.
		if (is_object($result) && isset($result->data) && is_array($result->data)) {
			eb_instagram_add_to_cache($result, $suffix); // add the result to the cache
		}
	} else {
		$result = eb_instagram_get_from_cache($suffix); // hit the cache
	}

	$thumbs = isset($result->data) ? $result->data : array();

	$layoutClass = $layout === "card" ? $cardStyle : $overlayStyle;

	$imageContainer = '<div class="eb-instagram-wrapper ' . $blockId . $align . '">
	<div class="eb-instagram__gallery">
	';

	if (is_array($thumbs)) {

		switch ($sortBy) {
			case 'most_recent':
				usort($thumbs, function ($a, $b) {
					return (int)(strtotime($a->timestamp) < strtotime($b->timestamp));
				});
				break;

			case 'least_recent':
				usort($thumbs, function ($a, $b) {
					return (int)(strtotime($a->timestamp) > strtotime($b->timestamp));
				});
				break;
		}

		foreach ($thumbs as $key => $thumb) {
			$author_info = $meta = '';
			$username = isset($thumb->username) ? (string) $thumb->username : '';
			$profile_url = esc_url('//www.instagram.com/' . rawurlencode($username));
			if ('card' === $layout && ($showProfileName || $showProfileImg)) {
				$author_info .= '<div class="author__info">';
				if ($showProfileImg && !empty($profileImg)) {
					$author_info .= '<div class="author__thumb">
							<a href="' . $profile_url . '" target="_blank" rel="noopener noreferrer"><img src="' . esc_url($profileImg) . '" alt="' . esc_attr($username) . '" /></a>
						</div>';
				}
				$author_name = !empty($profileName) ? esc_html($profileName) : esc_html($username);
				if ($showProfileName) {
					$author_info .= '<h5 class="author__name"><a href="' . $profile_url . '" target="_blank" rel="noopener noreferrer">' . $author_name . '</a></h5>';
				}
				$author_info .= '</div>';
			}

			if ($showMeta) {
				$meta .= '<div class="eb-instagram-meta">
					<span class="dashicons dashicons-clock"></span>
					<span class="eb-instagram-date">
						' . esc_html(wp_date("d M Y", strtotime($thumb->timestamp))) . '
					</span>
				</div>';
			}

			$caption = $showCaptions && isset($thumb->caption) ? '<div class="eb-instagram-caption"><p>' . esc_html($thumb->caption) . '</p></div>' : '';
			$media_type = esc_attr($thumb->media_type);
			$image = esc_url($thumb->media_url);

			if ($media_type === "VIDEO") {
				$image = esc_url($thumb->thumbnail_url);
			}
			$imageAlt = isset($thumb->caption) ? esc_attr($thumb->caption) : '';
			$target = $enableLink && $openInNewTab ? ' target="_blank" rel="noopener noreferrer"' : '';

			if ($key < $numberOfImages) {
				$imageContainer .= '<div class="instagram__gallery__col">
					<div class="instagram__gallery__item instagram__gallery__item--' . $layoutClass . $hasEqualImages . '">
						' . $author_info;
				if ($enableLink) {
					$imageContainer .= '<a href="' . esc_url($thumb->permalink) . '"' . $target . '>';
				}
				$imageContainer .= '<div class="instagram__gallery__thumb">
				
				 <div class="thumb__wrap">
								<img src="' . $image . '" alt="' . $imageAlt . '" />
							</div>
							' . $caption . '</div>';
				if ($enableLink) {
					$imageContainer .= '</a>';
				}
				$imageContainer .=
					$meta . '
					</div>
				</div>';
			}
		}
	}

	return "{$imageContainer}</div></div>";
}
