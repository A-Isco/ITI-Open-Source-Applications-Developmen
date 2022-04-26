<?php

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\Auth\LoginController;
use App\Models\User;

Auth::routes();
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

Route::middleware('auth')->group(function () {
    Route::get('/posts', [PostController::class, 'index'])->name('posts.index');
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');
    Route::get('/posts/edit/{post}', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');
    Route::get('/posts/delete/{post}', [PostController::class, 'delete'])->name('posts.delete');
    Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
    Route::post('comments', [CommentController::class, 'store'])->name('comments.store');
});


Auth::routes();

Route::get('/login/google', [LoginController::class, 'google'])->name('google.auth');

Route::get('/google/callback', [LoginController::class, 'googleCallback']);

Route::get('/login/github', [LoginController::class, 'github'])->name('github.auth');

Route::get('/github/callback', [LoginController::class, 'githubCallback']);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
