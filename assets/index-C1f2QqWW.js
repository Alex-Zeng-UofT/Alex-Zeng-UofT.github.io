function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-j5eG3RgZ.js","assets/index-DsDe4_4Y.js","assets/index-DXFoFm9C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DsDe4_4Y.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-j5eG3RgZ.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
