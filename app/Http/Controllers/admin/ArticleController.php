<?php

namespace App\Http\Controllers\Admin;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\RequestArticle;
use App\Http\Requests\RequestUpdateArticle;
use Illuminate\Support\Facades\Storage;
use Yajra\DataTables\Facades\DataTables;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        if (request()->ajax()) {
            $article = Article::with('Category')->latest()->get();
            return DataTables::of($article)
            // memanggil id terbaru
            ->addIndexColumn()
            // custom memanggil nama kategori
            ->addColumn('category_id', function($article) {
                return $article->category->name;
            })
            // custom menampilkan publish / private
            ->addColumn('status', function($article) {
                if ($article->status == 0) {
                    return '<span class="badge bg-danger">Private</span>';
                } else {
                    return '<span class="badge bg-success">Published</span>';
                }
                
            })

            ->addColumn('button', function($article) {
                return '
                
                <a class="btn btn-outline-info" href="articles/'.$article->id.'"style="padding: 0.3rem 0.5rem;">View</a>
                <a class="btn btn-outline-warning" href="articles/'.$article->id.'/edit" style="padding:  0.3rem 0.5rem;">Edit</a>
                <a class="btn btn-outline-danger" href="#" onclick="deleteArticle(this)" data-id="'.$article->id.'" style="padding:  0.3rem 0.5rem;">Delete</a>
    ';
            
            })
            ->rawColumns(['category_id', 'status', 'button'])
            ->make();
        }
        return view('admin.article.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return view('admin.article.create', [
            'categories' => Category::get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestArticle $request)
    {
        //
        $data = $request->validated(); //jika menggunakan http/request gunakan validated()

        $file = $request->file('img'); //ambil nama gambar (foto)
        $fileName =  uniqid().'.'.$file->getClientOriginalExtension(); //ambil format gambar
        $file->storeAs('public/admin/article/', $fileName); //folder simpan

        $data['img'] = $fileName;
        $data['slug'] = Str::slug($data['title']);

        Article::create($data);

        return redirect(url('articles'))->with('success', 'Data Article Has Been Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        return view('admin.article.show', [
            'article' => Article::find($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        return view('admin.article.edit', [
            'article' => Article::find($id),
            'categories' => Category::get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RequestUpdateArticle $request, string $id)
    {
        //

        $data = $request->validated(); //jika menggunakan http/request gunakan validated()

        if ($request->file('img')) {
            $file = $request->file('img'); //ambil nama gambar (foto)
            $fileName =  uniqid().'.'.$file->getClientOriginalExtension(); //ambil format gambar
            $file->storeAs('public/admin/article/', $fileName); //folder simpan
    
            // unlink storage// Delete old image
            Storage::delete('public/admin/article/'.$request->oldImg);

            $data['img'] = $fileName;
        } else {
            $data['img'] = $request->oldImg;
        }
        

      
        $data['slug'] = Str::slug($data['title']);

        Article::find($id)->update($data);

        return redirect(url('articles'))->with('success', 'Data Article Has Been Update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $data = Article::find($id);
        // Storage::delete('public/admin/article/'.$data->img);
        $data->delete();
        return response()->json([
            'message' => 'Data article has been deleted'
        ]);
    }
}
