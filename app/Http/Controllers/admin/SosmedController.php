<?php

namespace App\Http\Controllers\admin;

use App\Models\Sosmed;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RequestSosmed;
use App\Http\Requests\RequestUpdateSosmed;

class SosmedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return view('admin.sosmed.index', [
            'sosmed' =>Sosmed::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('admin.sosmed.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestSosmed $request)
    {
        //
        $data = $request->validated();
        Sosmed::create($data);
        

        return redirect(url('sosmed'))->with('success', 'Data Social Media Has Been Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RequestUpdateSosmed $request, string $id)
    {
        //

        $data = $request->validated(); //jika menggunakan http/request gunakan validated()


        Sosmed::find($id)->update($data);

        return redirect(url('sosmed'))->with('success', 'Data Sosial Media Has Been Update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        Sosmed::find($id)->Delete();
        return back()->with('success', 'Sosial Media has been Delete');
    }
}
