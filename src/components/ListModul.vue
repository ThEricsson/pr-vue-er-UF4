<template>
    <div class="moduls">
        <ul>
            <li :class="completed(completades, ufs) ? 'completada' : 'noCompletada'">
                {{titol}}
            </li>
        </ul>
        <ul v-if="show">
            <li class="data"><strong>Durada:</strong> {{durada}}</li>
            <li class="data"><strong>Horas de lliure disposició:</strong> {{horesLliure}}</li>
            <li class="data"><strong>Equivalència en crèdits ECTS:</strong> {{credit}}</li>
            <li class="data"><strong>Unitats formatives que el componen:</strong> {{ufs}}</li>
            <li class="data"><strong>Unitats formatives completades:</strong> {{completades}}</li>
        </ul>
        <button @click="$emit('canviar-detalls', id)">{{ show ? 'Amagar' : 'Mostrar'}}</button>
        <button v-if="show" @click="$emit('suma-un', id)">UF Completada</button>
    </div>
</template>
<script>
export default {
    emits: ['canviar-detalls','suma-un'],
    //Propietats dels paràmetres que recollim del pare
    props: {
        id: {
            type: String,
            required: true,
        },
        titol: {
            type: String,
            required: true,
        },
        durada: {
            type: String,
            required: true,
        },
        horesLliure: {
            type: String,
            required: true,
        },
        credit: {
            type: Number,
            required: true,
        },
        ufs: {
            type: Number,
            required: true,
        },
        completades: {
            type: Number,
            required: true,
        },
        show: {
            type: Boolean,
            required: true,
        },
    },
    data(){
        return {
            
        }
    },
    methods: {
        //En cas que totes les uf estiguin completades envia true a la plantilla per mostrar-ho en verd
        completed(completades, ufs){
            let ok = false
            if (completades == ufs){
                ok = true
            }
            return ok
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
