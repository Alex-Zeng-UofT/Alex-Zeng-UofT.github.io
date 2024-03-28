function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-dN4_Yf1u.js","assets/index-COYy7mx-.js","assets/index-DWI9udF-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-COYy7mx-.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-dN4_Yf1u.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
