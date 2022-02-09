<?php

/**
 * Plugin Name:     Instagram Block
 * Description:     Showcase Instagram posts for your web visitors
 * Version:         1.1.0
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

define('EB_INSTAGRAM_BLOCK_ASSETS', plugin_dir_url(__FILE__) . "assets/");
define('EB_INSTAGRAM_BLOCK_VERSION', "1.1.0");
define('EB_INSTAGRAM_BLOCK_ADMIN_URL', plugin_dir_url(__FILE__));
define('EB_INSTAGRAM_BLOCK_ADMIN_PATH', dirname(__FILE__));

require_once __DIR__ . '/lib/style-handler/style-handler.php';
require_once __DIR__ . '/includes/admin-enqueue.php';
require_once __DIR__ . '/includes/server.php';
require_once __DIR__ . '/includes/helpers.php';


function eb_instagram_feed_block_init()
{

  $script_asset_path = EB_INSTAGRAM_BLOCK_ADMIN_PATH . "/dist/index.asset.php";
  if (!file_exists($script_asset_path)) {
    throw new Error(
      'You need to run `npm start` or `npm run build` for the "instagram-feed/instagram-feed-block" block first.'
    );
  }

  $index_js = EB_INSTAGRAM_BLOCK_ADMIN_URL . 'dist/index.js';
  $script_asset = require($script_asset_path);
  $all_dependencies = array_merge($script_asset['dependencies'], array(
    'wp-blocks',
    'wp-i18n',
    'wp-element',
    'wp-block-editor',
    'eb-instagram-block-controls-util'
  ));

  wp_register_script(
    'eb-instagram-feed-block-editor',
    $index_js,
    $all_dependencies,
    $script_asset['version']
  );

  $editor_css = 'dist/style.css';
  wp_register_style(
    'eb-instagram-feed-block-editor-style',
    plugins_url($editor_css, __FILE__),
    array(),
    filemtime(EB_INSTAGRAM_BLOCK_ADMIN_PATH . "/$editor_css")
  );


  // isotope
  $isotope_js = "assets/js/isotope.pkgd.min.js";
  wp_register_script(
    'eb-isotope',
    plugins_url($isotope_js, __FILE__),
    array(),
    filemtime(EB_INSTAGRAM_BLOCK_ADMIN_PATH . "/$isotope_js"),
    true
  );

  // imageloaded
  $imageloaded_js = "assets/js/imagesloaded.pkgd.min.js";
  wp_register_script(
    'eb-imageloaded',
    plugins_url($imageloaded_js, __FILE__),
    array(),
    filemtime(EB_INSTAGRAM_BLOCK_ADMIN_PATH . "/$imageloaded_js"),
    true
  );

  // eb-instagram js
  $eb_instagram_js = "assets/js/eb-instagram.js";
  wp_register_script(
    'eb-instagram-feed-block-script',
    plugins_url($eb_instagram_js, __FILE__),
    array(
      'eb-isotope',
      'eb-imageloaded',
    ),
    filemtime(EB_INSTAGRAM_BLOCK_ADMIN_PATH . "/$eb_instagram_js")
  );

  $frontend_js_path = include_once dirname(__FILE__) . "/dist/frontend/index.asset.php";
  $frontend_js = "dist/frontend/index.js";
  wp_register_script(
    'eb-instagram-feed-block-script',
    plugins_url($frontend_js, __FILE__),
    array_merge([
      'eb-isotope',
      'eb-imageloaded',
    ], $frontend_js_path['dependencies']),
    $frontend_js_path['version'],
    true
  );



  if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/instagram-feed')) {
    register_block_type(
      EB_Instagram_Helper::get_block_register_path('instagram-block/instagram-feed-block', EB_INSTAGRAM_BLOCK_ADMIN_PATH),
      array(
        'editor_script' => 'eb-instagram-feed-block-editor',
        'editor_style' => 'eb-instagram-feed-block-editor-style',
        'style' => 'eb-instagram-feed-block-editor-style',
        'render_callback' => 'eb_instagram_render_callback',
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
            'default' => "content__outter",
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
            'default' => 6,
          ),
          'thumbs' => array(
            'type' => 'array',
            'default' => [],
          ),
          'hasEqualImages' => array(
            'type' => 'boolean',
            'default' => true,
          ),
          'showCaptions' => array(
            'type' => 'boolean',
            'default' => true,
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
            'type' => 'string',
          ),
          'profileName' => array(
            'type' => 'string',
          ),
          'showMeta' => array(
            'type' => 'boolean',
            'default' => true,
          ),
          'enableLink' => array(
            'type' => 'boolean',
            'default' => false,
          ),
          'openInNewTab' => array(
            'type' => 'boolean',
            'default' => false,
          ),
          'sortBy' => array(
            'type' => "string",
            'default' => "most_recent",
          ),
        ),
      )
    );
  }
}
add_action('init', 'eb_instagram_feed_block_init');
