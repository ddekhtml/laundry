<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const nama = ref('')
const email = ref('')
const password = ref('')
const noHp = ref('')
const alamat = ref('')
const gmaps = ref('')

import axios from 'axios'

async function handleRegister() {
    try {
        // Validasi kosong
        if (
            !nama.value ||
            !email.value ||
            !password.value ||
            !noHp.value ||
            !alamat.value
        ) {
            alert('Semua field wajib diisi')
            return
        }

        // Validasi email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(email.value)) {
            alert('Format email tidak valid')
            return
        }

        // Validasi password
        if (password.value.length < 6) {
            alert('Password minimal 6 karakter')
            return
        }

        const payload = {
            name: nama.value,
            email: email.value,
            password: password.value,
            no_hp: noHp.value,
            alamat: alamat.value,
            gmaps: gmaps.value
        }

        const response = await axios.post(
            'http://localhost:3000/auth/register',
            payload
        )

        console.log(response.data)

        alert('Register berhasil')

        router.push('/login')

    } catch (error) {
        console.error(error)

        alert(
            error.response?.data?.message ||
            'Terjadi kesalahan'
        )
    }
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
                <div class="flex flex-col gap-1 mb-3">
                    <label class="text-sm font-medium">
                        Link Google Maps 
                    </label>

                    <input
                        v-model="gmaps"
                        type="text"
                        placeholder="Masukkan link google maps"
                        class="w-full border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-button"
                    >
                </div>

                <button
                    @click="handleRegister"
                    class="w-full bg-button text-white py-2.5 rounded-xl text-base font-semibold hover:opacity-90 transition"
                >
                    Daftar
                </button>

                
                <div class="text-center mt-4 text-base">
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