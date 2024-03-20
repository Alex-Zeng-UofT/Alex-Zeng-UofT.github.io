function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-D7BDLISZ.js","assets/index-VS3nXEiB.js","assets/index-DF4efyE-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-VS3nXEiB.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-D7BDLISZ.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
