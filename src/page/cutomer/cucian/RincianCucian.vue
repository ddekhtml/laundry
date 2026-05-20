<script setup>
import { ref } from 'vue'
import Header from '../../../components/Header.vue'
import History from '../../../components/History.vue'

const data = ref([
  {
    uuid: '7f3c2b10-1a44-4c3d-a9f2-91d01a001111',
    status: 'belum_dicuci',
    name: 'Naufal Hilmi',
    service: 'cuci_kering',
    created_at: '18 Agustus 2020',
    finished_at: '21 Agustus 2020',
    total: '18.000',
    type: [1, 'sprei']
  },
  {
    uuid: '0f91f830-8a77-4f3f-9f5a-2b0f22002222',
    status: 'sedang_dicuci',
    name: 'Alya Putri',
    service: 'setrika',
    created_at: '12 September 2020',
    finished_at: '14 September 2020',
    total: '25.000',
    type: [3, 'baju']
  },
  {
    uuid: 'c6a5b9f1-6fd8-47f0-90ab-77ce33003333',
    status: 'belum_dibayar',
    name: 'Rizky Ramadhan',
    service: 'cuci_express',
    created_at: '2 Oktober 2020',
    finished_at: '3 Oktober 2020',
    total: '40.000',
    type: [2, 'selimut']
  },
  {
    uuid: 'af1e89d0-cd44-42e0-b772-88dd44004444',
    status: 'siap_diantar',
    name: 'Citra Lestari',
    service: 'cuci_kering_setrika',
    created_at: '7 November 2020',
    finished_at: '10 November 2020',
    total: '32.000',
    type: [5, 'kaos']
  },
  {
    uuid: '5d9d54e2-0e6b-45a4-a0d1-99aa55005555',
    status: 'selesai',
    name: 'Bagas Pratama',
    service: 'setrika',
    created_at: '15 Desember 2020',
    finished_at: '16 Desember 2020',
    total: '15.000',
    type: [4, 'celana']
  },
  {
    uuid: 'd2f7e5a9-ec18-4bb6-9137-aabb66006666',
    status: 'belum_dicuci',
    name: 'Dinda Maharani',
    service: 'cuci_kering',
    created_at: '3 Januari 2021',
    finished_at: '6 Januari 2021',
    total: '20.000',
    type: [2, 'jaket']
  },
  {
    uuid: '1c42e4f3-bc65-4b9f-bfe1-bbcc77007777',
    status: 'sedang_dicuci',
    name: 'Fajar Nugroho',
    service: 'cuci_express',
    created_at: '10 Februari 2021',
    finished_at: '11 Februari 2021',
    total: '45.000',
    type: [1, 'selimut']
  },
  {
    uuid: '83d81ab4-49e0-4d54-9e6d-ccdd88008888',
    status: 'belum_dibayar',
    name: 'Salsa Anindita',
    service: 'setrika',
    created_at: '22 Maret 2021',
    finished_at: '23 Maret 2021',
    total: '17.000',
    type: [6, 'kemeja']
  },
  {
    uuid: '2ab93c10-17e2-44c2-9d70-ddee99009999',
    status: 'siap_diantar',
    name: 'Yoga Saputra',
    service: 'cuci_kering_setrika',
    created_at: '8 April 2021',
    finished_at: '10 April 2021',
    total: '35.000',
    type: [3, 'hoodie']
  },
  {
    uuid: '6fce2d88-9f67-44c8-8cb7-eeff10101010',
    status: 'selesai',
    name: 'Nadia Azzahra',
    service: 'cuci_kering',
    created_at: '17 Mei 2021',
    finished_at: '20 Mei 2021',
    total: '28.000',
    type: [2, 'sprei']
  },
  {
    uuid: '9be7d331-3341-4c4a-b5b1-112211111111',
    status: 'belum_dicuci',
    name: 'Rafi Maulana',
    service: 'setrika',
    created_at: '1 Juni 2021',
    finished_at: '2 Juni 2021',
    total: '12.000',
    type: [5, 'kaos']
  },
  {
    uuid: 'f3a3b222-2245-47ff-91d2-223322222222',
    status: 'sedang_dicuci',
    name: 'Tiara Permata',
    service: 'cuci_express',
    created_at: '14 Juli 2021',
    finished_at: '15 Juli 2021',
    total: '50.000',
    type: [2, 'selimut']
  },
  {
    uuid: 'b8c4d555-55f2-4fd2-85a1-334433333333',
    status: 'belum_dibayar',
    name: 'Kevin Wijaya',
    service: 'cuci_kering_setrika',
    created_at: '9 Agustus 2021',
    finished_at: '12 Agustus 2021',
    total: '38.000',
    type: [4, 'celana']
  },
  {
    uuid: 'aa11cc77-77b0-4d6e-98d2-445544444444',
    status: 'siap_diantar',
    name: 'Intan Safira',
    service: 'cuci_kering',
    created_at: '27 September 2021',
    finished_at: '30 September 2021',
    total: '22.000',
    type: [3, 'rok']
  },
  {
    uuid: 'ee99ff44-4412-4d2f-83c7-556655555555',
    status: 'selesai',
    name: 'Arga Prakoso',
    service: 'setrika',
    created_at: '11 Oktober 2021',
    finished_at: '12 Oktober 2021',
    total: '14.000',
    type: [7]
  }
])
const is_on =ref('semua')
function applyFilter(filter){
    is_on.value= filter
}
</script>

