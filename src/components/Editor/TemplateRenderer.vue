<template>
    <div v-html="compiledHtml"></div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { escapeHtml } from '@/utils/escapeHtml'
  
  // Props
  const props = defineProps({
    htmlTemplate: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  })
  
  // ฟังก์ชันแทน {{ variable }} ด้วยค่าใน props.data
  const compiledHtml = computed(() => {
    let output = props.htmlTemplate
  
    for (const [key, value] of Object.entries(props.data)) {
      const escaped = escapeHtml(value)
      const pattern = new RegExp(`{{\\s*${key}\\s*}}`, 'g')
      output = output.replace(pattern, escaped)
    }
  
    return output
  })
  </script>
  