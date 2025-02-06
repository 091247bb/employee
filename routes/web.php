<?php
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentController;

Route::get('/students', [StudentController::class, 'index']);


// สร้างเส้นทางสำหรับ Resource ของ "students" และกำหนดพารามิเตอร์ URL ให้เป็น 'StudentID' แทน 'students'
Route::resource('students', StudentController::class)->parameters(['students' => 'StudentID']);

// เส้นทางสำหรับแสดงฟอร์มสร้างนักเรียนใหม่
Route::get('/students/create', [StudentController::class, 'create'])->name('students.create');

// เส้นทางสำหรับแสดงรายการนักเรียนทั้งหมด
Route::get('/students', [StudentController::class, 'index'])->name('students.index');

// สร้าง Resource Routes สำหรับ "students" ครอบคลุมการทำงานทั้งหมดใน CRUD (Create, Read, Update, Delete)
Route::resource('students', StudentController::class);

// เส้นทางสำหรับแสดงฟอร์มแก้ไขข้อมูลนักเรียน
Route::get('/students/{student}/edit', [StudentController::class, 'edit'])->name('students.edit');

// เส้นทางสำหรับอัปเดตข้อมูลนักเรียนที่มีการระบุ ID
Route::put('/students/{student}', [StudentController::class, 'update'])->name('students.update');





Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('chirps', ChirpController::class)

->only(['index', 'store', 'update', 'destroy'])
    ->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
