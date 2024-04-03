function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DjLyr72E.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DIW2vxnt.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DjLyr72E.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
