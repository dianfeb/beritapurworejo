@extends('layouts.admin.template')


@section('content')
<div class="main-content container-fluid">
    <div class="page-title">
        <h3>Dashboard</h3>
        <p class="text-subtitle text-muted">A good dashboard to display your statistics</p>
    </div>
    <section class="section">
        <div class="row mb-2">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-wrap justify-content-between">
                        <h4 class="card-title text-info mb-3">Total Article</h4>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="mb-0">
                            <div class="me-1">
                              
                              <h2 class="mb-2 mt-2 font-weight-bold">{{ $total_article }}</h2>
                              
                            </div>
                            <hr>
                            <a class="btn btn-outline-success" href="{{ url('articles') }}">View</a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                      <div class="d-flex flex-wrap justify-content-between">
                        <h4 class="card-title text-info mb-3">Total Categories</h4>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <div class="mb-0">
                            <div class="me-1">
                              
                              <h2 class="mb-2 mt-2 font-weight-bold">{{ $total_category }}</h2>
                              
                            </div>
                            <hr>
                            <a class="btn btn-outline-success" href="{{ url('categories') }}">View</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        <div class="row mb-2">
<div class="col-md-12">
    <div class="card">
        <div class="card-body">
          <div class="d-flex flex-wrap justify-content-between">
            <h4 class="card-title text-info mb-3">Popular Article</h4>
          </div>

            <div class="row">
                <div class="col-12">
                    <div class="table-responsive">
                        <div class="row">
                            <div class="col-sm-12">
                                <table id="order-listing_wrap" class="table dataTable no-footer">
                                    <thead>
                                        <tr role="row">
                                            <th class="sorting_asc">No</th>
                                            <th class="sorting">Category</th>
                                            <th class="soxrting">Title</th>
                                            <th class="soxrting">Views</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($popular_article as $row)
                                        <tr>
                                     
                                        <td>{{ $loop->iteration }}</td>
                                        <td>{{ $row->category->name}}</td>
                                        <td>{{ $row->title}}</td>
                                        <td>{{ $row->views }}</td>
                                    </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>
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
</div>
 
@endsection
            




           