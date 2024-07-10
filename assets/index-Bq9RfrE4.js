function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-BszGXlpi.js","assets/index-1De99QGE.js","assets/index-C1QYe0j-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-1De99QGE.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-BszGXlpi.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
