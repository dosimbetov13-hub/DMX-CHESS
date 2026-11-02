(function(){
const BOSH=["rnbqkbnr","pppppppp","........","........","........","........","PPPPPPPP","RNBQKBNR"].join("");
const sana={p:8,n:2,b:2,r:2,q:1};
const belgi={p:"\u265F",n:"\u265E",b:"\u265D",r:"\u265C",q:"\u265B"};
const mk=(id,css)=>{const e=document.createElement("div");e.id=id;e.style.cssText="position:fixed;left:0;right:0;text-align:center;z-index:4;"+css;document.body.appendChild(e);return e;};
const ust=mk("yeUst","font-size:6vmin;height:7vmin;line-height:7vmin;color:#fff;-webkit-text-stroke:1px #222;");
const past=mk("yePast","font-size:6vmin;height:7vmin;line-height:7vmin;color:#262421;-webkit-text-stroke:1px #000;text-shadow:0 0 2px #aaa;");
const yur=mk("yurList","font:bold 4vmin sans-serif;color:#ddd;padding:0 3vw;max-height:14vmin;overflow-y:auto;");
let prev=null,list=[];
function joy(){
  const b=d.getBoundingClientRect();
  ust.style.top=(b.top-8*window.innerWidth/100*0.9)+"px";
  past.style.top=(b.bottom+4)+"px";
  yur.style.top=(b.bottom+4+7*Math.min(innerWidth,innerHeight)/100+6)+"px";
}
function nom(r,c){return "abcdefgh"[c]+(8-r);}
function yozuv(a,b,df){
  if(df.length==4){
    const k=df.find(([r,c])=>b[r][c].toLowerCase()=="k");
    return k&&k[1]==6?"O-O":"O-O-O";
  }
  let from=null,to=null;
  for(const [r,c] of df){
    if(a[r][c]!="."&&b[r][c]==".")from=[r,c];
    else to=[r,c];
  }
  if(!from||!to)return null;
  const p=b[to[0]][to[1]];
  const ol=a[to[0]][to[1]]!=".";
  const h=p.toUpperCase();
  let s=h=="P"?(ol?"abcdefgh"[from[1]]+"x":""):h+(ol?"x":"");
  s+=nom(to[0],to[1]);
  if(h=="P"&&(to[0]==0||to[0]==7))s+="=Q";
  return s;
}
function yeyil(){
  const say={};
  for(const ch of taxta.flat()){if(ch!="."){say[ch]=(say[ch]||0)+1;}}
  let wq="",bq="";
  for(const t of "qrbnp"){
    const nW=sana[t]-(say[t.toUpperCase()]||0);
    const nB=sana[t]-(say[t]||0);
    for(let i=0;i<nW;i++)wq+=belgi[t];
    for(let i=0;i<nB;i++)bq+=belgi[t];
  }
  ust.textContent=wq;
  past.textContent=bq;
}
const old=chiz;
chiz=function(){
  old();
  const now=taxta.map(q=>q.join(""));
  if(window.__undo){list.splice(-2);window.__undo=false;}else if(now.join("")==BOSH){list=[];}
  else if(prev){
    const df=[];
    for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(prev[r][c]!=now[r][c])df.push([r,c]);
    if(df.length>=2&&df.length<=4){
      const y=yozuv(prev,now,df);
      if(y)list.push(y);
    }
  }
  prev=now;
  let t="";
  list.forEach((m,i)=>{t+=(i%2==0?(i/2+1)+". ":"")+m+" ";});
  yur.textContent=t;
  yur.scrollTop=yur.scrollHeight;
  yeyil();
  joy();
};
window.addEventListener("resize",joy);
chiz();
})();
