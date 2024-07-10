function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-rEL9vjG6.js","assets/index-1De99QGE.js","assets/index-C1QYe0j-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-1De99QGE.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-rEL9vjG6.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
