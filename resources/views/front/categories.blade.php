@extends('front.layouts.template')
{{-- meta social --}}
@push('meta-seo')
<meta name="description" content="Berita Purworejo | Media Terkini dan Terupdate Seputar Purworejo dan Sekitar">
<meta name="keyword" value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">

<meta property="og:title" value="{{ $category . " | Berita Purworejo" }}">
<meta property="og:url" value="{{ url()->current() }}">
<meta property="og:site_name" value="Berita Purworejo">
<meta property="og:keyword" value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">
<meta property="og:description" value="Berita Purworejo | Media Terkini dan Terupdate Seputar Purworejo dan Sekitar">
{{-- <meta property="og:image" value="{{ asset('storage/admin/article/' . $latest_post->img) }}"> --}}
@endpush
@section('title', 'Berita Purworejo | ' . $category)
@section('content')
<div class="page-content-area pb-5">


    <div class="themeix-page-title-area py-4 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>{{ $category }}</h1>
           
          </div>
        </div>
      </div>
    </div>


    <div class="container pt-5">
        <div class="row">

            @foreach ($articles as $item)
            <div class="col-md-6 col-lg-4">
                <div class="card blog-style1 mb-4 border border-light">
                    <div class="feature-image">
                        <div class="image-frame image-hover-style-1">
                            <a> <img src="{{ asset('storage/admin/article/' . $item->img) }}" alt="image"
                                    class="w-100"></a>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4><a href='{{ url('detail/'.$item->slug) }}'>{{ $item->title }}</a></h4>
                       
                        <p class="mb-0">  {!! Str::limit($item->desc, 100) !!}</p>
                        <a class='fw-bold' href='{{ url('detail/'.$item->slug) }}'>Selengkapnya</a>
                    </div>
                </div>
            </div>
            @endforeach
            
          
        </div>
    </div>

</div>
<!--/// CTA Area /// -->


    
@endsection