<template>

  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">

      <!-- ruta root -->
      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- ruta estructura -->
          <li class="nav-item">
            <router-link to="/estructura">
              <a class="nav-link" href="#">Get Axios</a>
            </router-link>
          </li>

          <!-- ruta formulario-av -->
          <li class="nav-item">
            <router-link to="/formulario-av">
              <a class="nav-link" href="#">FormularioAv</a>
            </router-link>
          </li>

        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
</style>
