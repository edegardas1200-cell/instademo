const user = document.getElementById("username");
const pass = document.getElementById("password");
const btn = document.getElementById("loginBtn");

function checkInputs() {
  if (user.value.trim() && pass.value.trim()) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
}

user.addEventListener("input", checkInputs);
pass.addEventListener("input", checkInputs);

btn.addEventListener("click", () => {
  btn.textContent = "Giriş yapılıyor...";
  btn.disabled = true;

  // DEMO — hiçbir yere gönderilmez
  console.log(user.value, pass.value);

  setTimeout(() => {
    btn.textContent = "Giriş Yap";
    btn.disabled = false;
    alert("Giriş başarısız (demo)");
  }, 1200);
});
