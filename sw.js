if(!self.define){let s,e={};const n=(n,r)=>(n=new URL(n+".js",r).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(r,i)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>n(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(r.map((s=>u[s]||t(s)))).then((s=>(i(...s),o)))}}define(["./workbox-e1498109"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/arco-vendor-DdXQm3Pa.js",revision:null},{url:"assets/en-US-BjEmnKCl.js",revision:null},{url:"assets/es-ES-CC2HsNx-.js",revision:null},{url:"assets/fr-FR-r8R92zj-.js",revision:null},{url:"assets/highlight-vendor-BJQ4Z1nc.js",revision:null},{url:"assets/index-CWXfwf_s.js",revision:null},{url:"assets/index-D5NkfaXJ.css",revision:null},{url:"assets/react-vendor-CGZXBkLX.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/zh-CN-DSEp2RO4.js",revision:null},{url:"index.html",revision:"2a2baf6230da905fc1b492df5899c2e9"},{url:"styles/loading.css",revision:"83707a709e3e73526a7e0a9095c59d3b"},{url:"manifest.webmanifest",revision:"6017208229886bea6bc7bb00b9adcccf"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
