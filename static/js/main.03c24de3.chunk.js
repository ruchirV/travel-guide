(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(34),o=a.n(i),c=(a(47),a(8)),l=a(9),s=a(12),m=a(10),u=a(13),h=a(36),d=a(102),p=a(104),g=(a(48),function(e){var t=e.search,a=e.onSearchChange;return r.a.createElement("div",null,r.a.createElement("div",{className:"searchBox pa2"},r.a.createElement("form",null,r.a.createElement("input",{id:"userInput",className:"search tc bg-lightest-purple",type:"search",placeholder:"search countries...",style:{display:"block",margin:"auto",border:"1px solid white",borderRadius:"30px",height:"45px",outline:"none"},value:t,onChange:function(e){return a(e)}}))))}),v=(a(49),function(e){var t={backgroundImage:"url(".concat(e.countryData.flag,")"),backgroundSize:"200px auto",backgroundRepeat:"no-repeat",backgroundPosition:"center",cursor:"pointer"};return r.a.createElement("div",{style:t,className:"card"},e.countryData.name)}),f=(a(20),a(23)),b=function(e){var t=e.region,a=e.countries,n=e.search,i=e.onSearchChange,o=(e.flagList,a.filter(function(e){return e.region===t&&e.name.toLowerCase().includes(n)}).map(function(e){return r.a.createElement(f.a,{key:e.name,to:"/travel-guide/detail/".concat(e.name)},r.a.createElement(v,{countryData:e}))}));return r.a.createElement("div",{className:"centerFlex",style:{backgroundImage:"url(https://images.unsplash.com/photo-1498831624351-bb3e382fe091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)"}},r.a.createElement(g,{onSearchChange:i,search:n}),r.a.createElement("div",{className:"tc bg-black-60  code dib br3 pb1 ma3 bw2 shadow-5 region"},r.a.createElement("h2",null,t),r.a.createElement("ul",{className:"list"},o),r.a.createElement(f.a,{className:"f6 link dim br-pill ph4 pv2 mb2 dib black bg-white",to:"/travel-guide"},"BACK")))},w={image:{Africa:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Africa_%28orthographic_projection%29.svg/550px-Africa_%28orthographic_projection%29.svg.png",Americas:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Americas_%28orthographic_projection%29.svg/1200px-Americas_%28orthographic_projection%29.svg.png",Asia:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Asia_%28orthographic_projection%29.svg/220px-Asia_%28orthographic_projection%29.svg.png",Europe:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg/220px-Europe_orthographic_Caucasus_Urals_boundary_%28with_borders%29.svg.png",Oceania:"https://upload.wikimedia.org/wikipedia/commons/c/c2/BK_Oceania_%28orthographic_projection%29.png",Polar:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Antarctica_%28orthographic_projection%29.svg/250px-Antarctica_%28orthographic_projection%29.svg.png"}},E=function(e){function t(e){var a,n=e.name,r=e.countryList;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).handleOnClick=function(){a.setState({redirect:!0})},a.displayCountries=function(){for(var e=[],t=a.state.countries.length>10?10:a.state.countries.length,n=0;n<t;n++)e.push(a.state.countries[n]);return e},a.state={countries:r.sort(function(e,t){return t.population-e.population}).map(function(e){return e.name}),region:n,path:"/travel-guide/".concat(n.toLowerCase())},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tc bg-white-90  code dib br3 pb1 ma3 grow bw2 shadow-5 region-card",onClick:this.handleOnClick},r.a.createElement("img",{src:w.image[this.state.region],className:"h3 p0 w3 dib",alt:""}),r.a.createElement("h2",{className:"h2black"},this.state.region),r.a.createElement("div",{className:"ph4 mb3"},this.displayCountries().join(", ")),r.a.createElement(f.a,{className:"f6 link dim br-pill ph4 pv2 mb2 dib white bg-black",to:"".concat(this.state.path)},"View More"))}}]),t}(r.a.Component),k=function(e){var t=e.countries,a=e.regions.map(function(e,a){var n=t.filter(function(t){return t.region===e});return r.a.createElement(E,{key:a,name:e,countryList:n})});return r.a.createElement("div",{className:"centerFlex"}," ",a," ")},C=a(101),N=a(35),y=a.n(N),x=(a(52),function(){return r.a.createElement("header",{className:"white-80 tc pv4 header pb7 "},r.a.createElement("h1",{className:"mt2 mb3  headertext","data-aos":"fade-down","data-aos-duration":"5000"},r.a.createElement(f.a,{to:"/travel-guide"},"Travel Guide")),r.a.createElement("div",{"data-aos":"fade-up","data-aos-duration":"7000"},r.a.createElement(f.a,{to:"/travel-guide"},r.a.createElement("img",{src:y.a,className:"App-logo",alt:"logo"}))),r.a.createElement("nav",{className:"bt bb tc center mt4 nav"},r.a.createElement(C.a,{to:"/travel-guide",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Home"),r.a.createElement(C.a,{to:"/travel-guide/africa",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Africa"),r.a.createElement(C.a,{to:"/travel-guide/americas",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Americas"),r.a.createElement(C.a,{to:"/travel-guide/asia",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Asia"),r.a.createElement(C.a,{to:"/travel-guide/europe",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Europe"),r.a.createElement(C.a,{to:"/travel-guide/oceania",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Oceania"),r.a.createElement(C.a,{to:"/travel-guide/polar",activeClassName:"is-active",className:"f6 f5-l link bg-animate white-80 hover-bg-red b dib pa3 ph4-l"},"Polar")))}),j=function(){return r.a.createElement("div",null,r.a.createElement("footer",{style:{backgroundColor:"black"},className:"tc-l bg-center cover bg-purple"},r.a.createElement("div",{className:"w-100 ph2 pv2 bg-black-80"},r.a.createElement("a",{className:"link white-60 bg-transparent hover-white  inline-flex items-center ma2 tc br2 pa2",href:"https://www.facebook.com/zerotocodemastery/",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0",fillRule:"nonzero"})),r.a.createElement("span",{className:"f6 ml3 pr2"},"Facebook")),r.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://github.com/zero-to-mastery",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"})),r.a.createElement("span",{className:"f6 ml3 pr2"},"GitHub")),r.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://www.instagram.com/andreineagoie/",title:"Instagram",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"})),r.a.createElement("span",{className:"f6 ml3 pr2"},"Instagram")),r.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://www.youtube.com/channel/UCt7T2EvYBqvlxNU3fbE4Y7g",title:"youtube",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:"dib w2 h2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z"})),r.a.createElement("span",{className:"f6 ml3 pr2"},"Youtube")),r.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center ma2 tc br2 pa2",href:"https://twitter.com/AndreiNeagoie",title:"Twitter",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:"dib h2 w2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z",fillRule:"nonzero"})),r.a.createElement("span",{className:"f6 ml3 pr2"},"Twitter")))))},_=a(38),L=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement(_.PulseLoader,{color:"#1eaedb",size:25,margin:"3px"}))},O=a(103),S=a(39),A=a.n(S),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={details:null},a.componentDidMount=function(){var e=a.props.match.params.id;A.a.get("https://restcountries.eu/rest/v2/name/".concat(e)).then(function(t){"india"===e.toLowerCase()?a.setState({details:t.data[1]}):a.setState({details:t.data[0]})})},a.renderDetail=function(){var e=a.state.details;return e?r.a.createElement("div",{className:"region-details"},r.a.createElement("img",{alt:e.region,src:e.flag,height:"100",width:"200"}),r.a.createElement("h1",null,a.props.match.params.id),r.a.createElement("h3",null,"Population"),r.a.createElement("p",null,e.population.toLocaleString()),r.a.createElement("h3",null,"Capital"),r.a.createElement("p",null,e.capital),r.a.createElement("h3",null,"Call Code"),r.a.createElement("p",null,e.callingCodes),r.a.createElement("h3",null,"Region"),r.a.createElement("p",null,e.region),r.a.createElement("h3",null,"Native"),r.a.createElement("p",null,e.demonym),r.a.createElement("h3",null,"Currencies"),r.a.createElement("p",null,e.currencies.map(function(e){return"".concat(e.name," (").concat(e.code,")")}).join(", ")),r.a.createElement("h3",null,"Time Zone(s)"),r.a.createElement("p",null,e.timezones.join(", ")),r.a.createElement(f.a,{className:"f6 link dim br-pill ph4 pv2 mb2 dib white bg-purple",to:"/travel-guide/".concat(e.region.toLowerCase())},"BACK")):r.a.createElement(L,null)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"centerflex"},r.a.createElement("div",{className:"tc bg-white-90 code dib br3 pb1 mt3 mb3 bw2 shadow-5 region"},this.renderDetail()))}}]),t}(r.a.Component),z=Object(O.a)(R),M=function(e){var t=["/travel-guide/africa","/travel-guide/americas","/travel-guide/asia","/travel-guide/europe","/travel-guide/oceania","/travel-guide/polar"].map(function(t,a){return r.a.createElement(h.a,{key:a,path:t,render:function(){return r.a.createElement(b,{onSearchChange:e.onSearchChange,search:e.state.searchField,region:e.state.regionList[a],countries:e.state.countries,flags:e.state.flagList,names:e.state.contryList})}})});return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/travel-guide",exact:!0,render:function(){return r.a.createElement(k,{countries:e.state.countries,regions:e.state.regionList})}}),t,r.a.createElement(h.a,{exact:!0,path:"/travel-guide/detail/:id",render:function(){return r.a.createElement(z,{flags:e.state.flagList,countries:e.state.countries})}})),r.a.createElement(j,null)))},B=(a(99),a(33),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).findUniqRegions=function(e){return Array.from(new Set(e.filter(function(e){return""!==e}).sort()))},a.onSearchChange=function(e){a.setState({searchField:e.target.value.toLowerCase()})},a.state={regionList:[],countryList:[],flagList:[],countries:[],searchField:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then(function(e){return e.json()}).then(function(t){var a=[],n=[],r=[];t.map(function(e,t){var i=e.region,o=e.name,c=e.flag;return a.push(i),n.push(o),r.push(c)}),e.setState({countries:t}),e.setState({regionList:e.findUniqRegions(a)}),e.setState({countryList:n}),e.setState({flagList:r})})}},{key:"render",value:function(){return r.a.createElement(M,{onSearchChange:this.onSearchChange,state:this.state})}}]),t}(n.Component)),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/travel-guide",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/travel-guide","/service-worker.js");D?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):F(e)})}}()},20:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/Globe.d8c3acbd.svg"},41:function(e,t,a){e.exports=a(100)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},99:function(e,t,a){}},[[41,1,2]]]);
//# sourceMappingURL=main.03c24de3.chunk.js.map