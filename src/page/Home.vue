<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import Header from '../components/Header.vue';
    import GuestHome from '../components/home/GuestHome.vue';
    import { computed, ref } from 'vue';
    import LoginOrRegister from '../components/home/GuestHome.vue';
    import UserHome from '../components/home/UserHome.vue';
   const router = useRouter();
    function toRegister() {
        router.push('/register')
    }
    const route = useRoute()
    const role = ref(localStorage.getItem('role') || 'guest')
</script>
<template>
  <div class="min-h-screen flex flex-col pattern-background">

    <Header />

    <div class="font-lexend flex-1 w-full p-10 md:p-20 xl:px-40 xl:py-10 mt-10 ">

      <div class="flex flex-col md:flex-row items-center mx-auto gap-10 w-full  mb-20">

        <div class="flex flex-col gap-2 text-center md:text-left max-w-xl mx-auto">

          <div class="text-title text-5xl md:text-6xl xl:text-8xl font-bold">
            Klik, Cuci, Beres
          </div>

          <div class="text-body md:text-[20px]">
            Cuci pakaian kamu sekarang!
          </div>

          <img 
            src="/src/assets/design/Landing_Page1.png" 
            alt=""
            class="w-72 mx-auto  md:hidden my-5"
          >

          <LoginOrRegister v-if="role === 'guest'" />

        </div>

        <img 
          src="/src/assets/design/Landing_Page1.png" 
          alt=""
          class="hidden md:block w-100 xl:w-120 object-contain"
        >

      </div>

     
      <div 
        v-if="role !== 'guest'"
        class="w-full"
      >
        <UserHome v-if="role === 'user'" />
      </div>

    </div>

  </div>
</template>