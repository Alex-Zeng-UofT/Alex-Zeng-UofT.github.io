function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-ByxYDd87.js","assets/index-CUzQxRnP.js","assets/index-R3w0TolE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CUzQxRnP.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-ByxYDd87.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
