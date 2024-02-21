<script setup>
import {usePage} from "@inertiajs/vue3";
import {ref, computed } from "vue";

const drawer = ref(true);
const rail = ref(false);
const mobile = ref(false);

const page = usePage()

const user = computed(() => page.props.auth.user)



</script>

<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer
                v-model="drawer"
                :rail="rail"
                permanent
                @click="mobile ? (rail = true) : (rail = false)"
                id="nav"
            >
                <v-list-item
                    prepend-avatar="https://randomuser.me/api/portraits/lego/5.jpg"
                    :title="user.name"
                    nav
                >
                    <template v-slot:append>
                        <v-btn
                            variant="text"
                            icon="mdi-chevron-left"
                            @click.stop="rail = !rail"
                        ></v-btn>
                    </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item
                        prepend-icon="mdi-home"
                        title="Início"
                        value="home"
                        href="/painel"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-clock"
                        title="Acompanhamento"
                        value="account"
                        href="/acompanhamento"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-calendar"
                        title="Ajuste"
                        value="users"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-account"
                        title="Meu perfil"
                        value="users"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-close"
                        title="Sair"
                        value="users"
                        href="/logout"
                    ></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main>
                <div class="header">
                    <v-img
                        src="/img/log_horizontal_branca.png"
                        width="200"
                        class="mx-auto"
                    />
                </div>
                <div class="content">
                    <slot />
                </div>
            </v-main>
        </v-layout>
    </v-card>
</template>

<style scoped>
.login {
    background-color: blueviolet;
    height: 100vh;
    justify-content: center;
}

.header {
    background-color: blueviolet;
    width: 100%;
    height: 50px;
    padding: 10px;
}

.v-card {
    height: 100vh !important;
}
.v-list-item:hover {
    background-color: blueviolet !important;
    color: white !important;
}

.v-list-item {
    color: blueviolet;
}

.v-main {
    height: 100vh !important;
    overflow: scroll !important;
    overflow-x: hidden;
}

.content {
    padding: 16px 16px 0 16px;
}
</style>
