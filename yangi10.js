(function(){
const V={p:100,n:320,b:330,r:500,q:900,k:0};
const T={
p:[0,0,0,0,0,0,0,0,
50,50,50,50,50,50,50,50,
10,10,20,30,30,20,10,10,
5,5,10,25,25,10,5,5,
0,0,0,20,20,0,0,0,
5,-5,-10,0,0,-10,-5,5,
5,10,10,-20,-20,10,10,5,
0,0,0,0,0,0,0,0],
n:[-50,-40,-30,-30,-30,-30,-40,-50,
-40,-20,0,0,0,0,-20,-40,
-30,0,10,15,15,10,0,-30,
-30,5,15,20,20,15,5,-30,
-30,0,15,20,20,15,0,-30,
-30,5,10,15,15,10,5,-30,
-40,-20,0,5,5,0,-20,-40,
-50,-40,-30,-30,-30,-30,-40,-50],
b:[-20,-10,-10,-10,-10,-10,-10,-20,
-10,0,0,0,0,0,0,-10,
-10,0,5,10,10,5,0,-10,
-10,5,5,10,10,5,5,-10,
-10,0,10,10,10,10,0,-10,
-10,10,10,10,10,10,10,-10,
-10,5,0,0,0,0,5,-10,
-20,-10,-10,-10,-10,-10,-10,-20],
r:[0,0,0,0,0,0,0,0,
5,10,10,10,10,10,10,5,
-5,0,0,0,0,0,0,-5,
-5,0,0,0,0,0,0,-5,
-5,0,0,0,0,0,0,-5,
-5,0,0,0,0,0,0,-5,
-5,0,0,0,0,0,0,-5,
0,0,0,5,5,0,0,0],
q:[-20,-10,-10,-5,-5,-10,-10,-20,
-10,0,0,0,0,0,0,-10,
-10,0,5,5,5,5,0,-10,
-5,0,5,5,5,5,0,-5,
0,0,5,5,5,5,0,-5,
-10,5,5,5,5,5,0,-10,
-10,0,5,0,0,0,0,-10,
-20,-10,-10,-5,-5,-10,-10,-20],
k:[-30,-40,-40,-50,-50,-40,-40,-30,
-30,-40,-40,-50,-50,-40,-40,-30,
-30,-40,-40,-50,-50,-40,-40,-30,
-30,-40,-40,-50,-50,-40,-40,-30,
-20,-30,-30,-40,-40,-30,-30,-20,
-10,-20,-20,-20,-20,-20,-20,-10,
20,20,0,0,0,0,20,20,
20,30,10,0,0,10,30,20],
e:[-50,-40,-30,-20,-20,-30,-40,-50,
-30,-20,-10,0,0,-10,-20,-30,
-30,-10,20,30,30,20,-10,-30,
-30,-10,30,40,40,30,-10,-30,
-30,-10,30,40,40,30,-10,-30,
-30,-10,20,30,30,20,-10,-30,
-30,-30,0,0,0,0,-30,-30,
-50,-30,-30,-30,-30,-30,-30,-50]
};

baho=function(){
  let yirik=0;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const ch=taxta[r][c];
    if(ch!="."){const t=ch.toLowerCase();if(t!="p"&&t!="k")yirik++;}
  }
  const oxir=yirik<=6;
  let s=0,fw=0,fb=0;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const ch=taxta[r][c];
    if(ch==".")continue;
    const t=ch.toLowerCase(),w=oq(ch);
    const jt=t=="k"?(oxir?T.e:T.k):T[t];
    const v=V[t]+jt[(w?r:7-r)*8+c];
    if(t=="b"){if(w)fw++;else fb++;}
    s+=w?v:-v;
  }
  if(fw>=2)s+=30;
  if(fb>=2)s-=30;
  return s;
};

function qs(al,be,oqN,k){
  const f=taxta.flat();
  if(!f.includes("K"))return -100000;
  if(!f.includes("k"))return 100000;
  const st=baho();
  if(k<=0)return st;
  let best=st;
  if(oqN){if(st>=be)return st;if(st>al)al=st;}
  else{if(st<=al)return st;if(st<be)be=st;}
  const m=barcha(oqN).filter(q=>taxta[q[2]][q[3]]!==".");
  for(const [r,c,x,y] of m){
    const h=yur(r,c,x,y);
    const v=qs(al,be,!oqN,k-1);
    qayt(r,c,x,y,h);
    if(oqN){if(v>best)best=v;if(v>al)al=v;}
    else{if(v<best)best=v;if(v<be)be=v;}
    if(be<=al)break;
  }
  return best;
}
const q0=qidir;
qidir=function(d,al,be,oqN){return d<=0?qs(al,be,oqN,3):q0(d,al,be,oqN);};

const BOSH=["rnbqkbnr","pppppppp","........","........","........","........","PPPPPPPP","RNBQKBNR"].join("");
let bk=false,ba=false,bh=false,pend=null;
function qoraRok(){
  const m=[];
  if(bk||taxta[0][4]!="k"||shohOstida(false))return m;
  const xs=c=>{taxta[0][4]=".";taxta[0][c]="k";const x=shohOstida(false);taxta[0][c]=".";taxta[0][4]="k";return !x;};
  if(!bh&&taxta[0][7]=="r"&&taxta[0][5]=="."&&taxta[0][6]=="."&&xs(5)&&xs(6))m.push([0,6]);
  if(!ba&&taxta[0][0]=="r"&&taxta[0][1]=="."&&taxta[0][2]=="."&&taxta[0][3]=="."&&xs(3)&&xs(2))m.push([0,2]);
  return m;
}
const b0=barcha;
barcha=function(rang){
  const m=b0(rang);
  if(rang===false)for(const [x,y] of qoraRok())m.push([0,4,x,y]);
  return m;
};
const y0=yur;
yur=function(r,c,x,y){
  const h=y0(r,c,x,y);
  if(h[0]=="k"&&r==0&&c==4&&(y==6||y==2)){
    if(y==6){taxta[0][5]="r";taxta[0][7]=".";}
    else{taxta[0][3]="r";taxta[0][0]=".";}
    h.push(true);
  }
  return h;
};
const qy0=qayt;
qayt=function(r,c,x,y,h){
  qy0(r,c,x,y,h);
  if(h[2]){
    if(y==6){taxta[0][7]="r";taxta[0][5]=".";}
    else{taxta[0][0]="r";taxta[0][3]=".";}
  }
};
const yh=yurishlar;
yurishlar=function(r,c){
  const m=yh(r,c);
  if(!botO&&r==0&&c==4&&taxta[0][4]=="k"&&navbat=="b")return m.concat(qoraRok());
  return m;
};
const bs=bos;
bos=function(r,c){
  if(navbat=="b"&&tanlangan&&tanlangan[0]==0&&tanlangan[1]==4&&taxta[0][4]=="k"&&r==0&&(c==6||c==2))pend=c;
  bs(r,c);
  pend=null;
};
const c0=chiz;
chiz=function(){
  if(pend!==null&&taxta[0][pend]=="k"&&taxta[0][4]=="."){
    if(pend==6){taxta[0][5]="r";taxta[0][7]=".";}
    else{taxta[0][3]="r";taxta[0][0]=".";}
    pend=null;
  }
  const s=taxta.map(q=>q.join("")).join("");
  if(s==BOSH){bk=ba=bh=false;}
  else{
    if(taxta[0][4]!="k")bk=true;
    if(taxta[0][0]!="r")ba=true;
    if(taxta[0][7]!="r")bh=true;
  }
  c0();
};
chiz();
})();
