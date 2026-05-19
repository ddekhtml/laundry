<script setup>
import { useRouter } from 'vue-router'
import Header from '../../../components/Header.vue'
import { ref } from 'vue'

const layanan = ref('')
const pembayaran = ref('')
const sprei = ref(false)
const selimut = ref(false)

const gunakanDataAkun = ref(false)

const nama = ref('')
const noHp = ref('')
const alamat = ref('')
const router = useRouter()


function pesanCucian() {
    console.log({
        layanan: layanan.value,
        pembayaran: pembayaran.value,
        sprei: sprei.value,
        selimut: selimut.value,
        gunakanDataAkun: gunakanDataAkun.value,
        nama: gunakanDataAkun.value ? 'Naufal (akun)' : nama.value,
        noHp: gunakanDataAkun.value ? '08123456789' : noHp.value,
        alamat: gunakanDataAkun.value ? 'Semarang' : alamat.value
    })
    router.push('/')

}


</script>

<template>
    <div class="min-h-screen flex flex-col pattern-background font-lexend">
        <Header />

        <div class=" font-lexend flex-1 w-full px-6 py-8 md:px-12 xl:px-32">

            <div class="text-4xl md:text-5xl font-bold text-title mb-8">
                Pesan Cucian
            </div>

            <div class="bg-white rounded-3xl shadow-lg p-6 md:p-10 flex flex-col lg:flex-row gap-10">


                <div class="flex-1 flex justify-center items-center">
                    <img 
                        src="/src/assets/design/menunggu_penjemputan.png" 
                        class="w-72 md:w-96 object-contain"
                    />
                </div>

         
                <div class="flex-1 flex flex-col gap-5">

                    <div class="flex flex-col gap-2">
                        <label class="font-medium text-lg">Jenis Layanan</label>
                        <select v-model="layanan"
                            class="border border-line rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-button">
                            <option disabled value="">Pilih layanan</option>
                            <option value="cuci">Cuci saja</option>
                            <option value="cucses3">Cuci Setrika 3 hari</option>
                            <option value="cucses1">Cuci Setrika 1 hari</option>
                            <option value="sertika3">Setrika 3 hari</option>
                            <option value="setrika1">Setrika 1 hari</option>
                            
                            
                        </select>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="font-medium text-lg">Metode Pembayaran</label>
                        <select v-model="pembayaran"
                            class="border border-line rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-button">
                            <option disabled value="">Pilih pembayaran</option>
                            <option value="cash">Cash</option>
                            <option value="qris">QRIS</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-3">
    <div class="font-medium text-lg">Tambahan Cucian</div>

    <label class="flex items-center gap-3">
        <input type="checkbox" v-model="sprei" class="w-5 h-5">
        <span>Sprei</span>
    </label>

    <label class="flex items-center gap-3">
        <input type="checkbox" v-model="selimut" class="w-5 h-5">
        <span>Selimut</span>
    </label>

    
    <div class="flex flex-col gap-2 mt-3">
        <label class="font-medium">Pilih Parfum</label>
        <select
            v-model="parfum"
            class="border border-line rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-button"
        >
            <option disabled value="">Pilih parfum</option>
            <option value="lavender">Lavender</option>
            <option value="fresh">Fresh</option>
            <option value="rose">Rose</option>
            <option value="baby">Baby Powder</option>
            <option value="no">Tanpa Parfum</option>
        </select>
    </div>

</div>
                    <div class="flex flex-col gap-4">

                        <label class="flex items-center gap-3">
                            <input
                                type="checkbox"
                                v-model="gunakanDataAkun"
                                class="w-5 h-5"
                            >
                            <span class="font-medium">Gunakan data akun</span>
                        </label>
                        
                        <div  class="flex flex-col gap-4">

                            <div class="flex flex-col gap-2">
                                <label class="font-medium">Nama</label>
                                <input v-if="!gunakanDataAkun" v-model="nama"
                                    class="border border-line rounded-2xl px-4 py-3" />
                                <div v-else class="text-line hover:cursor-not-allowed bg-line/10 rounded-2xl px-4 py-3 border border-line/10">
                                    Naufal Hilmi
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="font-medium">No HP</label>
                                <input v-if="!gunakanDataAkun" v-model="noHp"
                                    class="border border-line rounded-2xl px-4 py-3" />
                                <div v-else class="text-line hover:cursor-not-allowed bg-line/10 rounded-2xl px-4 py-3 border border-line/10">
                                    085813155451
                                </div>
                            </div>

                            <div class="flex flex-col gap-2">
                                <label class="font-medium">Alamat</label>
                                <textarea v-if="!gunakanDataAkun" v-model="alamat"
                                    rows="3"
                                    class="border border-line rounded-2xl px-4 py-3 resize-none"></textarea>
                                <div v-else class="text-line hover:cursor-not-allowed bg-line/10 rounded-2xl px-4 py-3 border border-line/10">
                                    Jalan Kalimasada Nomor 3A, Dekat Universitas Negeri Semarang, 14987
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <label class="font-medium">Link Google Maps</label>
                                <input v-model="gmaps"
                                    class="border border-line rounded-2xl px-4 py-3" />
                                
                            </div>

                        </div>
                    </div>

            
                    <button
                        @click="pesanCucian"
                        class="bg-button text-white py-3 rounded-2xl font-medium hover:opacity-90"
                    >
                        Pesan Sekarang
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>