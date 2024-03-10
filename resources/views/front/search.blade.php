@extends('front.layouts.template')

@section('content')
    <div class="page-content-area pb-5">
        <div class="themeix-page-title-area py-4 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1></h1>

                    </div>
                </div>
            </div>
        </div>
        <div class="blog-block-1 py-5 ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-7">
                        @foreach ($articles as $item)
                            <article data-aos="fade-up" class="blog-style2 card mb-4">
                                <div class="feature-image">
                                    <div class="image-frame image-hover-style-1">
                                        <a href='{{ url('detail/' . $item->slug) }}'><img class="lazyload"
                                                src="{{ asset('storage/admin/article/' . $item->img) }}" alt="image"
                                                class="w-100"></a>
                                    </div>
                                </div>
                                <div data-aos="fade-in" class="card-body  d-md-flex align-items-center">
                                    <div class="card-flex-content">
                                        <a class='badge bg-primary' href='/category'>{{ $item->category->name }}</a>
                                        <h4><a href='{{ url('detail/' . $item->slug) }}'>{{ $item->title }}</a></h4>
                                        {!! Str::limit($item->desc, 100) !!}
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="author-block">
                                                    <ul class="avatar list-inline mb-0">
                                                        <li class="list-inline-item"><a class='small' href='/author'><img
                                                                    src="john dee" alt="Jhon Doe" data-bs-toggle="tooltip"
                                                                    data-bs-placement="top" title=""> Jhon Doe</a>
                                                        </li>
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
                        @endforeach
                    </div>
                    <div class="col-lg-4 col-md-5">
                        @include('front.layouts.side-widget')
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!--/// CTA Area /// -->
@endsection
