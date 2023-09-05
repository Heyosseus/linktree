<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-6 relative bg-landingBg">
    <h1 class="text-4xl lg:text-5xl">Rati Rukhadze</h1>
    <p class="mt-8 text-center">
      2+ years of experience in the crypto industry and web development.
    </p>

    <div class="flex flex-col space-y-6 mt-10 relative z-10 w-full lg:w-fit">
      <router-link
        :to="{ name: 'covid-questionnaire' }"
        class="bg-button p-4 rounded-lg text-center w-full lg:w-btn shadow-lg text-gray-200"
      >
        Covid questionnaire
      </router-link>
      <router-link
        :to="{ name: 'movie-quotes' }"
        class="bg-button p-4 rounded-lg w-full lg:w-btn shadow-lg text-center text-gray-200"
      >
        Epic movie quotes
      </router-link>

      <router-link
        :to="{ name: 'fortchain-finance' }"
        class="bg-button p-4 rounded-lg text-center w-full lg:w-btn shadow-lg text-gray-200"
        >Fortchain finance</router-link
      >
      <router-link :to="{name: 'cv-generator'}" class="bg-button p-4 text-center rounded-lg w-full lg:w-btn shadow-lg text-gray-200">
        CV generator
      </router-link>
      <router-link
        :to="{ name: 'corona-time' }"
        class="bg-button p-4 text-center rounded-lg w-full lg:w-btn shadow-lg text-gray-200"
        >Coronatime</router-link
      >

      <a
        href="https://github.com/Heyosseus?tab=repositories"
        target="blank"
        class="bg-button p-4 rounded-lg text-center w-full lg:w-btn shadow-lg text-gray-200"
      >
        Others
      </a>
    </div>
    <img src="../assets/right.png" alt="" class="absolute right-0 top-40 z-0 lg:w-fit w-32" />
    <img src="../assets/Intersect.png" alt="" class="absolute bottom-0 left-0 z-0 lg:w-fit w-80" />
  </div>
  <div class="relative">
    <teleport to="body">
      <router-view></router-view>
    </teleport>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useRouter } from 'vue-router'

const router = useRouter()
const registerModal = ref(null)
const isMovieQuotesModalOpen = ref(false)

onClickOutside(registerModal, () => {
  isMovieQuotesModalOpen.value = false
  router.push('/')
})
</script>
