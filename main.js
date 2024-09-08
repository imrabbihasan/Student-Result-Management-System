document.addEventListener('DOMContentLoaded', () => {
    const students = JSON.parse(localStorage.getItem('students')
) || [];
    const results = JSON.parse(localStorage.getItem('results')
) || [];

    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const addResultForm = document.getElementById("add-result-form");
    const resultTable = document.getElementById("result-table");

    // Switch between login and register
    document.getElementById("register-link").addEventListener('click', () => {
        document.getElementById("login-section").classList.add('hidden');
        document.getElementById("register-section").classList.remove('hidden');
    });

    document.getElementById("login-link").addEventListener('click', () => {
        document.getElementById("register-section").classList.add('hidden');
        document.getElementById("login-section").classList.remove('hidden');
    });

    // Login functionality
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentId = document.getElementById('student-id').value;
        const password = document.getElementById('password').value;

        const student = students.find(s => s.id === studentId && s.password === password);
        if(student){
            document.getElementById('login-section').classList.add('hidden');
            document.getElementById('dashboard-section').classList.add('hidden');
            document.getElementById('student-name').textContent = studentId;
            displayResults =(studentId);
        }else {
            alert('Invalid credentials!');
        }
    });

    // Registration functionality
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newStudentId = document.getElementById('new-student-id').value;
        const newPassword = document.getElementById('new-password').value;

        students.push({ id: newStudentId, password: newPassword});
        localStorage.setItem('students', JSON.stringify(students));
        alert('Registration successful!');
        document.getElementById('register-section').classList.add('hidden');
        document.getElementById('login-section').classList.remove('hidden')
    });

    // Add result functionality
    addResultForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentId = document.getElementById('result-student-id').value;
        const subject = document.getElementById('subject').value;
        const grade = document.getElementById('grade').value;

        results.push({ studentId, subject, grade});
        localStorage.setItem('results', JSON.stringify(results));
        alert('Result added successfully!');
    });

    // Display student results
    function displayResults(studentId) {
        resultTable.innerHTML = '';
        const studentResults = results.filter(r => r.studentId === studentId);
        studentResults.forEach(result => {
            const row = document.createElement('tr');
            row.innerHTML = 
            `<td>${result.subject}</td>
            <td>${result.grade}</td>`;
            resultTable.appendChild(row);
        });
    }

    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', () => {
        document.getElementById('dashboard-section').classList.add('hidden');
        document.getElementById('login-section').classList.add('hidden');
    });
});