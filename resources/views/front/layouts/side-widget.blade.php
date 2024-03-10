<div class="sidebar-widget mb-3 border border-light rounded">
    <div class="wrapper">
        <div class="row">
            <div class="col-md-12">
                <div class="section-title-block d-flex pb-3">
                    <h3 class="section-widget-title">Popular News</h3>
                   
                </div>
            </div>
        </div>
        @foreach ($populars as $item)
        <article class="blog-style5 d-flex  d-md-block d-xl-flex align-items-center">
            <a aria-label='Post Title Here' href="{{ url('detail/'.$item->slug) }}'>{{ $item->title }}">
                <div class="post-img-wrap position-relative overflow-hidden">
                    <img class="lazyload post-img"
                        src="{{ asset('storage/admin/article/'.$item->img) }}">
                </div>
            </a>
            <div class="post-content pt-md-2 pt-xl-0 pt-0">
                <h6 class="post-title"><a href="{{ url('detail/'.$item->slug) }}">{{ $item->title }}</a>
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