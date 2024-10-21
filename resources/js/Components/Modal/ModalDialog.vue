<template>
    <v-dialog v-model="dialog" width="auto" persistent>
        <v-card max-width="400">
            <template v-slot:subtitle>
                <v-icon icon="mdi-close" @click="closeDialog()"></v-icon> 
            </template>
            <v-card-text>
                <slot></slot>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
const props = defineProps({
    open: Boolean,
});
// Emissor de eventos para comunicação com o componente pai
const emit = defineEmits(["update:open"]);

// Estado local do diálogo
const dialog = ref(props.open);

// Observa a prop "open" e sincroniza com "dialog"
watch(
    () => props.open,
    (newVal) => {
        dialog.value = newVal;
    }
);

// Função para fechar o diálogo e notificar o pai
const closeDialog = () => {
    dialog.value = false;
    emit("update:open", false); // Notifica o componente pai sobre a mudança
};


</script>
