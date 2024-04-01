function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DvjYBgcD.js","assets/index-Bo2c8FCs.js","assets/index-Dq7do85a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Bo2c8FCs.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DvjYBgcD.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
