<?php
function eb_get_sort_options($sortBy)
{
    if ($sortBy === 'most_recent') {
        return ['created_time', SORT_DESC];
    } else if ($sortBy === 'least_recent') {
        return ['created_time', SORT_ASC];
    } else if ($sortBy === 'most_liked') {
        return ['likes', SORT_DESC];
    } else if ($sortBy === 'least_liked') {
        return ['likes', SORT_ASC];
    } else if ($sortBy === 'most_commented') {
        return ['comments', SORT_DESC];
    } else if ($sortBy === 'least_commented') {
        return ['comments', SORT_ASC];
    }
}

function eb_sorter($data, $using, $way)
{
    $new_data_array = [];

    foreach ($data as $unique_data) {
        $new_data_array[$unique_data->id] = $unique_data;
    }

    foreach ($new_data_array as $single_data) {
        if (!is_object($single_data)) {
            continue;
        }

        if ($using === 'created_time') {
            $priority_keys[$single_data->id] = $single_data->created_time;
        } else {
            $priority_keys[$single_data->id] = $single_data->$using->count;
        }
    }

    array_multisort($priority_keys, $way, $new_data_array);

    return $new_data_array;
}

function eb_instagram_fetch_data($url)
{
    $request = wp_remote_get($url);

    if (is_wp_error($request)) {
        return false;
    }

    return wp_remote_retrieve_body($request);
}

/**
 * Cache function
 */

function eb_instagram_add_to_cache($result, $suffix = '')
{
    $expire = 6 * 60 * 60; // 6 hours in seconds
    set_transient('eb_instagram_api_' . $suffix, $result, '', $expire);
}

function eb_instagram_get_from_cache($suffix = '')
{
    return get_transient('eb_instagram_api_' . $suffix);
}

/**
 * Server side rendering functions
 */
