<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nama = ref('')
const email = ref('')
const password = ref('')
const noHp = ref('')
const alamat = ref('')

function handleRegister() {
    console.log({
        nama: nama.value,
        email: email.value,
        password: password.value,
        no_hp: noHp.value,
        alamat: alamat.value
    })

    
}

function toLogin() {
    router.push('/login')
}
</script>

<template>
    <div class="min-h-screen overflow-hidden flex items-center justify-center w-full p-4 md:p-6 bg-main-bg font-lexend pattern-background">

        <div class="flex flex-col md:flex-row items-center gap-6 bg-white p-6 md:p-8 rounded-3xl shadow-xl w-full max-w-5xl">

            
            <div class="hidden md:flex flex-1 justify-center">
                <img 
                    src="/src/assets/design/New_Account_pic1.png" 
                    alt="" 
                    class="w-[280px] xl:w-[330px] object-contain"
                >
            </div>

            <div class="flex-1 w-full max-w-md">

                <div class="text-title text-3xl md:text-4xl font-semibold text-center md:text-left mb-5">
                    Daftar
                </div>

            
                <div class="flex flex-col gap-1 mb-3">
                    <label class="text-sm font-medium">
                        Nama
                    </label>

                    <input
                        v-model="nama"
                        type="text"
                        placeholder="Masukkan nama"
                        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-button"
                    >
                </div>

           
                <div class="flex flex-col gap-1 mb-3">
                    <label class="text-sm font-medium">
                        Email
                    </label>

                    <input
                        v-model="email"
                        type="email"
                        placeholder="Masukkan email"
                        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-button"
                    >
                </div>

              
                <div class="flex flex-col gap-1 mb-3">
                    <label class="text-sm font-medium">
                        Password
                    </label>

                    <input
                        v-model="password"
                        type="password"
                        placeholder="Masukkan password"
                        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-button"
                    >
                </div>

       
                <div class="flex flex-col gap-1 mb-3">
                    <label class="text-sm font-medium">
                        No HP
                    </label>

                    <input
                        v-model="noHp"
                        type="text"
                        placeholder="Masukkan nomor HP"
                        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-button"
                    >
                </div>

                <div class="flex flex-col gap-1 mb-4">
                    <label class="text-sm font-medium">
                        Alamat
                    </label>

                    <textarea
                        v-model="alamat"
                        rows="2"
                        placeholder="Masukkan alamat"
                        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-button resize-none"
                    ></textarea>
                </div>

                <button
                    @click="handleRegister"
                    class="w-full bg-button text-white py-2.5 rounded-xl text-base font-semibold hover:opacity-90 transition"
                >
                    Daftar
                </button>

                <!-- login -->
                <div class="text-center mt-4 text-sm">
                    Sudah punya akun?
                    <span 
                        @click="toLogin"
                        class="text-button font-semibold cursor-pointer hover:underline"
                    >
                        Masuk
                    </span>
                </div>

            </div>

        </div>

    </div>
</template>