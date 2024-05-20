function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CR2Bk6Ip.js","assets/index-yn4yylSs.js","assets/index-BINi7toQ.css","assets/index-D_h7jq8w.js","assets/index-Cw4zB7JB.js","assets/index-smhzKlzw.js","assets/index-nbzMHQDC.js","assets/index-DWo1i7XQ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-yn4yylSs.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CR2Bk6Ip.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D_h7jq8w.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cw4zB7JB.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-smhzKlzw.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-nbzMHQDC.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DWo1i7XQ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
