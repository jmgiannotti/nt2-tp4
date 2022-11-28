<template>

  <section class="src-componentes-estructura">
    <div class="jumbotron">


                <div class="text-center">
          <div class="table-responsive">
              <table class="table table-dark table-striped">
                  <tr class="bg-primary">
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Telefono</th>
                      <th>Email</th>
                  </tr>
                  <tr v-for="(usuario, index) in listaUsuarios" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ usuario.nombre}}</td>
                      <td>{{ usuario.telefono }}</td>
                      <td>{{ usuario.mail }}</td>
                  </tr>
              </table>
            </div>
          </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-estructura',
    props: [],
    mounted () {
        this.getAxios()
    },
    data () {
      return {
        listaUsuarios: []
      }
    },
    methods: {
            async getAxios() {
    
        /* async / await */
        try {
          let response = await this.axios("https://63842cf83fa7acb14fee6257.mockapi.io/usuarios/users")
          this.listaUsuarios = response.data
          console.log(this.listaUsuarios)
        }
        catch(error) {
           console.error(error)
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: rgb(23, 164, 131);
    color: white;
  }

  hr {
    background-color: #bbb;
  }
</style>
