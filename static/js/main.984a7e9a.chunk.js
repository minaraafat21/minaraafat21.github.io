(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(19).concat([function(e,t,a){e.exports=a.p+"static/media/Eduokee.fa63b6ae.svg"},,function(e,t,a){e.exports=a.p+"static/media/Eduokee.fa63b6ae.svg"},,,function(e,t,a){e.exports=a(68)},,,,,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(14),c=a.n(r),s=(a(32),a(6)),o=a(4),i=a(71);const m="a1ed86ec4b344fff8c143015130da85d",u="".concat("https://accounts.spotify.com/authorize?","client_id=").concat(m,"&redirect_uri=").concat("https://eduokee.me","&scope=").concat(["user-library-read","playlist-read-private","ugc-image-upload"].join("%20"),"&response_type=token&show_dialog=true"),d=i.a.create({baseURL:"https://api.spotify.com/v1/"}),v=e=>{d.interceptors.request.use(async function(t){return t.headers.Authorization="Bearer "+e,t})};d.interceptors.response.use(e=>e,e=>(e.response&&401===e.response.status&&(localStorage.removeItem("token"),localStorage.removeItem("access_token")),Promise.reject(e)));var g=d,h=(a(37),a(0));a(38);a(39);function p(){const[e,t]=l.a.useState(null);Object(n.useEffect)(()=>{g.get("/me/playlists").then(function(e){t(e.data.items)})},[]),Object(n.useEffect)(()=>{g.get("/me/tracks").then(function(e){console.log(e.data.items)})},[]);const[a,r]=l.a.useState(null);Object(n.useEffect)(()=>{g.get("/me/tracks",{params:{limit:50}}).then(function(e){r(e.data.items.map(e=>e.track))})},[]);const c=Object(o.o)();return l.a.createElement("div",{className:"library-body"},null===a||void 0===a?void 0:a.map(e=>l.a.createElement("div",{className:"track-card",onClick:()=>(e=>{c("/player",{state:{id:e}})})(e.id)},l.a.createElement("img",{src:e.album.images[0].url,className:"playlist-image-track",alt:"playlist"}),l.a.createElement("p",{className:"playlist-name"},e.name))))}var E=a(16),f=a(15);function y(){const[e,t]=l.a.useState(null);Object(n.useEffect)(()=>{g.get("/me/playlists").then(function(e){t(e.data.items)})},[]);const a=Object(o.o)();return l.a.createElement("div",{className:"screen-container"},l.a.createElement("div",{className:"library-body"},l.a.createElement("div",{className:"playlist-row"},l.a.createElement(f.a,{size:50,color:"white"}),l.a.createElement("div",{className:"playlists"},null===e||void 0===e?void 0:e.map(e=>l.a.createElement("div",{className:"playlist-card",onClick:()=>(e=>{a("/player",{state:{id:e}})})(e.id)},l.a.createElement("img",{src:e.images[0].url,className:"playlist-image",alt:"playlist"}),l.a.createElement("div",{className:"playlist-fade"}),l.a.createElement("p",{className:"playlist-name"},e.name))))),l.a.createElement("div",{className:"fav"},l.a.createElement(E.a,{size:50,color:"white"}),l.a.createElement(p,null))))}a(40),a(41);function b(e){let{url:t}=e;return l.a.createElement("div",{className:"albumImage flex"},l.a.createElement("img",{src:t,alt:"album art",className:"albumImage-art"}),l.a.createElement("div",{className:"albumImage-shadow"},l.a.createElement("img",{src:t,alt:"shadow",className:"albumImage-shadow"})))}a(42);function w(e){var t;let{album:a}=e;const n=(null===a||void 0===a?void 0:null===(t=a.artists)||void 0===t?void 0:t.map(e=>e.name))||[];return l.a.createElement("div",{className:"albumInfo-card"},l.a.createElement("div",{className:"albumName-container"},l.a.createElement("div",{className:"marquee"},l.a.createElement("p",null,(null===a||void 0===a?void 0:a.name)+" - "+(null===n||void 0===n?void 0:n.join(", "))))),l.a.createElement("div",{className:"album-info"},l.a.createElement("p",null,"".concat(null===a||void 0===a?void 0:a.name," is an ").concat(null===a||void 0===a?void 0:a.album_type," by ").concat(null===n||void 0===n?void 0:n.join(", ")," with ").concat(null===a||void 0===a?void 0:a.total_tracks," track(s)"))),l.a.createElement("div",{className:"album-release"},l.a.createElement("p",null,"Release Date: ",null===a||void 0===a?void 0:a.release_date)))}a(43);function k(e){var t;let{album:a}=e;return l.a.createElement("div",{className:"songCard-body flex"},l.a.createElement(b,{url:null===a||void 0===a?void 0:null===(t=a.images[0])||void 0===t?void 0:t.url}),l.a.createElement(w,{album:a}))}a(44);function N(e){let{tracks:t,setCurrentIndex:a}=e;return l.a.createElement("div",{className:"queue-container flex"},l.a.createElement("div",{className:"queue flex"},l.a.createElement("p",{className:"upNext"},"Up Next"),l.a.createElement("div",{className:"queue-list"},(null===t||void 0===t?void 0:t.length)>1&&(null===t||void 0===t?void 0:t.map((e,t)=>{var n;return l.a.createElement("div",{key:t+"key",className:"queue-item flex",onClick:()=>a(t)},l.a.createElement("p",{className:"track-name"},null===e||void 0===e?void 0:null===(n=e.track)||void 0===n?void 0:n.name),l.a.createElement("p",null,"0:30"))})))))}a(45),a(46);var I=a(12),j=a(8);function x(e){let{isPlaying:t,setIsPlaying:a,handleNext:n,handlePrev:r}=e;return l.a.createElement(h.b.Provider,{value:{size:"25px",color:"#C4D0E3"}},l.a.createElement("div",{className:"controls-wrapper "},l.a.createElement("div",{className:"action-btn flex",onClick:r},l.a.createElement(j.b,null)),l.a.createElement("div",{className:t?"play-pause-btn flex active":"play-pause-btn flex",onClick:()=>a(!t)},t?l.a.createElement(I.a,null):l.a.createElement(j.a,null)),l.a.createElement("div",{className:"action-btn flex",onClick:n},l.a.createElement(j.c,null))))}a(47);const O=e=>{let{color:t,percentage:a,size:n,strokeWidth:r,isPlaying:c}=e;const s=n/2-10,o=2*Math.PI*s-20,i=(100-Math.round(a))*o/100;return l.a.createElement("circle",{r:s,cx:"50%",cy:"50%",fill:"transparent",stroke:i!==o?t:"",strokeWidth:r,strokeDasharray:o,strokeDashoffset:c?a?i:0:o,strokeLinecap:"round"})};function C(e){let{percentage:t,isPlaying:a,setIsPlaying:n,size:r,color:c,image:s}=e;return l.a.createElement("div",{className:"progress-circle flex",onClick:()=>{n(!a)}},l.a.createElement("svg",{width:r,height:r},l.a.createElement("g",null,l.a.createElement(O,{strokeWidth:"0.4rem",color:"#3B4F73",size:r,isPlaying:a}),l.a.createElement(O,{strokeWidth:"0.6rem",color:c,percentage:t,size:r,isPlaying:a})),l.a.createElement("defs",null,l.a.createElement("clipPath",{id:"myCircle"},l.a.createElement("circle",{cx:"50%",cy:"50%",r:r/2-30,fill:"#FFFFFF"})),l.a.createElement("clipPath",{id:"myInnerCircle"},l.a.createElement("circle",{cx:"50%",cy:"50%",r:r/2-100,fill:"#FFFFFF"}))),l.a.createElement("image",{className:a?"active":"",x:30,y:30,width:2*(r/2-30),height:2*(r/2-30),href:"https://pngimg.com/uploads/vinyl/vinyl_PNG107.png",clipPath:"url(#myCircle)"}),l.a.createElement("image",{className:a?"active":"",x:100,y:100,width:2*(r/2-100),height:2*(r/2-100),href:s,clipPath:"url(#myInnerCircle)"})))}function S(e){var t,a,r,c,s,o,i,m;let{currentTrack:u,currentIndex:d,setCurrentIndex:v,total:g}=e;const[h,p]=Object(n.useState)(!1),[E,f]=Object(n.useState)(0);var y=g.length>1?null===(t=g[d])||void 0===t?void 0:null===(a=t.track)||void 0===a?void 0:a.preview_url:null===g||void 0===g?void 0:g.preview_url;console.log("curr",g),console.log("curr",u);const b=Object(n.useRef)(g.length>1?new Audio(null===(r=g[0])||void 0===r?void 0:null===(c=r.track)||void 0===c?void 0:c.preview_url):new Audio(null===g||void 0===g?void 0:g.preview_url)),w=Object(n.useRef)(),k=Object(n.useRef)(!1),{duration:N}=b.current,I=N?E/N*100:0,j=()=>{clearInterval(w.current),w.current=setInterval(()=>{b.current.ended?O():f(b.current.currentTime)},[1e3])};Object(n.useEffect)(()=>{b.current.src?h?(b.current.play().catch(e=>console.log(e)),j()):(clearInterval(w.current),b.current.pause()):h?(b.current=new Audio(y),b.current.play().catch(e=>console.log(e)),j()):(clearInterval(w.current),b.current.pause())},[h]),Object(n.useEffect)(()=>{b.current.pause(),b.current=new Audio(y),f(b.current.currentTime),k.current?(b.current.play().catch(e=>console.log("")),j()):k.current=!0},[d]),Object(n.useEffect)(()=>()=>{b.current.pause(),clearInterval(w.current)},[]);const O=()=>{p(!0),d<g.length-1?v(d+1):v(0)},S=[];return((null===u||void 0===u?void 0:null===(s=u.album)||void 0===s?void 0:s.artists)||(null===g||void 0===g?void 0:null===(o=g.album)||void 0===o?void 0:o.artists)||[]).forEach(e=>{S.push(e.name)}),l.a.createElement("div",{className:"player-body"},l.a.createElement("div",{className:"player-left-body"},l.a.createElement(C,{percentage:I,isPlaying:h,setIsPlaying:p,image:null===u||void 0===u?void 0:null===(i=u.album)||void 0===i?void 0:null===(m=i.images[0])||void 0===m?void 0:m.url,size:90,color:"#C96850"}),l.a.createElement("div",{className:"title"},console.log("currentTrack"),l.a.createElement("p",{className:"song-title"},(null===u||void 0===u?void 0:u.name)?u.name:null===g||void 0===g?void 0:g.name),l.a.createElement("p",{className:"song-artist"},S.join(" | ")))),l.a.createElement("div",{className:"player-right-body "},l.a.createElement(x,{isPlaying:h,setIsPlaying:p,handleNext:O,handlePrev:()=>{p(!0),v(d-1<0?g.length-1:d-1)},total:g})))}a(48),a(49);function P(e){let{title:t,lyrics:a}=e;return l.a.createElement("div",{className:"widgetcard-body"},l.a.createElement("p",{className:"widget-title"},t),l.a.createElement("div",{className:"lyrics-container"},a),l.a.createElement("div",{className:"widget-fade"},l.a.createElement("div",{className:"fade-button"})))}var F=a(17),_=a.n(F);const T=async(e,t,a)=>{try{a(function(e){const t=e.split("\n");return t[0].startsWith("Paroles")&&t.shift(),t.join("\n")}((await i.a.get("https://api.lyrics.ovh/v1/".concat(e,"/").concat(t))).data.lyrics))}catch(n){console.error("Error fetching lyrics:",n)}};function z(e){let{artistID:t,currentTrackName:a,artistName:r}=e;const[c,s]=Object(n.useState)("");Object(n.useEffect)(()=>{t&&a&&r&&T(r,a,s)},[t,a,r]);return l.a.createElement("div",{className:"widgets-body flex"},l.a.createElement(P,{title:"Lyrics",lyrics:(c.match(/\S+|\s+/g)||[]).map((e,t)=>/\S/.test(e)?l.a.createElement(_.a,{key:t},l.a.createElement("a",{className:"lyric-word",href:"https://www.google.com/search?q=".concat(e,"+definition"),target:"_blank",rel:"noopener noreferrer"},e)," "):l.a.createElement("span",{key:t},e))}))}a(62);function L(e){const t=Object(o.m)().pathname===e.to?"btnActive":"btnBody";return l.a.createElement(s.b,{to:e.to,onClick:e.onClick},l.a.createElement("div",{className:t},l.a.createElement(h.b.Provider,{value:{size:"24px",className:"btn"}},e.icon,l.a.createElement("p",{className:"btnTitle"},e.title))))}var W=a(18);function A(e,t){const a=Math.max(e.length,t.length);return 1-function(e,t){const a=[];for(let n=0;n<=e.length;n++)a[n]=[n];for(let n=0;n<=t.length;n++)a[0][n]=n;for(let n=1;n<=e.length;n++)for(let l=1;l<=t.length;l++){const r=e[n-1]===t[l-1]?0:1;a[n][l]=Math.min(a[n-1][l]+1,a[n][l-1]+1,a[n-1][l-1]+r)}return a[e.length][t.length]}(e,t)/a}function B(e,t){let a={similarity:0,startIndex:0};for(let n=0;n<=e.length-t.length;n++){const l=A(e.substring(n,n+t.length),t);l>a.similarity&&(a={similarity:l,startIndex:n})}return a}const D="Everybody loves the things you do\nFrom the way you talk\nTo the way you move\nEverybody here is watching you\nCause you feel like home\nYou're like a dream come true\nBut if by chance you're here alone\nCan I have a moment\nBefore I go?\nCause I've been by myself all night long\nHoping you're someone I used to know\n\nYou look like a movie\nYou sound like a song\nMy God, this reminds me\nOf when we were young\n\nLet me photograph you in this light\nIn case it is the last time\nThat we might be exactly like we were\nBefore we realized\nWe were sad of getting old\nIt made us restless\nIt was just like a movie\nIt was just like a song\n\nI was so scared to face my fears\nCause nobody told me that you'd be here\nAnd I swore you moved overseas\nThat's what you said, when you left me\n\nYou still look like a movie\nYou still sound like a song\nMy God, this reminds me\nOf when we were young\n\nLet me photograph you in this light\nIn case it is the last time\nThat we might be exactly like we were\nBefore we realized\nWe were sad of getting old\nIt made us restless\nIt was just like a movie\nIt was just like a song\n\nWhen we were young\n\nIt's hard to win me back\nEverything just takes me back\nTo when you were there\nAnd a part of me keeps holding on\nJust in case it hasn't gone\n\nI guess I still care\nDo you still care?\n\nIt was just like a movie\nIt was just like a song\nMy God, this reminds me\nOf when we were young\n\nWhen we were young\n\nLet me photograph you in this light\nIn case it is the last time\nThat we might be exactly like we were\nBefore we realized\nWe were sad of getting old\nIt made us restless\nI'm so mad I'm getting old\nIt makes me reckless\n\nIt was just like a movie\nIt was just like a song\nWhen we were young",q="Viewing this light in case it is the last time that we might be exactly like we were before we realized we were sad of getting old, it made us stress class..",{similarity:M,startIndex:R}=B(D,q);console.log("Similarity:",M),console.log("Start index:",R),console.log("Best matched portion:",D.substring(R,R+q.length));a(63);var Y=class extends l.a.Component{constructor(){super(...arguments),this.compareLyrics=((e,t)=>{const a=e.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").split(" "),n=t.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"").split(" ").reduce((e,t)=>(e[t]=(e[t]||0)+1,e),{});return a.map((e,t)=>{const a=n[e]>0;a&&n[e]--;const r=a;return l.a.createElement("span",{key:t,className:r?"correct":"incorrect"},e+" ")})})}render(){const{lyrics:e,transcript:t}=this.props;return l.a.createElement("div",null,this.compareLyrics(e,t))}};a(64);var G=e=>{let{score:t}=e;const a=2*Math.PI*50,n=a-t/100*a;return l.a.createElement("div",{className:"score-circle"},l.a.createElement("svg",{width:"120",height:"120"},l.a.createElement("circle",{className:"background",cx:"60",cy:"60",r:50,strokeWidth:"10"}),l.a.createElement("circle",{className:"progress",cx:"60",cy:"60",r:50,strokeWidth:"10",strokeDasharray:a,strokeDashoffset:n})),l.a.createElement("div",{className:"score"},t,"%"))};function U(){var e,t,a;const r=Object(o.m)(),[c,s]=Object(n.useState)([]),[i,m]=Object(n.useState)({}),[u,d]=Object(n.useState)(0),[v,h]=Object(n.useState)("");Object(n.useEffect)(()=>{var e;r.state&&g.get("playlists/"+(null===(e=r.state)||void 0===e?void 0:e.id)+"/tracks").then(e=>{var t,a,n,l;console.log(null===(t=e.data)||void 0===t?void 0:null===(a=t.items[0])||void 0===a?void 0:a.track),s(e.data.items),m(null===(n=e.data)||void 0===n?void 0:null===(l=n.items[0])||void 0===l?void 0:l.track)}).catch(e=>{var t;502===e.response.status&&(console.error("Error 502: Bad Gateway. Playing default track."),g.get("tracks/"+(null===(t=r.state)||void 0===t?void 0:t.id)).then(e=>{e.data&&(console.log("response "+e.data),m(e.data),s(e.data))}))})},[r.state]),Object(n.useEffect)(()=>{var e;m(null===(e=c[u])||void 0===e?void 0:e.track)},[u,c]),Object(n.useEffect)(()=>{var e;i&&T(null===i||void 0===i?void 0:null===(e=i.album)||void 0===e?void 0:e.artists[0].name,null===i||void 0===i?void 0:i.name,h)},[i]);const[p,E]=Object(n.useState)(""),[f,y]=Object(n.useState)("");Object(n.useEffect)(()=>{E(""),y("")},[i]);null===i||void 0===i||i.album;return l.a.createElement("div",{className:"screen-container "},l.a.createElement("div",{className:"player-container"},l.a.createElement("div",{className:"left-player-body"},l.a.createElement(z,{artistID:null===i||void 0===i?void 0:null===(e=i.album)||void 0===e?void 0:e.artists[0].id,currentTrackName:null===i||void 0===i?void 0:i.name,artistName:null===i||void 0===i?void 0:null===(t=i.album)||void 0===t?void 0:t.artists[0].name})),l.a.createElement("div",{className:"right-player-body"},l.a.createElement(k,{album:c.length>1?null===(a=c[u])||void 0===a?void 0:a.track.album:c.album}),l.a.createElement(N,{tracks:c,setCurrentIndex:d}),l.a.createElement(Y,{lyrics:(()=>{const{similarity:e,startIndex:t}=B(v,p);return[v.substring(t,t+p.length)]})().toString(),transcript:p}),l.a.createElement(G,{score:100*(()=>{const{similarity:e,startIndex:t}=B(v,p),a=parseFloat(e.toFixed(4));console.log("Similarity:",e);v.substring(t,t+p.length);return[a]})()}))),l.a.createElement("div",{className:"footer"},l.a.createElement(S,{currentTrack:i,total:c,currentIndex:u,setCurrentIndex:d}),l.a.createElement(L,{onClick:()=>{if("webkitSpeechRecognition"in window){const e=new window.webkitSpeechRecognition;e.lang="en-US",e.onresult=(e=>{const t=e.results[0][0].transcript;E(t)}),e.start(),setTimeout(()=>{e.stop()},3e4)}else alert("Your browser does not support speech recognition.")},icon:l.a.createElement(W.a,null)})))}function J(){return l.a.createElement("div",null,"trending")}function V(){return l.a.createElement("div",null,"feed")}a(65),a(66);var $=a(20),H=a(19),K=a.n(H);function Q(){const[e,t]=Object(n.useState)("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU");Object(n.useEffect)(()=>{g.get("me").then(e=>{t(e.data.images[0].url),console.log(e)}).catch(e=>{e.response&&401===e.response.status?console.log("Unauthorized error"):console.log("Error:",e)})},[]);const[a,r]=Object(n.useState)(!1),[c,o]=Object(n.useState)(!0);return l.a.createElement("div",{className:"sidebar-container"},l.a.createElement(s.b,{to:"/",className:"logo-container"},l.a.createElement("img",{src:K.a,alt:"logo"})),c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{src:e,className:"profile-picture",alt:"avatar",onClick:()=>{r(!a),o(!1)}})),a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sidebar-button"}),l.a.createElement(L,{title:"logout",icon:l.a.createElement($.a,null),onClick:()=>{window.localStorage.removeItem("token"),window.location.reload()}})))}var X=a(21),Z=a.n(X);a(67);function ee(){return l.a.createElement("div",{className:"login-page"},l.a.createElement("img",{src:Z.a,alt:"Logo",className:"eduokee"}),l.a.createElement(I.b,{className:"login-icon"}),l.a.createElement("a",{href:u},l.a.createElement("div",{className:"login-btn"},"Login with Spotify")))}function te(){const[e,t]=Object(n.useState)("");return Object(n.useEffect)(()=>{let e=window.localStorage.getItem("token");const a=window.location.hash;if(window.location.hash="",!e&&a){const e=a.split("&")[0].split("=")[1];window.localStorage.setItem("token",e),t(e),v(e)}e?(console.log(e),t(e),v(e)):console.log("No token found")},[]),e?l.a.createElement(s.a,null,l.a.createElement("div",{className:"main"},l.a.createElement(Q,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(y,null)}),l.a.createElement(o.a,{path:"/favorites",element:l.a.createElement(p,null)}),l.a.createElement(o.a,{path:"/player",element:l.a.createElement(U,null)}),l.a.createElement(o.a,{path:"/trending",element:l.a.createElement(J,null)}),l.a.createElement(o.a,{path:"/feed",element:l.a.createElement(V,null)})))):l.a.createElement(ee,null)}function ae(){return l.a.createElement("div",null,l.a.createElement(te,null))}var ne=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,72)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ae,null))),ne()}]),[[24,1,2]]]);
//# sourceMappingURL=main.984a7e9a.chunk.js.map