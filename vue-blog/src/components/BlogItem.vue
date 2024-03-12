<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { usePostStore } from '@/stores/post';
import type { Post } from '@/types/Post'; // Assuming you have a Post type defined
const postStore = usePostStore()
const posts = ref<any[]>([]);


onMounted(async () => {
  await postStore.getPosts()
  posts.value = postStore.posts

  console.log(posts.value)
})

</script>

<template>

  <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
    <div v-for="post in posts" :key="post.postID"
      class="p-2 border-2 rounded dark:border-gray-800  flex flex-col justify-between leading-normal">
      <img :src="post.imageUrl" class="mb-3 rounded w-full h-60 object-cover">
      <div class="p-4 pt-2">
        <div class="mb-8" style="height: 119px;">
          <p v-if="post.public = false" class="text-sm text-gray-600 flex items-center">
            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
              </path>
            </svg>
            Members only
          </p>
          <p v-if="post.public = true" class="text-sm text-gray-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-lock-open mr-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
              <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M8 11v-5a4 4 0 0 1 8 0" />
            </svg>
            Public
          </p>
          <RouterLink :to="{ name: 'blog', params: { id: post.postID } }"
            class="text-gray-900 dark:text-slate-200 dark:hover:text-indigo-600 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
            {{ post.title }}
          </RouterLink>

          <div class="clamp-text text-gray-700 dark:text-slate-300 text-sm">{{ post.content }}</div>
        </div>
        <div class="flex items-center">
          <a href="#"><img class="w-10 h-10 rounded-full mr-4" :src="post.user.imageUrl"
              alt="Avatar of Jonathan Reinink"></a>
          <div class="text-sm">
            <a href="#"
              class="text-gray-900 dark:text-slate-200 dark:hover:text-indigo-600 font-semibold leading-none hover:text-indigo-600">
              {{ post.user.firstname }} {{ post.user.lastname }}
            </a>
            <p class="text-gray-600 dark:text-slate-400">{{ post.createdAt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.clamp-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
  /* Adjust as needed */
  max-height: 4.5em;
  /* Adjust as needed */
}
</style>