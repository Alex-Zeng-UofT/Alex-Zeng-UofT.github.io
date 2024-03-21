function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bouncer-DvYgDwmN.js","assets/index-2xYE1IkD.js","assets/index-IyFxZIeA.css","assets/Ranges-DvpbWcq3.js","assets/ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-2xYE1IkD.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-DvYgDwmN.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};
