<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>EddyClo</title>
    <link rel="apple-touch-icon" sizes="57x57" href="{{ Theme::url('images/favicons/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ Theme::url('images/favicons/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ Theme::url('images/favicons/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ Theme::url('images/favicons/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ Theme::url('images/favicons/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ Theme::url('images/favicons/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ Theme::url('images/favicons/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ Theme::url('images/favicons/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ Theme::url('images/favicons/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ Theme::url('images/favicons/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ Theme::url('images/favicons/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ Theme::url('images/favicons/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ Theme::url('images/favicons/favicon-16x16.png') }}">
    {{-- <link rel="manifest" href="/manifest.json"> --}}
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ Theme::url('images/favicons/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <!--  
    Stylesheets
    =============================================
    
    -->
    <!-- Default stylesheets-->
    <link href="{{ Theme::url('lib/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">
    <!-- Template specific stylesheets-->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Volkhov:400i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
    <link href="{{ Theme::url('lib/animate.css/animate.css') }}" rel="stylesheet">
    <link href="{{ Theme::url('lib/components-font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ Theme::url('lib/et-line-font/et-line-font.css') }}" rel="stylesheet">
    <link href="{{ Theme::url('lib/flexslider/flexslider.css') }}" rel="stylesheet">
    <link href="{{ Theme::url('lib/owl.carousel/dist/assets/owl.carousel.min.css') }}" rel="stylesheet">
    <link href="{{ Theme::url('lib/owl.carousel/dist/assets/owl.theme.default.min.css') }}" rel="stylesheet">
    <link href="{{ Theme::url('lib/magnific-popup/dist/magnific-popup.css') }}" rel="stylesheet">
    <link href="{{ Theme::url('lib/simple-text-rotator/simpletextrotator.css') }}" rel="stylesheet">
    <!-- Main stylesheet and color file-->
<link href="{{ Theme::url('css/main.css') }}" rel="stylesheet">
</head>

<body>
    @yield('content')
</body>


{!! Theme::script('js/index.js') !!}

</html>