<script setup>
    import Header from '../components/Header.vue';
</script>
<template>
  <div class="h-screen overflow-hidden flex flex-col pattern-background">

    <Header />

    <div class="font-lexend flex-1 w-full p-10 md:p-10 xl:p-40">
      <div class="flex md:flex-row flex-col h-full content-center">

        <div class="flex flex-col  align-middle gap-2 md:gap-2 xl:gap-3 md:my-auto my-15">
          <div class="font-lexend text-title text-5xl md:text-7xl xl:text-7xl text-ellipsis font-bold">
                Klik, Cuci, Beres
          </div>
          <div class="font-lexend text-body md:text-[18px]">
            Cuci pakaian kamu sekarang
          </div>
          <div class="flex flex-row">
            <div class="font-lexend hover:bg-button/5 text-button border px-4 py-1 h-fit rounded-4xl mr-3 border-button">
                Masuk
            </div>
            <div class="font-lexend hover:bg-button text-white bg-button border px-4 py-1 h-fit rounded-4xl mr-3 border-button">
                Daftar
            </div>
          </div>
        </div>

        <img 
          src="/src/assets/design/Landing_Page1.png" 
          alt="" 
          class="w-96 max-h-[80vh] object-contain mx-auto md:w-120 xl:w-150"
        >

      </div>
    </div>

  </div>
</template>