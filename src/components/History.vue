<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    status: String, 
    name : String, 
    finished_at:String,
    service :String,
    type: Array, 
    total: String,
    uuid : String
})  
const image = computed(() => {
  if (props.status === 'selesai') {
    return '/src/assets/design/cucian_selesai.png'
  }
  else if(props.status ==='belum_dibayar'){
    return '/src/assets/design/menunggu_pembayaran.png'
  }
 else if(props.status ==='sedang_dicuci'){
    return '/src/assets/design/sedang_dicuci.png'
  }
  return '/src/assets/design/menunggu_penjemputan.png'
})
const status_readable = computed(() => {
  return props.status
    .replaceAll('_', ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
})
const service_readble= computed(()=>{
    return props.service
    .replaceAll('_', ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
})
const router = useRouter()

function getCucian(){
    router.push(`/cucian/${props.uuid}`)
}
</script>
<template>
    <div class="border-b pb-2 border-line/80 flex flex-row  items-center justify-between md:bg-white md:px-5 md:pt-2 md:rounded hover:cursor-pointer" @click="getCucian" >
        <div class="flex  gap-5 text-2xl">
            <img :src="image" alt="" class="w-20 object-contain">
            <div>
                <div>
                    {{props.name}}
                </div>
                <div class="text-[22px] text-black/70 flex ">
                    {{ props.type[0] }} kg 

                    <p v-if="props.type.length >= 2">
                        , {{ props.type[1] }}
                    </p>
                </div>
                <div class="text-[22px] text-black/70 flex gap-2" :class="{'text-button' :props.status==='belum_dibayar'}">
                    {{status_readable}}
                    <span
                        v-if="props.status === 'belum_dibayar'"
                        class="text-white bg-button w-5 h-5 text-md rounded-full flex items-center justify-center"
                        >
                        !
                    </span>
                </div>
            </div>
        </div>
        
        <div class="text-[22px] text-right">
            <div>
                Tanggal Keluar: {{props.finished_at}}
            </div>
            <div class="text-black/70">
                Rp{{props.total}},-
            </div>
            <div class="text-black/70">
                {{service_readble}}
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
