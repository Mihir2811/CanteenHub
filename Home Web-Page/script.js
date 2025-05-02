function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
  
  function signIn() {
    alert("Redirecting to sign-in page...");
    window.location.href = "signin.html";
  }
  