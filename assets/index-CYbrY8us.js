function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-wMZAAAWc.js","assets/index-DBVudp8O.js","assets/index-qqsKf9wA.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DBVudp8O.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-wMZAAAWc.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
