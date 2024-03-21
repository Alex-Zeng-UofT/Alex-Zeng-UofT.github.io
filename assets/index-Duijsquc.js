function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-HFkBsBix.js","assets/index-Ck6guYk-.js","assets/index-C-B9UtFt.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Ck6guYk-.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-HFkBsBix.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
