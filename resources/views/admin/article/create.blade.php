@extends('layouts.admin.template')

@section('content')
    <div class="main-content container-fluid">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Create Article</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class='breadcrumb-header'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Create Article</li>
                        </ol>
                    </nav>
                </div>
            </div>

        </div>
        <div class="col-md-12">
            <div class="card">

                <div class="card-body">
                    <form class="forms-sample" action="{{ url('article') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="row">


                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Category</label>
                                    <select class="choices form-select" name="category_id">
                                        <option value="" hidden>-- choose --</option>
                                        @foreach ($categories as $row)
                                            <option value="{{ $row->id }}">{{ $row->name }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label>File upload (Max 2Mb)</label>
                                    <div class="form-file">
                                        <input type="file" class="form-control form-file-input" id="customFile">
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Title</label>
                                    <input type="text" class="form-control" id="basicInput" name="title"
                                        placeholder="Enter title">
                                </div>


                                <div class="form-group">
                                    <label for="basicInput">Publish Date</label>
                                    <input type="date" class="form-control" id="basicInput" placeholder="Enter Date">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Description</label>
                                    <textarea class="form-control" name="description" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
        <!-- Basic Inputs end -->


    </div>

    </div>
@endsection
