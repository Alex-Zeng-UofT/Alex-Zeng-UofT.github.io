function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-B5ygH1pH.js","assets/index-BTZSDph9.js","assets/index-CdcA0VCb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BTZSDph9.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-B5ygH1pH.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
