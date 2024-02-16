<script setup>
import { router } from "@inertiajs/vue3";
import { ref } from "vue";

const time = ref();
const disabled = ref(false);

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    time.value = hours + ":" + minutes + ":" + seconds;
}

function input() {
    // disabled.value = true;
    router.post("/record/input", null, {
        onBefore: () => (disabled.value = true),
        onFinish: () => (disabled.value = false),
    });
}
function output() {
    router.post("/record/output", null, {
        onBefore: () => (disabled.value = true),
        onFinish: () => (disabled.value = false),
    });
}

setInterval(updateClock, 1000);

updateClock();
</script>

<template>
    <v-card class="mx-auto">
        <template v-slot:title> Registro</template>

        <v-card-text>
            <v-icon
                class="mb-5"
                icon="mdi-clock"
                size="50"
                color="purple"
            ></v-icon>
            <p class="time mb-5">{{ time }}</p>
            <div class="btn-register">
                <v-btn
                    style="background: blueviolet"
                    @click="input()"
                    :disabled="disabled"
                >
                    Entrada
                </v-btn>
                <v-btn
                    style="background: gray"
                    @click="output()"
                    :disabled="disabled"
                >
                    Saida
                </v-btn>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped>
.time {
    font-size: 48px;
    text-align: center;
}

.v-card-text {
    text-align: center;
}
.btn-registrer {
    display: flex;
    flex-direction: column;
}

.v-btn {
    width: 50%;
    color: white;
}

.v-card {
    border-top: 5px solid blueviolet;
}
</style>
