<template>
      <v-card class="mt-4">
            <v-row class="pt-4">
                <v-col cols="12" sm="3" class="item-menu" v-for="(item, index) in menu" :key="index" @click="router.get('gestao/'+item.route)">
                    <v-icon
                        :icon="item.icon"
                        size="large"
                    ></v-icon>
                    {{ item.name }}
                </v-col>
            </v-row>
        </v-card>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { reactive } from "vue";

const menu = reactive([
    {
        name: 'Prestadores de Serviço',
        icon: 'mdi-account-group',
        route: 'prestadores'
    },
    {
        name: 'Acompanhamento',
        icon: 'mdi-table',
        route: 'acompanhamento'
    },
])

</script>

<style scoped>
.item-menu{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: blueviolet;
    margin: 20px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
}

.item-menu:hover{
    background-color: rgb(121, 5, 121);
}
</style>