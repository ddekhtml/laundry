<script setup>
    import { ref } from 'vue';

    const role = ref(localStorage.getItem('role'))
</script>
<template>
    <div class="w-full py-2 pl-3 bg-white text-title border-b-line border-b-[0.5px] flex flex-row justify-between items-center">
    
    <div class="text-5xl tracking-wide font-semibold font-dongle">
        Cucian.
    </div>
    <div class="flex items-center  text-black gap-2 mr-10 border px-4 py-1  rounded-xl border-line/50" v-if="role==='user'">

        <img 
            src="/src/assets/icons/user.png" 
            alt="" 
            class="w-4 object-contain"
        >

        <div class=" text-[20px]  font-lexend leading-none">
            Naufal
        </div>

</div>
    

    </div>
</template>

<style scoped>

</style>
