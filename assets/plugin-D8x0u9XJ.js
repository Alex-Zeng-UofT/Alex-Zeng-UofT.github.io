function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-BBKRZXA2.js","assets/index-B_WvZqww.js","assets/index-Cii1wOb7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-B_WvZqww.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-BBKRZXA2.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
