<?php

namespace Database\Factories;

use App\Models\Booking;
use App\Models\Room;
use App\Models\Guest; // เพิ่มการใช้ Guest Model
use Illuminate\Database\Eloquent\Factories\Factory;

class BookingFactory extends Factory
{
    protected $model = Booking::class;

    public function definition()
    {
        $checkInDate = $this->faker->dateTimeThisYear();
        $checkOutDate = $this->faker->dateTimeBetween($checkInDate, '+3 days');

        return [
            'RoomID' => Room::inRandomOrder()->first()->RoomID,
            'GuestID' => Guest::inRandomOrder()->first()->GuestID, // ใช้ GuestID แบบสุ่ม
            'BookingDate' => $this->faker->dateTimeThisYear(),
            'CheckInDate' => $checkInDate,
            'CheckOutDate' => $checkOutDate,
            'TotalAmount' => $this->faker->randomFloat(2, 100, 500),
        ];
    }
}
