<template>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <body>
    <img id="vLogo" src="@/assets/logo.png">
    <h1 id="mainTitle">Mini Projecte Vue Eric Roca</h1>
    <div class="content">
      <h3 style="text-align: center;">Moduls</h3>
      <list-modul
        v-for="modul in moduls"
        :key="modul.id"
        :id="modul.id"
        :titol="modul.titol"
        :durada="modul.durada"
        :hores-lliure="modul.horesLliure"
        :credit="modul.credit"
        :ufs="modul.ufs"
        :completades="modul.completades"
        :show="modul.show"
        @canviar-detalls="canviarDetalls"
        @suma-un="sumaUn"
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
    data(){
      return {
        moduls: [
          {
            id: "MP5",
            titol: 'Mòdul professional 5: entorns de desenvolupament',
            durada: '66 hores',
            horesLliure: 'No se n’assignen',
            credit: 6,
            ufs: 3,
            completades: 2,
            show: false
          },
          {
            id: "MP6",
            titol: 'Mòdul professional 6: desenvolupament web en entorn client',
            durada: '165 hores',
            horesLliure: '33 hores',
            credit: 9,
            ufs: 4,
            completades: 4,
            show: false
          },
          {
            id: "MP7",
            titol: 'Mòdul professional 7: desenvolupament web en entorn servidor',
            durada: '165 hores',
            horesLliure: '33 hores',
            credit: 12,
            ufs: 4,
            completades: 3,
            show: false
          },
      ],
      }
    },
    methods:{
      //Funció que comprova si la id existeix i en cas que no crea el mòdul
      addModul(newModul){
        const identifiedModul = this.moduls.find(
          (modul) => modul.id === newModul.id
        )

        if(identifiedModul === undefined){
          const modul = {
            id: newModul.id,
            titol: newModul.titol,
            durada: newModul.durada,
            horesLliure: newModul.horesLliure,
            credit: newModul.credit,
            ufs: newModul.ufs,
            completades: 0,
            show: false
          }
          this.moduls.push(modul) 
        }
        
      },
      //Intercanvia l'estat dels detalls d'ocult a visible
      canviarDetalls(mId){
          const identifiedModul = this.moduls.find(
            (modul) => modul.id === mId
          )
          identifiedModul.show = !identifiedModul.show
      },
      //Incrementa les uf completades
      sumaUn(mId){
          const identifiedModul = this.moduls.find(
              (modul) => modul.id === mId
            )
          if (identifiedModul.completades+1 <= identifiedModul.ufs){
            identifiedModul.completades += 1
          }
        },
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
