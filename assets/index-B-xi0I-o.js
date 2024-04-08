function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-CjyJc4vy.js","assets/index-BHu33pQw.js","assets/index-DXFoFm9C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BHu33pQw.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-CjyJc4vy.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
