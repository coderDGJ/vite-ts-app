<template>
  <div class="viewBox relative" ref='viewBoxRef' :style="{ '--rowHeigth': data.rowHeigth + 'px' }" @scroll="onScroll">
    <!-- 滚动条 -->
    <div class="scrllbar" ref="scrllbarRef"></div>
    <!-- 内容 -->
    <div class="list absolute left-0 top-0 w-[calc(100%)]" ref="listRef">
      <div class="row flex justify-center items-center" v-for="item in renderlist" :key="item as string">
        <slot :data="item"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type propsTyep = {
    dataList : unknown[],
    viewHeight:number, // 容器高度
    rowHeigth:number, // 单个元素高度（行高）
}
const props =defineProps<propsTyep>()

const viewBoxRef = ref<HTMLElement>() // 获取父盒子
const scrllbarRef = ref<HTMLElement>() //虚拟滚动条
const listRef = ref<HTMLElement>() // 列表容器

const data = reactive({
  dataList:props.dataList,
  start: 0,
  end: 0, //初始化
  viewHeight: props.viewHeight,// 容器高度
  rowHeigth: props.rowHeigth, // 单个元素高度（行高）
  rowNum: 0, // 单页面显示条数
})
function initData(){
  viewBoxRef.value!.style.height = data.viewHeight + 'px' // 复制容器高度
  data.rowNum = Math.ceil(data.viewHeight / data.rowHeigth) // 计算单页条数
  scrllbarRef.value!.style.height = data.dataList.length * data.rowHeigth + 'px' // 赋值虚拟滚动条
  data.start = 0 // 开始位置
  data.end = data.rowNum // 结束位置
}
function onScroll() {
  const scrollTop = viewBoxRef.value!.scrollTop
  // 判断触底防止抖动
  if (scrollTop > data.dataList.length * data.rowHeigth - data.viewHeight) return
  // 复制截取节点
  data.start = Math.round(scrollTop / data.rowHeigth)
  data.end = data.start + data.rowNum
  // 平移数据容器
  listRef.value!.style.transform = `translateY(${scrollTop}px)`;

}
onMounted(() => {
  initData() // 初始化数据
})

const renderlist = computed(() => {
  return data.dataList.slice(data.start, data.end)
})

</script>

<style scoped lang="less">
.viewBox {
  width: 300px;
  background-color: bisque;
  overflow: scroll;
}

.row {
  height: var(--rowHeigth);
  background-color: cadetblue;
  margin-bottom: 5px;

}
</style>