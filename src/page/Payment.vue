<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
    setTimeout(() => {
        router.push('/nota/1')
    }, 1)
})
</script>

<template>
    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus veniam ducimus cum animi. Aliquam sequi, nisi quas eum ipsa nulla voluptates voluptatum vero vel, asperiores, commodi delectus quos ducimus amet?</div>
</template>

<style scoped>
</style>