<script setup>
import { Head, router, useForm, usePage } from "@inertiajs/vue3";
import { ref, computed, onMounted } from "vue";
const form = useForm({
    cpf: null,
    password: null,
});

const page = usePage();

const errors = computed(() => page.props.errors);
const loading = ref(false);
const showPassword= ref(false)

function login() {
    loading.value = true;
    router.post("/", form, {
        replace: true,
        onFinish: (visit) => {
            loading.value = false;
        },
    });
}
</script>

<template>
    <Head title="Login" />
    <div class="d-flex align-center flex-column login">
        <div class="logo">
            <v-img :width="100" src="/img/logo.png" class="mb-4"></v-img>
        </div>

        <v-card width="300">
            <v-card-text>
                <v-alert
                    v-if="errors.message"
                    type="error"
                    :text="errors.message"
                    variant="outlined"
                    class="mb-4"
                    style="padding: 0px"
                >
                </v-alert>
                <v-alert
                    v-if="errors.cpf || errors.password"
                    type="error"
                    variant="outlined"
                    class="mb-4"
                    style="padding: 0px"
                >
                    CPF ou senha não pode ser vazio
                </v-alert>
                <v-form>
                    <v-text-field
                        label="Colaborador"
                        type="text"
                        v-model="form.cpf"
                    ></v-text-field>
                    <v-text-field
                        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        label="Senha"
                        :type="showPassword ? 'text' : 'password'"
                        v-model="form.password"
                        @click:append-inner="showPassword = !showPassword"
                        
                    ></v-text-field>
                    <v-btn
                        :loading="loading"
                        block
                        class="mt-2"
                        @click="login()"
                        >Acessar</v-btn
                    >
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
