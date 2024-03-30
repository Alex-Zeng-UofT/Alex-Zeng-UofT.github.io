function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-Cc_xr0-k.js","assets/index-Dus5H_0b.js","assets/index-Dcy-N29S.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Dus5H_0b.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-Cc_xr0-k.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
