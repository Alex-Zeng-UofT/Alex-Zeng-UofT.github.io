function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DP4NMfPS.js","assets/index-BlrhdDzz.js","assets/index-Cj7BLtnV.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BlrhdDzz.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DP4NMfPS.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
