<?php

namespace App\Http\Controllers\front;

use Carbon\Carbon;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
 

    public function show($slug)
    {

      $carbonNow = Carbon::now();
        //
      // Find the article by slug
    $article = Article::whereSlug($slug)->firstOrFail();
    $article->formatted_created_at = Carbon::parse($article->created_at)->translatedFormat('d, M Y');
    

    // Get the latest categories
    $categories = Category::latest()->get();

    // Increment views
    $article->increment('views');

    // Return the view with the article and categories
    return view('front.details', compact('article', 'categories'));
    }

 
}
