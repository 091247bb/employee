<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Teacher;
// Laravel Seeder ที่ใช้สำหรับเติมข้อมูลลงในฐานข้อมูลโดยอัตโนมัติ
class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentSeeder extends Seeder
{
    public function run()
    {
        Student::factory(200)->create();  // ตัวอย่างการสร้าง 200 รายการ
    }
}

}
