import sparkMd5 from 'spark-md5'

const createChunks = (file: File, onceSize: number) => {
    const chunksList: Blob[] = []
    for (let i = 0; i <= file.size; i += onceSize) {
        chunksList.push(file.slice(i, i + onceSize))
    }
    return  makerHash(chunksList)
}
const makerHash = (fileList: Blob[]) => {
    const md5 = new sparkMd5()
    const fileRender = new FileReader()
   return new Promise((resolve)=>{
    function read(num: number) {
        if(num >= fileList.length){
            resolve(md5.end())
           return 
        }
        fileRender.onload=(e)=>{
         md5.append(e.target?.result as string)
         read(num+1)
        }
        fileRender.readAsArrayBuffer(fileList[num])
       }
       read(0)
   })
}
export default () => {
    return {
        createChunks
    }
}