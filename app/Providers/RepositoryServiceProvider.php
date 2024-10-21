<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Eloquent\{
    PrestadorRepository
};

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            PrestadorRepository::class
        );
    }

    public function boot()
    {
        //
    }
}
