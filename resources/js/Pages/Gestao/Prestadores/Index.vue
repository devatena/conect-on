
<template>   
    <painel-gestao :backTo="true" :page-name="pageTitle">  
  <v-table
    height="500px"
    fixed-header
  >
    <thead class="header" style="background-color: red">
      <tr >
        <th class="text-left" v-for="(column, index) in columns"  :key="index">
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in prestadores"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td></td>
      </tr>
    </tbody>
  </v-table>
  
    </painel-gestao>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { ref } from "vue";

const pageTitle = ref(' | Prestadores de Serviço')

defineProps({
 prestadores: Object
});

const columns = reactive([
    'Nome',
    'Ações'
])
</script>

<style scoped>
.v-card {
    border-top: 5px solid blueviolet;
}

.header{
  background-color: blueviolet !important;
}

th{
  background-color:  transparent !important;
  color: white;
}


</style>
