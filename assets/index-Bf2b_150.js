function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-x53xJiaj.js","assets/index-BQGsk1NK.js","assets/index-CTREhXDy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BQGsk1NK.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-x53xJiaj.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
