<template>
    <el-upload
      v-model:file-list="fileList"
      list-type="picture-card"
      :on-remove="handleRemove"
      :http-request="handleHttpRequest"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>

  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { Plus } from '@element-plus/icons-vue'
  import type { UploadProps, UploadUserFile } from 'element-plus'
  import useFileSlice from '@/hook/userFileSlice'
  const { createChunks } = useFileSlice()
  const fileList = ref<UploadUserFile[]>([
  ])
  
  const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
  }
  const handleHttpRequest:UploadProps['httpRequest'] =async (options)=>{
   const res =await createChunks(options.file,10000)
   console.log(res)
    return Promise.resolve()
  } 
  </script>
  