var J=Object.defineProperty;var a=(r,e)=>J(r,"name",{value:e,configurable:!0});import"./index.a6ab08f2.js";import{c as w,A as Q,M as Y}from"./Props.341a2cd8.js";import{j as E,a as z}from"./jsx-runtime.5195227d.js";import"./iframe.c1828588.js";import{c as Z}from"./index.5b9bb3c6.js";import"./string.2d351e73.js";import"./index.56cb30e1.js";import"./es.map.constructor.ee74a667.js";import"./es.number.to-fixed.33ee1d4e.js";function p(){return p=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)({}).hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},p.apply(null,arguments)}a(p,"_extends$1");function V(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}a(V,"_assertThisInitialized");function O(r,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},O(r,e)}a(O,"_setPrototypeOf");function ee(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,O(r,e)}a(ee,"_inheritsLoose");function $(r){return $=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},$(r)}a($,"_getPrototypeOf");function re(r){try{return Function.toString.call(r).indexOf("[native code]")!==-1}catch{return typeof r=="function"}}a(re,"_isNativeFunction");function X(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(X=a(function(){return!!r},"_isNativeReflectConstruct"))()}a(X,"_isNativeReflectConstruct");function ne(r,e,n){if(X())return Reflect.construct.apply(null,arguments);var t=[null];t.push.apply(t,e);var f=new(r.bind.apply(r,t));return n&&O(f,n.prototype),f}a(ne,"_construct");function P(r){var e=typeof Map=="function"?new Map:void 0;return P=a(function(t){if(t===null||!re(t))return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,f)}function f(){return ne(t,arguments,$(this).constructor)}return a(f,"Wrapper"),f.prototype=Object.create(t.prototype,{constructor:{value:f,enumerable:!1,writable:!0,configurable:!0}}),O(f,t)},"_wrapNativeSuper"),P(r)}a(P,"_wrapNativeSuper");var h=function(r){ee(e,r);function e(n){var t;return t=r.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,V(t)}return a(e,"PolishedError"),e}(P(Error));function T(r){return Math.round(r*255)}a(T,"colorToInt");function te(r,e,n){return T(r)+","+T(e)+","+T(n)}a(te,"convertToInt");function C(r,e,n,t){if(t===void 0&&(t=te),e===0)return t(n,n,n);var f=(r%360+360)%360/60,i=(1-Math.abs(2*n-1))*e,s=i*(1-Math.abs(f%2-1)),o=0,u=0,b=0;f>=0&&f<1?(o=i,u=s):f>=1&&f<2?(o=s,u=i):f>=2&&f<3?(u=i,b=s):f>=3&&f<4?(u=s,b=i):f>=4&&f<5?(o=s,b=i):f>=5&&f<6&&(o=i,b=s);var g=n-i/2,c=o+g,d=u+g,k=b+g;return t(c,d,k)}a(C,"hslToRgb");var D={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ae(r){if(typeof r!="string")return r;var e=r.toLowerCase();return D[e]?"#"+D[e]:r}a(ae,"nameToHex");var fe=/^#[a-fA-F0-9]{6}$/,ie=/^#[a-fA-F0-9]{8}$/,se=/^#[a-fA-F0-9]{3}$/,oe=/^#[a-fA-F0-9]{4}$/,H=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,ue=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,pe=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,de=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function x(r){if(typeof r!="string")throw new h(3);var e=ae(r);if(e.match(fe))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(ie)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(se))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(oe)){var t=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:t}}var f=H.exec(e);if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)};var i=ue.exec(e.substring(0,50));if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])>1?parseFloat(""+i[4])/100:parseFloat(""+i[4])};var s=pe.exec(e);if(s){var o=parseInt(""+s[1],10),u=parseInt(""+s[2],10)/100,b=parseInt(""+s[3],10)/100,g="rgb("+C(o,u,b)+")",c=H.exec(g);if(!c)throw new h(4,e,g);return{red:parseInt(""+c[1],10),green:parseInt(""+c[2],10),blue:parseInt(""+c[3],10)}}var d=de.exec(e.substring(0,50));if(d){var k=parseInt(""+d[1],10),K=parseInt(""+d[2],10)/100,U=parseInt(""+d[3],10)/100,S="rgb("+C(k,K,U)+")",j=H.exec(S);if(!j)throw new h(4,e,S);return{red:parseInt(""+j[1],10),green:parseInt(""+j[2],10),blue:parseInt(""+j[3],10),alpha:parseFloat(""+d[4])>1?parseFloat(""+d[4])/100:parseFloat(""+d[4])}}throw new h(5)}a(x,"parseToRgb");function le(r){var e=r.red/255,n=r.green/255,t=r.blue/255,f=Math.max(e,n,t),i=Math.min(e,n,t),s=(f+i)/2;if(f===i)return r.alpha!==void 0?{hue:0,saturation:0,lightness:s,alpha:r.alpha}:{hue:0,saturation:0,lightness:s};var o,u=f-i,b=s>.5?u/(2-f-i):u/(f+i);switch(f){case e:o=(n-t)/u+(n<t?6:0);break;case n:o=(t-e)/u+2;break;default:o=(e-n)/u+4;break}return o*=60,r.alpha!==void 0?{hue:o,saturation:b,lightness:s,alpha:r.alpha}:{hue:o,saturation:b,lightness:s}}a(le,"rgbToHsl");function m(r){return le(x(r))}a(m,"parseToHsl");var be=a(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),A=be;function v(r){var e=r.toString(16);return e.length===1?"0"+e:e}a(v,"numberToHex");function R(r){return v(Math.round(r*255))}a(R,"colorToHex");function ce(r,e,n){return A("#"+R(r)+R(e)+R(n))}a(ce,"convertToHex");function _(r,e,n){return C(r,e,n,ce)}a(_,"hslToHex");function he(r,e,n){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number")return _(r,e,n);if(typeof r=="object"&&e===void 0&&n===void 0)return _(r.hue,r.saturation,r.lightness);throw new h(1)}a(he,"hsl");function ge(r,e,n,t){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?_(r,e,n):"rgba("+C(r,e,n)+","+t+")";if(typeof r=="object"&&e===void 0&&n===void 0&&t===void 0)return r.alpha>=1?_(r.hue,r.saturation,r.lightness):"rgba("+C(r.hue,r.saturation,r.lightness)+","+r.alpha+")";throw new h(2)}a(ge,"hsla");function q(r,e,n){if(typeof r=="number"&&typeof e=="number"&&typeof n=="number")return A("#"+v(r)+v(e)+v(n));if(typeof r=="object"&&e===void 0&&n===void 0)return A("#"+v(r.red)+v(r.green)+v(r.blue));throw new h(6)}a(q,"rgb");function M(r,e,n,t){if(typeof r=="string"&&typeof e=="number"){var f=x(r);return"rgba("+f.red+","+f.green+","+f.blue+","+e+")"}else{if(typeof r=="number"&&typeof e=="number"&&typeof n=="number"&&typeof t=="number")return t>=1?q(r,e,n):"rgba("+r+","+e+","+n+","+t+")";if(typeof r=="object"&&e===void 0&&n===void 0&&t===void 0)return r.alpha>=1?q(r.red,r.green,r.blue):"rgba("+r.red+","+r.green+","+r.blue+","+r.alpha+")"}throw new h(7)}a(M,"rgba");var me=a(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),ye=a(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),ve=a(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),we=a(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function y(r){if(typeof r!="object")throw new h(8);if(ye(r))return M(r);if(me(r))return q(r);if(we(r))return ge(r);if(ve(r))return he(r);throw new h(8)}a(y,"toColorString");function B(r,e,n){return a(function(){var f=n.concat(Array.prototype.slice.call(arguments));return f.length>=e?r.apply(this,f):B(r,e,f)},"fn")}a(B,"curried");function l(r){return B(r,r.length,[])}a(l,"curry");function xe(r,e){if(e==="transparent")return e;var n=m(e);return y(p({},n,{hue:n.hue+parseFloat(r)}))}a(xe,"adjustHue");l(xe);function F(r,e,n){return Math.max(r,Math.min(e,n))}a(F,"guard");function Fe(r,e){if(e==="transparent")return e;var n=m(e);return y(p({},n,{lightness:F(0,1,n.lightness-parseFloat(r))}))}a(Fe,"darken");l(Fe);function ke(r,e){if(e==="transparent")return e;var n=m(e);return y(p({},n,{saturation:F(0,1,n.saturation-parseFloat(r))}))}a(ke,"desaturate");l(ke);function L(r){if(r==="transparent")return 0;var e=x(r),n=Object.keys(e).map(function(s){var o=e[s]/255;return o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)}),t=n[0],f=n[1],i=n[2];return parseFloat((.2126*t+.7152*f+.0722*i).toFixed(3))}a(L,"getLuminance");function Ie(r,e){var n=L(r),t=L(e);return parseFloat((n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)).toFixed(2))}a(Ie,"getContrast");function Oe(r,e){if(e==="transparent")return e;var n=m(e);return y(p({},n,{lightness:F(0,1,n.lightness+parseFloat(r))}))}a(Oe,"lighten");l(Oe);function Ce(r,e,n){if(e==="transparent")return n;if(n==="transparent")return e;if(r===0)return n;var t=x(e),f=p({},t,{alpha:typeof t.alpha=="number"?t.alpha:1}),i=x(n),s=p({},i,{alpha:typeof i.alpha=="number"?i.alpha:1}),o=f.alpha-s.alpha,u=parseFloat(r)*2-1,b=u*o===-1?u:u+o,g=1+u*o,c=(b/g+1)/2,d=1-c,k={red:Math.floor(f.red*c+s.red*d),green:Math.floor(f.green*c+s.green*d),blue:Math.floor(f.blue*c+s.blue*d),alpha:f.alpha*parseFloat(r)+s.alpha*(1-parseFloat(r))};return M(k)}a(Ce,"mix");var je=l(Ce),G=je;function _e(r,e){if(e==="transparent")return e;var n=x(e),t=typeof n.alpha=="number"?n.alpha:1,f=p({},n,{alpha:F(0,1,(t*100+parseFloat(r)*100)/100)});return M(f)}a(_e,"opacify");l(_e);function Me(r,e){if(e==="transparent")return e;var n=m(e);return y(p({},n,{saturation:F(0,1,n.saturation+parseFloat(r))}))}a(Me,"saturate");l(Me);function Te(r,e){return e==="transparent"?e:y(p({},m(e),{hue:parseFloat(r)}))}a(Te,"setHue");l(Te);function He(r,e){return e==="transparent"?e:y(p({},m(e),{lightness:parseFloat(r)}))}a(He,"setLightness");l(He);function Re(r,e){return e==="transparent"?e:y(p({},m(e),{saturation:parseFloat(r)}))}a(Re,"setSaturation");l(Re);function $e(r,e){return e==="transparent"?e:G(parseFloat(r),"rgb(0, 0, 0)",e)}a($e,"shade");l($e);function Pe(r,e){return e==="transparent"?e:G(parseFloat(r),"rgb(255, 255, 255)",e)}a(Pe,"tint");l(Pe);function Ae(r,e){if(e==="transparent")return e;var n=x(e),t=typeof n.alpha=="number"?n.alpha:1,f=p({},n,{alpha:F(0,1,+(t*100-parseFloat(r)*100).toFixed(2)/100)});return M(f)}a(Ae,"transparentize");l(Ae);function qe(){return Object.entries(Z).map(([r,e])=>E("div",{style:{backgroundColor:e,padding:"2rem"},children:z("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace",color:Ie(e,"#FFF")<3.5?"#000":"#FFF"},children:[z("strong",{children:["$",r]}),E("span",{children:e})]})},r))}a(qe,"ColorsGrid");function N(){return N=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)({}).hasOwnProperty.call(n,t)&&(r[t]=n[t])}return r},N.apply(null,arguments)}a(N,"_extends");const Ne={},Se="wrapper";function W({components:r,...e}){return w(Se,N({},Ne,e,{components:r,mdxType:"MDXLayout"}),w(Y,{title:"Tokens/Colors",mdxType:"Meta"}),w("h1",null,"Colors"),w("p",null,"Essas s\xE3o as cores utilizadas no Nexus UI."),w(qe,{mdxType:"ColorsGrid"}))}a(W,"MDXContent");W.isMDXComponent=!0;const Ee=a(()=>{throw new Error("Docs-only story")},"__page");Ee.parameters={docsOnly:!0};const I={title:"Tokens/Colors",includeStories:["__page"]},ze={};I.parameters=I.parameters||{};I.parameters.docs={...I.parameters.docs||{},page:()=>w(Q,{mdxStoryNameToKey:ze,mdxComponentAnnotations:I},w(W,null))};const Ye=["__page"];export{Ye as __namedExportsOrder,Ee as __page,I as default};
//# sourceMappingURL=colors.stories.cd61f2d8.js.map
