import{M as l,N as h,j as a}from"./index-0940e422.js";import{u as m,a as i,M as g}from"./MoveList-369061fe.js";const e={query:"",include_adult:!1,language:"en-US",page:1};function f(){const[s]=l(),r=s.get("search");e.query=r;const[t,n]=m(h,e),[o,c,u]=i(t);return a.jsxs(a.Fragment,{children:[a.jsx("h1",{children:"Search results"}),a.jsx(g,{moveList:o,page:n,totalPage:c,handlePageChange:u})]})}export{f as Component,f as default};
