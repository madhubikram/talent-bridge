<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
 
<div class="login-page justify-center items-center h-screen font-mono">
<img src="@/assets/logocopy.svg" alt="Company Logo" class="w-24 h-24 absolute top-5 left-5 z-10 ml-10">
  <div class="absolute inset-0 bg-gradient-to-l from-black-100/10 to-transparent ">
    <div class="flex justify-end h-full">
      
      <div class="bg-white/5  rounded-lg border-2 backdrop-blur-[6px] border-white/10 shadow-red">
        <Card class="flex flex-col gap-2 ml-20 mr-20 border-none shadow-none mt-15">
          <CardHeader class="text-center text-white">
            <CardTitle>Login to your account</CardTitle>
          </CardHeader>
          <CardContent class="p-0">
            <form>
              <div class="grid w-full items-center gap-4 text-white">
                <div class="mt-10 flex flex-col space-y-1.5">
                  <Label for="email">Email</Label>
                  <Input id="email" type="email" placeholder="something@example.com" class="border-l-0 border-r-0 border-t-0 border-b-1 rounded-none" />
                </div>
                <div class="flex flex-col space-y-1.5 mt-5">
                    <Label for="password">Password</Label>
                  <Input id="password" type="password" class="border-l-0 border-r-0 border-t-0 border-b-1 rounded-none" />
                </div>
                <div>
                  <input type="checkbox" id="remember" class="mr-2" />
                  <label for="remember">Remember me</label>
                  <a href="#" class="ml-20 inline-block text-sm">
                    Forgot password?
                  </a>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter class="flex flex-col gap-3 mt-4 text-white">
            <Button class="w-full cursor-pointer">
              Login
            </Button>
            <Button variant="outline" class="w-full cursor-pointer">
              Login with Google
            </Button>
            <div>
              Don't have an account?
              <router-link to="/signup" class="ml-1 text-stone-800 font-bold cursor-pointer">
                Sign Up 
              </router-link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
    </div>
</template>

<style scoped>
.login-page {
    background-image: url('@/assets/Gemini_Generated_Image_dx8j0adx8j0adx8j-clean.webp');
    background-size: cover;
    position: relative;
}
.shadow-red {
  box-shadow: 0px 1px 50px -5px rgb(70, 107, 141);
}
</style>