(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){}]]),function(e){function t(t){for(var a,c,l=t[0],i=t[1],s=t[2],m=0,p=[];m<l.length;m++)c=l[m],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);p.length;)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={0:0},o=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;o.push([2,1]),n()}([,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0),n(1);var a=wp.i18n.__,r=[{label:a("Most Recent"),value:"most_recent"},{label:a("Least Recent"),value:"least_recent"}],o=[{label:a("Overlay","instagram-block"),value:"overlay"},{label:a("Card","instagram-block"),value:"card"}],c=[{label:a("Simple","instagram-block"),value:"overlay__simple"},{label:a("Basic","instagram-block"),value:"overlay__basic"},{label:a("Standard","instagram-block"),value:"overlay__standard"}],l=[{label:a("Content Outter","instagram-block"),value:"content_outter"},{label:a("Content Inner","instagram-block"),value:"content__inner"}];function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){var t,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.defaultRange,o=a.noUnits,c=a.defaultUnit,l=void 0===c?"px":c,i=u({},"".concat(e,"Range"),r?{type:"number",default:r}:{type:"number"}),m=!0===o?{}:(u(t={},"".concat(e,"Unit"),{type:"string",default:l}),u(t,"TAB".concat(e,"Unit"),{type:"string",default:"px"}),u(t,"MOB".concat(e,"Unit"),{type:"string",default:"px"}),t);return s(s({},i),{},(u(n={},"TAB".concat(e,"Range"),{type:"number"}),u(n,"MOB".concat(e,"Range"),{type:"number"}),n),m)},p=function(e){var t,n,a,r=e.controlName,o=e.property,c=e.attributes,l=e.customUnit;l?t=n=a=l:(t=c["".concat(r,"Unit")],n=c["TAB".concat(r,"Unit")],a=c["MOB".concat(r,"Unit")]);var i=c["".concat(r,"Range")],s=c["TAB".concat(r,"Range")],u=c["MOB".concat(r,"Range")];return{rangeStylesDesktop:i||0===i?o+":"+i+(l||t)+";":"",rangeStylesTab:s||0===s?o+":"+s+(l||n)+";":"",rangeStylesMobile:u||0===u?o+":"+u+(l||a)+";":""}},b=function(e){return e.replace(/\s+/g," ")},f=function(e){return/.+(?=\:(?!hover)(?!focus))/.test(e)},d=function(e){var t=e.setPreviewDeviceType;(0,e.setAttributes)({resOption:"Desktop"}),t("Desktop")},g=function(e){var t=e.setPreviewDeviceType;(0,e.setAttributes)({resOption:"Tablet"}),t("Tablet")},v=function(e){var t=e.setPreviewDeviceType;(0,e.setAttributes)({resOption:"Mobile"}),t("Mobile")};function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var w=function(e){var t,n=e.isForPreviewButton,a=void 0!==n&&n,r=e.domObj,o=e.resOption;(t=a?r.querySelectorAll(".eb-guten-block-main-parent-wrapper > style"):r.querySelectorAll(".eb-guten-block-main-parent-wrapper:not(.is-selected) > style")).length<1||t.forEach((function(e){var t=e.textContent.replace(/\s+/g," "),n=/(mimmikcssStart\s\*\/)(.+)(\/\*\smimmikcssEnd)/i,a=" ";if("Tablet"===o){var r=(t.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i)||[," "])[1];a=t.replace(n,"$1 ".concat(r," $3"))}else if("Mobile"===o){var c=(t.match(/tabcssStart\s\*\/(.+)(?=\/\*\stabcssEnd)/i)||[," "])[1],l=(t.match(/mobcssStart\s\*\/(.+)(?=\/\*\smobcssEnd)/i)||[," "])[1];a=t.replace(n,"$1 ".concat(c," ").concat(l," $3"))}else a=t.replace(n,"$1  $3");e.textContent=a}))};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=E(E({resOption:{type:"string",default:"Desktop"},blockId:{type:"string"},blockRoot:{type:"string",default:"essential_block"},blockMeta:{type:"object"},token:{type:"string"},layout:{type:"string",default:"overlay"},overlayStyle:{type:"string",default:"overlay__simple"},cardStyle:{type:"string",default:"content__outter"},columns:{type:"string",default:4},numberOfImages:{type:"number",default:4},gridGap:{type:"number"},thumbs:{type:"array",default:[]},profile:{type:"array",default:[]},backgroundColor:{type:"string",defualt:"tranaparent"},borderRadius:{type:"number",default:0},preview:{type:"boolean",default:!1},hasEqualImages:{type:"boolean",default:!1},showCaptions:{type:"boolean",default:!0},enableLink:{type:"boolean",default:!1},openInNewTab:{type:"boolean",default:!1},showProfileImg:{type:"boolean",default:!0},profileImg:{type:"string"},imageID:{type:"string",default:null},showProfileName:{type:"boolean",default:!0},profileName:{type:"string"},pagination:{type:"boolean",default:!1},sortBy:{type:"string",default:"most_recent"},showMeta:{type:"boolean",default:!0}},m("imgNum",{defaultRange:3,noUnits:!0})),m("gridGap",{defaultRange:15,noUnits:!0}));var O=wp.element,S=(O.useState,O.useEffect,wp.components);S.BaseControl,S.Dropdown,S.Tooltip,S.ColorPicker,S.Button;function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var N=wp.element.useState,T=function(e){var t=e.imageUrl,n=e.onDeleteImage,a=C(N(!1),2),r=a[0],o=a[1],c=C(N(!1),2),l=c[0],i=c[1],s={visibility:r?"visible":"hidden",backgroundColor:l?"white":"#64666a",color:"#b4b5b7",position:"absolute",right:34,fontSize:16,alignSelf:"center",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:3,cursor:"pointer"};return React.createElement("div",{className:"image-avatar",style:{backgroundImage:"url(".concat(t,")")},onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)}},React.createElement("span",{className:"image-avatar-delete dashicons dashicons-trash",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},style:s,onClick:function(){return n()}}))};function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=wp.data.dispatch;function j(e){var t=e.children,n=e.resRequiredProps,a=e.label,r=e.controlName,o=e.onReset,c=e.noUnits,l=n.setAttributes,i=n.resOption,s=n.objAttributes;return o=function(){var e,t,n;c?("Desktop"==i&&l(I({},"".concat(r,"Range"),s["".concat(r,"Range")].default)),"Tablet"==i&&l(I({},"TAB".concat(r,"Range"),s["TAB".concat(r,"Range")].default)),"Mobile"==i&&l(I({},"MOB".concat(r,"Range"),s["MOB".concat(r,"Range")].default))):("Desktop"==i&&l((I(e={},"".concat(r,"Range"),s["".concat(r,"Range")].default),I(e,"".concat(r,"Unit"),s["".concat(r,"Unit")].default||"px"),e)),"Tablet"==i&&l((I(t={},"TAB".concat(r,"Range"),s["TAB".concat(r,"Range")].default),I(t,"TAB".concat(r,"Unit"),s["TAB".concat(r,"Unit")].default||"px"),t)),"Mobile"==i&&l((I(n={},"MOB".concat(r,"Range"),s["MOB".concat(r,"Range")].default),I(n,"MOB".concat(r,"Unit"),s["MOB".concat(r,"Unit")].default||"px"),n)))},React.createElement("div",{className:"responsive-btn-wrapper"},React.createElement("div",{className:"responsive-btn"},React.createElement("span",{className:"responsive-btn-label"},a),React.createElement("span",{onClick:function(){return d({setPreviewDeviceType:B("core/edit-post").__experimentalSetPreviewDeviceType,setAttributes:l})},class:"typoResButton dashicons dashicons-desktop ".concat("Desktop"===i?"active":" ")}),React.createElement("span",{onClick:function(){return g({setPreviewDeviceType:B("core/edit-post").__experimentalSetPreviewDeviceType,setAttributes:l})},class:"typoResButton dashicons dashicons-tablet ".concat("Tablet"===i?"active":" ")}),React.createElement("span",{onClick:function(){return v({setPreviewDeviceType:B("core/edit-post").__experimentalSetPreviewDeviceType,setAttributes:l})},class:"typoResButton dashicons dashicons-smartphone ".concat("Mobile"===i?"active":" ")})),React.createElement("div",{className:"eb-component-wrapper"},t,React.createElement("button",{className:"eb-range-reset-button",onClick:o},React.createElement("span",{className:"dashicon dashicons dashicons-image-rotate"}))))}var A=wp.components,x=A.ButtonGroup,M=A.Button,D=function(e){var t=e.selectedUnit,n=e.unitTypes,a=e.onClick;return React.createElement(x,{className:"eb-unit-control-btn-group"},n.map((function(e){return React.createElement(M,{className:"eb-unit-control-btn ".concat(e.value===t&&"eb-unit-active"),isSmall:!0,isPrimary:e.value===t,onClick:function(){return a(e.value)}},e.label)})))};function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}wp.i18n.__;var G=wp.components.RangeControl,L=function(e){var t,n,a,r,o=e.baseLabel,c=e.controlName,l=e.resRequiredProps,i=e.units,s=e.min,u=e.max,m=e.step,p=e.noUnits,b=l.attributes,f=l.setAttributes,d=l.resOption,g=b["".concat(c,"Range")],v=b["TAB".concat(c,"Range")],y=b["MOB".concat(c,"Range")];return p||(t=b["".concat(c,"Unit")],n=b["TAB".concat(c,"Unit")],a=b["MOB".concat(c,"Unit")],r=[{label:"px",value:"px"},{label:"em",value:"em"},{label:"%",value:"%"}]),React.createElement("div",{className:"responsiveRangeControllerWrapper"},p?React.createElement(React.Fragment,null,"Desktop"==d&&React.createElement(j,{noUnits:p,label:o,resRequiredProps:l,controlName:c},React.createElement(G,{value:g,onChange:function(e){return f(U({},"".concat(c,"Range"),e))},step:m||1,min:s||0,max:u||100})),"Tablet"==d&&React.createElement(j,{noUnits:p,label:o,resRequiredProps:l,controlName:c},React.createElement(G,{value:v,onChange:function(e){return f(U({},"TAB".concat(c,"Range"),e))},step:m||1,min:s||0,max:u||100})),"Mobile"==d&&React.createElement(j,{noUnits:p,label:o,resRequiredProps:l,controlName:c},React.createElement(G,{value:y,onChange:function(e){return f(U({},"MOB".concat(c,"Range"),e))},step:m||1,min:s||0,max:u||100}))):React.createElement(React.Fragment,null,"Desktop"==d&&React.createElement(React.Fragment,null,React.createElement(D,{selectedUnit:t,unitTypes:i||r,onClick:function(e){return f(U({},"".concat(c,"Unit"),e))}}),React.createElement(j,{label:o,resRequiredProps:l,controlName:c},React.createElement(G,{value:g,onChange:function(e){return f(U({},"".concat(c,"Range"),e))},step:"em"===t?.1:m,min:"px"===t?s:0,max:"px"===t?u:100}))),"Tablet"==d&&React.createElement(React.Fragment,null,React.createElement(D,{selectedUnit:n,unitTypes:i||r,onClick:function(e){return f(U({},"TAB".concat(c,"Unit"),e))}}),React.createElement(j,{label:o,resRequiredProps:l,controlName:c},React.createElement(G,{value:v,onChange:function(e){return f(U({},"TAB".concat(c,"Range"),e))},step:"em"===n?.1:m,min:"px"===n?s:0,max:"px"===n?u:100}))),"Mobile"==d&&React.createElement(React.Fragment,null,React.createElement(D,{selectedUnit:a,unitTypes:i||r,onClick:function(e){return f(U({},"MOB".concat(c,"Unit"),e))}}),React.createElement(j,{label:o,resRequiredProps:l,controlName:c},React.createElement(G,{value:y,onChange:function(e){return f(U({},"MOB".concat(c,"Range"),e))},step:"em"===a?.1:m,min:"px"===a?s:0,max:"px"===a?u:100})))))};var F=wp.element;F.useEffect,F.useState,wp.data.dispatch;var q={"Abril Fatface":{weight:["400"]},Anton:{weight:["400"]},Arvo:{weight:["400","700"]},Asap:{weight:["400","500","600","700"]},"Barlow Condensed":{weight:["100","200","300","400","500","600","700","800","900"]},Barlow:{weight:["100","200","300","400","500","600","700","800","900"]},"Cormorant Garamond":{weight:["300","400","500","600","700"]},Faustina:{weight:["400","500","600","700"]},"Fira Sans":{weight:["100","200","300","400","500","600","700","800","900"]},"IBM Plex Sans":{weight:["100","200","300","400","500","600","700"]},Inconsolata:{weight:["400","700"]},Heebo:{weight:["100","300","400","500","700","800","900"]},Karla:{weight:["400","700"]},Lato:{weight:["100","200","300","400","500","600","700","800","900"]},Lora:{weight:["400","700"]},Merriweather:{weight:["300","400","500","600","700","800","900"]},Montserrat:{weight:["100","200","300","400","500","600","700","800","900"]},"Noto Sans":{weight:["400","700"]},"Noto Serif":{weight:["400","700"]},"Open Sans":{weight:["300","400","500","600","700","800"]},Oswald:{weight:["200","300","400","500","600","700"]},"Playfair Display":{weight:["400","700","900"]},"PT Serif":{weight:["400","700"]},Roboto:{weight:["100","300","400","500","700","900"]},Rubik:{weight:["300","400","500","700","900"]},Tajawal:{weight:["200","300","400","500","700","800","900"]},Ubuntu:{weight:["300","400","500","700"]},Yrsa:{weight:["300","400","500","600","700"]}};function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var z=wp.i18n.__,J=wp.compose.withInstanceId,H=wp.components.BaseControl;J((function(e){var t=e.label,n=e.value,a=e.help,r=e.instanceId,o=e.onChange,c=e.className,l=$(e,["label","value","help","instanceId","onChange","className"]),i="inspector-eb-font-family-".concat(r),s=[{value:"",label:z("Default")},{value:"Arial",label:"Arial"},{value:"Helvetica",label:"Helvetica"},{value:"Times New Roman",label:"Times New Roman"},{value:"Georgia",label:"Georgia"}];return Object.keys(q).map((function(e){s.push({value:e,label:e})})),React.createElement(H,{label:t,id:i,help:a,className:c},React.createElement("select",V({id:i,className:"components-select-control__input",onChange:function(e){var t=wp.data.select("core/editor").getEditedPostAttribute("meta"),n="",a=":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",r=document.createElement("link");r.rel="stylesheet",void 0!==t&&void 0!==t._eb_attr&&(n=t._eb_attr),n.length>0?(n.includes(e.target.value)||(r.href="https://fonts.googleapis.com/css?family="+e.target.value.replace(/ /g,"+")+a,document.head.appendChild(r)),n=(n=n.replace(","+e.target.value,""))+","+e.target.value):(r.href="https://fonts.googleapis.com/css?family="+e.target.value.replace(/ /g,"+")+a,document.head.appendChild(r),n=e.target.value),wp.data.dispatch("core/editor").editPost({meta:{_eb_attr:n}}),o(e.target.value)},"aria-describedby":a?"".concat(i,"__help"):void 0},l),s.map((function(e,t){return React.createElement("option",{key:"".concat(e.label,"-").concat(e.value,"-").concat(t),value:e.value,selected:n===e.value?"selected":""},e.label)}))))})),wp.data.dispatch;var K=wp.i18n.__;K("Default"),K("100"),K("200"),K("300"),K("400"),K("500"),K("600"),K("700"),K("800"),K("900"),K("Default"),K("None"),K("Lowercase"),K("Capitalize"),K("Uppercase"),K("Default"),K("None"),K("Overline"),K("Line Through"),K("Underline"),K("Underline Oveline"),K("Default"),K("Normal"),K("Italic"),K("Oblique");wp.i18n.__;var X=wp.components;X.BaseControl,X.Button,X.Dropdown,X.RangeControl,X.SelectControl;var Y=wp.element;Y.useEffect,Y.useState;wp.i18n.__;var W=wp.components,Q=(W.RangeControl,W.BaseControl,W.Dropdown,W.Tooltip,W.ColorPicker,wp.element),Z=(Q.useState,Q.useEffect,wp.i18n.__),ee=wp.element.useEffect,te=wp.blockEditor,ne=te.InspectorControls,ae=te.PanelColorSettings,re=wp.data.select,oe=wp.components,ce=oe.PanelBody,le=oe.ToggleControl,ie=oe.TextareaControl,se=oe.SelectControl,ue=oe.TextControl,me=oe.RangeControl,pe=oe.BaseControl,be=oe.TabPanel,fe=function(e){var t=e.attributes,n=e.setAttributes,a=t.resOption,i=t.token,s=t.layout,u=t.overlayStyle,m=t.cardStyle,p=t.thumbs,b=t.numberOfImages,f=(t.gridGap,t.backgroundColor),d=t.borderRadius,g=t.hasEqualImages,v=t.showCaptions,y=t.enableLink,h=t.openInNewTab,R=t.showProfileImg,E=t.profileImg,k=t.showProfileName,O=t.profileName,S=t.showPagination,C=t.sortBy,P=t.showMeta;ee((function(){n({resOption:re("core/edit-post").__experimentalGetPreviewDeviceType()})}),[]),ee((function(){w({domObj:document,resOption:a})}),[a]),ee((function(){var e=function(e){var t=e.domObj,n=e.select,a=e.setAttributes,r=t.querySelector("#editor .edit-post-layout + .popover-slot"),o=function(e){/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)&&setTimeout((function(){var e=n("core/edit-post").__experimentalGetPreviewDeviceType();w({isForPreviewButton:!0,domObj:t,resOption:e}),a({resOption:e})}),0)};return r.addEventListener("click",o),function(){r.removeEventListener("click",o)}}({domObj:document,select:re,setAttributes:n});return function(){e()}}),[]);var N={setAttributes:n,resOption:a,attributes:t,objAttributes:_};return React.createElement(ne,{key:"controls"},React.createElement("div",{className:"eb-panel-control"},!i&&React.createElement(ce,{title:Z("API key")},React.createElement(ie,{label:Z("Access Token"),value:i,onChange:function(e){n({token:e})}})),i&&React.createElement(be,{className:"eb-parent-tab-panel",activeClass:"active-tab",tabs:[{name:"general",title:"General",className:"eb-tab general"},{name:"styles",title:"Styles",className:"eb-tab styles"},{name:"advance",title:"Advance",className:"eb-tab advance"}]},(function(e){return React.createElement("div",{className:"eb-tab-controls "+e.name},"general"===e.name&&React.createElement(React.Fragment,null,React.createElement(ce,{title:Z("API key")},React.createElement(ie,{label:Z("Access Token"),value:i,onChange:function(e){n({token:e})}})),p.length>0&&React.createElement(React.Fragment,null,React.createElement(ce,{title:Z("Feed Settings","instagram-block"),intialOpen:!0},React.createElement(React.Fragment,null,React.createElement(se,{label:Z("Sort By","instagram-block"),value:C,options:r,onChange:function(e){return n({sortBy:e})}}),React.createElement(me,{label:Z("Number Of Images","instagram-block"),value:b,onChange:function(e){n({numberOfImages:e})},min:1,max:100}),React.createElement(L,{baseLabel:Z("Space Between Images","instagram-block"),controlName:"gridGap",resRequiredProps:N,min:0,max:30,step:1,noUnits:!0}),React.createElement(le,{label:Z("Square thumbnail","instagram-block"),checked:g,onChange:function(e){return n({hasEqualImages:e})}}))),React.createElement(ce,{title:Z("General Settings","instagram-block")},React.createElement(se,{label:Z("Layout","instagram-block"),value:s,options:o,onChange:function(e){return n({layout:e})}}),"overlay"===s&&React.createElement(se,{label:Z("Overlay Style","instagram-block"),value:u,options:c,onChange:function(e){return n({overlayStyle:e})}}),"card"===s&&React.createElement(se,{label:Z("Card Style","instagram-block"),value:m,options:l,onChange:function(e){return n({cardStyle:e})}}),React.createElement(L,{baseLabel:Z("Columns","instagram-block"),controlName:"imgNum",resRequiredProps:N,min:1,max:8,step:1,noUnits:!0}),"card"===s&&React.createElement(React.Fragment,null,React.createElement("hr",null),React.createElement(pe,null,React.createElement("h3",{className:"eb-control-title"},Z("User info","instagram-block"))),React.createElement(le,{label:Z("Show profile image","instagram-block"),checked:R,onChange:function(e){return n({showProfileImg:e})}}),R&&E&&React.createElement(T,{imageUrl:E,onDeleteImage:function(){return n({profileImg:null})}}),React.createElement(le,{label:Z("Show profile name","instagram-block"),checked:k,onChange:function(e){return n({showProfileName:e})}}),k&&React.createElement(ue,{label:Z("Custom Name","instagram-block"),value:O,onChange:function(e){return n({profileName:e})}})),React.createElement(le,{label:Z("Load More","intagram-block"),checked:S,onChange:function(e){return n({showPagination:e})}}),React.createElement(le,{label:Z("Show captions"),checked:v,onChange:function(e){return n({showCaptions:e})}}),React.createElement(le,{label:Z("Show Link?","instagram-block"),checked:y,onChange:function(e){return n({enableLink:e})}}),y&&React.createElement(le,{label:Z("Open in new window?","instagram-block"),checked:h,onChange:function(e){return n({openInNewTab:e})}}),React.createElement(le,{label:Z("Show Meta?","instagram-block"),checked:P,onChange:function(e){return n({showMeta:e})}}),React.createElement(me,{label:Z("Border Radius"),value:d,onChange:function(e){return n({borderRadius:e})},min:0,max:50})),React.createElement(ae,{title:Z("Background Color"),initialOpen:!1,colorSettings:[{value:f,onChange:function(e){return n({backgroundColor:e})},label:""}]}))),"styles"===e.name&&React.createElement(React.Fragment,null),"advance"===e.name&&React.createElement(React.Fragment,null))}))))};function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ge(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ge(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ve=wp.i18n.__,ye=wp.element,he=ye.useState,we=ye.useEffect,Re=wp.components,Ee=Re.Spinner,ke=Re.Toolbar,_e=Re.ToolbarButton,Oe=wp.blockEditor,Se=Oe.useBlockProps,Ce=Oe.BlockControls,Pe=Oe.MediaUpload,Ne=wp.data.select,Te=function(e){var t=e.isSelected,n=e.attributes,a=e.setAttributes,r=e.clientId,o=n.blockId,c=n.blockMeta,l=n.resOption,i=n.token,s=n.layout,u=n.overlayStyle,m=n.cardStyle,d=n.thumbs,g=n.numberOfImages,v=(n.gridGap,n.backgroundColor,n.borderRadius,n.hasEqualImages),h=n.showCaptions,R=(n.enableLink,n.openInNewTab,n.showProfileImg),E=n.profileImg,k=n.imageID,_=n.showProfileName,O=n.profileName,S=(n.showPagination,n.sortBy,n.preview),C=n.showMeta,P=de(he(!0),2),N=P[0],T=P[1],I=de(he(200),2),B=I[0],j=I[1],A=de(he(""),2),x=A[0],M=A[1];if(S)return React.createElement("img",{style:{width:"100%"},src:"https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/instagram-preview.png"});we((function(){U()}),[]),we((function(){U()}),[i]);var D,U=function(){return!!i&&fetch("https://graph.instagram.com/me/media?fields=id,caption,like_count,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=".concat(i)).then((function(e){return e.json()})).then((function(e){e.error&&M(e.error.message),e.data&&(j(200),T(!1),e.data.length>0?a({thumbs:e.data}):(a({thumbs:[]}),j(500)))}))},G=v?" has__equal__height":"",L="card"===s?m:u;D=i&&200===B?N?React.createElement("p",null,React.createElement(Ee,null),ve("Loading feed")):React.createElement(React.Fragment,null,d&&d.slice(0,g).map((function(e){return React.createElement("div",{className:"instagram__gallery__col"},React.createElement("div",{className:"instagram__gallery__item instagram__gallery__item--".concat(L).concat(G)},"card"===s&&React.createElement(React.Fragment,null,(_||R)&&React.createElement("div",{className:"author__info"},R&&E&&React.createElement("div",{className:"author__thumb"},React.createElement("img",{src:E,alt:e.username})),_&&React.createElement("h5",{className:"author__name"},O||e.username))),React.createElement("div",{className:"instagram__gallery__thumb"},React.createElement("div",{className:"thumb__wrap"},React.createElement("img",{src:"VIDEO"===e.media_type?e.thumbnail_url:e.media_url,alt:e.caption?e.caption:""})),h&&e.caption&&React.createElement("div",{className:"eb-instagram-caption"},React.createElement("p",null,e.caption))),C&&React.createElement("div",{className:"eb-instagram-meta"},React.createElement("span",{className:"date"},new Date(e.timestamp).toLocaleDateString()))))}))):200!==B?React.createElement("div",null,"something went wrong: ",x," "):React.createElement("div",null,React.createElement("p",null,"To get started please add an Instagram Access Token. "),React.createElement("p",null,"You can follow these"," ",React.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://awplife.com/instagram-access-token-generator/"},"steps")," ","to generate token."),React.createElement("p",null,"Once you have a token, please paste it into the 'Access Token' setting."));var F=p({controlName:"imgNum",property:"",attributes:n,customUnit:""}),q=F.rangeStylesDesktop,V=F.rangeStylesTab,$=F.rangeStylesMobile,z=p({controlName:"gridGap",property:"padding-left",attributes:n,customUnit:"px"}),J=z.rangeStylesDesktop,H=z.rangeStylesTab,K=z.rangeStylesMobile,X=p({controlName:"gridGap",property:"padding-right",attributes:n,customUnit:"px"}),Y=X.rangeStylesDesktop,W=X.rangeStylesTab,Q=X.rangeStylesMobile,Z="\n\t\t.eb-instagram-wrapper.".concat(o," .instagram__gallery__col {\n\t\t\t").concat(J,"\n\t\t\t").concat(Y,"\n\t\t\twidth: calc(100% / ").concat(q.replace(/[^0-9]/g,""),");\n\t\t}\n\t"),ee="\n\t\t.eb-instagram-wrapper.".concat(o," .instagram__gallery__col {\n\t\t\t").concat(H,"\n\t\t\t").concat(W,"\n\t\t\t").concat(""==V?"width: calc(100% / 2)":"width: calc(100% / ".concat(V.replace(/[^0-9]/g,""),");"),"\n\t\t}\n\t"),te="\n\t\t.eb-instagram-wrapper.".concat(o," .instagram__gallery__col {\n\t\t\t").concat(K,"\n\t\t\t").concat(Q,"\n\t\t\t").concat(""==$?"width: calc(100% / 1);":"width: calc(100% / ".concat($.replace(/[^0-9]/g,""),");"),"\n\t\t}\n\t");we((function(){a({resOption:Ne("core/edit-post").__experimentalGetPreviewDeviceType()})}),[]),we((function(){!function(e){var t=e.BLOCK_PREFIX,n=e.blockId,a=e.setAttributes,r=e.select,o=e.clientId,c=t+"-"+Math.random().toString(36).substr(2,7);n||a({blockId:c});var l=r("core/block-editor").getBlocks(),i=!1;!function e(t){if(!i){var r,l=y(t);try{for(l.s();!(r=l.n()).done;){var s=r.value,u=s.innerBlocks;if(s.attributes.blockId===n){if(s.clientId!==o)return a({blockId:c}),void(i=!0);u.length>0&&e(u)}else u.length>0&&e(u)}}catch(e){l.e(e)}finally{l.f()}}}(l)}({BLOCK_PREFIX:"eb-instagram",blockId:o,setAttributes:a,select:Ne,clientId:r})}),[]),we((function(){var e,t,n,a;e={domObj:document,select:Ne},t=e.domObj,n=e.select,a=t.body.className,/eb\-mimmik\-added/i.test(a)||(t.body.classList.add("eb-mimmik-added"),t.querySelector("#editor .edit-post-layout + .popover-slot").addEventListener("click",(function(e){/block\-editor\-post\-preview__button\-resize|components\-menu\-item__item/i.test(e.target.className)&&setTimeout((function(){var e=n("core/edit-post").__experimentalGetPreviewDeviceType();w({isForPreviewButton:!0,domObj:t,resOption:e})}),0)})))}),[]);var ne=Se({className:"eb-guten-block-main-parent-wrapper"}),ae=b("\n\t\t".concat(f(Z)?Z:" ","\n\t")),re=b("\n\t\t".concat(f(ee)?ee:" ","\n\t")),oe=b("\n\t\t".concat(f(te)?te:" ","\n\t"));return we((function(){var e={desktop:ae,tab:re,mobile:oe};JSON.stringify(c)!=JSON.stringify(e)&&a({blockMeta:e})}),[n]),[t&&React.createElement(fe,{attributes:n,setAttributes:a,fetchPhotos:U}),React.createElement(Ce,null,React.createElement(ke,{label:ve("Options","instagram-block")},React.createElement(Pe,{onSelect:function(e){return a({profileImg:e.url,imageID:e.id})},allowedTypes:["image"],value:k,render:function(e){var t=e.open;return React.createElement(_e,{className:"components-toolbar__control",label:ve("Edit Image","instagram-block"),icon:"edit",onClick:t})}}))),React.createElement("div",ne,React.createElement("style",null,"\n\t\t\t\t ".concat(ae,"\n \n\t\t\t\t /* mimmikcssStart */\n \n\t\t\t\t ").concat("Tablet"===l?re:" ","\n\t\t\t\t ").concat("Mobile"===l?re+oe:" ","\n \n\t\t\t\t /* mimmikcssEnd */\n \n\t\t\t\t @media all and (max-width: 1024px) {\t\n \n\t\t\t\t\t /* tabcssStart */\t\t\t\n\t\t\t\t\t ").concat(b(re),"\n\t\t\t\t\t /* tabcssEnd */\t\t\t\n\t\t\t\t \n\t\t\t\t }\n\t\t\t\t \n\t\t\t\t @media all and (max-width: 767px) {\n\t\t\t\t\t \n\t\t\t\t\t /* mobcssStart */\t\t\t\n\t\t\t\t\t ").concat(b(oe),"\n\t\t\t\t\t /* mobcssEnd */\t\t\t\n\t\t\t\t \n\t\t\t\t }\n\t\t\t\t ")),React.createElement("div",{className:"eb-instagram-wrapper ".concat(o)},React.createElement("div",{className:"eb-instagram__gallery"},D)))]},Ie={attributes:{preview:!0}},Be=wp.blocks.registerBlockType,je=wp.i18n.__;Be("instagram-block/instagram-feed-block",{title:je("Instagram Feed Block","instagram-feed-block"),description:je("Showcase Instagram posts for your web visitors","instagram-feed-block"),category:"widgets",icon:function(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Слой_1",viewBox:"0 0 64 64"},React.createElement("linearGradient",{id:"SVGID_1__43625",gradientUnits:"userSpaceOnUse",x1:"32",y1:"6.667",x2:"32",y2:"57.872",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#1a6dff"}),React.createElement("stop",{offset:"1",stopColor:"#c822ff"})),React.createElement("path",{d:"M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z",fill:"url(#SVGID_1__43625)"}),React.createElement("linearGradient",{id:"SVGID_2__43625",gradientUnits:"userSpaceOnUse",x1:"32",y1:"18.167",x2:"32",y2:"45.679",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#6dc7ff"}),React.createElement("stop",{offset:"1",stopColor:"#e6abff"})),React.createElement("path",{d:"M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z",fill:"url(#SVGID_2__43625)"}),React.createElement("linearGradient",{id:"SVGID_3__43625",gradientUnits:"userSpaceOnUse",x1:"46",y1:"12.75",x2:"46",y2:"23.049",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#6dc7ff"}),React.createElement("stop",{offset:"1",stopColor:"#e6abff"})),React.createElement("circle",{cx:"46",cy:"18",r:"3",fill:"url(#SVGID_3__43625)"}))},attributes:_,supports:{align:["wide","full"]},edit:Te,save:function(e){var t=e.attributes.token;return React.createElement("h1",null,t)},example:Ie})}]);