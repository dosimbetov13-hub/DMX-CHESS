const bar=document.createElement("div");
bar.style.cssText="position:fixed;bottom:10px;left:0;right:0;display:flex;justify-content:center;gap:12px;z-index:5";
function tugma(matn,fn){
  const t=document.createElement("button");
  t.textContent=matn;
  t.style.cssText="padding:12px 18px;font-size:16px;border:0;border-radius:10px;background:#fc3;color:#222;font-weight:bold";
  t.onclick=fn;
  bar.appendChild(t);
  return t;
}
tugma("Yangi o'yin",()=>{
  taxta=["rnbqkbnr","pppppppp","........","........","........","........","PPPPPPPP","RNBQKBNR"].map(q=>q.split(""));
  navbat="w";tanlangan=null;chiz();
});
const darajalar=[["Oson",1],["O'rta",2],["Qiyin",3]];
let di=2;
const qt=tugma("Qiyin",()=>{
  di=(di+1)%3;
  qt.textContent=darajalar[di][0];
  CHUQUR=darajalar[di][1];
});
document.body.appendChild(bar);
