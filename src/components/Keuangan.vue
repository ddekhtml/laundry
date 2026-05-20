<script setup lang="ts">
import Pemasukan from './MiniKeuanganInAdmin.vue';

</script>

<template>
    <div class="mt-5">
        <div class="text-3xl">
            Pemasukan Bulan Ini 
        </div>
        <div class="text-6xl text-title text-center">
            Rp2.655.000,-
        </div>
        <div class="flex flex-row justify-between text-xl">
            <div>
                Hari ini 
            </div>
            <div class="underline text-title">
                Lihat semua pemasukan >
            </div>
        </div>
        <div class="w-full bg-second-bg min-h-50 border border-black/10">
            <div v-for="n in 3" class="flex flex-col">
                <Pemasukan />
            </div>
        </div>
    </div>
</template>