function essential_blocks_instagram_render_callback(array $attributes)
{
    $attributes = wp_parse_args(
        $attributes,
        [
            'token' => '',
            'numberOfImages' => 4,
            'imageSpace' => 0,
            'displayProfile' => false,
            'backgroundColor' => 'transparent',
            'className' => '',
            'hoverColor' => '#7967ff',
            'hoverOpacity' => 0.5,
            'likeColor' => '#ffffff',
            'commentColor' => '#ffffff',
            'displayLike' => true,
            'displayComment' => true,
            'sortBy' => 'most_recent',
            'nameColor' => '#000000',
            'detailsColor' => '#000000',
            'nameFontSize' => 36,
            'nameSizeUnit' => 'px',
            'detailsFontSize' => 18,
            'detailsSizeUnit' => 'px',
            'borderRadius' => 0,
            'selectedStyle' => 'basic',
            'displayDate' => true,
        ]
    );
    $token = $attributes['token'];
    $numberOfImages = $attributes['numberOfImages'];
    $columns = $attributes['columns'];
    $imageSpace = $attributes['imageSpace'];
    $displayProfile = $attributes['displayProfile'];
    $backgroundColor = $attributes['backgroundColor'];
    $hoverOpacity = $attributes['hoverOpacity'];
    $likeColor = $attributes['likeColor'];
    $commentColor = $attributes['commentColor'];
    $displayLike = $attributes['displayLike'] === true ? 'block' : 'none';
    $displayComment = $attributes['displayComment'] === true ? 'block' : 'none';
    $sortBy = $attributes['sortBy'];
    $nameColor = $attributes['nameColor'];
    $detailsColor = $attributes['detailsColor'];
    $hoverColor = $attributes['hoverColor'];
    $nameFontSize = $attributes['nameFontSize'];
    $nameSizeUnit = $attributes['nameSizeUnit'];
    $detailsFontSize = $attributes['detailsFontSize'];
    $detailsSizeUnit = $attributes['detailsSizeUnit'];
    $borderRadius = $attributes['borderRadius'];
    $selectedStyle = $attributes['selectedStyle'];
    $fontFamily = isset($attributes['fontFamily']) ? $attributes['fontFamily'] : null;
    $displayDate = $attributes['displayDate'];
    $align = isset($attributes['align']) ? $attributes['align'] : null;

    $isCard = $selectedStyle === 'plain' || $selectedStyle == 'rounded' ? true : false;
    $likeColor = $isCard ? "#000000" : $likeColor;
    $commentColor = $isCard ? "#000000" : $commentColor;
    $headerBorderRadius = $selectedStyle == "plain" ? "0%" : null;
    $footerBorderRadius = $selectedStyle == "plain" ? "0%" : null;
    $footerLikeDisplay = $displayLike ? "block" : "none";
    $footerCommentDisplay = $displayComment ? "block" : "none";
    $alignClass = $align ? "align" . $align : null;
    $containerClass = 'eb-instagram-container ' . $alignClass;
    $dateStyle = $selectedStyle == 'plain' || !$displayDate ? "flex-end" : "space-around";
    $dateVisibility = $selectedStyle == 'plain' || !$displayDate ? "none" : null;
    $displayFooterDate = $selectedStyle === 'plain' && $displayDate ? "flex" : "none";

    // get the user ID from the token
    $user = substr($token, 0, stripos($token, '.'));

    // create a unique id so there is no double ups
    $suffix = $user . '_' . $numberOfImages;

    if (!eb_instagram_get_from_cache()) {
        // no valid cache found
        // hit the network
        $result = json_decode(eb_instagram_fetch_data("https://api.instagram.com/v1/users/self/media/recent/?access_token={$token}&count={$numberOfImages}"));
        if ($displayProfile) {
            $result->profile = json_decode(eb_instagram_fetch_data("https://api.instagram.com/v1/users/self?access_token={$token}"));
        }
        eb_instagram_add_to_cache($result, $suffix);
    } else {
        $result = eb_instagram_get_from_cache($suffix);
    }

    if( empty( $result ) || ! isset( $result->data ) ) {
        return;
    }

    $thumbs = $result->data;
    $profile = '';
    $profileContainer = '';

    // SVG icons
    $instagramSVG = '<svg version="1.1" id="SVG_INS_ORG"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
        <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-46.0041" y1="634.1208" x2="-32.9334" y2="647.1917" gradientTransform="matrix(32 0 0 -32 1519 20757)">
            <stop offset="0" style="stop-color:#FFC107"/>
            <stop offset="0.507" style="stop-color:#F44336"/>
            <stop offset="0.99" style="stop-color:#9C27B0"/>
        </linearGradient>
        <path style="fill:url(#SVGID_1_);" d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192
        c88.352,0,160-71.648,160-160V160C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112
        V160C48,98.24,98.24,48,160,48h192c61.76,0,112,50.24,112,112V352z"/>
        <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="-42.2971" y1="637.8279" x2="-36.6404" y2="643.4846" gradientTransform="matrix(32 0 0 -32 1519 20757)">
            <stop offset="0" style="stop-color:#FFC107"/>
            <stop offset="0.507" style="stop-color:#F44336"/>
            <stop offset="0.99" style="stop-color:#9C27B0"/>
        </linearGradient>
        <path style="fill:url(#SVGID_2_);" d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128
        S326.688,128,256,128z M256,336c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80
        C336,300.096,300.096,336,256,336z"/>
        <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-35.5456" y1="644.5793" x2="-34.7919" y2="645.3331" gradientTransform="matrix(32 0 0 -32 1519 20757)">
            <stop offset="0" style="stop-color:#FFC107"/>
            <stop offset="0.507" style="stop-color:#F44336"/>
            <stop offset="0.99" style="stop-color:#9C27B0"/>
        </linearGradient>
        <circle style="fill:url(#SVGID_3_);" cx="393.6" cy="118.4" r="17.056"/>
    </svg>';

    $saveIcon = '
        <svg version="1.1" id="INS_SAVE"
        class="eb-instagram-save-icon"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
        <style type="text/css">
        .st0{fill:#2D2D2D;}
        </style>
        <g>
            <path class="st0" d="M156.4,348c-2.1,0-4.2-0.4-6.1-1.4c-5.1-2.4-8.4-7.6-8.4-13.2V101.3c0-10.8,8.8-19.7,19.7-19.7h190.6
            c10.8,0,19.6,8.8,19.6,19.7v232.1c0,5.6-3.3,10.8-8.4,13.2c-5.1,2.4-11.2,1.6-15.5-2.1l-91-76.4l-91,76.4
            C163.1,346.8,159.8,348,156.4,348z M150,325.7C150,325.7,150,325.7,150,325.7L150,325.7z M363.6,325.7L363.6,325.7L363.6,325.7z
            M256.8,240.4c3.4,0,6.7,1.2,9.5,3.5l80.8,67.9V106.3H166.5v205.5l80.9-67.9C250.1,241.6,253.4,240.4,256.8,240.4z M250.4,262.7
            C250.4,262.7,250.4,262.7,250.4,262.7L250.4,262.7z M263.2,262.7L263.2,262.7C263.2,262.7,263.2,262.7,263.2,262.7z"/>
        </g>
    </svg>';

    // sort images here
    list($using, $way) = eb_get_sort_options($sortBy);
    if (!empty($thumbs)) {
        $thumbs = eb_sorter($thumbs, $using, $way);
    } else {
        $thumbs = [];
    }

    if ($displayProfile) {
        $profile = $result->profile->data;

        $profileContainer = '<div class="eb-instagram-profile-container display-grid">
			<div class="eb-instagram-profile-picture-container">
				<img
					class="eb-instagram-profile-picture"
					src="' . esc_attr($profile->profile_picture) . '"
					alt="' . esc_attr($profile->full_name) . '"
				/>
			</div>
			<div class="eb-instagram-bio-container">
				<h3><a style="color:' . $nameColor . ';font-size:' . $nameFontSize . $nameSizeUnit . '" href="https://instagram.com/' . $profile->username . '" target="_blank">' . $profile->username . '</a></h3>
				<p style="color: ' . $detailsColor . ';font-size:' . $detailsFontSize . $detailsSizeUnit . '">' . $profile->bio . '</p>
			</div>
		</div>';
    }

    $imageContainer = '
        <div
            data-style="' . $selectedStyle . '"
            data-hover-color="' . $hoverColor . '"
            data-hover-opacity=" ' . $hoverOpacity . '"
            class="wp-block-eb-instagram-feed ' . $attributes['className'] . '"
        >
            <div class="display-grid eb-instagram-grid"
                style="grid-template-columns: repeat(' . esc_attr($columns) . ', 1fr);
                background-color: ' . esc_attr($backgroundColor) . ';
                grid-gap: ' . esc_attr($imageSpace) . 'px";
            >';

    foreach ($thumbs as $thumb) {

        $imageHeader = '';
        $imageFooter = '';
        $profilePic = esc_attr($thumb->user->profile_picture);
        $userName = esc_attr($thumb->user->username);
        $image = isset($thumb->images->standard_resolution, $thumb->images->standard_resolution->url) ? esc_attr($thumb->images->standard_resolution->url) : '';
        $alt = isset($thumb->caption->text) ? esc_attr($thumb->caption->text) : '';
        $key = esc_attr($thumb->id);
        $link = esc_attr($thumb->link);
        $likes = esc_attr($thumb->likes->count);
        $comments = esc_attr($thumb->comments->count);

        // Show image header and footer for card style
        if ($isCard) {
            $imageHeader = '
            <div class="eb-instagram-header-wrapper"
                style="border-radius:' . $headerBorderRadius . ' "
            >
            <div class="eb-instagram-user-wrapper">
                <img
                    class="eb-instagram-user-icon"
                    src="' . $profilePic . '"
                />
                <span class="eb-instagram-user">' . $userName . '</span>
                </div>
                <div class="eb-instagram-date-wrapper" style="justify-content:' . $dateStyle . '">
                    <div class="eb-instagram-date" style="display: ' . $dateVisibility . '">
                    <span class="far fa-clock" style=" font-size: 14px;"></span>
                    <span class="eb-instagram-date-text">12.12.2019</span>
                    </div>
                    ' . $instagramSVG . '
                </div>
            </div>';

            $imageFooter = '
            <div class="eb-instagram-footer" style="border-radius: ' . $footerBorderRadius . ';">
                <div class="eb-instagram-footer-like-comment">
                    <div style="display: ' . $footerLikeDisplay . '; color: ' . $likeColor . ';">
                        <span class="far fa-heart eb-like-icon"></span>
                        <span>' . $likes . '</span>
                    </div>
                    <div style="display: ' . $displayComment . '; color: ' . $commentColor . ';">
                        <span class="far fa-comment eb-comment-icon"></span>
                        <span>' . $comments . '</span>
                    </div>
                </div>
                <div class="eb-instagram-save">
                <div class="eb-instagram-date" style="display: ' . $displayFooterDate . '; align-items: center;">
                    <span class="far fa-clock"></span>
                    <span class="eb-instagram-date-text">18.01.1970</span>
                </div>
                ' . $saveIcon . '
                </div>
            </div>';
        }

        $imageContainer .= '
        <a class="eb-instagram-image-wrapper ' . '" href="' . $link . '"
        style="border-radius:' . $borderRadius . '%"
		target="_blank" rel="noopener noreferrer"
        >
       ' . $imageHeader . '

			<img
                class="eb-instagram-image"
                key="' . $key . '"
                src="' . $image . '"
                alt="' . $alt . '"
                style="border-radius:' . $borderRadius . '%;"
			/>
                <div class="eb-instagram-image-overlay"></div>
                <div class="eb-instagram-like-comment-wrapper hide-like-comment">
                    <div class="eb-instagram-like-comment">
                        <p style="display: ' . $displayLike . ';color:' . $likeColor . ';">
                            <i class="far fa-heart" ></i>
                            <span>' . $likes . '</span>
                        </p>
                        <p style="display:' . $displayComment . ';color:' . $commentColor . ';">
                            <i class="far fa-comment" ></i>
                            <span>' . $comments . '</span>
                        </p>
                    </div>
                </div>

        ' . $imageFooter . '

		</a>';
    }

    return "<div class='$containerClass' style='background-color:" . $backgroundColor . ";font-family:" . $fontFamily . "' >{$profileContainer}{$imageContainer}</div></div></div>";
}
