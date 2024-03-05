@extends('layouts.admin.template')

@section('title', 'Berita Purworejo | list article')
@push('css')
<link rel="stylesheet" href="https://cdn.datatables.net/2.0.1/css/dataTables.bootstrap4.css">
@endpush
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
                            <table class='table table-striped table-bordered' id="table1" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                     
                                        <th>Title</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
            </section>
    </div>
    </div>

@endsection

@push('js')

<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="https://cdn.datatables.net/2.0.1/js/dataTables.js"></script>
<script src="https://cdn.datatables.net/2.0.1/js/dataTables.bootstrap4.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>


{{-- sweet alert --}}
 <script>
   const swal = $('.swal').data('swal');
   if (swal) {
     Swal.fire({
       'title': 'Success',
       'text' : swal,
       'icon' : 'success',
       'showConfirmButton' :false,
       'timer' : 2500
     })
   }

   function deleteArticle(e) {
     let id = e.getAttribute('data-id');

     Swal.fire({
       title: 'Delete',
       text: 'Are you sure?',
       icon: 'question',
       showCancelButton: true,
       ConfirmButtonColor: '#d33',
       cancelButtonColor:  '#3885d6',
       confirmButtonText: 'Delete!',
       cancelButtonText: 'Cancel'
     }).then((result) => {
       if (result.value) {
         $.ajax({
           headers: {
             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
           },
           type: 'DELETE',
           url: '/articles/' + id,
           dataType: "json",
           success: function(response) {
             Swal.fire({
               title: 'Success',
               text: response.message,
               icon: 'success',
             }).then((result) => {
               window.location.href = '/articles';
             })
           },
           error: function(xhr, ajaxOptions, thrownError) {
             alert(xhr.status + "\n" + xhr.responseText + "\n" + thrownError);
           }
         });
       }
     })
   }
 </script>
<script>
    $(document).ready(function() {
        $('#table1').DataTable({
            processing:true,
            serverside:true,
            ajax:'{{ url()->current() }}',
             columns: [
                {
              data:'DT_RowIndex',
              name:'DT_RowIndex'
            },
             
            {
              data:'title',
              name:'title'
            },
          
            {
              data:'status',
              name:'status'
            },
         
            {
              data:'button',
              name:'button'
            },
            

             ]
        });
    });
</script>
@endpush

