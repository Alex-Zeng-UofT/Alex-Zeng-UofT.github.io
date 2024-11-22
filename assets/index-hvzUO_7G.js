function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-CeUq8pdJ.js","assets/index-C0EXnvsM.js","assets/index-gmUO0NGi.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-C0EXnvsM.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-CeUq8pdJ.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
