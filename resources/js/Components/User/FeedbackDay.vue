<template>
    <section>
        <p>Informe qual atividades foram realizadas</p>
        <v-chip-group multiple column>
            <v-chip
                v-for="tag in tags"
                :key="tag"
                :text="tag"
                variant="outline"
                filter
                @click="select(tag)"
            ></v-chip>
        </v-chip-group>
        <p>Observações</p>
        <v-textarea class="mx-2" rows="4" variant="outline"></v-textarea>
    </section>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { router } from "@inertiajs/vue3";
import axios from "axios";
const list = reactive([]);
const tags = reactive([]);

onMounted(()=>{
    getList();
})

function select(tag) {
    const index = list.indexOf(tag);
    if (index !== -1) {
        list.splice(index, 1); // Remove o item específico
    } else {
        list.push(tag); // Adiciona o item
    }
}

function getList() {
    axios.get("/gestao/config/configlist").then(
        (response) =>{
            tags.splice(0, tags.length, ...response.data);
        }
    );
}
</script>

<style scoped>
section {
    padding: 20px;
}

.v-chip {
    background-color: rgb(206, 146, 206);
    color: white;
}

.v-chip--selected {
    background-color: blueviolet;
}

.v-textarea {
    background-color: rgb(206, 146, 206);
}
</style>
