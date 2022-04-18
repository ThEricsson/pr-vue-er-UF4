<template>
    <h3 style="text-align: center;">Formulari de registre de moduls</h3>
    <form @submit.prevent="submitModul">
        <label>Id del mòdul: </label>
        <input class="form-control" type="text" v-model="modul.id"><br>
        <label>Títol del mòdul: </label>
        <input class="form-control" type="text" v-model="modul.titol"><br>
        <label>Horas de lliure disposició: </label>
        <input class="form-control" type="text" v-model="modul.horesLliure"><br>
        <label>Durada: </label>
        <input class="form-control" type="text" v-model="modul.durada"><br>
        <label>Equivalència en crèdits ECTS: </label>
        <input class="form-control" type="number" v-model="modul.credit"><br>
        <label>Unitats formatives que el componen: </label>
        <input class="form-control" type="number" v-model="modul.ufs"><br>
        <button class="btn btn-primary">Crear!</button>
    </form>
</template>
<script>
export default {
    emits: ['add-modul'],
    data(){
        return {
            //Definim els paràmetres del nou mòdul
            modul: {
                id: "",
                titol: "",
                durada: "",
                horesLliure: "",
                credit: 0,
                ufs: 0,
            }
        }
    },
    methods: {
        //Mètode per enviar el nou mòdul al pare
        submitModul(){
            this.$emit('add-modul', this.modul)
        }
    }
}
</script>


<style>
    input{
        margin-top: 2em;
    }
</style>
