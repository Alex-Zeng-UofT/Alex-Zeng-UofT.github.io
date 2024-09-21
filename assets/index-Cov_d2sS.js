function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-B7RqyFj5.js","assets/index-D16bdUKI.js","assets/index-CkfoOWYk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D16bdUKI.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-B7RqyFj5.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
