<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NetHuntController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// NetHunt CRM lead capture routes - only the ones needed for forms
Route::post('/leads/buyer', [NetHuntController::class, 'createBuyerLead']);
Route::post('/leads/supplier', [NetHuntController::class, 'createSupplierLead']); 