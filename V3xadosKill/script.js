// ==== SISTEMA DE LOGIN LOCAL ====

const usuarios = {
  "V3xadoOficial": { password: "V3xado1", rol: "owner", saldo: 999999 },
  "FelipeStore": { password: "123felipe30", rol: "admin", saldo: 9999 }
};

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", () => {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (!user || !pass) {
      alert("⚠️ Ingresa usuario y contraseña");
      return;
    }

    const data = usuarios[user];
    if (!data) {
      alert("❌ Usuario no encontrado");
      return;
    }

    if (data.password !== pass) {
      alert("❌ Contraseña incorrecta");
      return;
    }

    // Guardar datos en el navegador
    localStorage.setItem("usuarioActivo", user);
    localStorage.setItem("rolUsuario", data.rol);
    localStorage.setItem("saldoUsuario", data.saldo);

    alert(`✅ Bienvenido ${user} a V3xados Kill`);
    window.location.href = "panel.html";
  });
});
