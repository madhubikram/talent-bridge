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
<div class="login-page justify-center items-center h-screen">
  <div class="absolute inset-0 bg-gradient-to-l from-blue-300/40 to-transparent pointer-events-none">
    <div class="flex justify-end h-full">
      <div class="bg-white/5  rounded-lg border-2 backdrop-blur-[4px] border-white/10 shadow-lg">
        <Card class="ml-25 mr-25 border-none shadow-none mt-15  ">
          <CardHeader class="text-center">
            <CardTitle>Login to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div class="grid w-full items-center gap-4">
                <div class="mt-10 flex flex-col space-y-1.5">
                  <Label for="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div class="flex flex-col space-y-1.5">
                    <Label for="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter class="flex flex-col gap-2">
            <Button class="w-full">
              Login
            </Button>
            <Button variant="outline" class="w-full">
              Login with Google
            </Button>
                <div>
                  <a href="#" class="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </a>
                </div>
            <div>
              Don't have an account?
              <Button variant="link" class="ml-1 text-blue-500 underline">
                Sign Up
              </Button>
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
}

</style>