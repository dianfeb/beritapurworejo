
<!doctype html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Zaira - News Magazine HTML Template</title>
        <meta name="description" content="Zaira - News Magazine HTML Template">
        <meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png">
        <!-- Place favicon.ico in the root directory -->

        <!-- CSS here -->
        <link rel="stylesheet" href="{{ asset('front/css/bootstrap.min.css') }}">
       
        <link rel="stylesheet" href="{{ asset('front/animate.min.css') }}">
    
        <link rel="stylesheet" href="{{ asset('front/css/fontawesome-all.min.css') }}">
       
        <link rel="stylesheet" href="{{ asset('front/css/default.css') }}">
        <link rel="stylesheet" href="{{ asset('front/css/style.css') }}">
        <link rel="stylesheet" href="{{ asset('front/css/responsive.css') }}">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>

		<!-- Scroll-top -->
        <button class="scroll-top scroll-to-target" data-target="html">
            <i class="fab fa-angle-up"></i>
        </button>
        <!-- Scroll-top-end-->

    

    @include('front.layouts.navbar')

    @yield('content')

    <div class="cta-area py-5 bg-light">

        <ul class="circles">
          <li><i class="fa fa-envelope-open fa-5x"></i></li>
          <li><i class="fa fa-envelope fa-4x"></i></li>
          <li><i class="fa fa-envelope fa-3x"></i></li>
          <li><i class="fa fa-envelope-open fa-2x"></i></li>
          <li><i class="fa fa-envelope fa-1x"></i></li>
          <li><i class="fa fa-envelope fa-2x"></i></li>
          <li><i class="fa fa-envelope fa-1x"></i></li>
          <li><i class="fa fa-envelope fa-3x"></i></li>
          <li><i class="fa fa-envelope fa-2x"></i></li>
          <li><i class="fa fa-envelope fa-5x"></i></li>
        </ul>
    
        <div class="container text-center z-index-10 position-relative  ">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h2 class="text-secondary">Subscribe to see what we're thinking</h2>
              <p>Subscribe to get access to premium content or contact us if you have any questions.</p>
              <a href="#" class="btn btn-outline-light bg-danger text-white box-hover">Subscribe Now <i
                  class="fas fa-envelope-open-text ms-1"></i></a>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer-area pt-5 pb-2">
        <div class="container">
            <div class="row">
                <div class="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3  d-flex align-items-center">
                    <div class="footer-widget pe-2">                         
                        <img class="footer-logo mb-3" src="https://d33wubrfki0l68.cloudfront.net/da047f13938ef3073df84084c42973f94b813008/17ccd/assets/images/footer-brand.png" alt="">
                     
                        <p>{{ $config['Footer Deskripsi'] }}</p>
                        
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3">
                    <div class="footer-widget">
                        <h4 class="mb-2">Navigation</h4>
                        <ul class="footer-nav list-inline">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Advertisement</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3">
                    <div class="footer-widget">
                        <h4 class="mb-2">Social Media</h4>
                        <ul class="footer-nav list-inline">
                            @if(isset($sosmed[3]))
                            <li><a href="http://{{ $sosmed[3]['link'] }}" target="_blank"><span class="icon"><i class="fab fa-facebook-f"></i></span>Facebook</a></li>
                        @endif

                        @if(isset($sosmed[2]))
                        <li><a href="http://{{ $sosmed[2]['link'] }}" target="_blank"><span class="icon"><i class="fab fa-twitter"></i></span>Twitter</a></li>
                        @endif

                        @if(isset($sosmed[1]))
                        <li><a href="http://{{ $sosmed[1]['link'] }}" target="_blank"><span class="icon"><i class="fab fa-instagram"></i></span>Instagram</a></li>
                        @endif

                        @if(isset($sosmed[0]))
                        <li><a href="http://{{ $sosmed[0]['link'] }}" target="_blank"><span class="icon"><i class="fab fa-linkedin"></i></span>Linkedin</a></li>
                        @endif
                           
                            
                           
                        </ul>
                    </div>
                </div>
         
                <div class="col-xxl-4 col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3 ">
                    <div class="footer-widget">
                        <h4 class="mb-2">Contact Info</h4>
                        <ul class="footer-nav list-inline">
                            <li><a href="#"><span class="icon"><i class="fab fa-map-pin"></i></span>{{ $config['Alamat'] }}</a></li>
                            <li><a href="#"><span class="icon"><i class="fab fa-envelope-open"></i></span>{{ $config['Email'] }}</a></li>
                            <li><a href="#"><span class="icon"><i class="fab fa-phone"></i></span>{{ $config['Telepon'] }}</a></li>
                            <li><a href="#"><span class="icon"><i class="fab fa-whatsapp"></i></span>+{{ $config['Whatsapp'] }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 mt-4 border-1 border-top pt-2 border-light">
                    <div class="footer-copyright text-sm  text-center"> <span>
                            <p>&copy;<span id="spanYear"></span> {{ $config['Title'] }} -
                                <span>Developed with <i class="fa fa-heart text-danger"></i> By Dian Febrianto</span>
                            </p>
                        </span></div>
                </div>
            </div>
            <a href="#" class="footer-back"><i class="fab fa-chevron-up"></i></a>
        </div>
    </footer>


    <!-- JS here -->
    <script src="{{ asset('front/js/jquery-3.6.0.min.js') }}"></script>
    <script src="{{ asset('front/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('front/js/wow.min.js') }}"></script>
    <script src="{{ asset('front/js/main.js') }}"></script>
    
</body>
</html>
