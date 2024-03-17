@extends('front.layouts.template')

@push('meta-seo')
<meta name="description" content="Berita Purworejo | Media Terkini dan Terupdate Seputar Purworejo dan Sekitar">
<meta name="keyword" value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">

{{-- meta social --}}
<meta property="og:title" value="Berita Purworejo | Media Terkini dan Terupdate Seputar Purworejo dan Sekitar">
<meta property="og:url" value="{{ url()->current() }}">
<meta property="og:site_name" value="Berita Purworejo">
<meta property="og:keyword" value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">
<meta property="og:description" value="Berita Purworejo | Media Terkini dan Terupdate Seputar Purworejo dan Sekitar">
{{-- <meta property="og:image" value="{{ asset('storage/admin/article/' . $latest_post->img) }}"> --}}
@endpush
@section('title',  'Berita Purworejo | Info Purworejo dan Sekitar')
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
                                    <a href='{{ url('detail/'.$item->slug) }}'> <img class="lazyload"
                                            src="{{ asset('storage/admin/article/' . $item->img) }}" alt="image"
                                            class="w-100"></a>
                                </div>
                            </div>
                            <div class="card-body">
                                <a class='badge bg-danger' href='{{ url('category/'. $item->category->name) }}'>{{ $item->category->name }}</a>
                                <h2><a href='{{ url('detail/'.$item->slug) }}'>{{ $item->title }}</a>
                                </h2>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="author-block">
                                            <ul class="avatar list-inline mb-0">
                                                <li class="list-inline-item"><a class='small' href='/author'>{{ $item->user->name }}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-6"> <span class="date-info small  float-lg-end">

                                            <span>{{ $item->formatted_created_at  }}</span>
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
            <div class="text-center  themeix-ads"><a href="#"><img class="lazyload"
                        src="{{ asset('storage/admin/config/' . $config['adv']) }}"
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
                                <a class='text-uppercase section-title-link' href='{{ url('category/'. $category->slug) }}'>
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
                        @foreach ($articles as $article)
                            @if ($article->category_id == $category->id)
                                <article data-aos="fade-up" class="blog-style2 card mb-4">
                                    <div class="feature-image">
                                        <div class="image-frame image-hover-style-1">
                                            <a href='{{ url('detail/'.$article->slug) }}'><img class="lazyload"
                                                    src="{{ asset('storage/admin/article/' . $article->img) }}"
                                                    alt="image" class="w-100"></a>
                                        </div>
                                    </div>
                                    <div data-aos="fade-in" class="card-body  d-md-flex align-items-center">
                                        <div class="card-flex-content">
                                            <a class='badge bg-primary' href="{{ url('category/'. $category->slug) }}">{{ $category->name }}</a>
                                            <h4><a href='{{ url('detail/'.$article->slug) }}'>{{ $article->title }}</a></h4>
                                            {!! Str::limit($article->desc, 100) !!}
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="author-block">
                                                        <ul class="avatar list-inline mb-0">
                                                            <li class="list-inline-item"><a class='small'
                                                                    href='/author'>{{ $article->user->name }}</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6"> <span class="date-info small float-lg-end">
                                                        <span>{{ $article->formatted_created_at  }}</span>
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
                  @include('front.layouts.side-widget')
                   


                </div>
            </div>
        </div>
    </div>
   
@endsection
