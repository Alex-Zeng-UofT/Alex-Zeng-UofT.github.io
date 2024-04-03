function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-CX6aakvv.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css","assets/CanvasUtils-z1wM3_VV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DIW2vxnt.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-CX6aakvv.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
