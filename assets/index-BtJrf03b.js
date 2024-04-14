function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CCCPIkIJ.js","assets/index-q6A_B75j.js","assets/index-AKXYA6Ub.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-q6A_B75j.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CCCPIkIJ.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
