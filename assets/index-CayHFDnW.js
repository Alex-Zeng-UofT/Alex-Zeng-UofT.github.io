function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-54jbY1p3.js","assets/index-BCzWxlvc.js","assets/index-q2YXsJLi.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-BCzWxlvc.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-54jbY1p3.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
