<script>
  // Evento del botón de contacto
  const contactBtn = document.getElementById('contactBtn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    });
  }

  // Evento del botón de agregar plato
  const btnAgregar = document.getElementById('btnAgregar');
  if (btnAgregar) {
    btnAgregar.addEventListener('click', function() {
      alert("Plato agregado al pedido");
    });
  }

  // Evento del logo para cambiar de color (clic permanente)
  const logo = document.getElementById('miLogo');
  if (logo) {
    logo.addEventListener('click', () => {
      logo.classList.toggle('color-clic'); // alterna la clase color-clic
    });
  }
</script>
