(function(){
const VAR=[0,3,5,10];
let vi=0,wt=0,bt=0,vt=false,last=Date.now();
const BOSH=["rnbqkbnr","pppppppp","........","........","........","........","PPPPPPPP","RNBQKBNR"].join("");
const started=()=>taxta.map(q=>q.join("")).join("")!==BOSH;
bar.style.flexWrap="wrap";bar.style.gap="8px";bar.style.bottom="6px";
bar.querySelectorAll("button").forEach(b=>{b.style.padding="10px 12px";b.style.fontSize="15px";});
const el=document.createElement("div");
el.style.cssText="position:fixed;top:2px;left:0;right:0;display:none;justify-content:center;gap:4vw;font:bold 4.6vmin monospace;z-index:6;pointer-events:none";
const sb=document.createElement("span"),sw=document.createElement("span");
[sb,sw].forEach(s=>{s.style.cssText="padding:2px 10px;border-radius:8px;color:#ddd";el.appendChild(s);});
document.body.appendChild(el);
function f(ms){ms=Math.max(0,ms);const s=Math.ceil(ms/1000);return Math.floor(s/60)+":"+String(s%60).padStart(2,"0");}
function stil(s,vaqt,faol){
  s.style.background=faol?"#fc3":"#333";
  s.style.color=faol?"#222":(vaqt<30000?"#f66":"#ddd");
}
function show(){
  if(!VAR[vi]){el.style.display="none";return;}
  el.style.display="flex";
  sb.textContent="\u2B1B "+f(bt);
  sw.textContent="\u2B1C "+f(wt);
  const yuruvchi=started()&&!vt&&!tugadi;
  stil(sb,bt,yuruvchi&&navbat=="b");
  stil(sw,wt,yuruvchi&&navbat=="w");
}
setInterval(()=>{
  const now=Date.now(),dt=now-last;last=now;
  if(VAR[vi]&&started()&&!vt&&!tugadi){
    if(navbat=="w")wt-=dt;else bt-=dt;
    if(wt<=0||bt<=0){
      const oqYutqazdi=wt<=0;
      vt=true;wt=Math.max(0,wt);bt=Math.max(0,bt);
      show();
      setTimeout(()=>alert(oqYutqazdi?"Oqning vaqti tugadi. Qora yutdi!":"Qoraning vaqti tugadi. Oq yutdi!"),50);
    }
  }
  show();
},200);
const ob=bos;
bos=function(r,c){if(vt)return;ob(r,c);};
const obot=botYur;
botYur=function(){if(vt)return;obot();};
const oc=chiz;
chiz=function(){
  oc();
  if(!started()){wt=bt=VAR[vi]*60000;vt=false;}
  show();
};
const t=tugma("\u23F1 Soatsiz",()=>{
  vi=(vi+1)%VAR.length;
  t.textContent=VAR[vi]?"\u23F1 "+VAR[vi]+" daq":"\u23F1 Soatsiz";
  wt=bt=VAR[vi]*60000;vt=false;show();
});
t.style.padding="10px 12px";t.style.fontSize="15px";
chiz();
})();
