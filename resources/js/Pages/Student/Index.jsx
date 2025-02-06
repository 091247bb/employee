import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

export default function StudentIndex({ students, query }) {
    const [search, setSearch] = useState(query || '');

    // ฟังก์ชันลบข้อมูล
    const handleDelete = (StudentID) => {
        if (confirm('🚨 Are you sure you want to delete this student? 😢')) {
            Inertia.delete(route('students.destroy', StudentID));
        }
    };

    // ฟังก์ชันค้นหา
    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            Inertia.get(route('students.index'), { search });
        }
    };

    // ฟังก์ชันรีเฟรช
    const handleRefresh = () => {
        setSearch('');
        Inertia.get(route('students.index'), { search: '' });
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-pink-100 rounded-xl shadow-lg text-center">
            <h1 className="text-3xl font-bold text-black mb-4"> Student Registration </h1>

            {/* ค้นหา */}
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="🔍 Search by Student ID, Name..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                />
                <button onClick={handleSearch} className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500">Search</button>
                <button onClick={() => Inertia.visit(route("students.create"))} className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500">+ Add</button>
            </div>

            {/* ตารางข้อมูล */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
                    <thead className="bg-pink-200 text-pink-700">
                        <tr>
                            <th className="p-3">Student ID</th>
                            <th className="p-3">Student Name</th>
                            <th className="p-3">Major</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Phone</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students?.data?.length > 0 ? (
                            students.data.map((student) => (
                                <tr key={student.StudentID} className="border-b hover:bg-pink-50">
                                    <td className="p-3">{student.StudentID}</td>
                                    <td className="p-3">{student.StudentName}</td>
                                    <td className="p-3">{student.Major}</td>
                                    <td className="p-3">{student.Email}</td>
                                    <td className="p-3">{student.Phone}</td>
                                    <td className="p-3 flex gap-2 justify-center">
                                        <button onClick={() => Inertia.visit(route('students.edit', student.StudentID))} className="px-3 py-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500">🖊️ Edit</button>
                                        <button onClick={() => handleDelete(student.StudentID)} className="px-3 py-1 bg-red-400 text-white rounded-lg hover:bg-red-500">🚮 Delete</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="p-3 text-gray-500">No students found. 😢</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center gap-2">
                {students.links.map((link) => (
                    <button
                        key={link.label}
                        onClick={() => Inertia.get(link.url)}
                        className={`px-3 py-1 rounded-lg text-white ${link.active ? 'bg-pink-600' : 'bg-gray-400 hover:bg-gray-500'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        </div>
    );
}
