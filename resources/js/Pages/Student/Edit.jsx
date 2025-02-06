import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function EditStudentForm({ student }) {
    const [formData, setFormData] = useState({
        StudentName: student.StudentName || '',
        Major: student.Major || '',
        Email: student.Email || '',
        Phone: student.Phone || ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(route('students.update', student.StudentID), formData);
    };

    const styles = {
        container: {
            maxWidth: '500px',
            margin: 'auto',
            background: '#ffe4e1',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
            fontFamily: 'Comic Sans MS, cursive, sans-serif'
        },
        title: {
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'black', // Title color changed to black
            marginBottom: '20px'
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            marginBottom: '15px'
        },
        label: {
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#d147a3'
        },
        input: {
            padding: '12px',
            border: '2px solid #ffb6c1',
            borderRadius: '10px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out',
            background: '#fff0f5'
        },
        inputFocus: {
            borderColor: '#ff69b4'
        },
        button: {
            backgroundColor: '#ff1493',
            color: 'white',
            padding: '12px 15px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'background 0.3s ease-in-out',
            width: '100%',
            marginTop: '10px'
        },
        buttonHover: {
            backgroundColor: '#c71585'
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}> Edit Student </h1>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Student Name</label>
                    <input
                        type="text"
                        name="StudentName"
                        value={formData.StudentName}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Major</label>
                    <input
                        type="text"
                        name="Major"
                        value={formData.Major}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Phone</label>
                    <input
                        type="text"
                        name="Phone"
                        value={formData.Phone}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <button type="submit" style={styles.button}>
                    Update Student
                </button>
            </form>
        </div>
    );
}
