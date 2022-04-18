<?php

namespace Database\Factories;

use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // creating an array of users id
        $users_id = User::pluck('id')->toArray();

        // posts fields
        return [
            'user_id' => $this->faker->randomElement($users_id),
            'title' => $this->faker->word(),
            'description' => $this->faker->paragraph(3),
        ];
    }
}
