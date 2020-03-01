<?php

use Illuminate\Http\Request;
use App\Http\Resources\ContactResource;

// 連絡先API
Route::apiResource('contact', 'ContactController');