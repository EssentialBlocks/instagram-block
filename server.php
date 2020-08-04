<?php
function kona_register_block()
{

	// Only load if Gutenberg is available.
	if (!function_exists('register_block_type')) {
		return;
	}
}

add_action('init', 'kona_register_block');

/**
 * Generic data fetching wrapper
 * Uses the WP-API for fetching
 */
function kona_fetchData($url)
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
function kona_add_to_cache($result, $suffix = '', $expire = (60 * 60 * 6))
{
	set_transient('kona-api_' . $suffix, $result, $expire);
}

function kona_get_from_cache($suffix = '')
{
	return get_transient('kona-api_' . $suffix);
}

/**
 * Server side rendering functions
 */
function kona_render_callback(array $attributes)
{
	$attributes = wp_parse_args(
		$attributes,
		[
			'token' => '',
			'hasEqualImages' => false,
			'numberOfImages' => 4,
			'gridGap' => 0,
			'backgroundColor' => 'transparent',
			'className' => '',
			'align' => '',
			'showCaptions' => false,
		]
	);
	$token = $attributes['token'];

	$hasEqualImages = $attributes['hasEqualImages'] ? 'has-equal-images' : '';
	$numberOfImages = $attributes['numberOfImages'];
	$columns = $attributes['columns'];
	$gridGap = $attributes['gridGap'];
	$className = $attributes['className'];
	$align = $attributes['align'];
	$showCaptions = $attributes['showCaptions'];

	// originally we got the user id from the token but this no longer possible

	// create a unique id so there is no double ups
	$suffix = $token . '_' . $numberOfImages;

	if (!kona_get_from_cache($suffix)) {
		// no valid cache found
		// hit the network
		$result = json_decode(kona_fetchData("https://graph.instagram.com/me/media?fields=id,caption,media_tyse,media_url,permalink,thumbnail_url,timestamp,username&access_token={$token}"));
		kona_add_to_cache($result, $suffix); // add the result to the cache
	} else {
		$result = kona_get_from_cache($suffix); // hit the cache
	}

	$thumbs = $result->data;
	$profile = ''; // our empty profile container

	$imageContainer = '<div class="eb-instagram-wrapper ' . $attributes['className'] . ' align' . $align . '">
	<div class="eb-instagram-grid"
	style="display: grid;grid-template-columns: repeat(' . esc_attr($columns) . ', 1fr);
	margin-left: -' . esc_attr($gridGap) . 'px;
	margin-right: -' . esc_attr($gridGap) . 'px;
	grid-gap: ' . esc_attr($gridGap) . 'px";
	>';

	if (is_array($thumbs)) {
		foreach ($thumbs as $key=>$thumb) {

			$caption = $showCaptions && $thumb->caption ? '<div class="kona-image-caption">
			<span class="kona-image-caption_text">
				' . $thumb->caption . '
			</span>
			<span class="kona-image-caption_likes">
			</span>
		</div>' : '';

			$image = esc_attr($thumb->media_url);

			if ($key < $numberOfImages) {
				$imageContainer .= '
				<a class="eb-instagram-image-wrapper ' . $hasEqualImages . '" href="' . esc_attr($thumb->permalink) . '"
				target="_blank" rel="noopener noreferrer"
				style="background-color: ' . esc_attr($attributes['backgroundColor']) . '">
					<img
					class="eb-instagram-image"
					key="' . esc_attr($thumb->id) . '"
					src="' . $image . '"
					alt="' . (empty($thumb->caption) ? '' : esc_attr($thumb->caption)) . '"
					/>
					<div class="eb-instagram-image-overlay">

					' . $caption . '

					</div>
				</a>';
			}
		}
	}

	return "{$imageContainer}</div></div>";
}
