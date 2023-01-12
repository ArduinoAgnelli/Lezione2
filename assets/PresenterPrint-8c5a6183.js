import{f as _,h as d,j as h,ag as p,c as m,ah as u,l as n,ai as t,aj as a,y as s,F as f,ak as g,al as v,am as x,n as r,an as y,ao as b,m as k,ap as N,aq as w,_ as L}from"./nav-9372fa8c.js";import{N as P}from"./NoteViewer-ae87e3b5.js";import{u as V}from"./index-88d30f03.js";const j={class:"m-4"},S={class:"mb-10"},z={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},H={class:"opacity-50"},D=t("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-gray-400/50 mb-8"},M=_({__name:"PresenterPrint",setup(q){d(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(o=>{var i;return(i=o.meta)==null?void 0:i.slide}).filter(o=>o!==void 0&&o.notesHTML!==""));return(o,i)=>(r(),n("div",{id:"page-root",style:v(s(w))},[t("div",j,[t("div",S,[t("h1",z,a(s(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",H,a(e==null?void 0:e.no)+"/"+a(s(y)),1),b(" "+a(e==null?void 0:e.title)+" ",1),D])]),k(P,{"note-html":e.notesHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(r(),n("hr",F)):N("v-if",!0)]))),128))])],4))}}),W=L(M,[["__file","/home/runner/work/Lezione2/Lezione2/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
