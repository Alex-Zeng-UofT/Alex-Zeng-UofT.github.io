function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CXQK2UDN.js","assets/index-CUzQxRnP.js","assets/index-R3w0TolE.css","assets/index-BPmRkDIr.js","assets/index-Ctfsf600.js","assets/index-B8cL3AGX.js","assets/index-CwUn1Lu2.js","assets/index-Dn-xL7R_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CUzQxRnP.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CXQK2UDN.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BPmRkDIr.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Ctfsf600.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B8cL3AGX.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CwUn1Lu2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Dn-xL7R_.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
