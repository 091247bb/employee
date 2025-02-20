<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\Log;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
{
    // สร้างคำสั่งซื้อ 100 รายการ
    Order::factory(100)->create()->each(function ($order) {
        if ($order->id) {
            // สร้าง OrderDetail สำหรับแต่ละ Order
            OrderDetail::factory(3)->create([
                'OrderID' => $order->id,  // ใช้ id ของ order แทน OrderID
            ]);
        } else {
            Log::error('Order ID is null for Order: ', ['order' => $order]);  // log เมื่อไม่พบ ID
        }
    });
}


}
