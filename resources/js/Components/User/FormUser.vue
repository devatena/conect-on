<template>
    <v-form>
        <v-text-field
            v-model="providerName"
            label="Prestador de Serviço"
            type="text"
        ></v-text-field>

        <v-text-field
            v-model="email"
            label="E-mail"
            type="email"
        ></v-text-field>

        <v-text-field
            v-model="cpf"
            label="CPF"
            type="text"
        ></v-text-field>

        <v-select
            v-model="selectedOption"
            :items="options"
            label="Escolha uma função"
            outlined
        ></v-select>

        <v-select
            v-model="selectedMode"
            :items="modes"
            label="Escolha o modo de trabalho"
            outlined
        ></v-select>

        <v-btn
            :loading="loading"
            block
            class="mt-2"
            @click="createUser"
        >
            Cadastrar
        </v-btn>
    </v-form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { router } from "@inertiajs/vue3";

const emit = defineEmits(["close-dialog"]);

const providerName = ref("");
const email = ref("");
const cpf = ref("");
const selectedOption = ref("");
const selectedMode = ref("");
const loading = ref(false);
const options = [
    "Desenvolvedor",
    "Publicitário",
    "Copy",
    "Designer",
    "Atendimento",
    "RH",
];

const modes = ["Home Office", "Presencial", "Híbrido"];


const createUser = () => {
    loading.value = true;

    const data = {
        name: providerName.value,
        email: email.value,
        cpf: cpf.value,
        role: selectedOption.value,
        operation: selectedMode.value,
    };

    router.post("prestadores/", data, {
        replace: true,
        onFinish: () => {
            loading.value = false;
            emit("close-dialog");
        },
    });
};
</script>

<style scoped>
.v-form {
    width: 300px;
}
.v-btn {
    background-color: blueviolet;
    color: white;
}
</style>
