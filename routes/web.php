<?php

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



Route::get('/', [
    'uses' => 'ProductController@index',
    'as' => 'products.index',
]);


Route::group(['prefix' => 'products'], function () {
    Route::get('/{id}', [
        'uses' => 'ProductController@show',
        'as'   => 'products.show',
    ]);

    Route::post('/', [
        'uses' => 'ProductController@store',
        'as'   => 'products.store',
    ]);

    Route::put('/{id}', [
        'uses' => 'ProductController@update',
        'as'   => 'products.update',
    ]);

    Route::delete('/{id}', [
        'uses' => 'ProductController@destroy',
        'as'   => 'products.destroy',
    ]);
});