<template>
  <div class="h-screen flex flex-col overflow-hidden pattern-background">

    <Header />

    <div class="flex-1 min-h-0 flex justify-center px-6 md:px-10">

      <div class="w-full max-w-4xl flex flex-col min-h-0">
        <div class="flex items-center gap-5 w-full mt-5">


          <div class="text-xl font-bold text-black/80 shrink-0">
            &lt;
          </div>

      
          <div class="flex gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap w-200 py-2">

            <div class="border border-line/50 px-6 h-fit text-[25px] rounded-2xl hover:bg-title hover:text-white cursor-pointer" :class="is_on==='semua'?'bg-title text-white' :''" @click="applyFilter('semua')">
              Semua
            </div>

            <div class="border border-line/50 px-4 h-fit text-[25px] rounded-2xl hover:bg-title hover:text-white cursor-pointer" :class="is_on==='siap_dijemput'?'bg-title text-white' :''" @click="applyFilter('siap_dijemput')">
              Siap Dijemput
            </div>

            <div class="border border-line/50 px-4 h-fit text-[25px] rounded-2xl hover:bg-title hover:text-white cursor-pointer" :class="is_on==='belum_dicuci'?'bg-title text-white' :''" @click="applyFilter('belum_dicuci')">
              Belum Dicuci
            </div>

            <div class="border border-line/50 px-4 h-fit text-[25px] rounded-2xl hover:bg-title hover:text-white cursor-pointer" :class="is_on==='sedang_dicuci'?'bg-title text-white' :''" @click="applyFilter('sedang_dicuci')">
              Sedang Dicuci
            </div>

            <div class="border border-line/50 px-4 h-fit text-[25px] rounded-2xl hover:bg-title hover:text-white cursor-pointer" :class="is_on==='belum_dibayar'?'bg-title text-white' :''" @click="applyFilter('belum_dibayar')">
              Belum Dibayar
            </div>

            <div class="border border-line/50 px-4 h-fit text-[25px] rounded-2xl hover:bg-title hover:text-white cursor-pointer" :class="is_on==='siap_diantar'?'bg-title text-white' :''" @click="applyFilter('siap_diantar')">
              Siap Diantar
            </div>

            <div class="border border-line/50 px-6  h-fit text-[25px] rounded-2xl hover:bg-title hover:text-white cursor-pointer" :class="is_on==='selesai'?'bg-title text-white' :''" @click="applyFilter('selesai')">
              Selesai
            </div>

          </div>
        </div>

       
        <div class="flex-1 min-h-0 overflow-y-auto scrollbar-hide my-5 md:bg-second-bg/30 rounded-xl p-4 space-y-3">

        <div
            v-for="(item, index) in data"
            :key="index"
            class="rounded-lg"
            >
            <History :status="item.status" :name="item.name" :finished_at="item.finished_at" :service="item.service" :type="item.type" :total="item.total" :uuid="item.uuid"></History>
        </div>

        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>