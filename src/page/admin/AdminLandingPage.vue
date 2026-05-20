<script setup>
import { ref } from 'vue';
import Header from '../../components/Header.vue';
import Notif from '../../components/ListNotifInAdmin.vue';
import Keuangan from '../../components/Keuangan.vue';
import { useRoute, useRouter } from 'vue-router';
const notif = ref(3)
    
const router= useRouter()
function toCucian(id=''){
    router.push(`/cucian/${id}`)
}
function toDashboardKeuangan(){
    
}
</script>
<template>
    <div class="min-h-screen flex flex-col pattern-background ">

        <Header />
        <div class="grid grid-rows-2 md:grid-cols-2 mt-10 md:mt-15 xl:mt-20 mx-5 gap-5 md:gap-10">
            <div class="flex-col flex">
                <div class="flex flex-row justify-center gap-7 mb-8 text-xl">
                    <div class="flex flex-col items-center hover:cursor-pointer " @click="toCucian()">

                        <div class="relative">
                            <img 
                                src="/src/assets/icons/antar_jemput_icon.png"
                                class="w-15 p-2 rounded-2xl border border-line"
                            >

                       
                            <div class="absolute -top-1 -right-1 bg-button text-white text-xl pt-1 w-5 h-5 rounded-full flex items-center justify-center">
                                {{ notif }}
                            </div>
                        </div>

                        <div class="text-center">
                            Atur Antar Jemput
                        </div>

                    </div>
                    <div class="flex flex-col items-center hover:cursor-pointer" @click="toCucian()">
                        <img src="/src/assets/icons/cucian_icon.png" alt="" class="w-17 p-2 rounded-2xl  border border-line">
                        <div class="text-center">
                            Kelola Cucian
                        </div>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="/src/assets/icons/history.png" alt="" class="w-15 p-2 rounded-2xl  border border-line">
                        <div class="text-center ">
                            Laporan Keuangan
                        </div>
                    </div>
                </div>
                <div class=" w-full  h-fit min-h-50 p-4 bg-second-bg rounded-xl">
                   <div class="flex flex-col">
                     <div class="flex flex-row gap-2 ">
                        <div class="place-self-center flex flex-row gap-2 ">
                            <div class="text-4xl">
                                Jemput Cucian
                            </div>    
                            <div class=" bg-button text-white  text-md text-center text-xl pt-1 w-5 h-5 rounded-full flex items-center justify-center place-self-center">
                                {{ notif }}
                            </div>
                        </div>
                        <div class="text-xl text-title underline ml-auto hover:cursor-pointer " @click="toCucian()">
                            Lihat Semua Pesanan >
                        </div>
                    </div>
                        <div v-for="n in notif">
                            <Notif />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Keuangan />
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>
