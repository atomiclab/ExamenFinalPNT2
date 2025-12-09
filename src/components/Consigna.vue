<template>
  <div class="container mt-3">
    <h3 class="mb-3">Consigna del Examen Final - Diciembre 2025</h3>
    <p class="mb-3">A continuación se muestra el documento completo de la consigna del examen.</p>
   
    <div class="ratio ratio-16x9" style="min-height: 70vh;">
      <iframe
        src="/final-1erDiciembre-2025.pdf"
        title="Consigna del examen"
        style="width: 100%; height: 100%; border: 1px solid #ddd; border-radius: 4px;"
      ></iframe>
    </div>

    <div class="mt-3">
      <RouterLink to="/inicio" class="btn btn-secondary">
        Volver al Inicio
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConsignaView',
}
</script>

<style scoped>
</style>
