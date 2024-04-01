function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-z8D1bupA.js","assets/index-Bo2c8FCs.js","assets/index-Dq7do85a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Bo2c8FCs.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-z8D1bupA.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
