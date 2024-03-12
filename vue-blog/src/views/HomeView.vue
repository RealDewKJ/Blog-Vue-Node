<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue'
import BlogItem from '@/components/BlogItem.vue';

import  Button  from '@/components/ui/button/Button.vue';


</script>

<template>
  <UserLayout>
    <div class="container">
      <div class="max-w-screen-xl mx-auto p-5 ">
        
        <div class="mt-12">
          <BlogItem></BlogItem>
        </div>
        
      </div>
  </div>
</UserLayout>
</template>
