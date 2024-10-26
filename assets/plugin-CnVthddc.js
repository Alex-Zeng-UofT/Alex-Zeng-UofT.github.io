function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-GOtcSyIX.js","assets/index-s3Tnz3cv.js","assets/index-CkfoOWYk.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-s3Tnz3cv.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-GOtcSyIX.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
