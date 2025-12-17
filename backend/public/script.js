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
const logo = document.getElementById('miLogo');
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

    // Aquí puedes mostrarlo en pantalla (cuando tengas contenedor)
    // Ej: document.getElementById("menu").innerHTML = ...
  } catch (error) {
    console.log("Error cargando menú:", error);
  }
}

cargarMenu();
