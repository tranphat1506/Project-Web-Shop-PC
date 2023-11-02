document.addEventListener("DOMContentLoaded", function() {
    var loginButton = document.getElementById("loginButton");
    var loginForm = document.getElementById("loginForm");
    var registerButton = document.getElementById("registerButton");
    var registerForm = document.getElementById("registerForm");
  
    // Bắt sự kiện click trên nút "Đăng ký"
    registerButton.addEventListener("click", function() {
      // Ẩn form đăng ký và nút "Đăng ký"
      registerForm.style.display = "flex";
      registerButton.style.display = "none";
  
      // Hiện form đăng nhập và nút "Đăng nhập"
      loginForm.style.display = "none";
      loginButton.style.display = "block";
    });
  
    // Bắt sự kiện click trên nút "Đăng nhập"
    loginButton.addEventListener("click", function() {
      // Ẩn form đăng nhập và nút "Đăng nhập"
      loginForm.style.display = "flex";
      loginButton.style.display = "none";
  
      // Hiện form đăng ký và nút "Đăng ký"
      registerForm.style.display = "none";
      registerButton.style.display = "block";
    });
  });
  