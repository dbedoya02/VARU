// --- BOTÓN CONTACTO ---
const contactBtn = document.getElementById('contactBtn');
if (contactBtn) {
  contactBtn.addEventListener('click', async function () {
    const datos = {
      nombre: "Cliente Web",
      mensaje: "Quiero más información del servicio"
    };

    const resp = await fetch("http://localhost:3000/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    });

    const data = await resp.json();
    console.log("Respuesta del servidor:", data);
    alert("Tu solicitud fue enviada al backend ✔");
  });
}

// --- BOTÓN AGREGAR AL CARRITO ---
const btnAgregar = document.getElementById('btnAgregar');
if (btnAgregar) {
  btnAgregar.addEventListener('click', async function () {
    const producto = {
      id: 1,
      nombre: "Lasaña clásica",
      precio: 25000
    };

    const resp = await fetch("http://localhost:3000/carrito/agregar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto)
    });

    const data = await resp.json();
    console.log("Carrito actualizado:", data);
    alert("Producto enviado al backend ✔");
  });
}

// --- LOGO: CAMBIO DE COLOR (clic permanente) ---
const logo = document.getElementById('milogo'); // ojo que el id es milogo
if (logo) {
  logo.addEventListener('click', () => {
    logo.classList.toggle('color-clic');
  });
}

// --- CARGAR MENÚ DESDE EL BACKEND ---
async function cargarMenu() {
  try {
    const resp = await fetch("http://localhost:3000/menu");
    const platos = await resp.json();
    console.log("Menú recibido del backend:", platos);
  } catch (error) {
    console.log("Error cargando menú:", error);
  }
}
cargarMenu();

// --- TOP BAR TOGGLE ---
const topBar = document.querySelector('.top-bar');
const toggleBtn = document.getElementById('toggleBtn');
let isHidden = false;
const fullHeight = topBar.scrollHeight + "px";

toggleBtn.addEventListener('click', () => {
  if (!isHidden) {
    topBar.style.height = "0";
    topBar.style.padding = "0";
    toggleBtn.textContent = "▼";
    isHidden = true;
  } else {
    topBar.style.height = fullHeight;
    topBar.style.padding = "10px";
    toggleBtn.textContent = "▲";
    isHidden = false;
  }
});

// --- HOME Y VENTANAS ---
const home = document.getElementById("home");
const ventanas = document.querySelectorAll("#ventanas .ventana");

// Mostrar Home
function mostrarHome(guardarHistorial = true) {
  home.style.display = "block";
  ventanas.forEach(v => v.style.display = "none");

  if (guardarHistorial) {
    history.pushState({ vista: "home" }, "", "");
  }
}

// Abrir ventana
function abrirVentana(id, guardarHistorial = true) {
  home.style.display = "none";
  ventanas.forEach(v => v.style.display = "none");

  const v = document.getElementById(id);
  if (v) v.style.display = "block";

  if (guardarHistorial) {
    history.pushState({ vista: id }, "", "#" + id);
  }
}

// Historial (atrás/adelante)
window.onpopstate = function(event) {
  if (!event.state) return;
  if (event.state.vista === "home") mostrarHome(false);
  else abrirVentana(event.state.vista, false);
}

// Carga inicial
window.addEventListener("load", () => {
  if (location.hash) abrirVentana(location.hash.replace("#", ""), false);
  else {
    history.replaceState({ vista: "home" }, "", "");
    mostrarHome(false);
  }
});

// Botón contacto
document.getElementById("contactNav").addEventListener("click", () => {
  abrirVentana("ventana-contacto", true);
});
