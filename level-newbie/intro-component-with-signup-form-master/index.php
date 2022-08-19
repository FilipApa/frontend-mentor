<?php
/**
 * Plugin Name: Custom API
 * Plugin URI: http://chrushingit.com
 * Description: Crushing it!
 * Version: 1.0
 * Author: Art Vandelay
 * Author URI: http://watch-learn.com
 */

function filter_by_cat_and_terms( $category, ...$taxonomies ) {
    $terms = [];

    foreach( $taxonomies as $tax ) {
        array_push( $terms, $tax );
    }
    

    if(!empty( $terms )) {
        if (count( $terms ) > 1) { 
            $args = array(
                'paged' => get_query_var( 'paged', 1),
                'post_per_page' => 9,
                'post_type' => 'post',
                'order' => 'ASC',
                'category_name' => $category,
                'tax_query' => array(
                    'relation' => 'AND',

                    foreach() {
                        array(
                            'taxonomy' => 'year', 
                            'field' => 'slug',
                            'terms' => array( '2019', '2020' )
                        ),
                        array(
                        'taxonomy' => 'serie',
                        'field' => 'slug',
                        'terms' => 'blue-dog'
                        )
                    }
                   
                )
              );
        }

    }

    var_dump($terms);
}

filter_by_cat_and_terms('paintings', 'year', 'serie');


function wl_products($params) {
    $year = json_decode($params->get_param('year'));
    $serie = json_decode($params->get_param('serie'));

    function queryArgument($param, $key) {
        if(is_object($param)) {
            if($param->lt && $param->gt) {
                return [
                    [
                        'key' => $key,
                        'value' => [$param->gt, $param->lt],
                        'type'  => 'NUMERIC',
                        'compare' => 'BETWEEN'
                    ]
                ];
            }

            if($param->lt) {
                return [
                    [
                        'key' => $key,
                        'value' => $param->lt,
                        'type'  => 'NUMERIC',
                        'compare' => '<'
                    ]
                ];
            }

            if($param->gt) {
                return [
                    [
                        'key' => $key,
                        'value' => $param->gt,
                        'type'  => 'NUMERIC',
                        'compare' => '>'
                    ]
                ];
            }
        }


        if($param) {
            return [
                [
                    'key' => $key,
                    'value' => $param,
                    'type'  => 'NUMERIC'
                ]
            ];
        }

        return null;
    }

	$args = [
		'posts_per_page' => 99999,
        'post_type' => 'product',
        'meta_query' => queryArgument($price, 'price')
	];

    $posts = new WP_Query($args);

	$data = [];
	$i = 0;

	foreach($posts->posts as $post) {
		$data[$i]['id'] = $post->ID;
		$data[$i]['title'] = $post->post_title;
        $data[$i]['slug'] = $post->post_name;
        $data[$i]['price'] = intval(get_field('price', $post->ID));
        $data[$i]['delivery'] = get_field('delivery', $post->ID);
		$i++;
	}

	return $data;
}

// add_action('rest_api_init', function() {
//     register_rest_route('wl/v1', 'products', [
// 		'methods' => 'GET',
// 		'callback' => 'wl_products',
// 	]);
// })