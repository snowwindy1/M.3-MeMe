document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const message = document.getElementById('signup-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.username === username);

        if (userExists) {
            // แสดงข้อความผิดพลาด
            message.textContent = 'Username already exists';
        } else {
            // เพิ่มผู้ใช้ใหม่
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            message.textContent = 'Account created successfully!';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        }
    });
});
