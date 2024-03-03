@extends('layouts.admin.template')
@section('title', 'Berita Purworejo | Update User')
@section('content')
    <div class="main-content container-fluid">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Update User</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class='breadcrumb-header'>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Update User</li>
                        </ol>
                    </nav>
                </div>
            </div>

        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <form class="forms-sample" action="{{ url('users/'.$users->id) }}" method="post">
                        @csrf
                        @method('PUT') <!-- Assuming you are updating a resource, adjust accordingly -->
                    
                        <div class="row">

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Name</label>
                                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="basicInput" name="name"
                                        placeholder="Enter name" value="{{ old('name', $users->name)  }}">
                                        @error('name')
                                        <div class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Email</label>
                                    <input type="email" class="form-control @error('email') is-invalid @enderror" id="basicInput" name="email"
                                        placeholder="Enter Email" value="{{ old('email', $users->email)  }}">
                                        @error('email')
                                        <div class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Password</label>
                                    <input type="password" class="form-control @error('password') is-invalid @enderror" id="basicInput" name="password"
                                        placeholder="Enter Password" value="{{ old('password')  }}">
                                        @error('password')
                                        <div class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="basicInput">Konfirmasi Password</label>
                                    <input type="password" class="form-control @error('konfirmasi_password') is-invalid @enderror" id="basicInput" name="password_confirmation"
                                        placeholder="Konfirmasi Password" value="{{ old('konfirmasi_password')  }}">
                                        @error('konfirmasi_password')
                                        <div class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
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

