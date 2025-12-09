<!-- Este sera un SINGLE FILE COMPONENT y despues armo un Multiple File Component para cumplir con la consignas-->
<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-1">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/inicio">Inicio</RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/consigna" active-class="active"
              >Consigna</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/respuestas" active-class="active"
              >Respuestas</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/conversor" active-class="active"
              >Conversor</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
}
</script>

<style scoped></style>
