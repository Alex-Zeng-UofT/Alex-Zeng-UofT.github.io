function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-CAgDnSiy.js","assets/index-Bna6mzLl.js","assets/index-BQZcQSBp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Bna6mzLl.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-CAgDnSiy.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
