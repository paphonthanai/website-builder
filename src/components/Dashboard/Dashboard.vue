<template>
    <DefaultLayout>
      <div class="max-w-5xl mx-auto py-10">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-semibold">เว็บไซต์ของฉัน</h2>
          <button @click="createNewSite" class="btn btn-primary">+ สร้างเว็บใหม่</button>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="site in sites" :key="site.id" class="border p-4 rounded shadow-sm bg-white">
            <h3 class="font-bold text-lg mb-2">{{ site.name }}</h3>
            <RouterLink :to="`/editor/${site.id}`" class="text-blue-600 underline">แก้ไข</RouterLink>
          </div>
        </div>
      </div>
    </DefaultLayout>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import { useSiteStore } from '@/stores/siteStore'
  
  const store = useSiteStore()
  
  onMounted(() => {
    store.fetchSites()
  })
  
  const sites = store.sites
  
  const createNewSite = async () => {
    const name = prompt('ตั้งชื่อเว็บไซต์ของคุณ:')
    if (name) {
      await store.createSite(name)
    }
  }
  </script>
  