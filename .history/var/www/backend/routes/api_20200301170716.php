<?php

use Illuminate\Http\Request;

Route::middleware(['cors'])->group(function () {
    Route::options('/{any}', function() {
        return response()->json();
    })->where('any', '.*');
    // 連絡先API
    Route::apiResource('contact', 'ContactController'); 
});