const qiymat={p:100,n:320,b:330,r:500,q:900,k:20000};
let CHUQUR=3;
const eskiBos=bos;
bos=function(r,c){
  if(navbat!="w")return;
  eskiBos(r,c);
  if(navbat=="b")setTimeout(botYur,300);
};
function barcha(rang){
  const m=[];
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const ch=taxta[r][c];
    if(ch=="."||oq(ch)!=rang)continue;
    for(const [x,y] of yurishlar(r,c))m.push([r,c,x,y]);
  }
  m.sort((a,b)=>(taxta[b[2]][b[3]]!=".")-(taxta[a[2]][a[3]]!="."));
  return m;
}
function baho(){
  let s=0;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const ch=taxta[r][c];
    if(ch==".")continue;
    let v=qiymat[ch.toLowerCase()];
    v+=(7-Math.abs(2*r-7)-Math.abs(2*c-7))*2;
    if(ch=="p")v+=r*5;
    if(ch=="P")v+=(7-r)*5;
    s+=oq(ch)?v:-v;
  }
  return s;
}
function yur(r,c,x,y){
  const ol=taxta[x][y],ch=taxta[r][c];
  taxta[x][y]=ch;taxta[r][c]=".";
  if(ch=="P"&&x==0)taxta[x][y]="Q";
  if(ch=="p"&&x==7)taxta[x][y]="q";
  return [ch,ol];
}
function qayt(r,c,x,y,h){taxta[r][c]=h[0];taxta[x][y]=h[1];}
function qidir(d,al,be,oqN){
  const f=taxta.flat();
  if(!f.includes("K"))return -100000-d;
  if(!f.includes("k"))return 100000+d;
  if(d==0)return baho();
  const m=barcha(oqN);
  if(!m.length)return baho();
  let eng=oqN?-Infinity:Infinity;
  for(const [r,c,x,y] of m){
    const h=yur(r,c,x,y);
    const v=qidir(d-1,al,be,!oqN);
    qayt(r,c,x,y,h);
    if(oqN){eng=Math.max(eng,v);al=Math.max(al,v);}
    else{eng=Math.min(eng,v);be=Math.min(be,v);}
    if(be<=al)break;
  }
  return eng;
}
function botYur(){
  let eng=null,ball=Infinity;
  for(const [r,c,x,y] of barcha(false)){
    const h=yur(r,c,x,y);
    const v=qidir(CHUQUR-1,-Infinity,Infinity,true)+Math.random();
    qayt(r,c,x,y,h);
    if(v<ball){ball=v;eng=[r,c,x,y];}
  }
  if(!eng)return;
  const [r,c,x,y]=eng;
  yur(r,c,x,y);
  navbat="w";tanlangan=null;chiz();
  if(!taxta.flat().includes("K"))setTimeout(()=>alert("Qora yutdi!"),100);
}
const oldChiz=chiz;
chiz=function(){oldChiz();if(!taxta.flat().includes("k"))setTimeout(()=>alert("Siz yutdingiz!"),100);};
