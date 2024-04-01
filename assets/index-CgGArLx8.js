function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-C7c12V64.js","assets/index-Bo2c8FCs.js","assets/index-Dq7do85a.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Bo2c8FCs.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-C7c12V64.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
