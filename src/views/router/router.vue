<template>
    <div class="w-[calc(100%)] h-50px">router-learn</div>
    <div class="w-[calc(100%)] h-[calc(100%-50px)] border border-gray-400">
      <RouterView/>
    </div>
</template>

<script setup lang="ts">
import { RouterView} from 'vue-router'
</script>

<style lang="less" scoped>
</style>