<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

</script>
<template>
  <div class="min-h-screen flex items-center justify-center  p-5 pattern-background">
    <div class="text-7xl text-left ">
        < 
    </div>
    <div class="w-[320px] bg-white border border-line/40 shadow-sm p-6">

     
      <div class="text-center ">
        <div class="text-5xl  text-title">
          Cucian.
        </div>
      </div>

      <div class="flex justify-between text-xl border-y py-2 border-line/50">
        <div>
          <div class="">Naufal Hilmi</div>
          <div class="text-black/70">0813-2579-8763</div>
        </div>

        <div class="text-right text-black/70">
          <div>29 Juni 2026</div>
          <div>id: 76561</div>
        </div>
      </div>
      <div class="text-xl border-b py-5">

        <div class="flex justify-between">
          <span>Berat Cucian</span>
          <span>3,0 kg</span>
        </div>

        <div class="flex justify-between">
          <span>Jenis Layanan</span>
          <span>Kilat</span>
        </div>

        <div class="flex justify-between">
          <span>Harga Layanan</span>
          <span>Rp7000/kg</span>
        </div>

        <div class="flex justify-between">
          <span>Sprei</span>
          <span>Rp5000</span>
        </div>

        <div class="flex justify-between">
          <span>Selimut</span>
          <span>-</span>
        </div>

      </div> 
      <div class="flex justify-between text-2xl py-2">
        <span>Total Harga</span>
        <span class="">Rp26.000</span>
      </div>

      
      <div class="mt-5 flex justify-center">
        <button
          class=" bg-button text-white text-xl px-5 py-1 rounded-xl"
        >
          Download 
        </button>
      </div>

    </div>
  </div>
</template>