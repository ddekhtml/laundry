<script setup>
    import { useRouter } from 'vue-router';
    import Header from '../components/Header.vue';
import GuestHome from '../components/home/GuestHome.vue';
import { ref } from 'vue';
    const router = useRouter();
    function toRegister() {
        router.push('/register')
    }
    const role=ref('guest') 
</script>
<template>
  <div class="h-screen overflow-hidden flex flex-col pattern-background">

    <Header />
    <GuestHome v-if="role==='guest'"></GuestHome>
  </div>
</template>