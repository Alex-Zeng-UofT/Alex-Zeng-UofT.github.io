function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CbvdG5NH.js","assets/index-Cg-6QtTh.js","assets/index-DWSiF_fI.css","assets/index-D8BaH2uH.js","assets/index-BbFYFhZ-.js","assets/index-DIpLRXCI.js","assets/index-BlkuyFFs.js","assets/index-7HvVCiAQ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Cg-6QtTh.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CbvdG5NH.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D8BaH2uH.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BbFYFhZ-.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DIpLRXCI.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BlkuyFFs.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-7HvVCiAQ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
