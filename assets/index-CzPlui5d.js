function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CahckpRL.js","assets/index-BHu33pQw.js","assets/index-DXFoFm9C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BHu33pQw.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CahckpRL.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
