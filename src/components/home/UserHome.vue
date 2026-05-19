<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
function toCucian(path = '') {
    router.push(`/cucian/${path}`)
}
</script>
<template>
    <div class="grid grid-cols-3 mt-5 max-w-xl mx-auto hover:cursor-pointer">
        <div class="flex flex-col items-center  gap-2 " @click="toCucian('pesan')">
            <div class="p-4 border border-body w-fit rounded-2xl"><img src="/src/assets/icons/pesan_cucian_icon.png" alt="" class="w-8 object-contain"></div>
            <div>Pesan Cucian</div>
        </div>
        <div class="flex flex-col items-center gap-2 hover:cursor-pointer">
            <div class="p-4 border border-body w-fit rounded-2xl"><img src="/src/assets/icons/cucian_icon.png" alt="" class="w-10 object-contain"></div>
            <div>Pantau Cucian</div>
        </div>
        <div class="flex flex-col items-center gap-2 hover:cursor-pointer" @click="toCucian()">
            <div class="p-4 border border-body w-fit rounded-2xl"><img src="/src/assets/icons/history.png" alt="" class="w-8 object-contain"></div>
            <div>Riwayat Cucian</div>
        </div>
    </div>
</template>