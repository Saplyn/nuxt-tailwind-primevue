<template>
  <div>
    <Button>uwu</Button>
    <InputText v-model="value" placeholder="Search" />
    <div class="w-10 h-10 bg-slate-500">a</div>
    <div class="w-10 h-10 bg-primary-500">a</div>
  </div>
</template>

<script lang="ts" setup>
const value = ref("");
</script>
