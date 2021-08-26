<?php

/**
 * Plugin Name:     Instagram Block
 * Description:     Showcase Instagram posts for your web visitors 
 * Version:         1.0.0
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     instagram-block
 *
 * @package         instagram-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

define('INSTAGRAM_BLOCK_ASSETS', plugin_dir_url(__FILE__) . "assets/");

require_once __DIR__ . '/includes/admin-enqueue.php';
require_once __DIR__ . '/includes/server.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function eb_instagram_feed_block_init()
{
  $dir = dirname(__FILE__);

  $script_asset_path = "$dir/build/index.asset.php";
  if (!file_exists($script_asset_path)) {
    throw new Error(
      'You need to run `npm start` or `npm run build` for the "instagram-feed/instagram-feed-block" block first.'
    );
  }

  $index_js     = 'build/index.js';
  wp_register_script(
    'eb-instagram-feed-block-editor',
    plugins_url($index_js, __FILE__),
    array(
      'wp-blocks',
      'wp-i18n',
      'wp-element',
      'wp-block-editor',
    ),
    filemtime("$dir/$index_js")
  );

  $editor_css = 'build/index.css';
  wp_register_style(
    'eb-instagram-feed-block-editor',
    plugins_url($editor_css, __FILE__),
    array(),
    filemtime("$dir/$editor_css")
  );

  $style_css = 'build/style-index.css';
  wp_register_style(
    'eb-instagram-feed-block-editor-style',
    plugins_url($style_css, __FILE__),
    array(),
    filemtime("$dir/$style_css")
  );

  if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/instagram-feed')) {
    register_block_type('instagram-block/instagram-feed-block', array(
      'editor_script' => 'eb-instagram-feed-block-editor',
      'editor_style' => 'eb-instagram-feed-block-editor',
      'style'         => 'eb-instagram-feed-block-editor-style',
      // 'render_callback' => 'eb_instagram_render_callback',
      'attributes' => array(
        'blockId' => array(
          'type' => "string",
        ),
        'layout' => array(
          'type' => "string",
          'default' => "overlay",
        ),
        'overlayStyle' => array(
          'type' => "string",
          'default' => "overlay__simple",
        ),
        'cardStyle' => array(
          'type' => "string",
          'default' => "",
        ),
        'token' => array(
          'type' => 'string',
          'default' => '',
        ),
        'columns' => array(
          'type' => 'number',
          'default' => "4",
        ),
        'numberOfImages' => array(
          'type' => 'number',
          'default' => 4,
        ),
        'gridGap' => array(
          'type' => 'number',
          'default' => 0,
        ),
        'thumbs' => array(
          'type' => 'array',
          'default' => [],
        ),
        'backgroundColor' => array(
          'type' => 'string',
          'default' => 'transparent',
        ),
        'borderRadius' => array(
          'type' => 'number',
          'default' => 0,
        ),
        'hasEqualImages' => array(
          'type' => 'boolean',
          'default' => false,
        ),
        'showCaptions' => array(
          'type' => 'boolean',
          'default' => false,
        ),
        'showProfileName' => array(
          'type' => 'boolean',
          'default' => true,
        ),
        'showProfileImg' => array(
          'type' => 'boolean',
          'default' => true,
        ),
        'profileImg' => array(
          "type" => "string",
        ),
        'profileName' => array(
          "type" => "string",
        ),
      ),
    ));
  }
}
add_action('init', 'eb_instagram_feed_block_init');
