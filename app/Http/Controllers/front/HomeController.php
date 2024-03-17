<?php

namespace App\Http\Controllers\front;

use Carbon\Carbon;
use App\Models\Config;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;


class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $carbonNow = Carbon::now();

        // Ambil 2 artikel terbaru dengan status aktif dan format waktu menggunakan $carbonNow
        $latest_post = Article::with('Category', 'User')
            ->where('status', 1)
            ->latest()
            ->take(2)
            ->get()
            ->map(function ($latest_post) use ($carbonNow) {
                // Memformat created_at menggunakan $carbonNow
                $latest_post->formatted_created_at = $carbonNow->parse($latest_post->created_at)->format('d, M Y');
                return $latest_post;
            });
    
        // Ambil semua kategori
        $categories = Category::latest()->get();
        
        // Ambil semua artikel dan format created_at menggunakan $carbonNow
        $articles = Article::join('categories', 'categories.id', '=', 'articles.category_id')
            ->select('categories.name as name', 'categories.slug as slug', 'articles.*')
            ->orderByDesc('articles.id')
            ->with('user') // Assuming 'user' is the relationship in your Article model
            ->get()
            ->groupBy('name') // Group by category name
            ->map(function ($categoryArticles) use ($carbonNow) {
                return $categoryArticles->map(function ($article) use ($carbonNow) {
                    $article->formatted_created_at = $carbonNow->parse($article->created_at)->format('d, M Y');
                    return $article;
                });
            })
            ->collapse(); // Combine results from all groups
    return view('front.home', compact('categories', 'articles',  'latest_post'));

    }

    public function about() {
        $data = Config::where('name', 'about')->first();
        return view ('front.about', compact('data'));
    }

    public function advertisement() {
        $data =  Config::where('name', 'advertisement')->first();
        return view ('front.advertisement', compact('data'));
    }

    public function contact() {
        $data =  Config::where('name', 'google map')->first();

        $configKeys = ['Title', 'logo', 'Logo Footer', 'Telepon', 'adv', 'Whatsapp', 'Email', 'Alamat', 'Footer Deskripsi', 'img'];

        // Use pluck with two arguments: the first is the value column, and the second is the key column
        $config = Config::whereIn('name', $configKeys)->pluck('value', 'name')->all();
        return view ('front.contact', compact('data', 'config'));
    }

   
}
