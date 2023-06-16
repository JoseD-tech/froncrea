<script setup lang="ts">
useHead({
  title: 'Sistema Crea - UNELLEZ',
  meta: [
    { name: 'description', content: 'Sistema para la gestion de notas del DITED creado por DTSI' },
    { charset: 'utf-8'}
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/logo-unellez.svg' },
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

