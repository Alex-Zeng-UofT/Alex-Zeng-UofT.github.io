function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-C0tGe90Q.js","assets/index-CYFJOmnd.js","assets/index-DWSiF_fI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CYFJOmnd.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-C0tGe90Q.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
