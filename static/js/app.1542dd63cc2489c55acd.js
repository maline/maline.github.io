webpackJsonp([0],{"/EKL":function(e,t,a){e.exports=a.p+"static/img/morgans.246c955.png"},"48a0":function(e,t,a){e.exports=a.p+"static/img/aldo.0936f48.jpg"},"9eb3":function(e,t){},BRHf:function(e,t,a){e.exports=a.p+"static/img/csswinner.82b204f.png"},C4pa:function(e,t){},Dkwc:function(e,t,a){e.exports=a.p+"static/img/pscu.b827188.png"},HSv0:function(e,t,a){var n={"./addy.png":"ZuF7","./awwwards.png":"h2mc","./bwda.png":"QOOB","./csswinner.png":"BRHf","./fitc.png":"uaqX","./fwa.png":"O1/7","./sxsw.png":"o/YR"};function i(e){return a(r(e))}function r(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="HSv0"},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home-view"},[this._m(0),this._v(" "),t("div",{staticClass:"home__contact--linkedin"},[t("a",{attrs:{href:"https://www.linkedin.com/in/malinenestrom/",target:"_blank"}},[t("svg",{attrs:{height:"43.3492mm",width:"43.3492mm","xml:space":"preserve",viewBox:"0 0 488 488"}},[t("g",{attrs:{id:"Layer_x0020_1"}},[t("g",{attrs:{id:"_445027624"}},[t("rect",{staticClass:"fil0",attrs:{height:"488",rx:"53",ry:"53",width:"488"}}),this._v(" "),t("path",{staticClass:"fil1",attrs:{d:"M329 389l61 0 0 0 0 -114c1,-15 -4,-39 -10,-52 -7,-14 -17,-23 -33,-28 -16,-5 -38,-6 -54,0 -12,4 -19,10 -27,19 -1,1 -2,2 -3,4 -1,1 -1,2 -2,2 -1,3 1,2 -2,2l0 -27 -57 0c-1,3 -1,192 0,195l59 0c1,-4 1,-80 1,-90 0,-30 3,-55 34,-56 33,-2 33,27 33,56 0,7 1,84 0,89zm-200 -290c-18,3 -33,18 -30,40 2,18 19,33 40,30 17,-3 32,-19 29,-40 -2,-17 -19,-33 -39,-30zm-25 291l59 0c1,-5 1,-41 1,-49 0,-47 0,-98 0,-145l-60 0 0 0 0 194z"}}),this._v(" "),t("path",{staticClass:"fil2",attrs:{d:"M261 390l-59 0c-1,-3 -1,-192 0,-195l54 0 -98 -86c6,5 9,12 10,20 3,21 -12,37 -29,40 -10,1 -19,-2 -26,-7l33 34 18 0c0,47 0,98 0,145 0,8 0,44 -1,49l-59 0 99 98 233 0 52 -52 0 -108 -116 -117c3,4 6,8 8,12 6,13 11,37 10,52l0 114 0 0 -61 0c1,-5 0,-82 0,-89 0,-29 0,-58 -33,-56 -31,1 -34,26 -34,56 0,10 0,86 -1,90z"}}),this._v(" "),t("path",{staticClass:"fil2",attrs:{d:"M270 210l-11 -11 0 23c3,0 1,1 2,-2l2 -2 3 -4c1,-2 2,-3 4,-4z"}})])])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"intro"},[this._v("Hello and welcome! I am Malin, a Swedish front-end web developer based in Los Angeles, with over 8 years of experience working in digital marketing. You can find some of my work below, download my resumé "),t("a",{attrs:{href:"https://drive.google.com/file/d/17weBRPSBbHNdPWWI-7Uyer7EFDfKDOVr/view?usp=sharing",target:"_blank"}},[this._v("here")]),this._v(", find me on "),t("a",{attrs:{href:"https://www.linkedin.com/in/malinenestrom/",target:"_blank"}},[this._v("Linkedin")]),this._v(" or "),t("a",{attrs:{href:"mailto:malin.enestrom@gmail.com"}},[this._v("get in touch")]),this._v(". You can also find me on the roller derby track where I bring the same intensity and passion that I bring to my life and career.")])}]};var r=a("VU/8")({name:"HomeView"},i,!1,function(e){a("C4pa")},null,null).exports,s={name:"AwardComponent",props:["type","prize"],data:function(){return{msg:"Award Component"}},computed:{imageClass:function(){return"award__image award__image--"+this.type},getImage:function(){return a("HSv0")("./"+this.type+".png")}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"award-component"},[a("div",{class:e.imageClass},[a("img",{attrs:{src:e.getImage}})]),e._v(" "),a("div",{staticClass:"award__prize",domProps:{innerHTML:e._s(e.prize)}},[e._v(e._s(e.prize))])])},staticRenderFns:[]};var c={name:"ProjectComponent",props:["name","description","imageSrc","awards"],data:function(){return{msg:"Project Component"}},components:{AwardComponent:a("VU/8")(s,o,!1,function(e){a("crxV")},null,null).exports},computed:{getImage:function(){return a("g2Y0")("./"+this.imageSrc)}}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project-component"},[a("div",{staticClass:"project__image-wrapper"},[a("img",{attrs:{src:e.getImage}})]),e._v(" "),a("div",{staticClass:"project__text-wrapper"},[a("div",{staticClass:"project__bg"},[a("svg",{attrs:{width:"2100",height:"554",viewBox:"0 0 2100 554"}},[a("path",{staticClass:"cls-1",attrs:{d:"M-2-.5v552L2099-.5H-2Z"}})])]),e._v(" "),a("div",{staticClass:"project__text-content"},[a("h2",[e._v(e._s(e.name))]),e._v(" "),a("p",{domProps:{innerHTML:e._s(e.description)}},[e._v(e._s(e.description))]),e._v(" "),e.awards?a("ul",{staticClass:"project__awards"},e._l(e.awards,function(e){return a("li",{key:e.index},[a("award-component",{attrs:{type:e.type,prize:e.prize}})],1)})):e._e()])])])},staticRenderFns:[]};var l={name:"PortfolioView",data:function(){return{projects:[{name:"Mountain Dew — Dewcision 2016",description:"For Mountain Dew’s Dewcision 2016 campaign, where the American people could vote for their favorite discontinued Mountain Dew flavor to return to store shelves, Firstborn created a fun and engaging voting experience. Leading front-end development, I used React and Redux to create a responsive, graphically stunning and modular website, while also assuring high performance integrating with an AWS back-end for real-time vote tallying and user-submitted content.",imageSrc:"dewcision.jpg"},{name:"Clash of Clans.com",description:'For Supercell, Firstborn developed <a href="https://clashofclans.com/" target="_blank">ClashOfClans.com</a>, using a React front-end – we created a responsive, component-based web and blogging platform to support the millions of Clash of Clans fans who came to the website for the latest news and aggregated, game-related statistics.',imageSrc:"clashofclans.png"},{name:"HBO Connect",description:"In 2015, Firstborn completely reimagined the HBO Connect platform, a place for fans to connect with shows, collect points and receive show-related rewards and unique perks – fueled by social media, using third party integration of curated Twitter and Instagram feeds. With a Laravel PHP back-end, the front-end used Blade templates together with JavaScript and CSS to create a fully responsive and completely component based experience.",imageSrc:"hbo.png"},{name:"Aflac.com",description:'Firstborn was hired to redesign <a href="https://www.aflac.com/" target="_blank">Aflac.com</a>, the main source of information for the largest provider of supplemental insurance in the United States. Building the front-end with custom vanilla JavaScript, Browserify and Handlebars templates, we provided responsive components to be easily integrated with an already existing back-end.',imageSrc:"aflac.png"},{name:"PSCU – Make Your Money Matter",description:'To help PSCU, the largest credit union service organization in the United States, illustrate the benefits of credit unions, Firstborn created an animated story following a deposit at a bank and back into the community. Using JavaScript, CSS and many, many SVG animations, we created a parallax experience, engaging the user, as they scroll through the site. The campaign has won several international awards, including Best Website for Educational Resources at SXSW Interactive Festival. See how you can make your money matter <a href="http://makeyourmoneymatter.org/" target="_blank">here</a>.',imageSrc:"pscu.png",awards:[{type:"addy",prize:"National <br/>Winner"},{type:"addy",prize:"Gold District <br/>Winner"},{type:"awwwards",prize:"Site <br/>of the Day"},{type:"csswinner",prize:"Website <br/>of the Year"},{type:"csswinner",prize:"Website <br/>of the Day"},{type:"fwa",prize:"Site <br/>of the Day"},{type:"sxsw",prize:"People’s Choice Award"}]},{name:"Morgans Hotel Group",description:'For Morgans Hotel Group, Firstborn created a brand new platform for their collection of boutique hotels, highlighting a seamless booking flow, and detailed hotel information. My part as a front-end developer focused on building reusable components with a sleek user interface, and creating highlight features like curated maps, that provide interactive guides to top attractions, customized by leveraging the Google Maps API. The website was awarded Best Usibility by FITC in 2014. Book a room at <a href="https://www.morganshotelgroup.com/" target="_blank">morganshotelgroup.com</a>!',imageSrc:"morgans.png",awards:[{type:"fitc",prize:"Best Usability"}]},{name:"Aldo Shoe Paradise",description:'In 2012, Kokokaka partnered with agency Vitro to create a branded competition for Aldo Shoes, incorporating imagery by photographer Terry Richardson. As Lead Developer, I worked closely with the motion and sound studios to merge Flash animation, video and music together in an immersive in-browser game. Our game was awarded an <a href="https://thefwa.com/cases/aldo-shoes-for-life-gcm" target="_blank">FWA Site of the Day award</a> on June 14, 2012. Check out the project <a href="https://vimeo.com/54040031" target="_blank">here</a>.',imageSrc:"aldo.jpg",awards:[{type:"fwa",prize:"Site of the Day"}]}]}},components:{ProjectComponent:a("VU/8")(c,p,!1,function(e){a("9eb3")},null,null).exports}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"portfolio-view"},this._l(this.projects,function(e){return t("div",{key:e.index,staticClass:"portfolio-wrapper"},[t("project-component",{attrs:{name:e.name,description:e.description,imageSrc:e.imageSrc,awards:e.awards}})],1)}))},staticRenderFns:[]};var g={name:"app",components:{HomeView:r,PortfolioView:a("VU/8")(l,d,!1,function(e){a("zlq8")},null,null).exports}},m={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"header"},[t("div",{staticClass:"header__bg"},[t("svg",{attrs:{width:"2100",height:"554",viewBox:"0 0 2100 554"}},[t("path",{staticClass:"cls-1",attrs:{d:"M-2-.5v552L2099-.5H-2Z"}})])]),this._v(" "),t("h1",{staticClass:"logo"},[this._v("Malin Eneström")]),this._v(" "),t("h3",{staticClass:"subtitle"},[this._v("– Web Developer –")])]),this._v(" "),t("home-view"),this._v(" "),t("portfolio-view")],1)])},staticRenderFns:[]};var h=a("VU/8")(g,m,!1,function(e){a("NzZE")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:h},template:"<App/>"})},NzZE:function(e,t){},"O1/7":function(e,t,a){e.exports=a.p+"static/img/fwa.21d006c.png"},OVs8:function(e,t,a){e.exports=a.p+"static/img/dewcision.ef390a3.jpg"},QOOB:function(e,t,a){e.exports=a.p+"static/img/bwda.b125ec9.png"},W3fQ:function(e,t,a){e.exports=a.p+"static/img/aflac.e843f4b.png"},ZuF7:function(e,t,a){e.exports=a.p+"static/img/addy.76ac1f1.png"},crxV:function(e,t){},g2Y0:function(e,t,a){var n={"./aflac.png":"W3fQ","./aldo.jpg":"48a0","./awards/addy.png":"ZuF7","./awards/awwwards.png":"h2mc","./awards/bwda.png":"QOOB","./awards/csswinner.png":"BRHf","./awards/fitc.png":"uaqX","./awards/fwa.png":"O1/7","./awards/sxsw.png":"o/YR","./clashofclans.png":"leCN","./dewcision.jpg":"OVs8","./hbo.png":"g7GY","./morgans.png":"/EKL","./pscu.png":"Dkwc"};function i(e){return a(r(e))}function r(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="g2Y0"},g7GY:function(e,t,a){e.exports=a.p+"static/img/hbo.a2dad08.png"},h2mc:function(e,t,a){e.exports=a.p+"static/img/awwwards.1aa1c60.png"},leCN:function(e,t,a){e.exports=a.p+"static/img/clashofclans.f3318aa.png"},"o/YR":function(e,t,a){e.exports=a.p+"static/img/sxsw.1af8dbf.png"},uaqX:function(e,t,a){e.exports=a.p+"static/img/fitc.bf491d5.png"},zlq8:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1542dd63cc2489c55acd.js.map