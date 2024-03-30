function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-ZG7Lx8IK.js","assets/index-Dus5H_0b.js","assets/index-Dcy-N29S.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Dus5H_0b.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-ZG7Lx8IK.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
