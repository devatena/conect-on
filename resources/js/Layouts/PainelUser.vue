<script setup>
import { usePage, router } from "@inertiajs/vue3";
import { watch } from "vue";
import { onMounted } from "vue";
import { ref, computed } from "vue";

const drawer = ref(true);
const rail = ref(false);
const mobile = ref(false);

const page = usePage();

const user = computed(() => page.props.auth.user);
const isAdmin = computed(() => page.props.auth.isAdmin);

function routePage(href) {
    router.get(href, "", {
        replace: true,
    });
}
const responsive = ref(window.innerWidth);
function upSize() {
    if (window.innerWidth < 600) {
        rail.value = true;
    } else {
        rail.value = false;
    }
}

window.addEventListener("resize", upSize);

onMounted(() => {
    if (responsive.value < 600) {
        rail.value = true;
    }
});

// @click="mobile ? (rail = true) : (rail = false)"
// @click.stop="rail = true"
</script>

<template>
    <v-card>
        <v-layout>
            <v-navigation-drawer
                v-model="drawer"
                :rail="rail"
                permanent
                id="nav"
            >
                <v-list-item
                    prepend-avatar="https://randomuser.me/api/portraits/lego/5.jpg"
                    :title="user.name"
                    nav
                >
                    <!-- <template v-slot:append>
                        <v-btn
                            variant="text"
                            icon="mdi-chevron-left"
                            @click.stop="rail = !rail"
                        ></v-btn>
                    </template> -->
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item
                        prepend-icon="mdi-home"
                        title="Início"
                        value="home"
                        @click="routePage('/painel')"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-clock"
                        title="Acompanhamento"
                        value="clock"
                        @click="routePage('/acompanhamento')"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-calendar"
                        title="Ajuste"
                        value="calendar"
                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-account"
                        title="Meu perfil"
                        value="account"
                    ></v-list-item>
                    <v-list-item
                    v-if="isAdmin"
                        prepend-icon="mdi-monitor-dashboard"
                        title="Painel de gestão"
                        value="dash"
                        @click="routePage('/gestao')"

                    ></v-list-item>
                    <v-list-item
                        prepend-icon="mdi-close"
                        title="Sair"
                        value="close"
                        @click="routePage('/logout')"
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
