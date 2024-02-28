@extends('layouts.admin.template')
@section('title', 'Berita Purworejo | Update article')
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
                </div>
                <div class="card-body">
                    <form class="forms-sample" action="{{ url('articles/'.$article->id) }}" method="post" enctype="multipart/form-data">
                        @method('PUT')
                        @csrf
                        <div class="row">


                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Category</label>
                                    <select class="choices form-select" name="category_id" value="{{ old('category_id')  }}">
                                        <option value="" hidden>-- choose --</option>
                                        @foreach ($categories as $row)
                          @if ($row->id == $article->category_id)
                          <option value="{{ $row->id }}" selected>{{ $row->name }}</option>
                          @else
                          <option value="{{ $row->id }}">{{ $row->name }}</option>
                          @endif
                          
                          @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Status</label>
                                    <select class="choices form-select" name="status" value="{{ old('status')  }}">
                                        <option value="0" {{$article->status == 0 ? 'selected' : null}}>Private</option>
                                        <option value="1" {{$article->status == 1 ? 'selected' : null}}>Publish</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Title</label>
                                    <input type="text" class="form-control" id="basicInput" name="title"
                                        placeholder="Enter title" value="{{ old('title', $article->title) }}">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>File upload (Max 2Mb)</label>
                                    <div class="form-file">
                                        <img src="{{asset('storage/app/public/admin/article/'.$article->img)}}" alt="" width="100px"><br>
                                            <small>Gambar Lama </small><br>
                                        <input type="file" name="img" class="form-control form-file-input"
                                            id="customFile" >
                                            
                                    </div>
                                </div>
                            </div>




                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Publish Date</label>
                                    <input type="date" name="publish_date" class="form-control" id="basicInput"
                                        placeholder="Enter Date" value="{{old('publish_date', $article->publish_date)}}">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Description</label>
                                    <textarea id="ckeditor" name="desc" rows="10">{{ old('desc', $article->desc)  }}</textarea>
                                </div>
                            </div>
                        </div>

                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
        <!-- Basic Inputs end -->


    </div>

    </div>
@endsection

@push('js')
<script src="//cdn.ckeditor.com/4.14.1/standard/ckeditor.js"></script>
<script>
    var options = {
      filebrowserImageBrowseUrl: '/laravel-filemanager?type=Images',
      filebrowserImageUploadUrl: '/laravel-filemanager/upload?type=Images&_token=',
      filebrowserBrowseUrl: '/laravel-filemanager?type=Files',
      filebrowserUploadUrl: '/laravel-filemanager/upload?type=Files&_token=',
      clipboard_handleImages:false
    };
  </script>
<script>
    CKEDITOR.replace('ckeditor', options);
</script>
@endpush