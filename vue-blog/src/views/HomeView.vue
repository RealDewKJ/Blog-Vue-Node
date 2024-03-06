<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import BlogItem from '@/components/BlogItem.vue';
</script>

<template>
  <UserLayout>
    <div class="container">
      <div class="max-w-screen-xl mx-auto p-5 ">
        <BlogItem></BlogItem>
      </div>
  </div>
</UserLayout>
</template>
