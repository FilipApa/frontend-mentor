<?php// Register Custom Taxonomy
register_taxonomy('serie', 'post', array(
    'hierarchical' => true,
    'labels' => array(
      'name' => _x( 'Serie', 'taxonomy general name' ),
      'singular_name' => _x( 'Serie', 'taxonomy singular name' ),
      'search_items' =>  __( 'Search Series' ),
      'all_items' => __( 'All Series' ),
      'edit_item' => __( 'Edit Serie' ),
      'update_item' => __( 'Update Serie' ),
      'add_new_item' => __( 'Add New Serie' ),
      'new_item_name' => __( 'New Serie Name' ),
      'menu_name' => __( 'Series' ),
    ),
    'rewrite' => array(
      'slug' => 'serie', 
      'with_front' => false, 
      'hierarchical' => true 
    ),
  ));
  ?>

  <?php 
  $years_list = wp_list_categories( array(
    'taxonomy' => 'years',
    'orderby' => 'name',
    'show_count' => 0,
    'pad_counts' => 0,
    'hierarchical' => 1,
    'echo' => 0,
    'title_li' => 'Years'
  ) );

  $series_list = wp_list_categories( array(
    'taxonomy' => 'series',
    'orderby' => 'name',
    'show_count' => 0,
    'pad_counts' => 0,
    'hierarchical' => 1,
    'echo' => 0,
    'title_li' => 'Series'
  ) );
  
  if ( $years_list )
  echo '<ul class="years-list">' . $years_list . '</ul>';

  if (  $series_list )
  echo '<ul class="years-list">' .  $series_list . '</ul>';

  ?>
  <?php
    // Get a list of all terms in a taxonomy
    $terms = get_terms( "location", array(
      'hide_empty' => 0,
    ) );
    $years = array();
    if ( count($terms) > 0 ):
      foreach ( $terms as $term )
        $years[] = $term->name;

      $years_str = implode(', ', $years);
    ?>
    <h2>Nationwide Coverage</h2>
    <p>We cover stories around the country in places like <?php echo $years_str; ?> and more. If we're not the best source for the latest news in your area, let us know!</p>
    <?php endif; ?>
