function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-IPHpIPU9.js","assets/index-fqPVLL3I.js","assets/index-BcUajMD1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-fqPVLL3I.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-IPHpIPU9.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
