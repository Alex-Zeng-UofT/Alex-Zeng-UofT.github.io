function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-U8qja8ne.js","assets/index-VS3nXEiB.js","assets/index-DF4efyE-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-VS3nXEiB.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-U8qja8ne.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
