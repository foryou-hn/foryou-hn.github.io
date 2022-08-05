import{d as l,r as d,f as i,b as p,o as v}from"./index.f9da6d5f.js";const _=l({__name:"index",setup(m){const u=d([{title:"\u8D2D\u7269",start:"2022-08-01 08:00",end:"2022-08-05 12:00",editable:!0},{title:"\u6572\u4EE3\u7801",start:"2022-08-06 18:00",end:"2022-08-08 24:00"}]),s=e=>{u.value.push({start:e.dateStr+" 12:00",end:e.dateStr+" 16:00",title:"\u5B66\u4E60"})},a=e=>{},c=e=>{const n=document.createElement("div"),t=e.timeText.split("-"),r=t[0].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6",""),o=t[1].replace("\u4E0A\u5348","").replace("\u4E0B\u5348","").replace("\u65F6","");return n.innerHTML=`
        <img src="src/assets/vue.svg" style="width: 30px;height: 30px"/>
        <div>\u6807\u9898:${e.event._def.title}</div>
        <div>\u5F00\u59CB\u65F6\u95F4:${r}</div>
        <div>\u7ED3\u675F\u65F6\u95F4:${o}</div>
        `,{domNodes:[n]}};return(e,n)=>{const t=p("m-calendar");return v(),i(t,{events:u.value,onDateClick:s,onEventClick:a,displayEventEnd:"",eventContent:c},null,8,["events"])}}});export{_ as default};
