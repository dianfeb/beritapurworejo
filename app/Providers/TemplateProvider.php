<?php

namespace App\Providers;


use App\Models\Config;
use App\Models\Sosmed;
use App\Models\Category;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class TemplateProvider extends ServiceProvider
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
        View::composer('front.layouts.navbar', function ($view) {
            // ..
            $category = Category::latest()->get();
            $view->with('categories', $category);
        });

        View::composer('front.layouts.template', function ($view) {
            // ..
            $sosmed = Sosmed::all();
            $view->with('sosmed', $sosmed);
        });

        View::composer('front.layouts.template', function ($view) {
            // ..
           $configKeys = ['Title', 'logo', 'Logo Footer', 'Telepon', 'Whatsapp', 'Email', 'Alamat', 'Footer Deskripsi'];
           $config = Config::whereIn('name', $configKeys)->pluck('value', 'name')->all();
           $view->with('config', $config);
        });
    }
}
