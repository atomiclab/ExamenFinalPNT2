<template>
  <div class="container mt-3">
    <h2 class="mb-4">Examen Final - PNT2 – 1er Final Diciembre 2025</h2>
    
    <div class="card mb-4">
      <div class="card-body">
        <h3 class="card-title">Introducción</h3>
        <p class="card-text">
          Crear una aplicación frontend basada en Vue CLI 3 con options o composition API que
          permita convertir un valor ingresado en pesos a dólar.
        </p>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-header">
        <h4>Punto 1</h4>
      </div>
      <div class="card-body">
        <p>
          Vamos a contar con un elemento de entrada para ingresar el valor en pesos, otro para
          ingresar la cotización del dólar en forma manual, y un elemento para representar el
          resultado.
        </p>
        <p>
          La conversión será reactiva, eso significa que al cambiar el valor ingresado o la cotización
          el cálculo será inmediato (no será necesario disponer de ningún botón que dispare la
          operación).
        </p>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-header">
        <h4>Punto 2</h4>
      </div>
      <div class="card-body">
        <p>
          Luego proveer el mecanismo de actualización de cotización automático, que traiga el valor
          del dólar oficial vendedor mediante axios (con async await) cada dos segundos de esta
          api: <code>https://api.bluelytics.com.ar/v2/latest</code>. Con cada valor recibido, se actualizará el valor
          del dólar en el campo correspondiente y la conversión se realizará en forma automática.
        </p>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-header">
        <h4>Punto 3</h4>
      </div>
      <div class="card-body">
        <p>
          Se podrá habilitar/deshabilitar esta funcionalidad automática con un input checkbox.
          Considerar que de estar habilitada, no permitir el ingreso manual de valores en el input
          dólar y representar la fecha y hora actual al momento de pedir cotización. Al principio el
          mecanismo de actualización estará deshabilitado.
        </p>
      </div>
    </div>

    

    <div class="mt-4">
      <RouterLink to="/consigna" class="btn btn-primary">
        Ver Consigna Completa (PDF)
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InicioView',
}
</script>

<style scoped>
.card-header {
  background-color: #f8f9fa;
  font-weight: bold;
}

code {
  background-color: #f4f4f4;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 0.9em;
}
</style>