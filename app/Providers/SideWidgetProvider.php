<?php

namespace App\Providers;

use Carbon\Carbon;
use App\Models\Sosmed;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class SideWidgetProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
        View::composer('front.layouts.side-widget', function ($view) {
            // ..
        $carbonNow = Carbon::now();

        $populars = Article::with('Category')
        ->where('status', 1)
        ->orderBy('views', 'desc')
        ->take(10)
        ->get()
        ->map(function ($article) use ($carbonNow) {
            // Memformat waktu artikel
            $article->formatted_created_at = $carbonNow->parse($article->created_at)->translatedFormat('d, M Y');
            return $article;
        });

            $view->with('populars', $populars);
        });

        
    }
}
