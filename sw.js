if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/arco-vendor-Cf3bqOHg.js",revision:null},{url:"assets/en-US-BbG7TTMO.js",revision:null},{url:"assets/es-ES-B84ZyMHK.js",revision:null},{url:"assets/highlight-vendor-DIo35p1m.js",revision:null},{url:"assets/index-17qMyRl9.js",revision:null},{url:"assets/index-498_LrRy.css",revision:null},{url:"assets/react-vendor-xLx7qwmY.js",revision:null},{url:"assets/zh-CN-Bftww3fP.js",revision:null},{url:"index.html",revision:"e2e4f00a8837cd13c4bb237ced655778"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"6017208229886bea6bc7bb00b9adcccf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
