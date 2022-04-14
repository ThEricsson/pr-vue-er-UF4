<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <body>
    <img id="vLogo" src="@/assets/logo.png">
    <h1 id="mainTitle">Mini Projecte Vue Eric Roca</h1>
    <div class="content">
      <list-modul
        v-for="modul in moduls"
        :key="modul.titol"
        :titol="modul.titol"
        :durada="modul.durada"
        :horesLliure="modul.horesLliure"
        :credit="modul.credit"
        :ufs="modul.ufs"
        :completades="modul.completades"
        @add-modul="addModul"
      ></list-modul>
    </div>
    <div class="content">
      <modul-register @add-modul="addModul"></modul-register>
    </div>
  </body>
</template>

<script>

  export default {
    name: 'App',
    components: {
    },
    methods:{
      addModul(newModul){
        const modul = {
          titol: newModul.titol,
          durada: newModul.durada,
          horesLliure: newModul.horesLliure,
          credit: newModul.credit,
          ufs: newModul.ufs,
          completades: 0,
          show: false
        }
        console.log(modul)
        this.moduls.push(modul)
      }
    } 
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  *{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  body{
    display: flex;
    flex-direction: column;
    align-items: center; 
    background-color: #bbdfcf;
  }

  #mainTitle{
    margin-bottom: 1em;
  }

  #vLogo{
    margin: 1em;
    width: 5em;
  }

  .content{
    width: 50vw;
    margin-bottom: 1em;
    padding: 1em;
    background-color: #aec2d8;
    border: 1px solid black;
    border-radius: 10px;
  }

</style>
