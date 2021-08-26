<?php

/**
 * Generic data fetching wrapper
 * Uses the WP-API for fetching
 */
function eb_instagram_fetchData($url)
{
	$request = wp_remote_get($url);

	if (is_wp_error($request)) {
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
	set_transient('eb-instagram-api_' . $suffix, $result, $expire);
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
	// echo '<pre>';
	// print_r($attributes);
	// echo '</pre>';
	$attributes = wp_parse_args(
		$attributes,
		[
			'blockId' => '',
			'token' => '',
			'hasEqualImages' => false,
			'numberOfImages' => 4,
			'gridGap' => 0,
			'backgroundColor' => 'transparent',
			'className' => '',
			'align' => '',
			'showCaptions' => false,
			'borderRadius' => 0
		]
	);

	$token = $attributes['token'];
	$blockId = $attributes['blockId'];

	$layout = $attributes['layout'];
	$cardStyle = $attributes['cardStyle'];
	$overlayStyle = $attributes['overlayStyle'];
	$hasEqualImages = $attributes['hasEqualImages'] ? ' has__equal__height' : '';
	$numberOfImages = $attributes['numberOfImages'];
	$columns = $attributes['columns'];
	$gridGap = $attributes['gridGap'];
	$className = $attributes['className'];
	$align = $attributes['align'];
	$showCaptions = $attributes['showCaptions'];
	$borderRadius = $attributes['borderRadius'];
	$showProfileName = $attributes['showProfileName'];
	$showProfileImg = $attributes['showProfileImg'];
	$profileImg = isset($attributes['profileImg']) ? $attributes['profileImg'] : '';
	$profileName = isset($attributes['profileName']) ? $attributes['profileName'] : '';

	// originally we got the user id from the token but this no longer possible

	// create a unique id so there is no double ups
	$suffix = $token . '_' . $numberOfImages;

	if (!eb_instagram_get_from_cache($suffix)) {
		// no valid cache found
		// hit the network
		$result = json_decode(eb_instagram_fetchData("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token={$token}"));
		eb_instagram_add_to_cache($result, $suffix); // add the result to the cache
	} else {
		$result = eb_instagram_get_from_cache($suffix); // hit the cache
	}

	$thumbs = $result->data;
	$layoutClass = $layout === "card" ? $cardStyle : $overlayStyle;

	$imageContainer = '<div class="eb-instagram-wrapper ' . $blockId . '">
	<div class="eb-instagram__gallery">
	';



	if (is_array($thumbs)) {
		foreach ($thumbs as $key => $thumb) {
			// echo '<pre>';
			// print_r($thumb);
			// echo '</pre>';
			$author_info = '';
			if ('card' === $layout) {
				// var_dump($showProfileName, $showProfileImg, $profileName);
				if ($showProfileName || $showProfileImg) {
					$author_info .= '<div class="author__info">';
					if ($showProfileImg && !empty($profileImg)) {
						$author_info .= '<div class="author__thumb">
							<img src=' . $profileImg . ' alt=' . $thumb->username . ' />
						</div>';
					}
					$author_name = !empty($profileName) ? esc_html($profileName) : $thumb->username;
					if ($showProfileName) {
						$author_info .= '<h5 class="author__name">' . $author_name . '</h5>';
					}
					$author_info .= '</div>';
				}
			}


			$caption = $showCaptions && $thumb->caption ? '<div class="eb-instagram-caption"><p>' . $thumb->caption . '</p></div>' : '';

			$media_type = esc_attr($thumb->media_type);
			$image = esc_url($thumb->media_url);

			if ($media_type === "VIDEO") {
				$image = esc_url($thumb->thumbnail_url);
			}

			if ($key < $numberOfImages) {
				$imageContainer .= '<div class="instagram__gallery__col">
					<div class="instagram__gallery__item instagram__gallery__item--' . $layoutClass . $hasEqualImages . '">
					' . $author_info . '
					<div class="instagram__gallery__thumb">
						<div class="thumb__wrap">
							<img src="' . $image . '" alt="' . $caption . '" />
						</div>
						' . $caption . '
						</div>
					</div>
				</div>';
			}
		}
	}

	return "{$imageContainer}</div></div>";
}
