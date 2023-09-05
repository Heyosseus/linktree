<template>
  <div class="relative z-50">
    <teleport to="body">
      <div
        class="absolute w-screen h-screen flex flex-col z-50 items-center justify-center overflow-hidden bg-transparentLandingBg"
      >
        <div
          class="flex  flex-col px-6 py-10 md:px-20 md:pt-6 md:pb-16 rounded-md items-center justify-center mx-auto my-auto bg-modal space-y-4 p-20"
          ref="modalRef"
        >
          <div class="w-full py-10 lg:py-16 px-8 lg:px-20 bg-black rounded-xl">
            <h1 class="text-2xl">Coronatime</h1>
            <p class="w-full lg:w-[822px] mt-10 text-gray-400 text-[12px] lg:text-lg tracking-wider">
              CoronaTime is a web application built with Laravel and Tailwind CSS that provides
              real-time information on the COVID-19 pandemic. There is information about confirmed
              cases, deaths, and recoveries in different countries around the world.
            </p>
            <div class="mt-12 underline flex w-full justify-between text-sm lg:text-lg">
              <a href="https://github.com/Heyosseus/coronatime" target="blank">Github URL</a>

              <a href="https://coronatime.rati-rukhadze.redberryinternship.ge" target="blank"
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
