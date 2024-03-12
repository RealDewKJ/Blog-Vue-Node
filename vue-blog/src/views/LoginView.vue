<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useAccountStore } from '@/stores/account';
import UserLayout from '@/layouts/UserLayout.vue';
import { toast } from '@/components/ui/toast/use-toast'
import { useRouter } from 'vue-router';

const router = useRouter()
const accountStore = useAccountStore()
const email: Ref<string> = ref('')
const password: Ref<string> = ref('')

const login = async () => {
  try {
    await accountStore.signIn(email.value, password.value)
    router.push({ name: 'home' });
    toast({
    title: 'Login Successfully',
  })
  } catch (error:any) {
    console.log(error.message, 'error')
  }
}
</script>

<template>
  <UserLayout>
    <div class="flex items-center justify-center [&amp;>div]:w-full mt-10">
      <div class="rounded-xl border bg-card text-card-foreground shadow">
        <div class="flex flex-col gap-y-1.5 p-6 space-y-1">
          <h3 class="font-semibold tracking-tight text-2xl"> Create an account </h3>
          <p class="text-sm text-muted-foreground"> Enter your email below to create your account </p>
        </div>
        <div class="p-6 pt-0 grid gap-4">
          <div class="grid grid-cols gap-6"><button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"><svg
                role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
                <path fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z">
                </path>
              </svg> Google </button></div>
          <div class="relative">
            <div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span></div>
            <div class="relative flex justify-center text-xs uppercase"><span
                class="bg-background px-2 text-muted-foreground"> Or continue with </span></div>
          </div>
          <div class="grid gap-2"><label for="email"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label><input
              v-model="email" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="email" type="email" placeholder="m@example.com"></div>
          <div class="grid gap-2"><label for="password"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label><input
              v-model="password" class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="password" type="password"></div>
        </div>
        <div @click="login" class="flex items-center p-6 pt-0"><button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">
            Sign In </button></div>
      </div>
    </div>
  </UserLayout>

</template>