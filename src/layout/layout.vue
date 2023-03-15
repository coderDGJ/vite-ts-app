<script setup lang="ts">
import { RouterView,useRouter } from 'vue-router'
const router = useRouter()
const routeList = router.options.routes.filter(item => !item.redirect)
</script>
<template>
    <el-container>
      <el-header height="80px"></el-header>
      <el-container>
        <!--菜单-->
        <el-aside width="200px">
        <el-menu :router="true" :default-active="$route.path">
          <div v-for="item in routeList" :key='item.name'>
            <el-sub-menu v-if="item.children" index="item.path">
               <template #title>
                <span>{{item.name}}</span>
               </template>
               <el-menu-item v-for="items in item.children"  :index="items.path" :key="items.name">
          <span>{{items.name}}</span>
            </el-menu-item>
            </el-sub-menu>
            <el-menu-item  v-if="!item.children" :index="item.path">
          <span>{{item.name}}</span>
            </el-menu-item>
          </div>
      </el-menu></el-aside>
        <el-main>
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
</template>

<style lang="less" scoped>
   
</style>
