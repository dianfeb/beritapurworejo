@foreach ($sosmed as $row)
<div class="modal fade text-left" id="inlineFormUpdate{{ $row->id }}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel33"
aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel33">Update Social Media</h4>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <i data-feather="x"></i>
            </button>
        </div>
        <form action="{{ url('sosmed/'.$row->id) }}" method="post">
            @method('PUT')
            @csrf
            <div class="modal-body">
                <label class="mb-2">Name</label>
                <div class="form-group">
                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ old('name', $row->name) }}">
                </div>
                @error('name')
                    <div class="invalid-feedback">
                      {{ $message }}
                    </div>
                @enderror

                <label class="mb-2">Link </label>
                <div class="form-group">
                    <input type="text" class="form-control @error('link') is-invalid @enderror" id="link" name="link" value="{{ old('link', $row->link) }}">
                </div>
                @error('link')
                    <div class="invalid-feedback">
                      {{ $message }}
                    </div>
                @enderror
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
<!--login form Modal -->
