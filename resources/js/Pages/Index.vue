<script setup>
import { Head, router, useForm } from "@inertiajs/vue3";
import { ref } from "vue";
const form = useForm({
    cpf: null,
    password: null,
});


function login() {
    router.post('/', form)
}
</script>

<template>
    <Head title="Login" />
    <div class="d-flex align-center flex-column login " >
        <div class="logo">
            <v-img :width="100" src="/img/logo.png" class="mb-4"></v-img>
        </div>

        <v-card width="300">
            <v-card-text>
                <v-form>
                    <v-text-field
                        label="Colaborador"
                        type="text"
                        v-model="form.cpf"
                    ></v-text-field>
                    <v-text-field
                        label="Senha"
                        type="password"
                        v-model="form.password"
                    ></v-text-field>
                    <v-btn block class="mt-2" @click="login()">Acessar</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<style scoped>
.login {
    background-color: blueviolet;
    height: 100vh;
    justify-content: center;
}
.v-text-field {
    border-radius: 50px !important;
}
</style>
