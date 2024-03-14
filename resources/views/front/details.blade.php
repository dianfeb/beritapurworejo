@extends('front.layouts.template')
@push('meta-seo')
<meta name="description" content="{{ Str::limit(strip_tags($article->desc), 100, '...') }}">
<meta name="keyword" value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">
<meta property="og:title" value="{{ $article->title. " | Berita Purworejo" }}">
<meta property="og:url" value="{{ url()->current() }}">
<meta property="og:site_name" value="Berita Purworejo">
<meta property="og:keyword" value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">
<meta property="og:description" value="{{ Str::limit(strip_tags($article->desc), 100, '...') }}">
<meta property="og:image" value="{{ asset('storage/admin/article/' .$article->img) }}">
@endpush
@section('title', 'Berita Purworejo | ' . $article->title)
@section('content')
       <!--/// Page Content /// -->
       <div class="page-content-area py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-7 col-lg-8">
                    <div class="featured-image pb-3">
                        <div class="image-frame image-hover-style-1">
                            <a href='/single'> 
                                <img src="{{ asset('storage/admin/article/' .$article->img) }}" alt="image" class="w-100 "></a>
                        </div>
                    </div>
                    <div class="my-1">
                        <h1>{{ $article->title }}</h1>
                        <p class="m-0 small" style="font-weight: bold"> Posted on {{ $article->publish_date }}</p>
                        <p class="m-0 small" style="font-weight: bold"> By {{ $article->user->name }}</p>
                       
                    </div>
                    <div class="entry-content pb-3 typofix">
                        {!! $article->desc !!}
                    </div>
                    <div  data-aos="fade-in" class="single-post-widget  border-light border-top pt-3 mt-3 ">
                        <h4>Share on</h4>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a class="rounded btn btn-danger btn-sm btn-fc text-light"
                                    href="#"><i class="me-1 fab fa-facebook-f"></i>Share</a></li>
                            <li class="list-inline-item"><a class="rounded btn btn-success btn-sm btn-twi text-light"
                                    href="#"><i class="me-1 fab fa-twitter"></i> Tweet</a></li>
                            <li class="list-inline-item"><a class="rounded btn btn-danger btn-sm text-light" href="#"><i
                                        class="me-1 fab fa-pinterest"></i>Pin it</a></li>
                        </ul>

                    </div>
                </div>
                <div class="col-lg-4 col-md-5 pt-4 pt-md-0">
                   @include('front.layouts.side-widget')
                   
                </div>
            </div>
        </div>
    </div>
@endsection
    
 
  
  
