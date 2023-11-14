import{_ as L,a as d,d as ke,i as Le,g as P,b as N,s as w,r as p,u as B,c as ze,T as Ee,e as Fe,f as ue,j as s,h as I,k as D,l as re,P as Pe,m as Be,B as pe,n as ge,o as De,p as K,L as ae,q as Oe,t as Ve,v as Ge,w as he,x as _,G as O,y as x,F as We,I as Ue,S as _e,z as qe,A as te,C as He,D as Je,E as Xe}from"./index-d30c046e.js";import{u as fe,a as Ke,M as Qe}from"./MoveList-76276c2d.js";const Ye=["sx"],Ze=e=>{var t,n;const o={systemProps:{},otherProps:{}},a=(t=e==null||(n=e.theme)==null?void 0:n.unstable_sxConfig)!=null?t:ke;return Object.keys(e).forEach(r=>{a[r]?o.systemProps[r]=e[r]:o.otherProps[r]=e[r]}),o};function et(e){const{sx:t}=e,n=L(e,Ye),{systemProps:o,otherProps:a}=Ze(n);let r;return Array.isArray(t)?r=[o,...t]:typeof t=="function"?r=(...l)=>{const i=t(...l);return Le(i)?d({},o,i):o}:r=d({},o,t),d({},a,{sx:r})}function tt(e){return P("MuiCollapse",e)}N("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const nt=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ot=e=>{const{orientation:t,classes:n}=e,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return D(o,tt,n)},st=w("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],n.state==="entered"&&t.entered,n.state==="exited"&&!n.in&&n.collapsedSize==="0px"&&t.hidden]}})(({theme:e,ownerState:t})=>d({height:0,overflow:"hidden",transition:e.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:e.transitions.create("width")},t.state==="entered"&&d({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),rt=w("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>d({display:"flex",width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),at=w("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>d({width:"100%"},e.orientation==="horizontal"&&{width:"auto",height:"100%"})),me=p.forwardRef(function(t,n){const o=B({props:t,name:"MuiCollapse"}),{addEndListener:a,children:r,className:l,collapsedSize:i="0px",component:u,easing:f,in:m,onEnter:v,onEntered:h,onEntering:y,onExit:C,onExited:g,onExiting:b,orientation:$="vertical",style:S,timeout:j=ze.standard,TransitionComponent:z=Ee}=o,q=L(o,nt),A=d({},o,{orientation:$,collapsedSize:i}),T=ot(A),ne=Fe(),oe=p.useRef(),k=p.useRef(null),Y=p.useRef(),H=typeof i=="number"?`${i}px`:i,V=$==="horizontal",G=V?"width":"height";p.useEffect(()=>()=>{clearTimeout(oe.current)},[]);const J=p.useRef(null),Se=ue(n,J),E=c=>R=>{if(c){const M=J.current;R===void 0?c(M):c(M,R)}},Z=()=>k.current?k.current[V?"clientWidth":"clientHeight"]:0,je=E((c,R)=>{k.current&&V&&(k.current.style.position="absolute"),c.style[G]=H,v&&v(c,R)}),we=E((c,R)=>{const M=Z();k.current&&V&&(k.current.style.position="");const{duration:W,easing:X}=re({style:S,timeout:j,easing:f},{mode:"enter"});if(j==="auto"){const se=ne.transitions.getAutoHeightDuration(M);c.style.transitionDuration=`${se}ms`,Y.current=se}else c.style.transitionDuration=typeof W=="string"?W:`${W}ms`;c.style[G]=`${M}px`,c.style.transitionTimingFunction=X,y&&y(c,R)}),Me=E((c,R)=>{c.style[G]="auto",h&&h(c,R)}),Ne=E(c=>{c.style[G]=`${Z()}px`,C&&C(c)}),Ie=E(g),Ae=E(c=>{const R=Z(),{duration:M,easing:W}=re({style:S,timeout:j,easing:f},{mode:"exit"});if(j==="auto"){const X=ne.transitions.getAutoHeightDuration(R);c.style.transitionDuration=`${X}ms`,Y.current=X}else c.style.transitionDuration=typeof M=="string"?M:`${M}ms`;c.style[G]=H,c.style.transitionTimingFunction=W,b&&b(c)}),Te=c=>{j==="auto"&&(oe.current=setTimeout(c,Y.current||0)),a&&a(J.current,c)};return s.jsx(z,d({in:m,onEnter:je,onEntered:Me,onEntering:we,onExit:Ne,onExited:Ie,onExiting:Ae,addEndListener:Te,nodeRef:J,timeout:j==="auto"?null:j},q,{children:(c,R)=>s.jsx(st,d({as:u,className:I(T.root,l,{entered:T.entered,exited:!m&&H==="0px"&&T.hidden}[c]),style:d({[V?"minWidth":"minHeight"]:H},S),ownerState:d({},A,{state:c}),ref:Se},R,{children:s.jsx(rt,{ownerState:d({},A,{state:c}),className:T.wrapper,ref:k,children:s.jsx(at,{ownerState:d({},A,{state:c}),className:T.wrapperInner,children:r})})}))}))});me.muiSupportAuto=!0;const it=me,lt=p.createContext({}),xe=lt;function ct(e){return P("MuiAccordion",e)}const dt=N("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),Q=dt,ut=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],pt=e=>{const{classes:t,square:n,expanded:o,disabled:a,disableGutters:r}=e;return D({root:["root",!n&&"rounded",o&&"expanded",a&&"disabled",!r&&"gutters"],region:["region"]},ct,t)},gt=w(Pe,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${Q.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})(({theme:e})=>{const t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${Q.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${Q.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:t})=>d({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${Q.expanded}`]:{margin:"16px 0"}})),ht=p.forwardRef(function(t,n){const o=B({props:t,name:"MuiAccordion"}),{children:a,className:r,defaultExpanded:l=!1,disabled:i=!1,disableGutters:u=!1,expanded:f,onChange:m,square:v=!1,TransitionComponent:h=it,TransitionProps:y}=o,C=L(o,ut),[g,b]=Be({controlled:f,default:l,name:"Accordion",state:"expanded"}),$=p.useCallback(T=>{b(!g),m&&m(T,!g)},[g,m,b]),[S,...j]=p.Children.toArray(a),z=p.useMemo(()=>({expanded:g,disabled:i,disableGutters:u,toggle:$}),[g,i,u,$]),q=d({},o,{square:v,disabled:i,disableGutters:u,expanded:g}),A=pt(q);return s.jsxs(gt,d({className:I(A.root,r),ref:n,ownerState:q,square:v},C,{children:[s.jsx(xe.Provider,{value:z,children:S}),s.jsx(h,d({in:g,timeout:"auto"},y,{children:s.jsx("div",{"aria-labelledby":S.props.id,id:S.props["aria-controls"],role:"region",className:A.region,children:j})}))]}))}),ft=ht;function mt(e){return P("MuiAccordionDetails",e)}N("MuiAccordionDetails",["root"]);const xt=["className"],vt=e=>{const{classes:t}=e;return D({root:["root"]},mt,t)},bt=w("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),yt=p.forwardRef(function(t,n){const o=B({props:t,name:"MuiAccordionDetails"}),{className:a}=o,r=L(o,xt),l=o,i=vt(l);return s.jsx(bt,d({className:I(i.root,a),ref:n,ownerState:l},r))}),Ct=yt;function $t(e){return P("MuiAccordionSummary",e)}const Rt=N("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),F=Rt,St=["children","className","expandIcon","focusVisibleClassName","onClick"],jt=e=>{const{classes:t,expanded:n,disabled:o,disableGutters:a}=e;return D({root:["root",n&&"expanded",o&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},$t,t)},wt=w(pe,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{const n={duration:e.transitions.duration.shortest};return d({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${F.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${F.expanded}`]:{minHeight:64}})}),Mt=w("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e,ownerState:t})=>d({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{margin:"20px 0"}})),Nt=w("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${F.expanded}`]:{transform:"rotate(180deg)"}})),It=p.forwardRef(function(t,n){const o=B({props:t,name:"MuiAccordionSummary"}),{children:a,className:r,expandIcon:l,focusVisibleClassName:i,onClick:u}=o,f=L(o,St),{disabled:m=!1,disableGutters:v,expanded:h,toggle:y}=p.useContext(xe),C=$=>{y&&y($),u&&u($)},g=d({},o,{expanded:h,disabled:m,disableGutters:v}),b=jt(g);return s.jsxs(wt,d({focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":h,className:I(b.root,r),focusVisibleClassName:I(b.focusVisible,i),onClick:C,ref:n,ownerState:g},f,{children:[s.jsx(Mt,{className:b.content,ownerState:g,children:a}),l&&s.jsx(Nt,{className:b.expandIconWrapper,ownerState:g,children:l})]}))}),At=It;function Tt(e){return P("MuiTypography",e)}N("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const kt=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Lt=e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:a,variant:r,classes:l}=e,i={root:["root",r,e.align!=="inherit"&&`align${ge(t)}`,n&&"gutterBottom",o&&"noWrap",a&&"paragraph"]};return D(i,Tt,l)},zt=w("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],n.align!=="inherit"&&t[`align${ge(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>d({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&e.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),ie={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Et={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Ft=e=>Et[e]||e,Pt=p.forwardRef(function(t,n){const o=B({props:t,name:"MuiTypography"}),a=Ft(o.color),r=et(d({},o,{color:a})),{align:l="inherit",className:i,component:u,gutterBottom:f=!1,noWrap:m=!1,paragraph:v=!1,variant:h="body1",variantMapping:y=ie}=r,C=L(r,kt),g=d({},r,{align:l,color:a,className:i,component:u,gutterBottom:f,noWrap:m,paragraph:v,variant:h,variantMapping:y}),b=u||(v?"p":y[h]||ie[h])||"span",$=Lt(g);return s.jsx(zt,d({as:b,ref:n,ownerState:g,className:I($.root,i)},C))}),Bt=Pt,Dt=N("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),le=Dt,Ot=N("MuiListItemIcon",["root","alignItemsFlexStart"]),ce=Ot,Vt=N("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),de=Vt;function Gt(e){return P("MuiMenuItem",e)}const Wt=N("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),U=Wt,Ut=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],_t=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},qt=e=>{const{disabled:t,dense:n,divider:o,disableGutters:a,selected:r,classes:l}=e,u=D({root:["root",n&&"dense",t&&"disabled",!a&&"gutters",o&&"divider",r&&"selected"]},Gt,l);return d({},l,u)},Ht=w(pe,{shouldForwardProp:e=>De(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:_t})(({theme:e,ownerState:t})=>d({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${U.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:K(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${U.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:K(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${U.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:K(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:K(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${U.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${U.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${le.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${le.inset}`]:{marginLeft:52},[`& .${de.root}`]:{marginTop:0,marginBottom:0},[`& .${de.inset}`]:{paddingLeft:36},[`& .${ce.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&d({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${ce.root} svg`]:{fontSize:"1.25rem"}}))),Jt=p.forwardRef(function(t,n){const o=B({props:t,name:"MuiMenuItem"}),{autoFocus:a=!1,component:r="li",dense:l=!1,divider:i=!1,disableGutters:u=!1,focusVisibleClassName:f,role:m="menuitem",tabIndex:v,className:h}=o,y=L(o,Ut),C=p.useContext(ae),g=p.useMemo(()=>({dense:l||C.dense||!1,disableGutters:u}),[C.dense,l,u]),b=p.useRef(null);Oe(()=>{a&&b.current&&b.current.focus()},[a]);const $=d({},o,{dense:g.dense,divider:i,disableGutters:u}),S=qt(o),j=ue(b,n);let z;return o.disabled||(z=v!==void 0?v:-1),s.jsx(ae.Provider,{value:g,children:s.jsx(Ht,d({ref:j,role:m,tabIndex:z,component:r,focusVisibleClassName:I(S.focusVisible,f),className:I(S.root,h)},y,{ownerState:$,classes:S}))})}),Xt=Jt,Kt={language:"en-US"};function Qt(){const[e]=fe(Ve,Kt),[t,n]=p.useState([]),o=t.filter(i=>i.checked).map(i=>i.id).join("|"),a="genre",r="Generes";p.useEffect(()=>{async function i(){const u=await Ge(e);u.genres&&n([...u.genres].map(f=>(f.checked=!1,f)))}i()},[e]);function l(i,u,f){u===a&&n(m=>m.map(h=>h.id===i&&h.checked!==f?{...h,checked:f}:h))}return[{filterType:"check",filterListOption:t,filterName:a,filterTitle:r,hendleChengeFilter:l},o]}function Yt(){const[e,t]=p.useState(he[0].value),[n,o]=p.useState(_.desc);function a(r){e!==r.value&&t(r.value),r.direction!==n&&o(r.direction)}return[e,n,a]}function Zt(e){return O({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}}]})(e)}function en(e){return O({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"}}]})(e)}function tn(e){return O({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"}}]})(e)}ve.propTypes={name:x.string.isRequired,isChecked:x.bool.isRequired,id:x.number.isRequired,onChange:x.func};function ve({name:e,id:t,isChecked:n,onChange:o}){function a(){o(t,!n)}const r=n?s.jsx(tn,{className:"inline-block mr-3"}):s.jsx(en,{className:"inline-block mr-3"}),l="p-3 border-b cursor-pointer hover:bg-slate-900"+(n?" text-orange-600 bg-slate-900":"");return s.jsxs("li",{className:l,onClick:a,children:[r," ",e]})}be.propTypes={checkList:x.array.isRequired,nameFilter:x.string.isRequired,onChange:x.func.isRequired,titleFilter:x.string.isRequired};function be({checkList:e,nameFilter:t,titleFilter:n,onChange:o}){function a(r,l){o(r,t,l)}return s.jsx(s.Fragment,{children:s.jsxs(ft,{children:[s.jsx(At,{expandIcon:s.jsx(Zt,{className:"text-white"}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"bg-gray-900 text-white",children:s.jsx(Bt,{className:"text-2xl",children:n})}),s.jsx(Ct,{className:"bg-gray-900 text-white",children:s.jsx("ul",{children:e.map(r=>s.jsx(ve,{name:r.name,isChecked:r.checked,id:r.id,onChange:a},r.id))})})]})})}ye.propTypes={filterData:x.array.isRequired};function ye({filterData:e}){return s.jsxs(s.Fragment,{children:[s.jsx("h2",{className:"border-b text-4xl font-bold pb-5 mb-5",children:"Filters"}),s.jsx("div",{className:"absolute top-[100px] left-0 right-0 px-6 bottom-6 overflow-auto",children:e.map((t,n)=>{if(t.filterType==="check")return s.jsx(be,{checkList:t.filterListOption,nameFilter:t.filterName,titleFilter:t.filterTitle,onChange:t.hendleChengeFilter},n)})})]})}function nn(e){return O({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"}}]})(e)}function on(e){return O({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M839.6 433.8L749 150.5a9.24 9.24 0 0 0-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 0 0-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 0 0-9.2-9.3zM416 702h-76V172c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v530h-76c-6.7 0-10.5 7.8-6.3 13l112 141.9a8 8 0 0 0 12.6 0l112-141.9c4.1-5.2.4-13-6.3-13z"}}]})(e)}function sn(e){return O({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M839.6 433.8L749 150.5a9.24 9.24 0 0 0-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9 0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4 2.4-.8 4.3-2.4 5.5-4.6 1.1-2.2 1.3-4.7.6-7.1zM663.3 325.5l32.8-116.9h6.3l32.1 116.9h-71.2zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 0 0-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 0 0-9.2-9.3zM310.3 167.1a8 8 0 0 0-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13l-112-141.9z"}}]})(e)}Ce.propTypes={value:x.string,optionsList:x.array,handleChange:x.func,text:x.string};function Ce({value:e,optionsList:t,handleChange:n,text:o="Sort by"}){const a=p.useId();return s.jsxs(We,{children:[s.jsx(Ue,{sx:{color:"#fff"},id:a,children:o}),s.jsx(_e,{labelId:a,id:"demo-simple-select",sx:{".MuiSelect-select":{...qe.input}},value:e,label:"Age",onChange:n,children:t.map(r=>s.jsx(Xt,{value:r.value,children:r.label},r.value))})]})}$e.propTypes={sortValue:x.string,direction:x.string,onChange:x.func};function $e({sortValue:e,direction:t,onChange:n}){function o(l){n({value:l.target.value,direction:t})}function a(){n({value:e,direction:t===_.desc?_.asc:_.desc})}const r=t===_.asc?s.jsx(on,{size:40}):s.jsx(sn,{size:40});return s.jsxs("div",{children:[s.jsx(Ce,{value:e,optionsList:he,handleChange:o}),s.jsx("button",{className:"p-2",onClick:a,children:r})]})}function rn(e){const t=e.map(o=>(o.filterListOption=o.filterListOption.filter(a=>a.checked),o)),n=t.some(o=>o.filterListOption.some(a=>a.checked));return[t,n]}Re.propTypes={clearData:x.array.isRequired};function Re({clearData:e}){function t(){e.forEach(n=>{n.filterListOption.forEach(o=>n.hendleChengeFilter(o.id,n.filterName,!1))})}return s.jsxs("div",{className:"p-2 flex mt-3",children:[e.map(n=>s.jsxs("ul",{className:"flex gap-3 items-center",children:[s.jsxs("li",{className:"font-bold",children:[n.filterTitle,":"]}),n.filterListOption.map(o=>s.jsx("li",{children:s.jsxs("button",{onClick:()=>{n.hendleChengeFilter(o.id,n.filterName,!1)},className:"flex items-center bg-gray-800 py-1 px-3 rounded-lg",children:[s.jsx(te,{className:"mr-1 bg-orange-600 rounded-full"})," ",o.name]})},o.id))]},n.filterName)),s.jsxs("button",{onClick:t,className:"flex items-center bg-orange-600 py-1 px-3 rounded-lg ml-6",children:[s.jsx(te,{className:"mr-1 bg-gray-900 rounded-full"})," Clear All"]})]})}const ee={include_adult:!1,include_video:!1,language:"en-US",page:1,sort_by:"popularity.desc","vote_count.gte":200};function cn(){const[e,t]=Qt(),n=[e],[o,a]=rn([...n.map(g=>({...g}))]),[r,l]=He(),[i,u,f]=Yt();ee.with_genres=t,ee.sort_by=`${i}.${u}`;const[m,v]=fe(Je,ee),[h,y,C]=Ke(m);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"px-3",children:[s.jsx("h1",{className:"text-5xl font-bold text-center mb-5",children:"Moves"}),s.jsxs("div",{className:"flex p-5 bg-gray-900 rounded-2xl",children:[s.jsx($e,{sortValue:i,onChange:f,direction:u}),s.jsxs("button",{className:"ml-5 p-3 text-2xl rounded border border-orange-600",onClick:l,children:[s.jsx(nn,{className:"inline-block mr-3 align-[-3px]"})," Filters"]})]}),a&&s.jsx(Re,{clearData:o}),s.jsx(Qe,{moveList:h,page:v,totalPage:y,handlePageChange:C})]}),s.jsx(Xe,{isOpen:r,type:"left",className:"border-r py-4 px-6 bg-gray-800 z-50 w-[320px]",closeIcon:s.jsx(te,{size:24}),toggleOpenSidebar:l,children:s.jsx(ye,{filterData:n})})]})}export{cn as Component,cn as default};
