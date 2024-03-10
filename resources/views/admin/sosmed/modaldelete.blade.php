@foreach ($sosmed as $row)
<div class="modal fade text-left" id="inlineFormDelete{{ $row->id }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33"
aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel33">Delete Sosial Media </h4>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <i data-feather="x"></i>
            </button>
        </div>
        <form action="{{ url('sosmed/'.$row->id) }}" method="post">
            @method('Delete')
            @csrf
            <div class="modal-body">
                <div class="mb-3">
                    Are you sure Sosial Media, name {{ $row->name }} Delete?
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
                    <i class="bx bx-x d-block d-sm-none"></i>
                    <span class="d-none d-sm-block">Close</span>
                </button>
                <button type="submit" class="btn btn-primary ml-1" data-bs-dismiss="modal">
                    <i class="bx bx-check d-block d-sm-none"></i>
                    <span class="d-none d-sm-block">Submit</span>
                </button>
            </div>
        </form>
    </div>
</div>
</div>
@endforeach