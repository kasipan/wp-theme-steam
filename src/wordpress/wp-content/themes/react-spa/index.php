<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <?php // Global site tag (gtag.js) - Google Analytics ?>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-118118634-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-118118634-1');
        </script>

        <title><?php bloginfo('name'); ?></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link rel="stylesheet" href="/assets/css/style.css">
        <? // <script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.2.2/pixi.min.js"></script> ?>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="/assets/js/bundle.js"></script>

        <? /*<script type="text/javascript" src="//processingjs.org/js/processing.min.js"></script>
        <canvas id="processing_canvas" data-processing-sources="/dist/processing/processing.pde" class="backgroundCanvas"></canvas> */ ?>

    </body>
</html>
