@extends('layouts.admin.template')

@section('content')
    <div class="main-content container-fluid">
        <section class="section">
            <div class="page-title">
                <div class="row mb-4">
                    <div class="col-12 col-md-6 order-md-1 order-last">
                        <h3>Users</h3>
                       
                    </div>
                    <div class="col-12 col-md-6 order-md-2 order-first">
                        <nav aria-label="breadcrumb" class='breadcrumb-header'>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Users</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <section class="section">
                <div class="row mb-2">
                    <div class="card">
                        <div class="card-header">
                            <a href="{{ url('users/create') }}" class="btn btn-outline-primary mb-3" >Register</a>
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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    @foreach ($users as $row)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ $row->name }}</td>
                                            <td>{{ $row->email }}</td>
                                            <td>{{ $row->created_at }}</td>
                                            <td>
                                                <a class="btn btn-outline-warning" href="users/'.$user->id.'/edit" style="padding:  0.3rem 0.5rem;">Edit</a>
                                                <a class="btn btn-outline-danger" href="#" onclick="deleteUser(this)" data-id="<?= $row->id ?>" style="padding: 0.3rem 0.5rem;">Delete</a>

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

@push('js')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
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

   function deleteUser(e) {
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
           url: '/users/' + id,
           dataType: "json",
           success: function(response) {
             Swal.fire({
               title: 'Success',
               text: response.message,
               icon: 'success',
             }).then((result) => {
               window.location.href = '/users';
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
    
@endpush
