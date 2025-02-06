import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function AddStudentForm() {
    const [formData, setFormData] = useState({
        StudentName: '',
        Major: '',
        Email: '',
        Phone: ''
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
        Inertia.post(route('students.store'), formData);
    };

    const styles = {
        formContainer: {
            maxWidth: '500px',
            margin: '40px auto',
            padding: '20px',
            backgroundColor: '#fde2e4',
            borderRadius: '15px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            textAlign: 'center'
        },
        formTitle: {
            fontSize: '26px',
            fontWeight: 'bold',
            color: 'black', // Title color changed to black
            marginBottom: '20px'
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        },
        formGroup: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        label: {
            fontWeight: 'bold',
            color: '#ff6392',
            marginBottom: '5px',
            fontSize: '18px'
        },
        input: {
            padding: '12px',
            border: '2px solid #ff85a1',
            borderRadius: '8px',
            fontSize: '16px',
            width: '80%'
        },
        inputFocus: {
            outline: 'none',
            borderColor: '#ff3366',
            boxShadow: '0 0 8px rgba(255, 99, 144, 0.6)'
        },
        submitButton: {
            backgroundColor: '#ff85a1',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: '0.3s',
            width: '80%',
            margin: '10px auto'
        },
        submitButtonHover: {
            backgroundColor: '#ff3366'
        }
    };

    return (
        <div style={styles.formContainer}>
            <h1 style={styles.formTitle}> Add New Student </h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>📖 Student Name</label>
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
                    <label style={styles.label}>🎓 Major</label>
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
                    <label style={styles.label}>📧 Email</label>
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
                    <label style={styles.label}>📞 Phone</label>
                    <input
                        type="text"
                        name="Phone"
                        value={formData.Phone}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <button
                    type="submit"
                    style={styles.submitButton}
                    onMouseOver={(e) => e.target.style.backgroundColor = styles.submitButtonHover.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = styles.submitButton.backgroundColor}
                >
                     Add Student
                </button>
            </form>
        </div>
    );
}
