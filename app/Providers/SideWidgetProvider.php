<?php

namespace App\Providers;

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
            $populars = Article::with('Category')->whereStatus(1)->orderBy('views', 'desc')->take(10)->get();

            $view->with('populars', $populars);
        });

        
    }
}
