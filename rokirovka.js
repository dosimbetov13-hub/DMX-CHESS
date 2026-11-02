const BOSH=["rnbqkbnr","pppppppp","........","........","........","........","PPPPPPPP","RNBQKBNR"].join("");
let wk=false,wa=false,wh=false;
function bayroq(){
  if(taxta.map(q=>q.join("")).join("")==BOSH){wk=wa=wh=false;return;}
  if(taxta[7][4]!="K")wk=true;
  if(taxta[7][0]!="R")wa=true;
  if(taxta[7][7]!="R")wh=true;
}
function xavfsiz(c){
  taxta[7][4]=".";taxta[7][c]="K";
  const x=shohOstida(true);
  taxta[7][c]=".";taxta[7][4]="K";
  return !x;
}
function rokOlish(){
  const m=[];
  if(wk||taxta[7][4]!="K"||shohOstida(true))return m;
  if(!wh&&taxta[7][7]=="R"&&taxta[7][5]=="."&&taxta[7][6]=="."&&xavfsiz(5)&&xavfsiz(6))m.push([7,6]);
  if(!wa&&taxta[7][0]=="R"&&taxta[7][1]=="."&&taxta[7][2]=="."&&taxta[7][3]=="."&&xavfsiz(3)&&xavfsiz(2))m.push([7,2]);
  return m;
}
const yurishlar2=yurishlar;
yurishlar=function(r,c){
  const m=yurishlar2(r,c);
  if(!botO&&r==7&&c==4&&taxta[r][c]=="K")return m.concat(rokOlish());
  return m;
};
const bos2=bos;
bos=function(r,c){
  let kc=null;
  if(navbat=="w"&&tanlangan&&tanlangan[0]==7&&tanlangan[1]==4&&taxta[7][4]=="K"&&r==7&&(c==6||c==2))kc=c;
  bos2(r,c);
  if(kc!==null&&taxta[7][kc]=="K"&&taxta[7][4]=="."){
    if(kc==6){taxta[7][5]="R";taxta[7][7]=".";}
    else{taxta[7][3]="R";taxta[7][0]=".";}
    chiz();
  }
};
const chiz2=chiz;
chiz=function(){bayroq();chiz2();};
chiz();
