import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'; // นำเข้า Layout สำหรับผู้ใช้ที่เข้าสู่ระบบแล้ว
import { Head } from '@inertiajs/react'; // นำเข้า component 'Head' จาก Inertia.js สำหรับการตั้งชื่อหัวข้อของหน้า

// คอมโพเนนต์ Dashboard
export default function Dashboard() {
    return (
        <AuthenticatedLayout // ใช้ Layout สำหรับผู้ใช้ที่เข้าสู่ระบบแล้ว
            header={ // กำหนดส่วนของ header สำหรับหน้าดashboard
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            {/* กำหนดชื่อหัวข้อของหน้าเป็น 'Dashboard' */}
            <Head title="Dashboard" />

            {/* ส่วนเนื้อหาหลักของ Dashboard */}
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* กล่องแสดงข้อความ */}
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {/* กล่องสำหรับข้อความแสดงว่าเข้าสู่ระบบแล้ว */}
                        <div className="p-6 text-gray-900">
                            You're logged in! {/* ข้อความแสดงว่าผู้ใช้เข้าสู่ระบบแล้ว */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
