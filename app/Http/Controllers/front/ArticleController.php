<?php

namespace App\Http\Controllers\front;

use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
 

    public function show($slug)
    {
        //
      // Find the article by slug
    $article = Article::whereSlug($slug)->firstOrFail();

    // Increment views
    $article->increment('views');

    // Get the latest categories
    $categories = Category::latest()->get();

    // Return the view with the article and categories
    return view('front.details', compact('article', 'categories'));
    }

 
}
