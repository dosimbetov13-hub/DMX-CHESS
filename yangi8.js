(function(){
const D=[1,1,2,3,4];
const NOM=["Yangi boshlovchi","Havaskor","O'rta","Kuchli","Usta"];
let ochiq=1,joriy=0,yutdi=false;
try{ochiq=+localStorage.getItem("dmxOchiq")||1;}catch(e){}
function saqla(){try{localStorage.setItem("dmxOchiq",ochiq);}catch(e){}}
const tt=n=>[...document.querySelectorAll("button")].find(b=>b.textContent==n);

const ov=document.createElement("div");
ov.style.cssText="position:fixed;inset:0;background:#111;z-index:30;display:none;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:20px;box-sizing:border-box;overflow-y:auto";
document.body.appendChild(ov);

function btn(m,fn,qora){
  const b=document.createElement("button");
  b.textContent=m;
  b.style.cssText="width:min(80vw,380px);padding:16px;font-size:20px;font-weight:bold;border:0;border-radius:12px;background:"+(qora?"#444":"#fc3")+";color:"+(qora?"#aaa":"#222");
  b.onclick=fn;ov.appendChild(b);return b;
}
function nom(){
  const h=document.createElement("div");
  h.textContent="DMX CHESS";
  h.style.cssText="color:#fc3;font:bold 11vmin sans-serif;letter-spacing:3px;margin-bottom:10px";
  ov.appendChild(h);
}
function asosiy(){
  ov.innerHTML="";nom();
  btn("\u265F Botga qarshi",bosqich);
  btn("\u265E 2 kishi (bitta telefon)",()=>{ov.style.display="none";ikkiBosh();});
  btn("\uD83C\uDF10 Onlayn (2 telefon)",()=>{
    ov.style.display="none";
    const o=tt("Onlayn");
    if(o)o.click();else alert("Onlayn hali ulanmagan (yangi8.js kerak)");
  });
  btn("Davom etish",()=>{ov.style.display="none";},true);
}
function bosqich(){
  ov.innerHTML="";nom();
  const h=document.createElement("div");
  h.textContent="Bosqichni tanlang";
  h.style.cssText="color:#ddd;font:20px sans-serif";
  ov.appendChild(h);
  for(let i=1;i<=5;i++){
    const yopiq=i>ochiq;
    btn((yopiq?"\uD83D\uDD12 ":"")+i+". "+NOM[i-1],()=>{if(!yopiq)botBosh(i);},yopiq);
  }
  btn("\u2190 Orqaga",asosiy,true);
}
function yangiO(){const y=tt("Yangi o'yin");if(y)y.click();}
function botBosh(i){
  joriy=i;yutdi=false;CHUQUR=D[i-1];
  const m=tt("2 kishi");if(m)m.click();
  if(typeof qt!="undefined")qt.style.display="none";
  yangiO();ov.style.display="none";
  toast("Bosqich "+i+": "+NOM[i-1]);
}
function ikkiBosh(){
  joriy=0;
  const m=tt("Bot bilan");if(m)m.click();
  yangiO();
}
const ts=document.createElement("div");
ts.style.cssText="position:fixed;top:14vmin;left:0;right:0;text-align:center;color:#fff;font:bold 4.5vmin sans-serif;z-index:7;text-shadow:0 0 6px #000;pointer-events:none;transition:opacity .6s";
document.body.appendChild(ts);
function toast(m){ts.textContent=m;ts.style.opacity=1;setTimeout(()=>{ts.style.opacity=0;},2200);}

const old=chiz;
chiz=function(){
  old();
  if(!tugadi)yutdi=false;
  if(joriy&&!yutdi&&tugadi&&navbat=="b"&&shohOstida(false)){
    yutdi=true;
    if(joriy>=ochiq&&ochiq<5){ochiq=joriy+1;saqla();}
    setTimeout(()=>{korsat();bosqich();},1500);
  }
};
function korsat(){ov.style.display="flex";asosiy();}
const t=tugma("\u2630",korsat);
t.style.padding="12px 14px";
korsat();
})();
