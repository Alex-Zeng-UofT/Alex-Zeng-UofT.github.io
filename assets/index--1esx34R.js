function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-BhrY9IHY.js","assets/index-C0EXnvsM.js","assets/index-gmUO0NGi.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-C0EXnvsM.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-BhrY9IHY.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
