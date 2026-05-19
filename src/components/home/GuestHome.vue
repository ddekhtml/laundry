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
</template>