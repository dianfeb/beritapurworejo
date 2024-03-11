{{-- <header class="header-area">
      
    <div class="header-navbar-middle d-none d-lg-block">
       <div class="container">
          <div class="navbar-brand-wrapper py-3 d-flex justify-content-center align-items-center">
             <a class='navbar-brand' href='/'>
                <img class="lazyload" src="https://d33wubrfki0l68.cloudfront.net/da047f13938ef3073df84084c42973f94b813008/e2cd2/assets/images/header-brand.png" alt="image">
             </a>
          </div>
       </div>
    </div>
    <div class="header-navbar-bottom pt-2 pt-lg-0 border-top border-light">
       <div class="container themeix-menu-selector">
          <nav class="navbar navbar-expand-lg">
             <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav me-auto">
          
                   <li class="nav-item"><a class='nav-link' href='/'>Home </a></li>
                   @foreach ($categories as $item)
                   <li class="nav-item"><a class='nav-link' href=''>{{ $item->name }} </a></li>
                   @endforeach
                   

                </ul>
             </div>
             <div class="search-modal" data-bs-toggle="modal" data-bs-target="#search-modal"><a class="nav-link"
                   href="#"> <i class="fas fa-search"></i> </a>
             </div>
          </nav>
          <div class="modal fade" id="search-modal" data-bs-backdrop="static">
             <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
             <div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-body">
                     <form action="{{ route('search') }}" method="POST">
                         <div class="input-group">
                            <span class="input-group-text"><i class="fa fa-search"></i></span>
                            <input type="text" class="form-control" name="keyword" placeholder="Search Here">
                         </div>
                      </form>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
</header> --}}


  <!-- header-area -->
  <header class="header-style-six">
   <div id="header-fixed-height"></div>
   <div class="header-top-wrap-four">
       <div class="container">
           <div class="row align-items-center">
               <div class="col-lg-8">
                 
               </div>
               <div class="col-lg-4">
                   <div class="header-top-social header-top-social-two">
                       <h5 class="title">Follow Us:</h5>
                       <ul class="list-wrap">
                           <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                           <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                           <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                           <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div class="header-logo-area-four">
       <div class="container">
           <div class="row align-items-center">
               <div class="col-lg-4">
                   <div class="hl-left-side-four">
                       <span class="date"><i class="flaticon-calendar"></i>February 12, 2024</span>
                   </div>
               </div>
               <div class="col-lg-4">
                   <div class="logo text-center">
                       <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                   </div>
                   <div class="logo d-none text-center">
                       <a href="index.html"><img src="assets/img/logo/w_logo.png" alt=""></a>
                   </div>
               </div>
               <div class="col-lg-4">
                   <div class="hl-right-side-four">
                       <div class="sign-in">
                           <a href="contact.html"><i class="flaticon-user"></i>Sign In</a>
                       </div>
                       <div class="subscribe-btn">
                           <a href="contact.html" class="btn btn-two">Subscribe</a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div id="sticky-header" class="menu-area menu-style-six">
       <div class="container">
           <div class="row">
               <div class="col-12">
                   <div class="menu-wrap">
                       <nav class="menu-nav">
                           <div class="logo d-none">
                               <a href="index.html"><img src="assets/img/logo/logo.png" alt=""></a>
                           </div>
                           <div class="logo d-none white-logo">
                               <a href="index.html"><img src="assets/img/logo/w_logo.png" alt=""></a>
                           </div>
                           <div class="offcanvas-toggle" >
                               <a href="javascript:void(0)" class="menu-tigger">
                                   <span></span>
                                   <span></span>
                                   <span></span>
                               </a>
                           </div>
                           <div class="navbar-wrap main-menu d-none d-lg-flex">
                               <ul class="navigation">
                                    <li class="active"><a href="/">Home</a></li>
                                   @foreach ($categories as $item)
                                   <li><a href="{{ url('category/'. $item->slug) }}">{{ $item->name }}</a></li>
                                   @endforeach
                                   
                           </div>
                           <div class="header-search-wrap header-search-wrap-three">
                              <form action="{{ route('search') }}" method="POST">
                                   <input type="text" name="keyword" placeholder="Search here . . .">
                                   <button type="submit" ><i class="flaticon-search"></i></button>
                               </form>
                           </div>
                           <div class="mobile-nav-toggler"><i class="fab fa-bars"></i></div>
                       </nav>
                   </div>

                   <!-- Mobile Menu  -->
                   <div class="mobile-menu">
                       <nav class="menu-box">
                           <div class="close-btn"><i class="fab fa-times"></i></div>
                           <div class="nav-logo">
                               <a href="index.html"><img src="assets/img/logo/logo.png" alt="Logo"></a>
                           </div>
                           <div class="nav-logo d-none">
                               <a href="index.html"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
                           </div>
                           <div class="mobile-search">
                               <form action="#">
                                   <input type="text" placeholder="Search here...">
                                   <button><i class="flaticon-search"></i></button>
                               </form>
                           </div>
                           <div class="menu-outer">
                               <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                           </div>
                           <div class="social-links">
                               <ul class="clearfix list-wrap">
                                   <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                   <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                   <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                   <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                   <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                               </ul>
                           </div>
                       </nav>
                   </div>
                   <div class="menu-backdrop"></div>
                   <!-- End Mobile Menu -->

               </div>
           </div>
       </div>
   </div>

   <!-- offCanvas-area -->
   <div class="offCanvas-wrap">
       <div class="offCanvas-body">
           <div class="offCanvas-toggle">
               <span></span>
               <span></span>
           </div>
           <div class="offCanvas-content">
               <div class="offCanvas-logo logo">
                   <a href="index.html" class="logo-dark"><img src="assets/img/logo/logo.png" alt="Logo"></a>
                   <a href="index.html" class="logo-light"><img src="assets/img/logo/w_logo.png" alt="Logo"></a>
               </div>
               <p>The argument in favor of using filler text goes something like this: If you use any real content in the Consulting Process anytime you reach.</p>
               <ul class="offCanvas-instagram list-wrap">
                   <li><a href="assets/img/blog/hr_post01.jpg" class="popup-image"><img src="assets/img/blog/hr_post01.jpg" alt="img"></a></li>
                   <li><a href="assets/img/blog/hr_post02.jpg" class="popup-image"><img src="assets/img/blog/hr_post02.jpg" alt="img"></a></li>
                   <li><a href="assets/img/blog/hr_post03.jpg" class="popup-image"><img src="assets/img/blog/hr_post03.jpg" alt="img"></a></li>
                   <li><a href="assets/img/blog/hr_post04.jpg" class="popup-image"><img src="assets/img/blog/hr_post04.jpg" alt="img"></a></li>
                   <li><a href="assets/img/blog/hr_post05.jpg" class="popup-image"><img src="assets/img/blog/hr_post05.jpg" alt="img"></a></li>
                   <li><a href="assets/img/blog/hr_post06.jpg" class="popup-image"><img src="assets/img/blog/hr_post06.jpg" alt="img"></a></li>
               </ul>
           </div>
           <div class="offCanvas-contact">
               <h4 class="title">Get In Touch</h4>
               <ul class="offCanvas-contact-list list-wrap">
                   <li><i class="fab fa-envelope-open"></i><a href="mailto:info@webmail.com">info@webmail.com</a></li>
                   <li><i class="fab fa-phone"></i><a href="tel:88899988877">888 999 888 77</a></li>
                   <li><i class="fab fa-map-marker-alt"></i> 12/A, New Booston, NYC</li>
               </ul>
               <ul class="offCanvas-social list-wrap">
                   <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                   <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                   <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                   <li><a href="#"><i class="fab fa-youtube"></i></a></li>
               </ul>
           </div>
       </div>
   </div>
   <div class="offCanvas-overlay"></div>
   <!-- offCanvas-area-end -->
</header>
<!-- header-area-end -->
