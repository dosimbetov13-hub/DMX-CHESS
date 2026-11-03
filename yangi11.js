(function(){
const asl=window.alert.bind(window);
const tt=n=>[...document.querySelectorAll("button")].find(b=>b.textContent==n);
let ochiq=false;
const ov=document.createElement("div");
ov.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,.75);z-index:40;display:none;align-items:center;justify-content:center";
const kart=document.createElement("div");
kart.style.cssText="background:#262421;border:2px solid #fc3;border-radius:18px;padding:26px 22px;width:min(84vw,360px);text-align:center;font-family:sans-serif;box-shadow:0 10px 40px #000";
ov.appendChild(kart);
document.body.appendChild(ov);
function b(m,fn,qora){
  const e=document.createElement("button");
  e.textContent=m;
  e.style.cssText="display:block;width:100%;margin-top:12px;padding:15px;font-size:19px;font-weight:bold;border:0;border-radius:12px;background:"+(qora?"#444":"#fc3")+";color:"+(qora?"#ddd":"#222");
  e.onclick=fn;kart.appendChild(e);
}
function yop(){ov.style.display="none";ochiq=false;}
function menyuYopiq(){
  return ![...document.querySelectorAll("div")].some(x=>x.style.zIndex=="30"&&x.style.display=="flex");
}
function korsat(belgi,sarlavha,sabab){
  if(ochiq)return;
  ochiq=true;
  kart.innerHTML="";
  const e=document.createElement("div");
  e.textContent=belgi;e.style.cssText="font-size:64px;line-height:1.1";
  const h=document.createElement("div");
  h.textContent=sarlavha;h.style.cssText="color:#fc3;font-weight:bold;font-size:30px;margin:8px 0 4px";
  const s=document.createElement("div");
  s.textContent=sabab;s.style.cssText="color:#bbb;font-size:18px;min-height:22px";
  kart.append(e,h,s);
  b("Qayta o'ynash",()=>{
    yop();
    [...document.querySelectorAll("div")].forEach(x=>{if(x.style.zIndex=="30")x.style.display="none";});
    const y=tt("Yangi o'yin");if(y)y.click();
  });
  b("Menyu",()=>{
    yop();
    if(menyuYopiq()){const m=tt("\u2630");if(m)m.click();}
  },true);
  ov.style.display="flex";
}
window.alert=function(msg){
  const m=String(msg||"");
  if(!/(yutdi|yutdingiz|Durang|Pat!|Mat)/i.test(m)||/Xona/.test(m)){asl(msg);return;}
  const ikki=!!tt("2 kishi");
  let sabab=/vaqti/i.test(m)?"Vaqt tugadi":(/Mat/.test(m)?"Mat":"");
  if(/Durang/i.test(m)){
    korsat("\uD83E\uDD1D","Durang",/Pat/.test(m)?"Pat: yurish qolmadi":"");
    return;
  }
  let g=null;
  if(/Qora yutdi/i.test(m))g="b";
  else if(/Oq yutdi|Siz yutdingiz/i.test(m))g="w";
  if(!g){asl(msg);return;}
  if(ikki){
    korsat("\uD83C\uDFC6",g=="w"?"Oq yutdi!":"Qora yutdi!",sabab);
  }else{
    if(g=="w")korsat("\uD83C\ 
