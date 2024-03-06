<script setup lang="ts">
import UserLayout from '@/layouts/UserLayout.vue';

</script>

<template>
  <UserLayout>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <div class="flex items-center justify-center [&amp;>div]:w-full">
      <div class="rounded-xl border bg-card text-card-foreground shadow">
        <div class="flex flex-col gap-y-1.5 p-6 space-y-1">
          <h3 class="font-semibold tracking-tight text-2xl"> Create an account </h3>
          <p class="text-sm text-muted-foreground"> Enter your email below to create your account </p>
        </div>
        <div class="p-6 pt-0 grid gap-4">
          <div class="grid grid-cols-2 gap-6"><button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"><svg
                viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4">
              <path fill="currentColor" fill-rule="evenodd"
                d="M7.5.25a7.25 7.25 0 0 0-2.292 14.13c.363.066.495-.158.495-.35c0-.172-.006-.628-.01-1.233c-2.016.438-2.442-.972-2.442-.972c-.33-.838-.805-1.06-.805-1.06c-.658-.45.05-.441.05-.441c.728.051 1.11.747 1.11.747c.647 1.108 1.697.788 2.11.602c.066-.468.254-.788.46-.969c-1.61-.183-3.302-.805-3.302-3.583a2.8 2.8 0 0 1 .747-1.945c-.075-.184-.324-.92.07-1.92c0 0 .61-.194 1.994.744A6.963 6.963 0 0 1 7.5 3.756A6.97 6.97 0 0 1 9.315 4c1.384-.938 1.992-.743 1.992-.743c.396.998.147 1.735.072 1.919c.465.507.745 1.153.745 1.945c0 2.785-1.695 3.398-3.31 3.577c.26.224.492.667.492 1.343c0 .97-.009 1.751-.009 1.989c0 .194.131.42.499.349A7.25 7.25 0 0 0 7.499.25"
                clip-rule="evenodd"></path>
            </svg> Github </button><button
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
            class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id="email" type="email" placeholder="m@example.com"></div>
        <div class="grid gap-2"><label for="password"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label><input
            class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id="password" type="password"></div>
      </div>
      <div class="flex items-center p-6 pt-0"><button
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full">
          Create account </button></div>
    </div>
  </div>
</UserLayout>
</template>

<style></style>
