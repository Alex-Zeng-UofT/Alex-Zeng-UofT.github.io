function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-D2QA1Poz.js","assets/index-pKDgK2bO.js","assets/index-DWI9udF-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-pKDgK2bO.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-D2QA1Poz.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
