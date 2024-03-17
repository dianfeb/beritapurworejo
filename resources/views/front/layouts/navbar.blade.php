
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
           <div class="row align-items-center justify-content-center">
             
               <div class="col-lg-4">
                
                   <div class="logo text-center">
                       <a href="/"><img src="{{ asset('storage/admin/config/' . $config['Logo']) }}" alt="Logo">
                       </a>
                   </div>
                
                   <div class="logo d-none text-center">
                       <a href="/"><img src="{{ asset('storage/admin/config/' . $config['Logo']) }}" alt="Logo"></a>
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
                               <a href="/"><img src="{{ asset('storage/admin/config/' . $config['Logo']) }}" alt="Logo"></a>
                           </div>
                           <div class="logo d-none white-logo">
                               <a href="/"><img src="{{ asset('storage/admin/config/' . $config['Logo']) }}" alt="Logo"></a>
                           </div>
                           <div class="offcanvas-toggle" style="display: none">
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
                            <form class="search-form" action="{{ route('search') }}" method="POST">
                                @csrf <!-- Tambahkan CSRF token untuk keamanan -->
                                <input type="text" class="keyword-input" name="keyword" placeholder="Search here . . .">
                                <button type="submit"><i class="flaticon-search"></i></button>
                            </form>
                        </div>
                           <div class="mobile-nav-toggler"><i class="fa fa-bars"></i></div>
                       </nav>
                   </div>

                   <!-- Mobile Menu  -->
                   <div class="mobile-menu">
                       <nav class="menu-box">
                           <div class="close-btn"><i class="fa fa-times"></i></div>
                           <div class="nav-logo">
                               <a href="/"><img src="https://d33wubrfki0l68.cloudfront.net/da047f13938ef3073df84084c42973f94b813008/e2cd2/assets/images/header-brand.png" alt="Logo"></a>
                           </div>
                           <div class="nav-logo d-none">
                               <a href="/"><img src="https://d33wubrfki0l68.cloudfront.net/da047f13938ef3073df84084c42973f94b813008/e2cd2/assets/images/header-brand.png" alt="Logo"></a>
                           </div>
                           <div class="mobile-search">
                            <form action="{{ route('search') }}" method="POST">
                                @csrf
                                   <input type="text" class="keyword-mobile" name="keyword" placeholder="Search here...">
                                   <button><i class="flaticon-search"></i></button>
                               </form>
                           </div>
                           <div class="menu-outer">
                               <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                           </div>
                           <div class="social-links">
                               <ul class="clearfix list-wrap">
                                   <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                   <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                   <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                   <li><a href="#"><i class="fa fa-linkedin-in"></i></a></li>
                                   <li><a href="#"><i class="fa fa-youtube"></i></a></li>
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

   
   <div class="offCanvas-overlay"></div>
   <!-- offCanvas-area-end -->
</header>
<!-- header-area-end -->
