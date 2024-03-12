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
            $configKeys = ['Title', 'logo', 'Logo Footer', 'Telepon', 'adv', 'Whatsapp', 'Email', 'Alamat', 'Footer Deskripsi', 'img'];

            // Use pluck with two arguments: the first is the value column, and the second is the key column
            $config = Config::whereIn('name', $configKeys)->pluck('value', 'name')->all();
        
            // Include 'img' in the $config array if it exists
            $imgConfig = Config::whereIn('name', $configKeys)->where('img', '!=', null)->pluck('img', 'name')->all();
        
            // Merge the arrays
            $config = array_merge($config, $imgConfig);
        
            $view->with('config', $config);
        });

        View::composer('front.home', function ($view) {
            // ..
            $configKeys = ['Title', 'logo', 'Logo Footer', 'Telepon', 'adv', 'Whatsapp', 'Email', 'Alamat', 'Footer Deskripsi', 'img'];

            // Use pluck with two arguments: the first is the value column, and the second is the key column
            $config = Config::whereIn('name', $configKeys)->pluck('value', 'name')->all();
        
            // Include 'img' in the $config array if it exists
            $imgConfig = Config::whereIn('name', $configKeys)->where('img', '!=', null)->pluck('img', 'name')->all();
        
            // Merge the arrays
            $config = array_merge($config, $imgConfig);
        
            $view->with('config', $config);
        });
    }
}
