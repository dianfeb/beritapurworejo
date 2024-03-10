<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   <!-- Title -->
   <title>Berita Purworejo | Berita Terkni Seputar Kota Purworejo</title>
   <!-- Favicon -->
   <link rel="icon" href="assets/images/favicon-32x32.png">
   <link rel="preconnect" href="https://fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&family=Open+Sans&display=swap" rel="stylesheet">
   <!-- gulp:css -->
   <link rel="stylesheet" href="{{ asset('front/css/style.css') }}">
   <!-- endgulp -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body>

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
    <!--/// Footer Area /// -->
    <footer class="footer-area pt-5 pb-2">
        <div class="container">
            <div class="row">
                <div class="col-xxl-5 col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3  d-flex align-items-center">
                    <div class="footer-widget pe-2">                         
                        <img class="footer-logo mb-3" src="https://d33wubrfki0l68.cloudfront.net/da047f13938ef3073df84084c42973f94b813008/17ccd/assets/images/footer-brand.png" alt="">
                     
                        <p>Newsfeed is well optimized template for any kinds of newspaper, blog, magazine etc website</p>
                        
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
                            <li><a href="#"><span class="icon"><i class="fab fa-facebook-f"></i></span>Facebook</a></li>
                            <li><a href="#"><span class="icon"><i class="fab fa-twitter"></i></span>Twitter</a></li>
                            <li><a href="#"><span class="icon"><i class="fab fa-instagram"></i></span>Instagram</a></li>
                            <li><a href="#"><span class="icon"><i class="fab fa-linkedin"></i></span>Linkedin</a></li>
                        </ul>
                    </div>
                </div>
         
                <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-3 ">
                    <div class="footer-widget">
                        <h4 class="mb-2">Contact Info</h4>
                        <ul class="footer-nav list-inline">
                            <li><a href="#"><span class="icon"><i class="fas fa-map-pin"></i></span>New S. Sales Road, Toronto, CA</a></li>
                            <li><a href="#"><span class="icon"><i class="fas fa-envelope-open"></i></span>support@themeix.com</a></li>
                            <li><a href="#"><span class="icon"><i class="fas fa-phone"></i></span>+1 (123) 123 456</a></li>
                            <li><a href="#"><span class="icon"><i class="fas fa-fax"></i></span>+1 (123) 123 456</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 mt-4 border-1 border-top pt-2 border-light">
                    <div class="footer-copyright text-sm  text-center"> <span>
                            <p>&copy;<span id="spanYear"></span> Newsfeed -
                                <span>Developed with <i class="fa fa-heart text-danger"></i> by <a target="_blank"
                                        href="https://themeix.com">Themeix</a> <br>&amp; </span><span
                                    class="small">Published with <a target="_blank"
                                        href="https://getbootstrap.com/">Bootstrap 5</a></span>
                            </p>
                        </span></div>
                </div>
            </div>
            <a href="#" class="footer-back"><i class="fas fa-chevron-up"></i></a>
        </div>
    </footer>
    <!-- gulp:js -->
  <script src="{{ asset('front/js/main.js') }}"></script>
  <script type="text/javascript">window.$crisp=[];
  (function(){d=document;s=d.createElement("script");
  s.src="{{ asset('front/js/main.js') }}";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script></body>
  
  </html>