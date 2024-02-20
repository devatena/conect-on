<script setup>

defineProps({
    title: String,
});



</script>

<template>
    <v-card class="mx-auto">
        <template v-slot:title> {{title}} </template>

     </v-card>
</template>

<style scoped>
.v-card{
    border-top: 5px solid blueviolet
}

</style>
