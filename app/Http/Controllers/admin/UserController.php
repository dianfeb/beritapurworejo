<?php

namespace App\Http\Controllers\admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\RequestUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\RequestUpdateUser;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return view('admin.user.index',[
            'users' => User::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('admin.user.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestUser $request)
    {
        //
        $data = $request->validated();
        $data['password'] = bcrypt($data['password']);
        User::create($data);
        

        return redirect(url('users'))->with('success', 'Data User Has Been Created');
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
        return view('admin.user.edit', [
            'users' => User::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RequestUpdateUser $request, string $id)
    {
        //
        $data = $request->validated();
       

        if ($data['password'] != '') {
            $data['password'] = bcrypt($data['password']);
            User::find($id)->update($data);
        } else {
            User::find($id)->update([
                'name' => $request->name,
                'email' => $request->email
            ]);
        }
        
        
        return redirect(url('users'))->with('success', 'Data User Has Been Update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data = User::find($id);
        // Storage::delete('public/admin/article/'.$data->img);
        $data->delete();
        return response()->json([
            'message' => 'Data user has been deleted'
        ]);
    }
}
