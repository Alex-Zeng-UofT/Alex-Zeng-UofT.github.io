function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DaLv0SNf.js","assets/index-BTZSDph9.js","assets/index-CdcA0VCb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BTZSDph9.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DaLv0SNf.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
