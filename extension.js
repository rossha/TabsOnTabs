// JS Purify
(function(e){"use strict";var t=typeof window==="undefined"?null:window;if(typeof define==="function"&&define.amd){define(function(){return e(t)})}else if(typeof module!=="undefined"){module.exports=e(t)}else{t.DOMPurify=e(t)}})(function e(t){"use strict";var r=function(t){return e(t)};r.version="0.8.2";r.removed=[];if(!t||!t.document||t.document.nodeType!==9){r.isSupported=false;return r}var n=t.document;var a=n;var i=t.DocumentFragment;var o=t.HTMLTemplateElement;var l=t.NodeFilter;var s=t.NamedNodeMap||t.MozNamedAttrMap;var f=t.Text;var c=t.Comment;var u=t.DOMParser;if(typeof o==="function"){var d=n.createElement("template");if(d.content&&d.content.ownerDocument){n=d.content.ownerDocument}}var m=n.implementation;var p=n.createNodeIterator;var v=n.getElementsByTagName;var h=n.createDocumentFragment;var g=a.importNode;var y={};r.isSupported=typeof m.createHTMLDocument!=="undefined"&&n.documentMode!==9;var b=function(e,t){var r=t.length;while(r--){if(typeof t[r]==="string"){t[r]=t[r].toLowerCase()}e[t[r]]=true}return e};var T=function(e){var t={};var r;for(r in e){if(e.hasOwnProperty(r)){t[r]=e[r]}}return t};var x=null;var k=b({},["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr","svg","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","switch","symbol","text","textpath","title","tref","tspan","view","vkern","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","#text"]);var A=null;var w=b({},["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","rows","rowspan","spellcheck","scope","selected","shape","size","span","srclang","start","src","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns","accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mode","min","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","surfacescale","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","y","y1","y2","z","zoomandpan","accent","accentunder","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","display","displaystyle","fence","frame","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]);var E=null;var S=null;var M=true;var O=false;var N=false;var L=false;var D=/\{\{[\s\S]*|[\s\S]*\}\}/gm;var _=/<%[\s\S]*|[\s\S]*%>/gm;var C=false;var z=false;var R=false;var F=false;var H=true;var B=true;var W=b({},["audio","head","math","script","style","svg","video"]);var j=b({},["audio","video","img","source"]);var G=b({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]);var I=null;var q=n.createElement("form");var P=function(e){if(typeof e!=="object"){e={}}x="ALLOWED_TAGS"in e?b({},e.ALLOWED_TAGS):k;A="ALLOWED_ATTR"in e?b({},e.ALLOWED_ATTR):w;E="FORBID_TAGS"in e?b({},e.FORBID_TAGS):{};S="FORBID_ATTR"in e?b({},e.FORBID_ATTR):{};M=e.ALLOW_DATA_ATTR!==false;O=e.ALLOW_UNKNOWN_PROTOCOLS||false;N=e.SAFE_FOR_JQUERY||false;L=e.SAFE_FOR_TEMPLATES||false;C=e.WHOLE_DOCUMENT||false;z=e.RETURN_DOM||false;R=e.RETURN_DOM_FRAGMENT||false;F=e.RETURN_DOM_IMPORT||false;H=e.SANITIZE_DOM!==false;B=e.KEEP_CONTENT!==false;if(L){M=false}if(R){z=true}if(e.ADD_TAGS){if(x===k){x=T(x)}b(x,e.ADD_TAGS)}if(e.ADD_ATTR){if(A===w){A=T(A)}b(A,e.ADD_ATTR)}if(B){x["#text"]=true}if(Object&&"freeze"in Object){Object.freeze(e)}I=e};var U=function(e){r.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}};var V=function(e,t){r.removed.push({attribute:t.getAttributeNode(e),from:t});t.removeAttribute(e)};var K=function(e){var t,r;try{t=(new u).parseFromString(e,"text/html")}catch(n){}if(!t||!t.documentElement){t=m.createHTMLDocument("");r=t.body;r.parentNode.removeChild(r.parentNode.firstElementChild);r.outerHTML=e}if(typeof t.getElementsByTagName==="function"){return t.getElementsByTagName(C?"html":"body")[0]}return v.call(t,C?"html":"body")[0]};var J=function(e){return p.call(e.ownerDocument||e,e,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT,function(){return l.FILTER_ACCEPT},false)};var Q=function(e){if(e instanceof f||e instanceof c){return false}if(typeof e.nodeName!=="string"||typeof e.textContent!=="string"||typeof e.removeChild!=="function"||!(e.attributes instanceof s)||typeof e.removeAttribute!=="function"||typeof e.setAttribute!=="function"){return true}return false};var X=function(e){var t,n;ne("beforeSanitizeElements",e,null);if(Q(e)){U(e);return true}t=e.nodeName.toLowerCase();ne("uponSanitizeElement",e,{tagName:t});if(!x[t]||E[t]){if(B&&!W[t]&&typeof e.insertAdjacentHTML==="function"){try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(a){}}U(e);return true}if(N&&!e.firstElementChild&&(!e.content||!e.content.firstElementChild)&&/</g.test(e.textContent)){r.removed.push({element:e.cloneNode()});e.innerHTML=e.textContent.replace(/</g,"&lt;")}if(L&&e.nodeType===3){n=e.textContent;n=n.replace(D," ");n=n.replace(_," ");if(e.textContent!==n){r.removed.push({element:e.cloneNode()});e.textContent=n}}ne("afterSanitizeElements",e,null);return false};var Y=/^data-[\-\w.\u00B7-\uFFFF]/;var Z=/^(?:(?:(?:f|ht)tps?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i;var $=/^(?:\w+script|data):/i;var ee=/[\x00-\x20\xA0\u1680\u180E\u2000-\u2029\u205f\u3000]/g;var te=function(e){var a,i,o,l,s,f,c,u;ne("beforeSanitizeAttributes",e,null);f=e.attributes;if(!f){return}c={attrName:"",attrValue:"",keepAttr:true};u=f.length;while(u--){a=f[u];i=a.name;o=a.value;l=i.toLowerCase();c.attrName=l;c.attrValue=o;c.keepAttr=true;ne("uponSanitizeAttribute",e,c);o=c.attrValue;if(l==="name"&&e.nodeName==="IMG"&&f.id){s=f.id;f=Array.prototype.slice.apply(f);V("id",e);V(i,e);if(f.indexOf(s)>u){e.setAttribute("id",s.value)}}else{if(i==="id"){e.setAttribute(i,"")}V(i,e)}if(!c.keepAttr){continue}if(H&&(l==="id"||l==="name")&&(o in t||o in n||o in q)){continue}if(L){o=o.replace(D," ");o=o.replace(_," ")}if(M&&Y.test(l)){}else if(!A[l]||S[l]){continue}else if(G[l]){}else if(Z.test(o.replace(ee,""))){}else if(l==="src"&&o.indexOf("data:")===0&&j[e.nodeName.toLowerCase()]){}else if(O&&!$.test(o.replace(ee,""))){}else if(!o){}else{continue}try{e.setAttribute(i,o);r.removed.pop()}catch(d){}}ne("afterSanitizeAttributes",e,null)};var re=function(e){var t;var r=J(e);ne("beforeSanitizeShadowDOM",e,null);while(t=r.nextNode()){ne("uponSanitizeShadowNode",t,null);if(X(t)){continue}if(t.content instanceof i){re(t.content)}te(t)}ne("afterSanitizeShadowDOM",e,null)};var ne=function(e,t,n){if(!y[e]){return}y[e].forEach(function(e){e.call(r,t,n,I)})};r.sanitize=function(e,n){var o,l,s,f,c;if(!e){e=""}if(typeof e!=="string"){if(typeof e.toString!=="function"){throw new TypeError("toString is not a function")}else{e=e.toString()}}if(!r.isSupported){if(typeof t.toStaticHTML==="object"||typeof t.toStaticHTML==="function"){return t.toStaticHTML(e)}return e}P(n);r.removed=[];if(!z&&!C&&e.indexOf("<")===-1){return e}o=K(e);if(!o){return z?null:""}f=J(o);while(l=f.nextNode()){if(l.nodeType===3&&l===s){continue}if(X(l)){continue}if(l.content instanceof i){re(l.content)}te(l);s=l}if(z){if(R){c=h.call(o.ownerDocument);while(o.firstChild){c.appendChild(o.firstChild)}}else{c=o}if(F){c=g.call(a,c,true)}return c}return C?o.outerHTML:o.innerHTML};r.addHook=function(e,t){if(typeof t!=="function"){return}y[e]=y[e]||[];y[e].push(t)};r.removeHook=function(e){if(y[e]){y[e].pop()}};r.removeHooks=function(e){if(y[e]){y[e]=[]}};r.removeAllHooks=function(){y={}};return r});
//# sourceMappingURL=./dist/purify.min.js.map
// end JS purify

// to-do:
// style textbox text
// add button to delete textarea

// feature:
// "save notes": clicking save bookmarks the browser page with your note as the description.
// window vs. tab notes
// "title this tab" feature
// ctrl-B to bold, ctrl-I to italicize

chrome.tabs.onUpdated.addListener(function callback)

// add listeners
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    if (request.greeting == "add sticky") {
      addSticky();
      sendResponse({farewell: "end sticky function"});
      return true;
    }

    if (request.greeting == "update title") {
      updateTitle(request.title);
      sendResponse({farewell: "end title update"});
      return true;
    }

});

function updateTitle(title) {
  document.title = DOMPurify.sanitize(title);
}

function addSticky(e) {
    //e.preventDefault();

    // create notes container if not already present
    let notes = document.querySelector(`div#stickynotes`);
    if(!notes) {
      notes = document.createElement('div');
      notes.setAttribute('id', 'stickynotes');
      document.body.insertBefore(notes, document.body.firstChild);
    }

    // create sticky and add to top of notes container
    const note = document.createElement('div');
    note.classList.add('stickynote');

    const text = document.createElement('textarea');
    text.addEventListener('mousedown', startDrag);
    text.classList.add('stickynote__textarea');

    note.appendChild(text);
    notes.insertBefore(note, notes.firstChild);

}

// click and drag functionality
let isDown = false;
let startCoords = {};
let shift = {};
let coords;

function startDrag(e) {

  isDown = true;
  let note = this.parentElement;
  note.classList.add('active');

  if(document.activeElement.tagName === 'TEXTAREA') {
    stopDrag();
  };

  const noteCoords = note.getBoundingClientRect();
  // stop dragging to allow for note resize
  if(noteCoords.width - e.offsetX < 15 && noteCoords.height - e.offsetY < 15) {
    stopDrag();
  };

  coords = {
    top: noteCoords.top + (noteCoords.height / 2),
    left: noteCoords.left + (noteCoords.width / 2)
  };

  [shift.left, shift.top] = (note.dataset.top || note.dataset.left) ? [Number(note.dataset.left), Number(note.dataset.top)] : [0,0];
  [startCoords.left, startCoords.top] = [coords.left, coords.top];
}

function drag(e) {
  if(!isDown) return;
  e.preventDefault();

  const note = document.querySelector('.active');
  let coords = note.getBoundingClientRect();
  if(coords.top <= 0 || coords.left <= 0 || coords.right >= window.innerWidth || coords.bottom >= window.innerHeight) {
    // return;
  }

  // move sticky relative to window, not the document
  const [x,y] = [e.clientX, e.clientY];
  const [walkX, walkY] = [(x + shift.left - startCoords.left),(y + shift.top - startCoords.top)]

  note.style.setProperty('transform', `translate(${walkX}px, ${walkY}px)`);
  note.dataset['left'] = walkX;
  note.dataset['top'] = walkY;
}

function stopDrag() {
  isDown = false;

  const note = document.querySelector('.active');
  if(note) {
    note.classList.remove('active');
  }
}

// Event Listeners
// upon mousemove, drag the note
document.addEventListener('mousemove', drag);

// upon mouseup or mouseleave, stop dragging
document.addEventListener('mouseleave', stopDrag);
document.addEventListener('mouseup', stopDrag);
