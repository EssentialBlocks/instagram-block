(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{5:function(e,t,n){}}]),function(e){function t(t){for(var a,c,l=t[0],i=t[1],s=t[2],m=0,p=[];m<l.length;m++)c=l[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={0:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;o.push([6,1]),n()}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.blocks}()},,function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),o=(n(5),n(2)),c=n(1),l=n(3),i=function(e){var t=e.attributes,n=e.setAttributes,a=e.fetchPhotos,o=t.token,i=t.columns,s=t.thumbs,u=t.numberOfImages,m=t.gridGap,p=t.backgroundColor,f=t.borderRadius,d=t.hasEqualImages,g=t.showCaptions;return React.createElement(l.InspectorControls,{key:"controls"},React.createElement(c.PanelBody,{title:Object(r.__)("API key")},React.createElement(c.TextareaControl,{label:Object(r.__)("Access Token"),value:o,onChange:function(e){n({token:e}),a()}})),s.length>0&&React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:Object(r.__)("Settings")},React.createElement(c.ToggleControl,{label:Object(r.__)("Square thumbnail"),checked:d,onChange:function(e){return n({hasEqualImages:e})}}),React.createElement(c.ToggleControl,{label:Object(r.__)("Show captions"),checked:g,onChange:function(e){return n({showCaptions:e})}}),React.createElement(c.RangeControl,{label:Object(r.__)("Columns"),value:i,onChange:function(e){n({columns:e}),a()},min:1,max:8}),React.createElement(c.RangeControl,{label:Object(r.__)("Number Of Images"),value:u,onChange:function(e){n({numberOfImages:e}),a()},min:1,max:25}),React.createElement(c.RangeControl,{label:Object(r.__)("Space Between Images"),value:m,onChange:function(e){return n({gridGap:e})},min:0,max:30}),React.createElement(c.RangeControl,{label:Object(r.__)("Border Radius"),value:f,onChange:function(e){return n({borderRadius:e})},min:0,max:50})),React.createElement(l.PanelColorSettings,{title:Object(r.__)("Background Color"),initialOpen:!1,colorSettings:[{value:p,onChange:function(e){return n({backgroundColor:e})},label:""}]})))};function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var m=function(e){var t=e.isSelected,n=e.attributes,a=e.setAttributes,l=n.token,u=n.numberOfImages,m=n.columns,p=n.gridGap,f=n.thumbs,d=n.hasEqualImages,g=n.backgroundColor,b=n.showCaptions,h=n.borderRadius,y=n.preview,_=s(Object(o.useState)(!0),2),v=_[0],R=_[1],w=s(Object(o.useState)(200),2),E=w[0],O=w[1],k=s(Object(o.useState)(""),2),C=k[0],j=k[1];if(y)return React.createElement("img",{style:{width:"100%"},src:"https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/instagram-preview.png"});Object(o.useEffect)((function(){x(),I()}),[]);var S,x=function(){return!!l&&fetch("https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=".concat(l)).then((function(e){return e.json()})).then((function(e){e.error&&j(e.error.message),e.data&&(O(200),R(!1),e.data.length>0?a({thumbs:e.data}):(a({thumbs:[]}),O(500)))}))},I=function(){return!!l&&fetch("https://graph.instagram.com/me?fields=id,username&access_token=".concat(l)).then((function(e){return e.json()})).then((function(e){e.meta&&200===e.meta.code?a({profile:e.data}):a({profile:[]})}))};return S=l&&200===E?v?React.createElement("p",null,React.createElement(c.Spinner,null),Object(r.__)("Loading feed")):React.createElement("div",{className:"display-grid eb-instagram-grid",style:{gridTemplateColumns:"repeat(".concat(m,", 1fr)"),marginLeft:"-".concat(p,"px"),marginRight:"-".concat(p,"px"),gridGap:"".concat(p,"px")}},f&&f.slice(0,u).map((function(e){return React.createElement("div",{className:"eb-image-wrapper "+(d?"has-equal-images":""),style:{backgroundColor:g},key:e.id},React.createElement("img",{className:"eb-instagram-image",src:"IMAGE"===e.media_type?e.media_url:e.thumbnail_url,alt:e.caption?e.caption:"",style:{borderRadius:h+"%"}}),React.createElement("div",{className:"eb-instagram-image-overlay"},b&&React.createElement("div",{className:"eb-instagram-image-caption"},React.createElement("span",{className:"eb-instagram-image-caption_text"},e.caption),React.createElement("span",{className:"eb-instagram-image-caption_likes"}))))}))):200!==E?React.createElement("div",null,"something went wrong: ",C," "):React.createElement("div",null,React.createElement("p",null,"To get started please add an Instagram Access Token. "),React.createElement("p",null,"You can follow these"," ",React.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://awplife.com/instagram-access-token-generator/"},"steps")," ","to generate token."),React.createElement("p",null,"Once you have a token, please paste it into the 'Access Token' setting.")),[t&&React.createElement(i,{attributes:n,setAttributes:a,fetchPhotos:x}),React.createElement("div",{className:"eb-instagram-wrapper"},S)]},p={token:{type:"string"},columns:{type:"string",default:4},numberOfImages:{type:"number",default:4},gridGap:{type:"number"},thumbs:{type:"array",default:[]},backgroundColor:{type:"string",defualt:"tranaparent"},borderRadius:{type:"number",default:0},preview:{type:"boolean",default:!1},hasEqualImages:{type:"boolean",default:!1},showCaptions:{type:"boolean",default:!1}},f={attributes:{preview:!0}};Object(a.registerBlockType)("block/instagram-feed-block",{title:Object(r.__)("Instagram Feed Block","instagram-feed-block"),description:Object(r.__)("Showcase Instagram posts for your web visitors","instagram-feed-block"),category:"widgets",icon:function(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Слой_1",viewBox:"0 0 64 64"},React.createElement("linearGradient",{id:"SVGID_1__43625",gradientUnits:"userSpaceOnUse",x1:"32",y1:"6.667",x2:"32",y2:"57.872",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#1a6dff"}),React.createElement("stop",{offset:"1",stopColor:"#c822ff"})),React.createElement("path",{d:"M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z",fill:"url(#SVGID_1__43625)"}),React.createElement("linearGradient",{id:"SVGID_2__43625",gradientUnits:"userSpaceOnUse",x1:"32",y1:"18.167",x2:"32",y2:"45.679",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#6dc7ff"}),React.createElement("stop",{offset:"1",stopColor:"#e6abff"})),React.createElement("path",{d:"M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z",fill:"url(#SVGID_2__43625)"}),React.createElement("linearGradient",{id:"SVGID_3__43625",gradientUnits:"userSpaceOnUse",x1:"46",y1:"12.75",x2:"46",y2:"23.049",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#6dc7ff"}),React.createElement("stop",{offset:"1",stopColor:"#e6abff"})),React.createElement("circle",{cx:"46",cy:"18",r:"3",fill:"url(#SVGID_3__43625)"}))},attributes:p,supports:{align:["wide","full"]},edit:m,save:function(e){e.attributes;return null},example:f})}]);