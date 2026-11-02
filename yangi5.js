(function(){
const BOSH=["rnbqkbnr","pppppppp","........","........","........","........","PPPPPPPP","RNBQKBNR"].join("");
const st=document.createElement("style");
st.textContent="#d.flip{transform:rotate(180deg)}#d.flip .k{transform:rotate(180deg)}";
document.head.appendChild(st);
const H=[];
const old=chiz;
chiz=function(){
  old();
  const s=taxta.map(q=>q.join("")).join("");
  if(s==BOSH)H.length=0;
  if(navbat=="w"&&(!H.length||H[H.length-1].k!=s)){
    H.push({k:s,t:taxta.map(r=>r.slice()),wk:wk,wa:wa,wh:wh});
  }
};
function qaytar(){
  if(navbat!="w"||H.length<2)return;
  H.pop();
  const s=H[H.length-1];
  taxta=s.t.map(r=>r.slice());
  wk=s.wk;wa=s.wa;wh=s.wh;
  navbat="w";tanlangan=null;tugadi=false;
  window.__undo=true;
  chiz();
}
const t1=tugma("\u21A9",qaytar);
const t2=tugma("\u21C5",()=>d.classList.toggle("flip"));
[t1,t2].forEach(t=>{t.style.padding="12px 14px";});
chiz();
})();
