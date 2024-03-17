@extends('front.layouts.template')
@push('meta-seo')
    <meta name="description" content="Berita Purworejo | About">
    <meta name="keyword"
        value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">

    <meta property="og:title" value="{{ $data->name . ' | Berita Purworejo' }}">
    <meta property="og:url" value="{{ url()->current() }}">
    <meta property="og:site_name" value="Berita Purworejo">
    <meta property="og:keyword"
        value="Berita Purworejo, kota purworejo, media purworejo, info purworejo, purworejo hari ini, berita online purworejo, purworejo">
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

        <section class="contact-section pt-60 pb-60">
            <div class="container">
                <div class="row mrb-80">
                    <div class="col-md-12 col-lg-12 col-xl-4">
                        <h5 class="side-line-left text-primary-color mrt-0 mrb-5">Get In Touch</h5>
                        <h2 class="contact-title mrb-30">Have Any Questions?</h2>
                        <ul class="social-list list-lg list-primary-color list-flat mrb-lg-60 clearfix">
                            <li><a href="https://www.instagram.com/malioboro_tour_and_transport/" target="_blank"><i
                                        class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.facebook.com/Malioborotourandtransport" target="_blank"><i
                                        class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.tiktok.com/@malioboro_tour_transport?is_from_webapp=1&amp;sender_device=pc"
                                    target="_blank"><i class="fab fa-tiktok"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-lg-12 col-xl-8">
                        <div class="row">
                            <div class="col-lg-12 col-xl-12">
                                <div class="contact-block d-flex mrb-30">
                                    <div class="contact-icon"> <i class="fa fa-map-pin"></i> </div>
                                    <div class="contact-details mrl-30 text-white">
                                        <h5 class="icon-box-title mrb-10 text-white">Alamat</h5>
                                        <p class="mrb-0 text-white">{{ $config['Alamat'] }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-xl-6">
                                <div class="contact-block d-flex mrb-30">
                                    <div class="contact-icon"> <i class="fa fa-envelope-open"></i> </div>
                                    <div class="contact-details mrl-30 text-white">
                                        <h5 class="icon-box-title mrb-10 text-white">Whatsapp</h5>
                                        <p class="mrb-0 text-white">+{{ $config['Whatsapp'] }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-xl-6">
                                <div class="contact-block d-flex mrb-30">
                                    <div class="contact-icon"> <i class="fa fa-phone-alt"></i> </div>
                                    <div class="contact-details mrl-30 text-white">
                                        <h5 class="icon-box-title mrb-10 text-white">Telepon</h5>
                                        <p class="mrb-0 text-white">{{ $config['Telepon'] }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="mapouter fixed-height">
                            <div class="gmap_canvas"> 
                                {!! $data->value !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
@endsection
