document.addEventListener('DOMContentLoaded', () => {
    // ตรวจสอบสถานะการเข้าสู่ระบบ
    const user = localStorage.getItem('currentUser');
    if (!user) {
        window.location.href = 'index.html'; // ถ้าไม่มีการเข้าสู่ระบบ ให้ไปที่หน้าเข้าสู่ระบบ
    }
});

function logout() {
    localStorage.removeItem('currentUser'); // ลบผู้ใช้ที่เข้าสู่ระบบ
    window.location.href = 'index.html'; // ไปที่หน้าเข้าสู่ระบบ
}
