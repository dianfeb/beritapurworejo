<?php

use Illuminate\Support\Facades\Auth;
use UniSharp\LaravelFilemanager\Lfm;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

use App\Http\Controllers\admin\UserController;
use App\Http\Controllers\admin\ConfigController;
use App\Http\Controllers\admin\SosmedController;
use App\Http\Controllers\front\SearchController;
use App\Http\Controllers\Admin\ArticleController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\front\HomeController as FrontHomeController;
use App\Http\Controllers\front\ArticleController as FrontArticleController;
use App\Http\Controllers\front\CategoryController as FrontCategoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [FrontHomeController::class, 'index']);


Route::middleware('auth')->group(function(){
    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::resource('/categories', CategoryController::class)->only([
        'index', 'store', 'update', 'show','destroy'
        ])->middleware('UserAccess:1');
    
    Route::resource('/users', UserController::class);

    Route::resource('/articles', ArticleController::class);
    
    Route::get('/dashboard', [DashboardController::class, 'index']);
    Route::resource('/sosmed', SosmedController::class);
    
    Route::group(['prefix' => 'laravel-filemanager'], function () {
        \UniSharp\LaravelFilemanager\Lfm::routes();
    });

    Route::resource('/config', ConfigController::class);

});



Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/category/{slug}', [FrontCategoryController::class, 'index']);
Route::get('/detail/{slug}', [FrontArticleController::class, 'show']);
Route::post('/search', [SearchController::class, 'index'])->name('search');