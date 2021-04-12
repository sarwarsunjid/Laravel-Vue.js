<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Category Routes
Route::post('/categorySave', [App\Http\Controllers\HomeController::class, 'store'])->name('home.store');

Route::get('/categoryList', [App\Http\Controllers\CategoryController::class, 'index'])->name('category.index');

Route::get('/categoryById/{id}', [App\Http\Controllers\CategoryController::class, 'edit'])->name('category.edit');

Route::get('/categoryUpdate/{id}', [App\Http\Controllers\CategoryController::class, 'update'])->name('category.update');



//Route::get('/{anypath}', [App\Http\Controllers\HomeController::class, 'index'])->where('home','.*');