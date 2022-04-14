<template>
    <h3 style="text-align: center;">Moduls</h3>
    <div class="moduls" 
    v-for="modul in moduls" 
    :key="modul.titol">
        <ul>
            <li :class="completed(modul) ? 'completada' : 'noCompletada'">
                {{modul.titol}}
            </li>
        </ul>
        <ul v-if="modul.show">
            <li class="data"><strong>Durada:</strong> {{modul.durada}}</li>
            <li class="data"><strong>Horas de lliure disposició:</strong> {{modul.horesLliure}}</li>
            <li class="data"><strong>Equivalència en crèdits ECTS:</strong> {{modul.credit}}</li>
            <li class="data"><strong>Unitats formatives que el componen:</strong> {{modul.ufs}}</li>
            <li class="data"><strong>Unitats formatives completades:</strong> {{modul.completades}}</li>
        </ul>
        <button @click="canviarDetalls(modul)">{{ modul.show ? 'Amagar' : 'Mostrar'}}</button>
        <button v-if="modul.show" @click="sumaUn(modul)">UF Completada</button>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            moduls: [
                {
                    titol: 'Mòdul professional 5: entorns de desenvolupament',
                    durada: '66 hores',
                    horesLliure: 'No se n’assignen',
                    credit: 6,
                    ufs: 3,
                    completades: 2,
                    show: false
                },
                {
                    titol: 'Mòdul professional 6: desenvolupament web en entorn client',
                    durada: '165 hores',
                    horesLliure: '33 hores',
                    credit: 9,
                    ufs: 4,
                    completades: 4,
                    show: false
                },
                {
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
    methods: {
        completed(modul){
            let ok = false
            if (modul.completades == modul.ufs){
                ok = true
            }
            return ok
        },
        canviarDetalls(modul){
            modul.show = !modul.show
            return modul.show
        },
        sumaUn(modul){
            if (modul.completades+1 <= modul.ufs){
                modul.completades += 1
            }
        },
    },

}
</script>

<style>
    li{
        list-style-type: none; 
    }

    .moduls{
        text-align: center;
        margin: 1em;
        background-color: #fff;
        border: 1px solid black;
        border-radius: 10px;
        padding: 1em;
    }

    .completada{
        color: green;   
    }

    .noCompletada{
        color: red;
    }

    .data {
        margin-top: 0.5em;
    }

    button {
        background-color: #35495e;
        border: 1px solid white;
        color: white;
        padding: 0.5em;
        border-radius: 5px;
        margin: 0;
    }

    button:hover{
        background-color: #556b81;
    }
</style>
