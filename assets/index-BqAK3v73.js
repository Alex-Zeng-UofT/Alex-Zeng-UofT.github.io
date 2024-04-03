function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-Cm1R-RNc.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DIW2vxnt.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-Cm1R-RNc.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
