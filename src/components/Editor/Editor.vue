<template>
    <!-- <EditorLayout> -->
      <div class="flex">
        <!-- Sidebar -->
        <div class="w-1/4 p-4 bg-gray-100 h-screen overflow-y-auto">
          <h2 class="font-bold text-lg mb-4">แก้ไขเนื้อหา</h2>
          <div v-for="(val, key) in content" :key="key" class="mb-3">
            <label class="text-sm text-gray-700">{{ key }}</label>
            <input
              v-model="content[key]"
              class="w-full mt-1 p-2 border rounded"
              type="text"
            />
          </div>
          <button @click="save" class="btn btn-primary mt-4">บันทึก</button>
        </div>
  
        <!-- Preview -->
        <div class="w-3/4 h-screen overflow-auto bg-white p-4">
          <TemplateRenderer :htmlTemplate="template" :data="content" />
        </div>
      </div>
    <!-- </EditorLayout> -->
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
//   import EditorLayout from '@/layouts/EditorLayout.vue'
  import TemplateRenderer from '@/components/Editor/TemplateRenderer.vue'
  import { useSiteStore } from '@/stores/siteStore'
  
  const route = useRoute()
  const siteStore = useSiteStore()
  
  const siteId = route.params.siteId
  const content = ref({})
  const template = ref('<h1>{{ title }}</h1><p>{{ description }}</p>') // default
  
  onMounted(async () => {
    const site = await siteStore.loadSite(siteId)
    content.value = site.content
    template.value = site.template
  })
  
  const save = async () => {
    await siteStore.saveSite(siteId, content.value)
    alert('บันทึกแล้ว!')
  }
  </script>
  