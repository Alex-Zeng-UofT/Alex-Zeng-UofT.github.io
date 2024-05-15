function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-DXss2cst.js","assets/index-BQGsk1NK.js","assets/index-CTREhXDy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BQGsk1NK.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-DXss2cst.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
