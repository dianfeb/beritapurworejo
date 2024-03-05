<div class="sidebar-widget mb-3 border border-light rounded">
    <div class="wrapper">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title-block d-flex pb-3">
                    <h3 class="section-widget-title">Popular News</h3>
                    <a class='text-uppercase section-title-link' href='/category'>
                        See all
                        <svg width="24" height="24" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 13.5h17.79l-5.445 6.54a1.502 1.502 0 102.31 1.92l7.5-9a1.78 1.78 0 00.135-.226c0-.075.075-.12.105-.195A1.5 1.5 0 0024 12a1.499 1.499 0 00-.105-.54c0-.075-.075-.12-.105-.195a1.766 1.766 0 00-.135-.225l-7.5-9A1.499 1.499 0 0015 1.5a1.5 1.5 0 00-1.155 2.46l5.445 6.54H1.5a1.5 1.5 0 100 3z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        @foreach ($populars as $item)
        <article class="blog-style5 d-flex  d-md-block d-xl-flex align-items-center">
            <a aria-label='Post Title Here' href='/single'>
                <div class="post-img-wrap position-relative overflow-hidden">
                    <img class="lazyload post-img"
                        src="https://d33wubrfki0l68.cloudfront.net/e501661555eaf8b2893536a698249bbaea84ab84/a0474/assets/images/blog-img12.jpg"
                        data-src="https://d33wubrfki0l68.cloudfront.net/e501661555eaf8b2893536a698249bbaea84ab84/a0474/assets/images/blog-img12.jpg"
                        alt="Post Title Here">
                </div>
            </a>
            <div class="post-content pt-md-2 pt-xl-0 pt-0">
                <h6 class="post-title"><a href='/single'>{{ $item->title }}</a>
                </h6>
                <div class="post-meta">
                    <span class="date-info small">

                        <span>2 mins to read</span>
                    </span>
                </div>
            </div>
        </article>
        @endforeach
        
       
    </div>
</div>