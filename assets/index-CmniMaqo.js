function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-ffC1Qorg.js","assets/index-1De99QGE.js","assets/index-C1QYe0j-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-1De99QGE.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-ffC1Qorg.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
