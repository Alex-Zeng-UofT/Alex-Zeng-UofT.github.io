function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-_SOXX63Y.js","assets/index-BAGo4rY6.js","assets/index-B_L-9jsh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BAGo4rY6.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-_SOXX63Y.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
