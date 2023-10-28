  <div class="container ">
    <section class="need-help">

      <style>
        .need-help {
          background-image: url('<?php the_field('need_help_sm_img', 'option') ?>');

          @media screen and (min-width: 768px) {
            background-image: url('<?php the_field('need_help_lg_img', 'option') ?>');
          }
        }
      </style>

      <h2 class="need-help__title"><?php the_field('need-help__title', 'option'); ?></h2>
      <a class="button need-help__button" href="<?php the_field('link_helpform', 'option'); ?>" aria-label="apply for assistance" aria-controls="need-help form">
        <?php the_field('need_help_button', 'option'); ?>
      </a>

    </section>
  </div>