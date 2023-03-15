<template>
    <div>
    <virtualList :data-list="infoList" v-slot="scope" :view-height="viewHeight" :row-heigth="rowHeigth">
         {{scope.data}}
    </virtualList>
    </div>
</template>

<script setup lang="ts">
import virtualList from './components/virtualList.vue'
const infoList = new Array(200).fill(null).map((item, index) => `信息${index + 1}`) //海量数据
const viewHeight = ref(400) // 容器高度
const rowHeigth = ref(40) // 单一容器高度
</script>

<style scoped lang="less">

</style>