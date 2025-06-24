<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Sentry test route
Route::get('/sentry-test', function () {
    throw new Exception('Test Sentry error from Laravel backend!');
});
