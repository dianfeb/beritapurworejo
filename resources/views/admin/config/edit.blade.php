@extends('layouts.admin.template')
@section('title', 'Berita Purworejo | Update Config')
@section('content')
    <div class="main-content container-fluid">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Update Config</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class='breadcrumb-header'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Update Config</li>
                        </ol>
                    </nav>
                </div>
            </div>

        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form class="forms-sample" action="{{ url('config/'.$config->id) }}" method="post" enctype="multipart/form-data">
                        @csrf
                        @method('PUT') <!-- Assuming you are updating a resource, adjust accordingly -->
                        <input type="hidden" name="oldImg" value="{{$config->img}}">
                        <div class="row">

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Name</label>
                                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="basicInput" name="name"
                                        placeholder="Enter name" value="{{ old('name', $config->name)  }}">
                                        @error('name')
                                        <div class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            @if ($config['type']=='text')
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Value</label>
                                    <input type="text" class="form-control @error('value') is-invalid @enderror" id="basicInput" name="value"
                                        placeholder="Enter value" value="{{ old('value', $config->value)  }}">
                                        @error('value')
                                        <div class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>
                            @endif

                            @if ($config['type'] == 'images')
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>File upload (Max 2Mb)</label>
                                    <div class="form-file">
                                        <img src="{{asset('storage/admin/config/'.$config->img)}}" alt="" width="100px"><br>
                                            <small>Gambar Lama </small><br>
                                        <input type="file" name="img" class="form-control form-file-input"
                                            id="customFile" >
                                            
                                    </div>
                                </div>
                            </div>
                            @endif

                            @if ($config['type'] == 'desc')
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Description</label>
                                    <textarea id="ckeditor" name="value" rows="10">{{ old('value', $config->value)  }}</textarea>
                                </div>
                            </div>
                                
                            @endif

                         


                          


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
</script>
@endpush