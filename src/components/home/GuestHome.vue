<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function toRegister(){
    router.push('/register')
}
function toLogin(){
    router.push('login')
}
</script>
<template>
    <div class="font-lexend flex-1 w-full p-10 md:p-10 xl:p-40">
      <div class="flex flex-col md:flex-row items-center justify-between gap-5 h-full">
        <div class="order-1 flex flex-col gap-2 text-center md:text-left md:max-w-xl">
            <div class="text-title text-5xl md:text-7xl font-bold">
            Klik, Cuci, Beres
            </div>

            <div class="text-body md:text-[18px]">
            Cuci pakaian kamu sekarang!
            </div>
            <img 
            src="/src/assets/design/Landing_Page1.png" 
            alt=""
            class="w-72 mx-auto my-6 md:hidden"
            >

      
            <div class="flex flex-col md:flex-row gap-3 mt-2">

            <div
                class="hover:bg-button/5 text-button md:border border-3 px-4 py-2 rounded-2xl border-button text-center"
                @click="toLogin"
            >
                Masuk
            </div>

            <div
                class="md:hover:bg-button md:text-white md:bg-button md:border md:px-4 md:py-2 md:rounded-2xl md:border-button text-center"
                @click="toRegister"
            >
                <div class="hidden md:block">
                    Masuk
                </div>
                <div class="md:hidden">
                    Belum punya akun? <span class="text-button underline">Daftar</span>
                </div>
            </div>

            </div>

        </div>
        <img 
            src="/src/assets/design/Landing_Page1.png" 
            alt=""
            class="hidden md:block w-120 xl:w-150 object-contain"
        >

        </div>
    </div>
</template>