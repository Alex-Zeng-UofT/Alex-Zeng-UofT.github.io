function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-CQ4gNapd.js","assets/index-CKuVoElR.js","assets/index-DS_731BA.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-CKuVoElR.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-CQ4gNapd.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
