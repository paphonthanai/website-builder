<template>
  <DefaultLayout>
    <div class="w-full ">
      <div class="flex flex-col h-[85vh] my-auto text-center 
      py-20 bg-gradient-to-b from-blue-100 to-white
      justify-center">
        <h1 class="text-4xl font-bold text-blue-600">สร้างเว็บไซต์ของคุณได้ใน 5 นาที</h1>
        <p class="mt-4 text-lg text-gray-600">ง่าย รวดเร็ว ไม่ต้องเขียนโค้ด</p>
        <RouterLink to="/login">
          <button class="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            เริ่มต้นใช้งาน
          </button>
        </RouterLink>
      </div>
    </div>

  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>