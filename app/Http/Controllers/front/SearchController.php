<?php

namespace App\Http\Controllers\front;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchController extends Controller
{
    //
    public function index() {

        $keyword = request()->keyword;
        if($keyword) {
            $articles = Article::with('Category')
                        ->whereStatus(1)
                        ->where('title', 'like', '%' .$keyword. '%')
                        ->latest()
                        ->get();
        } else {
            $articles = Article::with('Category')->latest()->get();
        }
        return view('front.search', [
            'latest_post' => Article::with('category')->latest()->first(),
            'articles' => $articles,
            'keyword' => $keyword,
            'categories' => Category::latest()->get()
        ]);
    }
}
