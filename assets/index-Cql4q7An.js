function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-jOx-EMQ3.js","assets/index-DStHyoKn.js","assets/index-BINi7toQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DStHyoKn.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-jOx-EMQ3.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
