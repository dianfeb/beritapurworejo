@extends('layouts.admin.template')

@section('title', 'Berita Purworejo | Detail Article')
@section('content')
    <div class="main-content container-fluid">
        <section class="section">
            <div class="page-title">
                <div class="row mb-4">
                    <div class="col-12 col-md-6 order-md-1 order-last">
                        <h3>Detail Articles</h3>

                    </div>
                    <div class="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" class='breadcrumb-header'>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Detail Articles</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="row mb-2">
                    <div class="card">
                        <div class="card-body">
                            <table class='table table-striped table-bordered' id="table1">

                                <tr>
                                    <th>Category</th>
                                    <td>: {{ $article->category->name }}</td>
                                </tr>

                                <tr>
                                    <th>Title</th>
                                    <td>: {{ $article->title }}</td>
                                </tr>

                                <tr>
                                    <th>Status</th>
                                    @if ($article->status == 0)
                                        <td>: <span class="badge bg-danger">Private</span></td>
                                    @else
                                        <td>: <span class="badge bg-success">Published</span></td>
                                    @endif
                                </tr>

                                <tr>
                                    <th>Views</th>
                                    <td>: {{ $article->views }}</td>
                                </tr>

                                <tr>
                                    <th>Publish Date</th>
                                    <td>: {{ $article->publish_date }}</td>
                                </tr>

                                <tr>
                                    <th>Image</th>
                                    <td>:
                                        <a href="{{ asset('storage/admin/article/' . $article->img) }}" target="_blank">
                                            <img src="{{ asset('storage/admin/article/' . $article->img) }}"
                                                style="width:200px">
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <th>Description</th>
                                    <td> {!! $article->desc !!}</td>
                                </tr>
                            </table>
                            <div class="">
                                <a class="btn btn-info" href="{{ url('articles') }}">Back</a>
                               </div>
                        </div>
                    </div>
            </section>
    </div>
    </div>

@endsection
