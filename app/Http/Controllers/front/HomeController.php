<?php

namespace App\Http\Controllers\front;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        
        $latest_post = Article::with('category')->where('status', 1)->take(2)->latest()->get();
        $categories = Category::latest()->get();
    
        $articles = DB::table('categories')
        ->join('articles', 'categories.id', '=', 'articles.category_id')
        ->select('categories.name as name', 'categories.slug as slug', 'articles.*')
        ->orderByDesc('articles.id')
        ->get()
        ->groupBy('name') // Kelompokkan hasil berdasarkan nama kategori
        ->map(function ($categoryArticles) {
            return $categoryArticles->take(4); // Ambil 4 artikel dari setiap kategori
        })
        ->collapse(); // Menggabungkan hasil dari semua kelompok
    
        return view('front.home', compact('categories', 'articles', 'latest_post'));

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
