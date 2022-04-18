<?php

namespace Database\Seeders;

use App\Models\User;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //generating users in db
        User::factory(20)->create();

        //generating posts in db
        $this->call([
            PostSeeder::class,
        ]);
    }
}
