@extends('layouts.admin.template')
@section('title', 'Berita Purworejo | Create article')
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
                    <form class="forms-sample" action="{{ url('articles') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="row">


                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Category</label>
                                    <select class="choices form-select" name="category_id" value="{{ old('category_id')  }}">
                                        <option value="" hidden>-- choose --</option>
                                        @foreach ($categories as $row)
                                            <option value="{{ $row->id }}">{{ $row->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Status</label>
                                    <select class="choices form-select" name="status" value="{{ old('status')  }}">
                                        <option value="" hidden>-- choose --</option>
                                        <option value="0">Private</option>
                                        <option value="1">Publish</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Title</label>
                                    <input type="text" class="form-control" id="basicInput" name="title"
                                        placeholder="Enter title" value="{{ old('title')  }}">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>File upload (Max 2Mb)</label>
                                    <div class="mt-1">
                                        <img src="" alt="" class="img-thumbnail img-preview" width="100px">
                                      </div>
                                    <div class="form-file">
                                        <input type="file" name="img" class="form-control form-file-input"
                                            id="customFile">
                                    </div>
                                </div>
                            </div>




                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="basicInput">Publish Date</label>
                                    <input type="date" name="publish_date" class="form-control" id="basicInput"
                                        placeholder="Enter Date" value="{{ old('publish_date')  }}">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Description</label>
                                    <textarea id="ckeditor" name="desc" rows="10" value="{{ old('desc')  }}"></textarea>
                                </div>
                            </div>
                        </div>

                    <button type="submit" class="btn btn-primary me-2">Submit</button>
                    <button type="submit" class="btn btn-light">Cancel</button>
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

    $("#customFile").change(function() {
      previewImage(this);
    });

    function previewImage(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          $('.img-preview').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
</script>
@endpush