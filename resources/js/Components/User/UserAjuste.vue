<template>
    <v-btn
        prepend-icon="mdi-pencil"
        variant="outlined"
        size="x-small"
        :color="record.adjustment === 'sent' ? 'green' : 'orange'"
        class="mb-1 mt-1"
        @click="record.adjustment == null ? openDialog() : ''"
    >
        <span
            >{{ record.adjustment === "sent" ? "Ajuste enviado" : "Ajustes" }}
        </span>
    </v-btn>

    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">Ajustar horas trabalhas</span>
            </v-card-title>

            <v-card-text>
                <v-form ref="form" @submit.prevent>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Entrada"
                                v-model="selectedItem.entrada"
                                type="time"
                                required
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                            <v-text-field
                                label="Saída"
                                v-model="selectedItem.saida"
                                type="time"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-textarea
                                label="Justificativa"
                                v-model="selectedItem.justificativa"
                                rows="3"
                                required
                            ></v-textarea>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDialog"
                    >Cancelar</v-btn
                >
                <v-btn
                    color="blue darken-1"
                    text
                    @click="saveAdjustments"
                    :loading="buttonLoading"
                    :disabled="!isSubmitEnabled"
                    >Enviar pra aprovação</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { router } from "@inertiajs/vue3";

const props = defineProps({
    record: Array,
});

const dialog = ref(false);
const buttonLoading = ref(false);
const selectedItem = ref({
    entrada: "",
    saida: "",
    justificativa: "", // Adicionando campo de justificativa
});

const openDialog = () => {
    dialog.value = true;
    setValue();
};

const closeDialog = () => {
    dialog.value = false;
    cleanValue();
};

const saveAdjustments = () => {
    buttonLoading.value = true;
    const data = {
        time_recording_id: props.record.id,
        old_change: JSON.stringify({
            entrada: props.record.input,
            saida: props.record.output,
        }),
        new_change: JSON.stringify({
            entrada: selectedItem.value.entrada,
            saida: selectedItem.value.saida,
        }),
        justification: selectedItem.value.justificativa,
    };
    router.post("/record/send-ajustment", data, {
        replace: true,
        onFinish: (visit) => {
            buttonLoading.value = false;
            closeDialog();
        },
    });
};

const cleanValue = () => {
    selectedItem.value = {
        entrada: "",
        saida: "",
        justificativa: "",
    };
};

const setValue = () => {
    selectedItem.value = {
        entrada: props.record.input,
        saida: props.record.output,
        justificativa: "",
    };
};

const isSubmitEnabled = ref(false);
watch(
    () => [
        selectedItem.value.justificativa,
        selectedItem.value.entrada,
        selectedItem.value.saida,
    ],
    ([newJustificativa, newEntrada, newSaida]) => {
        isSubmitEnabled.value =
            newJustificativa.trim().length > 0 && newEntrada && newSaida;
    },
    { immediate: true }
);
</script>

<style lang="css" scoped></style>
