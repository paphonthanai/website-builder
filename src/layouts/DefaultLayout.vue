<template>
    <div class="min-h-screen flex flex-col">
      <header class="bg-white shadow p-4">
        <div class="flex flex-1">
          <img class="flex h-12 "
            src="../assets/logo/pnj.png" alt="Your Company">
          <h1 class="text-xl font-bold my-auto">Website Builder</h1>
        </div>
      </header>
      <main class="flex-1">
        <slot></slot>
      </main>
      <footer class="bg-gray-100 p-4 text-center text-sm">
        © 2025 WebsiteBuilder Co.
      </footer>
    </div>
  </template>
  