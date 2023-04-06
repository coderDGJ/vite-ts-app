<template>
  <div>
    <div id="element-to-export" style="width: 500px;border-bottom:1px solid #333 ; ">
      <div @click="leadingOut"
        style="background-color: blue;color: #fff;cursor:pointer; text-align: center; width: 500px;">导出</div>
      <div style="height: 200px;overflow-y: scroll;" class="pdf flex flex-col items-center" ref="itemContent">
        <span class="item" v-for="item in 100" :key="item">
          我是选项{{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import jsPDF from 'jspdf'
import html2Canvas from 'html2canvas'

const leadingOut = () => {
  const cloneNode: HTMLDivElement | any = document.getElementsByClassName('pdf')[0].cloneNode(true)
  cloneNode.style.overflowY = 'auto'
  cloneNode.style.height = 'auto'
  document.body.appendChild(cloneNode)
  html2Canvas(cloneNode, {
    scale: 1,
    width: cloneNode.offsetWidth,
    height: cloneNode.offsetHeight,
    allowTaint: true,
    useCORS: true,
  }).then(canvas => {
    const { height:canvasHeight ,width:canvasWidth  } = canvas
    const base64URL = canvas.toDataURL('image/jpeg')
    let pdf = new jsPDF('p', 'mm', 'a4');
    const pageInfo = pdf.internal.pageSize; //页面信息
    const pageHeight = pageInfo.getHeight(); //页面高度
    const pageWidth = pageInfo.getWidth();//页面宽度
    console.log(pageWidth , canvasWidth)
    const scale = +Math.min(pageHeight / canvasHeight , pageWidth / canvasWidth).toFixed(2) // 缩放比例
    console.log(scale)
    pdf.addImage(canvas,'PNG',0,0 , canvasWidth * scale , canvasHeight * scale) 
    pdf.save('out.pdf')
    document.body.removeChild(cloneNode)
  })

}
</script>

<style lang="scss" scoped></style>