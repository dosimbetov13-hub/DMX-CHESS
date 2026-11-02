let tugadi=false,botO=false,birinchi=false;
const xomYur=yurishlar;
function shohOstida(rang){
  const sh=rang?"K":"k";
  let kr=-1,kc=-1;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(taxta[r][c]==sh){kr=r;kc=c;}
  if(kr<0)return false;
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const ch=taxta[r][c];
    if(ch!="."&&oq(ch)!=rang&&xomYur(r,c).some(([x,y])=>x==kr&&y==kc))return true;
  }
  return false;
}
function qonuniy(r,c){
  const ch=taxta[r][c],rang=oq(ch);
  return xomYur(r,c).filter(([x,y])=>{
    const ol=taxta[x][y];
    taxta[x][y]=ch;taxta[r][c]=".";
    const xavf=shohOstida(rang);
    taxta[r][c]=ch;taxta[x][y]=ol;
    return !xavf;
  });
}
yurishlar=function(r,c){return botO?xomYur(r,c):qonuniy(r,c);};
const eskiBarcha=barcha;
barcha=function(rang){
  const m=eskiBarcha(rang);
  if(birinchi){
    birinchi=false;
    return m.filter(([r,c,x,y])=>qonuniy(r,c).some(([a,b])=>a==x&&b==y));
  }
  return m;
};
const eskiBot=botYur;
botYur=function(){
  if(tugadi)return;
  botO=true;birinchi=true;
  try{eskiBot();}finally{botO=false;birinchi=false;}
};
function holat(){
  const rang=navbat=="w",oldi=tugadi;
  let bor=false;
  for(let r=0;r<8&&!bor;r++)for(let c=0;c<8;c++){
    const ch=taxta[r][c];
    if(ch!="."&&oq(ch)==rang&&qonuniy(r,c).length){bor=true;break;}
  }
  tugadi=!bor;
  const xavf=shohOstida(rang);
  if(xavf){
    const sh=rang?"K":"k";
    for(let r=0;r<8;r++)for(let c=0;c<8;c++)
      if(taxta[r][c]==sh)d.children[r*8+c].style.background="#e55";
  }
  if(tugadi&&!oldi)setTimeout(()=>alert(xavf?(rang?"Mat! Qora yutdi!":"Mat! Siz yutdingiz!"):"Pat! Durang."),150);
}
const chiz0=chiz;
chiz=function(){chiz0();holat();};
chiz();
