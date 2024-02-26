@extends('layouts.admin.template')

@section('title', 'Berita Purworejo | list article')
@section('content')
    <div class="main-content container-fluid">
        <section class="section">
            <div class="page-title">
                <div class="row mb-4">
                    <div class="col-12 col-md-6 order-md-1 order-last">
                        <h3>Articles</h3>
                       
                    </div>
                    <div class="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" class='breadcrumb-header'>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Articles</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="row mb-2">
                    <div class="card">
                        <div class="card-header">
                            <a href="{{ url('articles/create') }}" class="btn btn-outline-primary mb-3">Add Data</a>
                                @if ($errors->any())
                                <div class="alert alert-danger">
                                    <ul>
                                        @foreach ($errors->all() as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif

                            @if (session('success'))
                            <div class="my-3">
                                <div class="alert alert-success">
                                    <ul>
                                        {{ session('success')}}
                                    </ul>
                                </div>
                            </div>
                            @endif
                        </div>
                        <div class="card-body">
                            <table class='table table-striped' id="table1">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Category</th>
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>Publish Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    @foreach ($articles as $row)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ $row->category->name }}</td>
                                            <td>{{ $row->title }}</td>
                                            <td>{{ $row->status }}</td>
                                            <td>{{ $row->publish_date }}</td>
                                            <td>
                                                <a data-bs-toggle="modal" data-bs-target="#inlineFormUpdate{{ $row->id }}">
                                                    <i class="badge-circle badge-circle-white text-secondary font-medium-1"
                                                        data-feather="edit"></i>
                                                </a>
                                                <button data-bs-toggle="modal" data-bs-target="#inlineFormDelete{{ $row->id }}">
                                                    <i class="badge-circle badge-circle-white text-secondary font-medium-1"
                                                        data-feather="trash-2"></i>
                                                </button>
                                            </td>

                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
            </section>
    </div>
    </div>

@endsection
