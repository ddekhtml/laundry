<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import Header from '../components/Header.vue';
    import GuestHome from '../components/home/GuestHome.vue';
    import { ref } from 'vue';
    import LoginOrRegister from '../components/home/GuestHome.vue';
    import UserHome from '../components/home/UserHome.vue';
   const router = useRouter();
    function toRegister() {
        router.push('/register')
    }
    const route = useRoute()
    const role = route.meta.role 
</script>
<template>
  <div class="min-h-screen flex flex-col pattern-background">

    <Header />
     <div class="font-lexend flex-1 w-full p-10 md:p-20 xl:px-40 xl:py-10">
      <div class="flex flex-col md:flex-row items-center mx-auto gap-5 h-full">
        <div class="order-1 flex flex-col gap-2 text-center md:text-left max-w-xl">
            <div class="text-title text-5xl md:text-6xl xl:text-8xl font-bold">
            Klik, Cuci, Beres
            </div>

            <div class="text-body md:text-[20px]">
            Cuci pakaian kamu sekarang!
            </div>
            <img 
            src="/src/assets/design/Landing_Page1.png" 
            alt=""
            class="w-72 mx-auto my-6 md:hidden"
            >
            <LoginOrRegister v-if="role==='guest'"></LoginOrRegister>
            

        </div>
        <img 
            src="/src/assets/design/Landing_Page1.png" 
            alt=""
            class="hidden md:block w-120 xl:w-150 object-contain "
        >

        </div>
        <div v-if="role !== 'guest'" class="flex-1 mt-10 p-10 overflow-auto">
          
          <UserHome v-if="role === 'user'" />
           
        </div>

            
    </div>
  </div>
</template>