<template>
  <a
    :href="href"
    target="_blank"
    class="px-8 py-3 rounded-md bg-red-400 text-white"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
