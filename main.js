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

    

});