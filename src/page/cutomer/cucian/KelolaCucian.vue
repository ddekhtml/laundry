<script setup>
import { useRoute, useRouter } from 'vue-router'
import Header from '../../../components/Header.vue';
import { computed, ref } from 'vue';

const status = ref('')
const berat = ref(0)
const harga = ref(0)
const route = useRoute()
const router= useRouter()
const data = ref({
    'Name' : 'Naufal Hilmi', 
    'noHP' : '085813155451', 
    'Alamat' : "New York City Rupiah melemah dimana ya tembok ratapan solo lorem too basic ", 
    'Gmaps': 'https://share.google/w4wvjP3cKMNVqkKSu', 
    'Jenis Layanan' : 'Cuci Kering', 
    'Metode Pembayaran' : 'QRIS', 
    'Berat': '', 
    'Tambahan': 'Sprei', 
    'Harga' : '', 
    'Tanggal Selesai' : '17 Agustus 2045', 
    'Status':'Cuci Kering', 
})
const linkWA = computed(() => {
  const nomor = data.value.noHP
    .replace(/[-\s]/g, '')
    .replace(/^0/, '62')

  return `https://wa.me/${nomor}`
})
function save(){
    data.value.status = status 
    data.value.Berat= berat 
    data.value.Harga= harga
}
function toCucian(){
    router.push('/cucian')
}
</script>

<template>
  <div class="min-h-screen flex flex-col pattern-background">
    <Header />
    <div class="grid grid-cols-1 md:grid-cols-2 m-5 mx-10 gap-5 text-2xl">
        <div class="flex flex-col gap-5">
            <div class="flex gap-5 text-5xl w-full border-b border-line/50">
                <div class="hover:cursor-pointer" @click="toCucian">
                    <
                </div>
                <div>
                    Rincian Pesanan
                </div>
            </div>
        <div class="flex gap-5 mt-5">
            <div>
                Nama
            </div>
            <div class="bg-line/10 w-full px-2 rounded border hover:cursor-not-allowed border-line/40 text-line/60">
                {{ data.Name }}
            </div>
        </div>
        <div class="flex flex-row gap-5">
  
            <div class="flex items-center place-content-center gap-1">
                <div class="font-medium text-nowrap">
                No Hp
                </div>

                <a :href="linkWA" target="_blank">
                <div class="pi pi-link text-sm text-title/80 h-fit"></div>
                </a>
            </div>

            <div class="bg-line/10 w-full px-2 rounded border hover:cursor-not-allowed border-line/40 text-line/60">
                {{ data.noHP }}
            </div>

        </div>
        <div class="flex flex-row gap-5">
  
            <div class="flex items-center place-content-center gap-1">
                <div class="font-medium text-nowrap">
                Alamat
                </div>

                <a :href="data.Gmaps" target="_blank">
                <div class="pi pi-link text-sm text-title/80 h-fit"></div>
                </a>
            </div>

            <div class="bg-line/10 w-full px-2 rounded border hover:cursor-not-allowed border-line/40 text-line/60">
                {{ data.Alamat }}
            </div>

        </div>
        <div class="flex gap-5">
            <div class="text-nowrap">
                Jenis Layanan
            </div>
            <div class="bg-line/10 w-full px-2 rounded border hover:cursor-not-allowed border-line/40 text-line/60">
                {{ data['Jenis Layanan'] }}
            </div>
        </div>
        <div class="flex gap-5">
            <div class="text-nowrap">
                Metode Pembayaran
            </div>
            <div class="bg-line/10 w-full px-2 rounded border hover:cursor-not-allowed border-line/40 text-line/60">
                {{ data['Metode Pembayaran'] }}
            </div>
        </div>
        <div class="grid grid-cols-2 gap-8">
            <div class="flex items-center">
                <div class="mr-5">
                    Berat
                </div>

                <input
                    type="number"
                    step="0.1"
                    min="0"
                    class="mr-2 border w-full border-gray-300 rounded-xl pl-5 outline-none focus:ring-2 focus:ring-button"
                    placeholder="0"
                    v-model="berat"
                >

                <div>
                    kg
                </div>
                </div>
             <div class="flex items-center gap-2">
                <div class="">
                    Harga
                </div>

                <input
                    type="number"
                    min="0"
                    class="mr-2 border w-full border-gray-300 rounded-xl pl-5 outline-none focus:ring-2 focus:ring-button"
                    placeholder="0"
                    v-model="harga"
                >

                
                </div>
        </div>
        <div class="flex gap-5">
            <div>
                Tambahan
            </div>
            <div class="bg-line/10 w-full px-2 rounded border hover:cursor-not-allowed border-line/40 text-line/60">
                {{ data.Tambahan }}
            </div>
        </div>
        <div class="flex gap-5 ">
            <div class="text-nowrap">
                Tanggal Selesai
            </div>
            <div class="bg-line/10 w-full px-2 rounded border hover:cursor-not-allowed border-line/40 text-line/60">
                {{ data['Tanggal Selesai'] }}
            </div>
        </div>
        <div class="flex gap-5 items-center">
            <div>
                Status
            </div>

            <select
                v-model="status"
                class="border border-line/60 px-2 rounded-xl w-full outline-none focus:ring-2 focus:ring-button"
            >
                <option disabled value="">
                    {{ data.Status || 'Pilih Status' }}
                </option>

                <option value="cuci">Belum Dicuci</option>
                <option value="cucses3">Belum Bayar</option>
                <option value="cucses1"></option>
                <option value="setrika3"></option>
                <option value="setrika1"></option>
            </select>
        </div>
        <div class="w-full bg-button text-center text-white rounded-2xl text-3xl hover:bg-amber-600 hover:cursor-pointer">
            Simpan
        </div>
        </div>
        <div class="hidden md:flex justify-center items-center">
            <img
                src="/src/assets/design/Log_In_Pic1.png"
                alt=""
                class="max-h-80"
            />
        </div>
    </div>
    
  </div>
</template>