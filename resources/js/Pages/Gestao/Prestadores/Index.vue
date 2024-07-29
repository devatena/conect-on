<template>
    <painel-gestao :backTo="true" :page-name="pageTitle">
        <v-table height="500px" fixed-header>
            <thead class="header" style="background-color: red">
                <tr>
                    <th
                        :class="column === 'Nome' ? 'text-left' : 'text-right'"
                        v-for="(column, index) in columns"
                        :key="index"
                    >
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in prestadores" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td class="actions">
                        <v-btn size="small" class="search">
                            <v-icon icon="mdi-text-box-search-outline"></v-icon>
                        </v-btn>
                        <v-btn size="small" class="edit">
                            <v-icon icon="mdi-file-edit-outline"></v-icon>
                        </v-btn>
                        <v-btn
                            size="small"
                            class="danger"
                            @click="deleteUser(item.id)"
                        >
                            <v-icon icon="mdi-trash-can"></v-icon>
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </painel-gestao>
</template>

<script setup lang="ts">
import { router } from "@inertiajs/vue3";
import { reactive } from "vue";
import { ref } from "vue";

const pageTitle = ref(" | Prestadores de Serviço");

defineProps({
    prestadores: Object,
});

const columns = reactive(["Nome", "Ações"]);

function deleteUser(id: any) {
  router.delete('prestadores/'+id)
  // alert( 'funcionalidade em teste')
}
</script>

<style scoped>
.v-card {
    border-top: 5px solid blueviolet;
}

.header {
    background-color: blueviolet !important;
}

th {
    background-color: transparent !important;
    color: white;
}

.actions {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: end;
}

.danger {
    background-color: rgb(179, 41, 41);
    color: white;
}

.edit {
    background-color: rgb(94, 94, 173);
    color: white;
}

.search {
    background-color: blueviolet;
    color: white;
}
</style>
