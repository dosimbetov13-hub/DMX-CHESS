(function(){
let ikki=false;
const botBos=bos;
function ikkiBos(r,c){
  if(tanlangan){
    const [a,b]=tanlangan;
    if(yurishlar(a,b).some(([x,y])=>x==r&&y==c)){
      const ch=taxta[a][b];
      taxta[r][c]=ch;taxta[a][b]=".";
      if(ch=="K"&&a==7&&b==4&&r==7&&c==6){taxta[7][5]="R";taxta[7][7]=".";}
      if(ch=="K"&&a==7&&b==4&&r==7&&c==2){taxta[7][3]="R";taxta[7][0]=".";}
      if(ch=="P"&&r==0)taxta[r][c]="Q";
      if(ch=="p"&&r==7)taxta[r][c]="q";
      navbat=navbat=="w"?"b":"w";
      tanlangan=null;chiz();return;
    }
    tanlangan=null;
  }
  const ch=taxta[r][c];
  if(ch!="."&&(oq(ch)?"w":"b")==navbat)tanlangan=[r,c];
  chiz();
}
bos=function(r,c){
  if(ikki)ikkiBos(r,c);else botBos(r,c);
};
const t=tugma("Bot bilan",()=>{
  ikki=!ikki;
  t.textContent=ikki?"2 kishi":"Bot bilan";
  qt.style.display=ikki?"none":"";
  tanlangan=null;chiz();
  if(!ikki&&navbat=="b")setTimeout(botYur,300);
});
t.style.padding="12px 14px";
})();
