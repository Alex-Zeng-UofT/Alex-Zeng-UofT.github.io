function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-QnpqearP.js","assets/index-DgzJoqq5.js","assets/index-CyW1Y3Q3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DgzJoqq5.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-QnpqearP.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
