<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

function handleLogin() {
    console.log({
        email: email.value,
        password: password.value
    })
}

function toRegister() {
    router.push('/register')
}
</script>

<template>
    <div class="min-h-screen overflow-hidden flex items-center justify-center w-full p-6 md:p-10 bg-main-bg font-lexend pattern-background">

        <div class="flex flex-col md:flex-row items-center gap-10 bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-5xl">

    
            <div class="hidden md:flex flex-1 justify-center">
                <img 
                    src="/src/assets/design/Log_In_Pic1.png" 
                    alt="" 
                    class="w-87.5 object-contain"
                >
            </div>

   
            <div class="flex-1 w-full max-w-md">

                <div class="text-title text-4xl md:text-5xl font-semibold text-center md:text-left mb-8">
                    Masuk
                </div>

      
                <div class="flex flex-col gap-2 mb-5">
                    <label class="text-body font-medium">
                        Email
                    </label>

                    <input
                        v-model="email"
                        type="email"
                        placeholder="Masukkan email"
                        class="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-button"
                    >
                </div>

   
                <div class="flex flex-col gap-2 mb-6">
                    <label class="text-body font-medium">
                        Password
                    </label>

                    <input
                        v-model="password"
                        type="password"
                        placeholder="Masukkan password"
                        class="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-button"
                    >
                </div>


                <button
                    @click="handleLogin"
                    class="w-full bg-button text-white py-3 rounded-xl text-lg font-semibold hover:opacity-90 transition"
                >
                    Masuk
                </button>

                <div class="text-center mt-6 text-body">
                    Belum punya akun?
                    <span 
                        @click="toRegister"
                        class="text-button font-semibold cursor-pointer hover:underline"
                    >
                        Daftar
                    </span>
                </div>

            </div>

        </div>

    </div>
</template>

<style scoped>

</style>