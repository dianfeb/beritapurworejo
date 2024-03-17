@extends('front.layouts.template')
@push('meta-seo')
<meta name="description" content="Berita Purworejo | About">
<meta name="keyword" value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">

<meta property="og:title" value="{{ $data->name . " | Berita Purworejo" }}">
<meta property="og:url" value="{{ url()->current() }}">
<meta property="og:site_name" value="Berita Purworejo">
<meta property="og:keyword" value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">
<meta property="og:description" value="Berita Purworejo | About">
{{-- <meta property="og:image" value="{{ asset('storage/admin/article/' . $latest_post->img) }}"> --}}
@endpush
@section('title', 'Berita Purworejo | ' . $data->name)
@section('content')
    <div class="page-content-area pb-5">


        <div class="themeix-page-title-area py-4 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>{{ $data->name }}</h1>

                    </div>
                </div>
            </div>
        </div>

        <section class="about-us-home-area overflow-hidden pt-60 pb-60">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="about-us-min-content">
                            <div class="container-fluid ps-0 pe-0">
                                <div class="row gx-0 align-items-center bg-gray">
                                    <div class="col-lg-12 wow fadeInUp  animated" data-wow-duration="1500ms"
                                        data-wow-delay="0ms"
                                        style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
                                        <div class="about-us-content"> 
                                            
                                            {!! $data->value !!}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
