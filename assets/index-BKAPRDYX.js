function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BoCFS9zs.js","assets/index-DBVudp8O.js","assets/index-qqsKf9wA.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DBVudp8O.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BoCFS9zs.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
