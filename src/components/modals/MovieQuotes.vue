<template>
  <div class="relative z-50">
    <teleport to="body">
      <div
        class="absolute w-screen h-screen flex flex-col z-50 items-center justify-center overflow-hidden bg-transparentLandingBg"
      >
        <div
          class="flex flex-col px-6 py-10 md:px-20 md:pt-6 md:pb-16 rounded-md items-center justify-center mx-auto my-auto bg-modal space-y-4 p-20"
          ref="modalRef"
        >
          <div class="py-10 lg:py-16 px-8 lg:px-20 bg-black rounded-xl w-full">
            <h1 class="text-2xl">Epic movie quotes</h1>
            <p class="lg:w-[822px] mt-10 text-gray-400 text-[12px] lg:text-lg tracking-wider">
              <span class="mt-10"
                >Welcome to my epic movie quotes website! My platform provides a seamless experience
                for users to create an account, add their favorite movies, and share memorable
                quotes from those films.</span
              >
              <br /><br />
              As a registered user, you can explore a vast collection of movie quotes contributed by
              others, like, and comment on their posts. Real-time notification system ensures that
              you never miss out on any activity, keeping you up to date with the latest quotes,
              likes, and comments on your own posts.
            </p>
            <div class="mt-12 underline flex w-full justify-between">
              <div class="flex space-x-4 text-sm lg:text-lg items-center">
                <a href="https://github.com/Heyosseus/epic-movie-quotes-front" target="blank"
                  >Front URL</a
                >
                <a href="https://github.com/Heyosseus/epic-movie-quotes-back" target="blank"
                  >Back URL</a
                >
              </div>

              <a href="https://epic-movie-quotes-rati-rukhadze.netlify.app/" target="blank"
                >Live URL</a
              >
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()
const modalRef = ref(null)
onClickOutside(modalRef, () => {
  router.push({ name: 'home' })
})
</script>
