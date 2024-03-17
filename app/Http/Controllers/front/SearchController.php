<?php

namespace App\Http\Controllers\front;

use Carbon\Carbon;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchController extends Controller
{
    //
    public function index() {
        $carbonNow = Carbon::now();
        $keyword = request()->keyword;
       
       
if($keyword) {
    $articles = Article::with(['Category', 'User'])
                ->whereStatus(1)
                ->where('title', 'like', '%' .$keyword. '%')
                ->latest()
                ->get()
                ->map(function ($article) use ($carbonNow) {
                    // Memformat created_at menggunakan Carbon dan menyimpannya ke dalam properti formatted_created_at
                    $article->formatted_created_at = Carbon::parse($article->created_at)->translatedFormat('d, M Y');
                    return $article;
                });
} else {
    $articles = Article::with(['Category', 'User'])
                ->latest()
                ->get()
                ->map(function ($article) use ($carbonNow) {
                    // Memformat created_at menggunakan Carbon dan menyimpannya ke dalam properti formatted_created_at
                    $article->formatted_created_at = Carbon::parse($article->created_at)->translatedFormat('d, M Y');
                    return $article;
                });
}

return view('front.search', [
    'articles' => $articles,
    'keyword' => $keyword,
]);
    }
}
