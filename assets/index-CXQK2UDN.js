function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-VnXnAuOy.js","assets/index-CUzQxRnP.js","assets/index-R3w0TolE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CUzQxRnP.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-VnXnAuOy.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
