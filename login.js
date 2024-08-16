document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user)); // เก็บข้อมูลผู้ใช้ใน localStorage
            window.location.href = 'menu.html';
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});

