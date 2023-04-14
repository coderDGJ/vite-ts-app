export default {
    mounted(el:HTMLImageElement){
     
      const observe = new IntersectionObserver((entries)=>{
        const {isIntersecting} = entries[0]   
        if(isIntersecting){
            el.src = el.dataset.src as string
            observe.unobserve(el)
        }
     })
     observe.observe(el)
    }
}