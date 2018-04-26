<?php

/*
Plugin Name: Bootstrap Accordions Wordpress Plugin
Plugin URI: https://github.com/lebck/bootstrap-accrdions-wp-plugin.git
Description: Accordion Plug-In - Lets you add Bootstrap Accordions via Wordpress Editor. Don't forget to include
Bootstrap in Frontend!
Version: 1.0
Author: lebck
License: GPL2
*/
function enqueue_plugin_scripts($plugin_array)
{
    //enqueue TinyMCE plugin script with its ID.
    $plugin_array["lebck_bootstrap_buttons"] = plugin_dir_url(__FILE__) . "index.js";
    return $plugin_array;
}

add_filter("mce_external_plugins", "enqueue_plugin_scripts");

function enqueue_bootstrap($mce_css)
{

    $mce_css .= ', ' . plugins_url('style.css', __FILE__);
    return $mce_css;
}

add_filter('mce_css', 'enqueue_bootstrap');

function register_buttons_editor($buttons)
{
    //register buttons with their id.
    array_push($buttons, "acc_button");
    return $buttons;
}

add_filter("mce_buttons", "register_buttons_editor");
