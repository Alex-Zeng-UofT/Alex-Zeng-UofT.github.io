function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-S25C8ODv.js","assets/index-CYFJOmnd.js","assets/index-DWSiF_fI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CYFJOmnd.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-S25C8ODv.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
