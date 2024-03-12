<script setup lang="ts">
import { usePostStore } from '@/stores/post';
import { ref } from 'vue';
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import UserLayout from '@/layouts/UserLayout.vue';
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/toast/use-toast'
import { useRouter } from 'vue-router';
const postStore = usePostStore()
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const router = useRouter()
type Data = {
    title: string;
    content: string;
    subContent: string;
    specialContent: string;
    image: string;
    subImage: string;
};

const data = ref<Data>({
    title: '',
    content: '',
    subContent: '',
    specialContent: '',
    image: '',
    subImage: ''
});
const formSchema = toTypedSchema(z.object({
    title: z.string().min(2).max(50),
    content: z.string().min(2),
    subContent: z.string().min(2),
    specialContent: z.string().min(2),
   
}))

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(async (values) => {
    try {
        data.value.title = values.title
        data.value.content = values.content
        data.value.specialContent = values.specialContent
        console.log('data', data)
        const success = await postStore.createPost(data.value);
        router.push({ name: 'home' });
        toast({
            title: 'Login Successfully',
        })
    } catch (error) {
        console.error('Error creating post:', error);
    }
});


const handleFileUpload = async (event: any, fieldName: keyof Data) => {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            data.value[fieldName] = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};
</script>

<template>
    <UserLayout>
        <div class="container">
            <div class="max-w-3xl mx-auto p-5">
                <form @submit="onSubmit">
                    <FormField v-slot="{ componentField }" name="title">
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Title" v-bind="componentField" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="content">
                        <FormItem class="mt-5">
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                                <Textarea type="text" placeholder="Content" v-bind="componentField" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="subContent">
                        <FormItem class="mt-5">
                            <FormLabel>Sub Content</FormLabel>
                            <FormControl>
                                <Textarea type="text" placeholder="SubContent" v-bind="componentField" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="specialContent">
                        <FormItem class="mt-5">
                            <FormLabel>Special Content</FormLabel>
                            <FormControl>
                                <Textarea type="text" placeholder="SpecialContent" v-bind="componentField" />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="image">
                        <FormItem class="mt-5">
                            <FormLabel>Image</FormLabel>
                            <FormControl>
                                <Input @change="(event: any) => handleFileUpload(event, 'image')" type="file"
                                   />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>

                    <FormField v-slot="{ componentField }" name="subImage">
                        <FormItem class="mt-5">
                            <FormLabel>Sub Image</FormLabel>
                            <FormControl>
                                <Input @change="(event: any) => handleFileUpload(event, 'subImage')" type="file"
                                    />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    </FormField>
                    <Button class="mt-5" type="submit">
                        Submit
                    </Button>
                </form>

            </div>
        </div>
    </UserLayout>

</template>