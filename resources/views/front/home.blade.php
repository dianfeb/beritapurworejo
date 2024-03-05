@extends('front.layouts.template')


@section('content')


   
   <!--/// Hero Area /// -->
   <div class="hero-area pt-3 pb-3  pt-lg-2 pb-lg-3">
      <div class="container">
         <div class="row">
            @foreach ($latest_post as $item)
            <div class="col-lg-6 col-md-12">
               <article class="blog-style3 border-0 card mb-4 position-relative">
                  <div class="feature-image">
                     <div class="image-frame image-hover-style-1">
                        <a href='/single'> <img class="lazyload" src="{{ asset('storage/admin/article/' . $item->img) }}" alt="image"
                              class="w-100"></a>
                     </div>
                  </div>
                  <div class="card-body">
                     <a class='badge bg-danger' href='/category'>{{ $item->category->name }}</a>
                     <h2><a href='/single'>{{ $item->title }}</a>
                     </h2>
                     <div class="row">
                        <div class="col-lg-6">
                           <div class="author-block">
                              <ul class="avatar list-inline mb-0">
                                 <li class="list-inline-item"><a class='small' href='/author'><img
                                          src="https://d33wubrfki0l68.cloudfront.net/5761cb31d4865ac5eeb4cd56d41f774ce9fe4440/364a5/assets/images/author-img.jpg" alt="Jhon Doe" data-bs-toggle="tooltip"
                                          data-bs-placement="top" title="Jhon Doe"> Jhon Doe</a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="col-lg-6"> <span class="date-info small  float-lg-end">
                              
                              <span>{{ $item->created_at->format('d-m-Y') }}</span>
                           </span>
                        </div>
                     </div>
                  </div>
               </article>
            </div>
            @endforeach
            
            
         </div>
      </div>
   </div>
   <!--/// Ads Area /// -->
   <div class="ads-area">
      <div class="container">
         <div class="text-center  themeix-ads"><a href="#"><img class="lazyload" src="https://d33wubrfki0l68.cloudfront.net/93a138ace03417226cbeb951061e2578aa3ee7a5/c83ea/assets/images/blog-ads.png"
                  alt="image" /></a>
         </div>
      </div>
   </div>
      <!--/// Blog Block 1 Area /// -->
   <div class="blog-block-1 py-5 ">
      <div class="container">
         <div class="row">
            <div class="col-lg-8 col-md-7">
               @foreach ($categories as $category)
               <div class="col-md-12">
                   <div class="section-title-block d-flex pb-3">
                       <h3 class="section-widget-title">{{ $category->name }}</h3>
                       <a class='text-uppercase section-title-link' href='/category'>
                           See all
                           <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                               <path
                                   d="M1.5 13.5h17.79l-5.445 6.54a1.502 1.502 0 102.31 1.92l7.5-9a1.78 1.78 0 00.135-.226c0-.075.075-.12.105-.195A1.5 1.5 0 0024 12a1.499 1.499 0 00-.105-.54c0-.075-.075-.12-.105-.195a1.766 1.766 0 00-.135-.225l-7.5-9A1.499 1.499 0 0015 1.5a1.5 1.5 0 00-1.155 2.46l5.445 6.54H1.5a1.5 1.5 0 100 3z">
                               </path>
                           </svg>
                       </a>
                   </div>
               </div>
               @foreach ($articles as $article)
               @if ($article->category_id == $category->id)
                       <article data-aos="fade-up" class="blog-style2 card mb-4">
                           <div class="feature-image">
                               <div class="image-frame image-hover-style-1">
                                   <a href='/single'><img class="lazyload" src="{{ asset('storage/admin/article/' . $article->img) }}" alt="image"
                                           class="w-100"></a>
                               </div>
                           </div>
                           <div data-aos="fade-in" class="card-body  d-md-flex align-items-center">
                               <div class="card-flex-content">
                                   <a class='badge bg-primary' href='/category'>{{ $category->name }}</a>
                                   <h4><a href='/single'>{{ $article->title }}</a></h4>
                                   {!! Str::limit($article->desc, 100) !!}
                                   <div class="row">
                                       <div class="col-lg-6">
                                           <div class="author-block">
                                               <ul class="avatar list-inline mb-0">
                                                   <li class="list-inline-item"><a class='small' href='/author'><img
                                                               src="john dee" alt="Jhon Doe"
                                                               data-bs-toggle="tooltip" data-bs-placement="top"
                                                               title=""> Jhon Doe</a></li>
                                               </ul>
                                           </div>
                                       </div>
                                       <div class="col-lg-6"> <span class="date-info small float-lg-end">
                                               <span>1 mins to read</span>
                                           </span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </article>
                       @endif
                       @endforeach
           @endforeach
           
              

               
               
            </div>
            
            <div class="col-lg-4 col-md-5">
               <div class="sidebar-widget mb-3 border border-light rounded">
                  <div class="wrapper">
                     <div class="row">
                        <div class="col-md-12">
                           <div class="section-title-block d-flex pb-3">
                              <h3 class="section-widget-title">Trending</h3>
                              <a class='text-uppercase section-title-link' href='/category'>
                                 See all
                                 <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M1.5 13.5h17.79l-5.445 6.54a1.502 1.502 0 102.31 1.92l7.5-9a1.78 1.78 0 00.135-.226c0-.075.075-.12.105-.195A1.5 1.5 0 0024 12a1.499 1.499 0 00-.105-.54c0-.075-.075-.12-.105-.195a1.766 1.766 0 00-.135-.225l-7.5-9A1.499 1.499 0 0015 1.5a1.5 1.5 0 00-1.155 2.46l5.445 6.54H1.5a1.5 1.5 0 100 3z">
                                    </path>
                                 </svg>
                              </a>
                           </div>
                        </div>
                     </div>
                     <article class="blog-style5 d-flex  d-md-block d-xl-flex align-items-center">
                        <a aria-label='Post Title Here' href='/single'>
                           <div class="post-img-wrap position-relative overflow-hidden">
                              <img class="lazyload post-img" src="https://d33wubrfki0l68.cloudfront.net/e501661555eaf8b2893536a698249bbaea84ab84/a0474/assets/images/blog-img12.jpg"
                                 data-src="https://d33wubrfki0l68.cloudfront.net/e501661555eaf8b2893536a698249bbaea84ab84/a0474/assets/images/blog-img12.jpg" alt="Post Title Here">
                           </div>
                        </a>
                        <div class="post-content pt-md-2 pt-xl-0 pt-0">
                           <h6 class="post-title"><a href='/single'>Build a covid-19 self assessment tool
                                 with
                                 google forms</a>
                           </h6>
                           <div class="post-meta">
                              <span class="date-info small">
                                 
                                 <span>2 mins to read</span>
                              </span>
                           </div>
                        </div>
                     </article>
                     <article class="blog-style5 d-flex  d-md-block d-xl-flex align-items-center">
                        <a aria-label='Post Title Here' href='/single'>
                           <div class="post-img-wrap position-relative overflow-hidden">
                              <img class="lazyload post-img" src="https://d33wubrfki0l68.cloudfront.net/31d21f03f4c66ec7a0572a8bb078dc9b64592d22/a6e15/assets/images/blog-img13.jpg"
                                 data-src="https://d33wubrfki0l68.cloudfront.net/31d21f03f4c66ec7a0572a8bb078dc9b64592d22/a6e15/assets/images/blog-img13.jpg" alt="Post Title Here">
                           </div>
                        </a>
                        <div class="post-content pt-md-2 pt-xl-0 pt-0">
                           <h6 class="post-title"><a href='/single'>Master chrome developer tools</a></h6>
                           <div class="post-meta">
                              <span class="date-info small">
                                 
                                 <span>2 mins to read</span>
                              </span>
                           </div>
                        </div>
                     </article>
                     <article class="blog-style5 d-flex  d-md-block d-xl-flex align-items-center">
                        <a aria-label='Post Title Here' href='/single'>
                           <div class="post-img-wrap position-relative overflow-hidden">
                              <img class="lazyload post-img" src="https://d33wubrfki0l68.cloudfront.net/0f140068740f3cb15571bfe2118069cae55663b4/b34ef/assets/images/blog-img14.jpg"
                                 data-src="https://d33wubrfki0l68.cloudfront.net/0f140068740f3cb15571bfe2118069cae55663b4/b34ef/assets/images/blog-img14.jpg" alt="Post Title Here">
                           </div>
                        </a>
                        <div class="post-content pt-md-2 pt-xl-0 pt-0">
                           <h6 class="post-title"><a href='/single'>Find out how much traffic a website
                                 gets</a>
                           </h6>
                           <div class="post-meta">
                              <span class="date-info small">
                                 
                                 <span>2 mins to read</span>
                              </span>
                           </div>
                        </div>
                     </article>
                     <article class="blog-style5 d-flex  d-md-block d-xl-flex align-items-center">
                        <a aria-label='Post Title Here' href='/single'>
                           <div class="post-img-wrap position-relative overflow-hidden">
                              <img class="lazyload post-img" src="https://d33wubrfki0l68.cloudfront.net/6d5621fae88ab1f1a8234fa3b365c1fe50f1cfd9/bf1e7/assets/images/blog-img15.jpg"
                                 data-src="https://d33wubrfki0l68.cloudfront.net/6d5621fae88ab1f1a8234fa3b365c1fe50f1cfd9/bf1e7/assets/images/blog-img15.jpg" alt="Post Title Here">
                           </div>
                        </a>
                        <div class="post-content pt-md-2 pt-xl-0 pt-0">
                           <h6 class="post-title"><a href='/single'>Write your name in different languages
                                 and styles</a>
                           </h6>
                           <div class="post-meta">
                              <span class="date-info small">
                                 
                                 <span>2 mins to read</span>
                              </span>
                           </div>
                        </div>
                     </article>
                     <article class="blog-style5 d-flex  d-md-block d-xl-flex align-items-center">
                        <a aria-label='Post Title Here' href='/single'>
                           <div class="post-img-wrap position-relative overflow-hidden">
                              <img class="lazyload post-img" src="https://d33wubrfki0l68.cloudfront.net/8c4b7165c7065e7d39e33d19614ebb1ef8b1a800/55c5f/assets/images/blog-img16.jpg"
                                 data-src="https://d33wubrfki0l68.cloudfront.net/8c4b7165c7065e7d39e33d19614ebb1ef8b1a800/55c5f/assets/images/blog-img16.jpg" alt="Post Title Here">
                           </div>
                        </a>
                        <div class="post-content pt-md-2 pt-xl-0 pt-0">
                           <h6 class="post-title"><a href='/single'>The 101 most useful websites on the
                                 internet</a>
                           </h6>
                           <div class="post-meta">
                              <span class="date-info small">
                                 
                                 <span>2 mins to read</span>
                              </span>
                           </div>
                        </div>
                     </article>
                  </div>
               </div>
               
             
            </div>
         </div>
      </div>
   </div>
      <!--/// Editor Pick Area /// -->
   <div class="editor-pick bg-light pt-5 pb-3">
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <div class="section-title-block d-flex pb-3">
                  <h3 class="section-widget-title">Editors Pick</h3>
                  <a class='text-uppercase section-title-link' href='/category'>
                     See all
                     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M1.5 13.5h17.79l-5.445 6.54a1.502 1.502 0 102.31 1.92l7.5-9a1.78 1.78 0 00.135-.226c0-.075.075-.12.105-.195A1.5 1.5 0 0024 12a1.499 1.499 0 00-.105-.54c0-.075-.075-.12-.105-.195a1.766 1.766 0 00-.135-.225l-7.5-9A1.499 1.499 0 0015 1.5a1.5 1.5 0 00-1.155 2.46l5.445 6.54H1.5a1.5 1.5 0 100 3z">
                        </path>
                     </svg>
                  </a>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-6 col-md-6">
               <article class="blog-style3 border-0 card mb-4 position-relative">
                  <div class="feature-image">
                     <div class="image-frame image-hover-style-1">
                        <a href='/single'> <img class="lazyload" src="https://d33wubrfki0l68.cloudfront.net/26b26bfa6f6b8dc6d5d38bb17e60662778d44422/e4a3a/assets/images/blog-img36.jpg" alt="image"
                              class="w-100"></a>
                     </div>
                  </div>
                  <div class="card-body">
                     <a class='badge bg-danger' href='/category'>Political</a>
                     <h2><a href='/single'>No. 19 Kansas upsets No. 2 Baylor as Bears</a></h2>
                     <div class="row">
                        <div class="col-lg-6">
                           <div class="author-block">
                              <ul class="avatar list-inline mb-0">
                                 <li class="list-inline-item"><a class='small' href='/author'><img
                                          src="https://d33wubrfki0l68.cloudfront.net/5761cb31d4865ac5eeb4cd56d41f774ce9fe4440/364a5/assets/images/author-img.jpg" alt="Jhon Doe" data-bs-toggle="tooltip"
                                          data-bs-placement="top" title="Jhon Doe"> Jhon Doe</a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="col-lg-6"> <span class="date-info small  float-lg-end">
                              
                              <span>1 mins to read</span>
                           </span>
                        </div>
                     </div>
                  </div>
               </article>
            </div>
            <div class="col-lg-6 col-md-6">
               <article class="blog-style3 border-0 card mb-4 position-relative">
                  <div class="feature-image">
                     <div class="image-frame image-hover-style-1">
                        <a href='/single'> <img class="lazyload" src="https://d33wubrfki0l68.cloudfront.net/59645d6a6f17b1d82031adfbcd4f4a8eaeb0b335/81a3e/assets/images/blog-img34.jpg" alt="image"
                              class="w-100"></a>
                     </div>
                  </div>
                  <div class="card-body">
                     <a class='badge bg-secondary' href='/category'>WordPress</a>
                     <h2><a href='/single'>100 things to do while stuck inside due to a pandemic</a></h2>
                     <div class="row">
                        <div class="col-lg-6">
                           <div class="author-block">
                              <ul class="avatar list-inline mb-0">
                                 <li class="list-inline-item"><a class='small' href='/author'><img
                                          src="https://d33wubrfki0l68.cloudfront.net/5761cb31d4865ac5eeb4cd56d41f774ce9fe4440/364a5/assets/images/author-img.jpg" alt="Jhon Doe" data-bs-toggle="tooltip"
                                          data-bs-placement="top" title="Jhon Doe"> Jhon Doe</a></li>
                              </ul>
                           </div>
                        </div>
                        <div class="col-lg-6"> <span class="date-info small  float-lg-end">
                              
                              <span>1 mins to read</span>
                           </span>
                        </div>
                     </div>
                  </div>
               </article>
            </div>
         </div>
      </div>
   </div>

   @endsection
   
  
 