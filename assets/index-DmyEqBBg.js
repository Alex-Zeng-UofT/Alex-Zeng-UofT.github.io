function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-C-PnXEl7.js","assets/index-Dp9vaq2G.js","assets/index-DAmGPYGG.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Dp9vaq2G.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-C-PnXEl7.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
