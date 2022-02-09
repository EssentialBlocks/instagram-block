!function(){var e,t={98:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,{typoPrefix_caption:function(){return v},typoPrefix_header:function(){return w},typoPrefix_meta:function(){return R}});var r=window.wp.i18n,o=window.wp.element,l=window.wp.blockEditor,c=window.wp.components,i=window.wp.data,s=a(184),m=a.n(s),u=[{label:(0,r.__)("Most Recent","instagram-block"),value:"most_recent"},{label:(0,r.__)("Least Recent","instagram-block"),value:"least_recent"}],g=[{label:(0,r.__)("Overlay","instagram-block"),value:"overlay"},{label:(0,r.__)("Card","instagram-block"),value:"card"}],p=[{label:(0,r.__)("Simple","instagram-block"),value:"overlay__simple"},{label:(0,r.__)("Basic","instagram-block"),value:"overlay__basic"},{label:(0,r.__)("Standard","instagram-block"),value:"overlay__standard"}],b=[{label:(0,r.__)("Content Outter","instagram-block"),value:"content_outter"},{label:(0,r.__)("Content Inner","instagram-block"),value:"content__inner"}],_="imgNum",d="gridGap",f="imgBrdShd",y="wrpMargin",h="wrpPadding",v="captionText",R="metaText",w="headerText";function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){S(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=window.EBInstagramFeedControls,O=C.generateTypographyAttributes,I=C.generateResponsiveRangeAttributes,N=C.generateDimensionsAttributes,P=C.generateBorderShadowAttributes,T=k(k(k(k(k(k({resOption:{type:"string",default:"Desktop"},blockId:{type:"string"},blockRoot:{type:"string",default:"essential_block"},blockMeta:{type:"object"},token:{type:"string"},layout:{type:"string",default:"overlay"},overlayStyle:{type:"string",default:"overlay__simple"},cardStyle:{type:"string",default:"content__outter"},columns:{type:"string",default:4},numberOfImages:{type:"number",default:6},thumbs:{type:"array",default:[]},preview:{type:"boolean",default:!1},captionColor:{type:"string"},metaColor:{type:"string"},headerColor:{type:"string"},overlayColor:{type:"string"},hasEqualImages:{type:"boolean",default:!0},showCaptions:{type:"boolean",default:!0},enableLink:{type:"boolean",default:!1},openInNewTab:{type:"boolean",default:!1},showProfileImg:{type:"boolean",default:!0},profileImg:{type:"string"},imageID:{type:"string",default:null},showProfileName:{type:"boolean",default:!0},profileName:{type:"string"},sortBy:{type:"string",default:"most_recent"},showMeta:{type:"boolean",default:!0}},O(Object.values(n))),I(_,{defaultRange:3,noUnits:!0})),N(d)),N(h)),N(y,{top:28,bottom:28,isLinked:!1})),P(f,{noShadow:!0})),x=window.EBInstagramFeedControls,D=x.ColorControl,M=x.ImageAvatar,B=x.ResponsiveRangeController,A=x.ResponsiveDimensionsControl,F=x.BorderShadowControl,j=x.TypographyDropdown,L="edit-site"===eb_style_handler.editor_type?"core/edit-site":"core/edit-post",q=function(e){var t=e.attributes,a=e.setAttributes,n=t.resOption,s=t.token,m=t.layout,E=t.overlayStyle,k=t.cardStyle,S=t.thumbs,C=t.numberOfImages,O=t.captionColor,I=t.metaColor,N=t.headerColor,P=t.overlayColor,x=t.hasEqualImages,q=t.showCaptions,G=t.enableLink,U=t.openInNewTab,V=t.showProfileImg,H=t.profileImg,J=t.imageID,z=t.showProfileName,Y=t.profileName,K=t.sortBy,W=t.showMeta;(0,o.useEffect)((function(){a({resOption:(0,i.select)(L).__experimentalGetPreviewDeviceType()})}),[]);var X={setAttributes:a,resOption:n,attributes:t,objAttributes:T};return React.createElement(l.InspectorControls,{key:"controls"},React.createElement("div",{className:"eb-panel-control"},!s&&React.createElement(c.PanelBody,{title:(0,r.__)("API key","instagram-block")},React.createElement(c.TextareaControl,{label:(0,r.__)("Access Token","instagram-block"),value:s,onChange:function(e){a({token:e})}})),s&&React.createElement(c.TabPanel,{className:"eb-parent-tab-panel",activeClass:"active-tab",tabs:[{name:"general",title:(0,r.__)("General","instagram-block"),className:"eb-tab general"},{name:"styles",title:(0,r.__)("Style","instagram-block"),className:"eb-tab styles"},{name:"advance",title:(0,r.__)("Advanced","instagram-block"),className:"eb-tab advance"}]},(function(e){return React.createElement("div",{className:"eb-tab-controls "+e.name},"general"===e.name&&React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:(0,r.__)("API key","instagram-block")},React.createElement(c.TextareaControl,{label:(0,r.__)("Access Token","instagram-block"),value:s,onChange:function(e){a({token:e})}})),S.length>0&&React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:(0,r.__)("Feed Settings","instagram-block"),intialOpen:!0},React.createElement(React.Fragment,null,React.createElement(c.SelectControl,{label:(0,r.__)("Sort By","instagram-block"),value:K,options:u,onChange:function(e){return a({sortBy:e})}}),React.createElement(c.RangeControl,{label:(0,r.__)("Number Of Images","instagram-block"),value:C,onChange:function(e){a({numberOfImages:e})},min:1,max:100}),React.createElement(B,{baseLabel:(0,r.__)("Columns","instagram-block"),controlName:_,resRequiredProps:X,min:1,max:8,step:1,noUnits:!0}),React.createElement(c.ToggleControl,{label:(0,r.__)("Square thumbnail","instagram-block"),checked:x,onChange:function(e){return a({hasEqualImages:e})}}))),React.createElement(c.PanelBody,{title:(0,r.__)("General Settings","instagram-block"),initialOpen:!1},React.createElement(c.SelectControl,{label:(0,r.__)("Layout","instagram-block"),value:m,options:g,onChange:function(e){return a({layout:e})}}),"overlay"===m&&React.createElement(c.SelectControl,{label:(0,r.__)("Overlay Style","instagram-block"),value:E,options:p,onChange:function(e){return a({overlayStyle:e})}}),"card"===m&&React.createElement(c.SelectControl,{label:(0,r.__)("Card Style","instagram-block"),value:k,options:b,onChange:function(e){return a({cardStyle:e})}}),"card"===m&&React.createElement(React.Fragment,null,React.createElement("hr",null),React.createElement(c.BaseControl,null,React.createElement("h3",{className:"eb-control-title"},(0,r.__)("User info","instagram-block"))),React.createElement(c.ToggleControl,{label:(0,r.__)("Show profile image","instagram-block"),checked:V,onChange:function(e){return a({showProfileImg:e})}}),V&&!H&&React.createElement(l.MediaUpload,{onSelect:function(e){var t=e.id,n=e.url;return a({profileImg:n,imageID:t})},type:"image",value:J,render:function(e){var t=e.open;return React.createElement(c.Button,{className:"eb-background-control-inspector-panel-img-btn components-button",label:(0,r.__)("Upload Image","instagram-block"),icon:"format-image",onClick:t})}}),V&&H&&React.createElement(M,{imageUrl:H,onDeleteImage:function(){return a({profileImg:null})}}),React.createElement(c.ToggleControl,{label:(0,r.__)("Show profile name","instagram-block"),checked:z,onChange:function(e){return a({showProfileName:e})}}),z&&React.createElement(c.TextControl,{label:(0,r.__)("Custom Name","instagram-block"),value:Y,onChange:function(e){return a({profileName:e})}})),"overlay__simple"!==E&&React.createElement(c.ToggleControl,{label:(0,r.__)("Show captions","instagram-block"),checked:q,onChange:function(e){return a({showCaptions:e})}}),React.createElement(c.ToggleControl,{label:(0,r.__)("Show Link?","instagram-block"),checked:G,onChange:function(e){return a({enableLink:e})}}),G&&React.createElement(c.ToggleControl,{label:(0,r.__)("Open in new window?","instagram-block"),checked:U,onChange:function(e){return a({openInNewTab:e})}}),"overlay__simple"!==E&&React.createElement(c.ToggleControl,{label:(0,r.__)("Show Meta?","instagram-block"),checked:W,onChange:function(e){return a({showMeta:e})}})))),"styles"===e.name&&React.createElement(React.Fragment,null,React.createElement(c.PanelBody,{title:(0,r.__)("Feed Styles","instagram-block"),initialOpen:!0},React.createElement(React.Fragment,null,React.createElement(A,{resRequiredProps:X,className:"",controlName:d,baseLabel:(0,r.__)("Padding","instagram-block")}),"overlay"===m&&React.createElement(D,{label:(0,r.__)("Overlay Color","instagram-block"),color:P,onChange:function(e){return a({overlayColor:e})}}),React.createElement(c.BaseControl,null,React.createElement("h3",{className:"eb-control-title"},(0,r.__)("Border","instagram-block"))),React.createElement(F,{controlName:f,resRequiredProps:X,noShadow:!0}))),React.createElement(c.PanelBody,{title:(0,r.__)("Caption","instagram-block"),initialOpen:!1},React.createElement(React.Fragment,null,React.createElement(j,{baseLabel:(0,r.__)("Typography","instagram-block"),typographyPrefixConstant:v,resRequiredProps:X}),React.createElement(D,{label:(0,r.__)("Color","instagram-block"),color:O,onChange:function(e){return a({captionColor:e})}}))),React.createElement(c.PanelBody,{title:(0,r.__)("Meta","instagram-block"),initialOpen:!1},React.createElement(React.Fragment,null,React.createElement(j,{baseLabel:(0,r.__)("Typography","instagram-block"),typographyPrefixConstant:R,resRequiredProps:X}),React.createElement(D,{label:(0,r.__)("Color","instagram-block"),color:I,onChange:function(e){return a({metaColor:e})}}))),"card"===m&&React.createElement(c.PanelBody,{title:(0,r.__)("Header","instagram-block"),initialOpen:!1},React.createElement(React.Fragment,null,React.createElement(j,{baseLabel:(0,r.__)("Typography","instagram-block"),typographyPrefixConstant:w,resRequiredProps:X}),React.createElement(D,{label:(0,r.__)("Color","instagram-block"),color:N,onChange:function(e){return a({headerColor:e})}})))),"advance"===e.name&&React.createElement(React.Fragment,null,React.createElement(c.PanelBody,null,React.createElement(React.Fragment,null,React.createElement(A,{resRequiredProps:X,controlName:h,baseLabel:(0,r.__)("Padding","instagram-block")}),React.createElement(A,{resRequiredProps:X,controlName:y,baseLabel:(0,r.__)("Margin","instagram-block")})))))}))))};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o=[],_n=!0,l=!1;try{for(a=a.call(e);!(_n=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);_n=!0);}catch(e){l=!0,r=e}finally{try{_n||null==a.return||a.return()}finally{if(l)throw r}}return o}}(e,t)||U(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){if(e){if("string"==typeof e)return V(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var H=window.EBInstagramFeedControls,J=H.softMinifyCssStrings,z=H.duplicateBlockIdFix,Y=H.generateDimensionsControlStyles,K=H.generateBorderShadowStyles,W=H.generateTypographyStyles,X=H.generateResponsiveRangeStyles,$="edit-site"===eb_style_handler.editor_type?"core/edit-site":"core/edit-post",Q=JSON.parse('{"name":"instagram-block/instagram-feed-block","title":"Instagram Block","category":"widgets","description":"Showcase Instagram posts for your web visitors","textdomain":"instagram-block","keywords":["instagram"],"supports":{"align":["wide","full"]},"editorScript":"file:./dist/index.js"}');(0,EBInstagramFeedControls.ebConditionalRegisterBlockType)(Q,{icon:function(){return React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Слой_1",viewBox:"0 0 64 64"},React.createElement("linearGradient",{id:"SVGID_1__43625",gradientUnits:"userSpaceOnUse",x1:"32",y1:"6.667",x2:"32",y2:"57.872",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#1a6dff"}),React.createElement("stop",{offset:"1",stopColor:"#c822ff"})),React.createElement("path",{d:"M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z",fill:"url(#SVGID_1__43625)"}),React.createElement("linearGradient",{id:"SVGID_2__43625",gradientUnits:"userSpaceOnUse",x1:"32",y1:"18.167",x2:"32",y2:"45.679",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#6dc7ff"}),React.createElement("stop",{offset:"1",stopColor:"#e6abff"})),React.createElement("path",{d:"M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z",fill:"url(#SVGID_2__43625)"}),React.createElement("linearGradient",{id:"SVGID_3__43625",gradientUnits:"userSpaceOnUse",x1:"46",y1:"12.75",x2:"46",y2:"23.049",spreadMethod:"reflect"},React.createElement("stop",{offset:"0",stopColor:"#6dc7ff"}),React.createElement("stop",{offset:"1",stopColor:"#e6abff"})),React.createElement("circle",{cx:"46",cy:"18",r:"3",fill:"url(#SVGID_3__43625)"}))},attributes:T,keywords:[(0,r.__)("Instagram Feed","instagram-block"),(0,r.__)("eb Instagram Feed","instagram-block")],edit:function(e){var t=e.attributes,a=e.setAttributes,n=e.className,s=e.clientId,u=e.isSelected,g=t.blockId,p=t.blockMeta,b=t.resOption,E=t.token,k=t.layout,S=t.overlayStyle,C=t.cardStyle,O=t.thumbs,I=t.numberOfImages,N=t.hasEqualImages,P=t.showCaptions,T=t.captionColor,x=t.metaColor,D=t.headerColor,M=t.overlayColor,B=t.showProfileImg,A=t.profileImg,F=t.imageID,j=t.showProfileName,L=t.profileName,V=t.sortBy,H=t.preview,Q=t.showMeta,Z=G((0,o.useState)(!1),2),ee=Z[0],te=Z[1],ae=G((0,o.useState)(200),2),ne=ae[0],re=ae[1],oe=G((0,o.useState)(""),2),le=oe[0],ce=oe[1],ie=X({controlName:_,property:"",attributes:t,customUnit:""}),se=ie.rangeStylesDesktop,me=ie.rangeStylesTab,ue=ie.rangeStylesMobile,ge=Y({controlName:d,styleFor:"padding",attributes:t}),pe=ge.dimensionStylesDesktop,be=ge.dimensionStylesTab,_e=ge.dimensionStylesMobile,de=K({controlName:f,attributes:t}),fe=de.styesDesktop,ye=de.styesTab,he=de.styesMobile,ve=de.stylesHoverDesktop,Re=de.stylesHoverTab,we=de.stylesHoverMobile,Ee=de.transitionStyle,ke=W({attributes:t,prefixConstant:v}),Se=ke.typoStylesDesktop,Ce=ke.typoStylesTab,Oe=ke.typoStylesMobile,Ie=W({attributes:t,prefixConstant:R}),Ne=Ie.typoStylesDesktop,Pe=Ie.typoStylesTab,Te=Ie.typoStylesMobile,xe=W({attributes:t,prefixConstant:w}),De=xe.typoStylesDesktop,Me=xe.typoStylesTab,Be=xe.typoStylesMobile,Ae=Y({controlName:y,styleFor:"margin",attributes:t}),Fe=Ae.dimensionStylesDesktop,je=Ae.dimensionStylesTab,Le=Ae.dimensionStylesMobile,qe=Y({controlName:h,styleFor:"padding",attributes:t}),Ge=qe.dimensionStylesDesktop,Ue=qe.dimensionStylesTab,Ve=qe.dimensionStylesMobile,He="\n\t\t.eb-instagram-wrapper.".concat(g," {\n\t\t\t").concat(Fe,"\n\t\t\t").concat(Ge,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .instagram__gallery__col {\n\t\t\t").concat(pe,"\n\t\t\twidth: calc(100% / ").concat(se.replace(/[^0-9]/g,""),");\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .instagram__gallery__item {\n\t\t\t").concat(fe,"\n\t\t\toverflow: hidden;\n\t\t\ttransition: ").concat(Ee,";\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g,":hover .instagram__gallery__item {\n\t\t\t").concat(ve,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .eb-instagram-caption p {\n\t\t\t").concat(Se,"\n\t\t\t").concat(T?"color: ".concat(T,";"):"","\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .eb-instagram-meta .eb-instagram-date {\n\t\t\t").concat(Ne,"\n\t\t}\n\n\t\t").concat(x?".eb-instagram-wrapper.".concat(g," .eb-instagram-meta span {\n\t\t\tcolor: ").concat(x,";\n\t\t}"):"","\n\t\t\n\t\t").concat(M?".eb-instagram-wrapper.".concat(g," .instagram__gallery__item.instagram__gallery__item--overlay__simple .instagram__gallery__thumb::before,\n\t\t.eb-instagram-wrapper.").concat(g," .instagram__gallery__item.instagram__gallery__item--overlay__basic .instagram__gallery__thumb::before,\n\t\t.eb-instagram-wrapper.").concat(g," .instagram__gallery__item.instagram__gallery__item--overlay__standard .instagram__gallery__thumb::before {\n\t\t\tbackground: ").concat(M,"\n\t\t}"):"","\n\t\t\n\n\t\t.eb-instagram-wrapper.").concat(g," .author__info .author__name,\n\t\t.eb-instagram-wrapper.").concat(g," .author__info .author__name a  {\n\t\t\t").concat(De,"\n\t\t\t").concat(D?"color: ".concat(D,";"):"","\n\t\t}\n\n\n\t\t.eb-instagram-wrapper.").concat(g," .hide {\n\t\t\tdisplay: none;\n\t\t}\n\t"),Je="\n\t\t.eb-instagram-wrapper.".concat(g," {\n\t\t\t").concat(je,"\n\t\t\t").concat(Ue,"\n\t\t}\n\t\t\n\t\t.eb-instagram-wrapper.").concat(g," .instagram__gallery__col {\n\t\t\t").concat(be,"\n\t\t\t").concat(""==me?"width: calc(100% / 2)":"width: calc(100% / ".concat(me.replace(/[^0-9]/g,""),");"),"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .instagram__gallery__item {\n\t\t\t").concat(ye,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g,":hover .instagram__gallery__item {\n\t\t\t").concat(Re,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .eb-instagram-caption p {\n\t\t\t").concat(Ce,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .eb-instagram-meta .eb-instagram-date {\n\t\t\t").concat(Pe,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .author__info .author__name,\n\t\t.eb-instagram-wrapper.").concat(g," .author__info .author__name a  {\n\t\t\t").concat(Me,"\n\t\t}\n\t"),ze="\n\t\t.eb-instagram-wrapper.".concat(g," {\n\t\t\t").concat(Le,"\n\t\t\t").concat(Ve,"\n\t\t}\n\t\t\n\t\t.eb-instagram-wrapper.").concat(g," .instagram__gallery__col {\n\t\t\t").concat(_e,"\n\t\t\t").concat(""==ue?"width: calc(100% / 1);":"width: calc(100% / ".concat(ue.replace(/[^0-9]/g,""),");"),"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .instagram__gallery__item {\n\t\t\t").concat(he,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g,":hover .instagram__gallery__item {\n\t\t\t").concat(we,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .eb-instagram-caption p {\n\t\t\t").concat(Oe,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .eb-instagram-meta .eb-instagram-date {\n\t\t\t").concat(Te,"\n\t\t}\n\n\t\t.eb-instagram-wrapper.").concat(g," .author__info .author__name,\n\t\t.eb-instagram-wrapper.").concat(g," .author__info .author__name a  {\n\t\t\t").concat(Be,"\n\t\t}\n\t");(0,o.useEffect)((function(){a({resOption:(0,i.select)($).__experimentalGetPreviewDeviceType()}),z({BLOCK_PREFIX:"eb-instagram-feed",blockId:g,setAttributes:a,select:i.select,clientId:s}),A||a({profileImg:"".concat(EBInstagramLocalize.eb_plugins_url,"assets/images/user.png")})}),[]);var Ye=(0,l.useBlockProps)({className:m()(n,"eb-guten-block-main-parent-wrapper")}),Ke=J("\n\t\t".concat(He,"\n\t")),We=J("\n\t\t".concat(Je,"\n\t")),Xe=J("\n\t\t".concat(ze,"\n\t"));if((0,o.useEffect)((function(){var e={desktop:Ke,tab:We,mobile:Xe};JSON.stringify(p)!=JSON.stringify(e)&&a({blockMeta:e})}),[t]),H)return React.createElement("img",{style:{width:"100%"},src:"https://raw.githubusercontent.com/rupok/essential-blocks-templates/dev/previews/instagram-preview.png"});var $e=function(){var e=document.querySelectorAll(".".concat(g," .eb-instagram__gallery"));setTimeout((function(){var t,a=function(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=U(e))){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){c=!0,o=e},f:function(){try{l||null==a.return||a.return()}finally{if(c)throw o}}}}(e);try{var n=function(){var e=t.value;imagesLoaded(e,(function(){new Isotope(e,{itemSelector:".instagram__gallery__col",percentPosition:!0,masonry:{columnWidth:".instagram__gallery__col"}})}))};for(a.s();!(t=a.n()).done;)n()}catch(e){a.e(e)}finally{a.f()}te(!1)}),1e3)};(0,o.useEffect)((function(){Ze(),O.length>0&&$e()}),[]),(0,o.useEffect)((function(){Ze()}),[E]),(0,o.useEffect)((function(){O.length>0&&(te(!0),$e())}),[k,S,C,V,I,N,P,Q,t.imgNumRange,t.TABimgNumRange,t.MOBimgNumRange,b]);var Qe,Ze=function(){return!!E&&fetch("https://graph.instagram.com/me/media?fields=id,caption,like_count,media_type,media_url,permalink,thumbnail_url,timestamp,username&limit=500&access_token=".concat(E)).then((function(e){return e.json()})).then((function(e){e.error&&(ce(e.error.message),re(e.error.code)),e.data&&(re(200),te(!1),e.data.length>0?a({thumbs:e.data}):(a({thumbs:[]}),re(500)))}))};switch(V){case"most_recent":O.sort((function(e,t){var a=new Date(e.timestamp);return new Date(t.timestamp)-a}));break;case"least_recent":O.sort((function(e,t){return new Date(e.timestamp)-new Date(t.timestamp)}))}var et=N?" has__equal__height":"",tt="card"===k?C:S;return Qe=E&&200===ne?ee&&0===O.length?React.createElement("p",null,React.createElement(c.Spinner,null),(0,r.__)("Loading feed","instagram-block")):React.createElement(React.Fragment,null,O&&O.slice(0,I).map((function(e){return React.createElement("div",{className:"instagram__gallery__col"},React.createElement("div",{className:"instagram__gallery__item instagram__gallery__item--".concat(tt).concat(et)},"card"===k&&React.createElement(React.Fragment,null,(j||B)&&React.createElement("div",{className:"author__info"},B&&A&&React.createElement("div",{className:"author__thumb"},React.createElement("img",{src:A,alt:e.username})),j&&React.createElement("h5",{className:"author__name"},L||e.username))),React.createElement("div",{className:"instagram__gallery__thumb"},React.createElement("div",{className:"thumb__wrap"},React.createElement("img",{src:"VIDEO"===e.media_type?e.thumbnail_url:e.media_url,alt:e.caption?e.caption:""})),P&&e.caption&&React.createElement("div",{className:"eb-instagram-caption"},React.createElement("p",null,e.caption))),Q&&React.createElement("div",{className:"eb-instagram-meta"},React.createElement("span",{className:"dashicons dashicons-clock"}),React.createElement("span",{className:"eb-instagram-date"},(t=e.timestamp,n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(a=new Date(t)).getMonth()],String(a.getDate()).padStart(2,"0")+" "+n+" "+a.getFullYear())))));var t,a,n}))):200!==ne?React.createElement("div",null,"something went wrong: ",le," "):React.createElement("div",null,React.createElement("p",null,"To get started please add an Instagram Access Token. "),React.createElement("p",null,"You can follow 1 to 3"," ",React.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://developers.facebook.com/docs/instagram-basic-display-api/getting-started"},"steps")," ","to generate token."),React.createElement("p",null,"Once you have a token, please paste it into the 'Access Token' setting.")),React.createElement(React.Fragment,null,u&&React.createElement(q,{key:"inspector",attributes:t,setAttributes:a}),"card"===k&&B&&React.createElement(l.BlockControls,null,React.createElement(React.Fragment,null,React.createElement(c.ToolbarGroup,null,React.createElement(l.MediaUpload,{onSelect:function(e){return a({profileImg:e.url,imageID:e.id})},allowedTypes:["image"],value:F,render:function(e){var t=e.open;return React.createElement(c.ToolbarButton,{className:"components-toolbar__control",label:(0,r.__)("Edit Profile Image","instagram-block"),icon:"edit",onClick:t})}})))),React.createElement("div",Ye,React.createElement("style",null,"\n\t\t\t ".concat(Ke,"\n\n\t\t\t /* mimmikcssStart */\n\n\t\t\t ").concat("Tablet"===b?We:" ","\n\t\t\t ").concat("Mobile"===b?We+Xe:" ","\n\n\t\t\t /* mimmikcssEnd */\n\n\t\t\t @media all and (max-width: 1024px) {\t\n\n\t\t\t\t /* tabcssStart */\t\t\t\n\t\t\t\t ").concat(J(We),"\n\t\t\t\t /* tabcssEnd */\t\t\t\n\t\t\t \n\t\t\t }\n\t\t\t \n\t\t\t @media all and (max-width: 767px) {\n\t\t\t\t \n\t\t\t\t /* mobcssStart */\t\t\t\n\t\t\t\t ").concat(J(Xe),"\n\t\t\t\t /* mobcssEnd */\t\t\t\n\t\t\t \n\t\t\t }\n\t\t\t ")),React.createElement("div",{className:"eb-instagram-wrapper ".concat(g)},React.createElement("div",{className:"eb-instagram__gallery".concat(ee?" hide":"")},Qe),ee?React.createElement(React.Fragment,null,React.createElement("p",null,React.createElement(c.Spinner,null),(0,r.__)("Loading feed","instagram-block"))):"")))},save:function(){return null},example:{attributes:{preview:!0}}})},184:function(e,t){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var l=r.apply(null,a);l&&e.push(l)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var c in a)n.call(a,c)&&a[c]&&e.push(c);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=function(t,a,r,o){if(!a){var l=1/0;for(m=0;m<e.length;m++){a=e[m][0],r=e[m][1],o=e[m][2];for(var c=!0,i=0;i<a.length;i++)(!1&o||l>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(c=!1,o<l&&(l=o));if(c){e.splice(m--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,r,o]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={117:0,152:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,l=a[0],c=a[1],i=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(i)var m=i(n)}for(t&&t(a);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(m)},a=self.webpackChunkinstagram_feed_block=self.webpackChunkinstagram_feed_block||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var r=n.O(void 0,[152],(function(){return n(98)}));r=n.O(r)}();