<script setup lang="ts">
import { onMounted, ref } from 'vue'
import UserLayout from '@/layouts/UserLayout.vue';
import { usePostStore } from '@/stores/post';
import { useRoute } from 'vue-router';
import type { Post } from '@/types/Post';

const postStore = usePostStore()
const route = useRoute()
const post = ref(<Post>({}));
const user = ref({
    firstname: '',
    email: '',
    isAdmin: false,
    lastname: '',
    imageUrl: ''
})
const imageUrl = ref('');
onMounted(async () => {
    await postStore.getPost(route.params.id)
    post.value = postStore.post
    imageUrl.value = (postStore.post.imageUrl ?? '').trim();
    user.value = post.value.user
})

</script>
<template>
    <UserLayout>
        <div class="container">
            <div class="max-w-screen-xl mx-auto p-5 ">
                <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                    <div class="bg-cover bg-center text-center overflow-hidden"
                        :style="{ minHeight: '500px', backgroundImage: `url('${imageUrl}')` }"
                        title="Woman holding a mug">
                    </div>
                    <div class="max-w-3xl mx-auto">
                        <div
                            class="mt-3 bg-white dark:bg-gray-950 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                            <div class="bg-white dark:bg-gray-950 relative top-0 -mt-32 p-5 sm:p-10">
                                <h1 href="#" class="text-gray-900 dark:text-gray-100 font-bold text-3xl mb-2">{{
                            post.title }}
                                </h1>
                                <p class="text-gray-700 dark:text-gray-100 text-xs mt-2">Written By:
                                    <a href="#"
                                        class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        {{ user.firstname }}
                                    </a> In
                                    <a href="#"
                                        class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        Election
                                    </a>,
                                    <a href="#"
                                        class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                        Politics
                                    </a>

                                </p>

                                <p class="text-base leading-8 my-5">
                                    {{ post.content }}
                                </p>

                                <div class="mt-10 mb-10">
                                    <img :src="post.subImageUrl">
                                    <p class="text-gray-700 text-xs mt-2">The Sub Image Action</p>
                                </div>

                                <blockquote class="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                                {{ post.specialContent }}
                                </blockquote>

                                <p class="text-base leading-8 my-5">
                                   {{post.subContent}}
                                </p>


                                <a href="#"
                                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #Election
                                </a>,
                                <a href="#"
                                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #people
                                </a>,
                                <a href="#"
                                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #Election2020
                                </a>,
                                <a href="#"
                                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #trump
                                </a>,<a href="#"
                                    class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                                    #Joe
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div class="max-w-3xl  mx-auto bg-white dark:bg-gray-950 rounded-lg border p-5 my-4 ">
                <h3 class="font-bold">Comments</h3>
                <form>
                    <div class="flex flex-col">
                        <div class="border rounded-md p-3 ml-3 my-3">
                            <div class="flex gap-3 items-center">

                                <img src="https://avatars.githubusercontent.com/u/22263436?v=4" class="object-cover w-8 h-8 rounded-full 
                    border-2 border-emerald-400  shadow-emerald-400
                    ">
                                <h3 class="font-bold">
                                    User name
                                </h3>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300 mt-2">
                                this is sample commnent
                            </p>
                        </div>
                      
                    </div>

                    <div class="w-full px-3 my-2">
                        <textarea
                            class="bg-gray-100 dark:bg-gray-950 rounded border  leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                            name="body" placeholder='Type Your Comment' required></textarea>
                    </div>

                    <div class="w-full flex justify-end px-3">
                        <input type='submit' class="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                            value='Post Comment'>
                    </div>
                </form>


            </div>
        </div>
    </UserLayout>
</template>