function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-DPNAvtqs.js","assets/PolygonDrawerBase-MRU-1Q6z.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css","assets/TriangleDrawer-CGsP9pjY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./index-DIW2vxnt.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-DPNAvtqs.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-CGsP9pjY.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
