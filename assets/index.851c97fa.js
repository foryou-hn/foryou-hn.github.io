import{d as _,c as p,g as t,a,F as C,o as i,b as s}from"./index.f9da6d5f.js";const m={style:{"margin-top":"20px"}},x=_({__name:"index",setup(u){const c=e=>{console.log("startChange",e)},d=e=>{console.log("endChange",e)},r=e=>{console.log("dateStartChange",e)},l=e=>{console.log("dateEndChange",e)},n={},o={};return(e,f)=>{const g=s("choose-time"),h=s("choose-date");return i(),p(C,null,[t("div",null,[a(g,{onStartChange:c,onEndChange:d,startOptions:n,endOptions:o})]),t("div",m,[a(h,{disableToday:!1,onStartChange:r,onEndChange:l,startOptions:n,endOptions:o})])],64)}}});export{x as default};
