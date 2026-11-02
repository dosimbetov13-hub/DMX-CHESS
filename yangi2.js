(function(){
const to="\u265A\u265B\u265C\u265D\u265E\u265F";
const harf="KQRBNP";
const old=chiz;
chiz=function(){
  old();
  for(let r=0;r<8;r++)for(let c=0;c<8;c++){
    const ch=taxta[r][c];
    if(ch==".")continue;
    const x=d.children[r*8+c];
    const i=harf.indexOf(ch.toUpperCase());
    x.textContent=to[i]+"\uFE0E";
    x.style.fontSize="9.5vmin";
    if(oq(ch)){
      x.style.color="#fff";
      x.style.webkitTextStroke="1.5px #222";
      x.style.textShadow="0 2px 3px rgba(0,0,0,.45)";
    }else{
      x.style.color="#262421";
      x.style.webkitTextStroke="1px #000";
      x.style.textShadow="0 2px 3px rgba(0,0,0,.35)";
    }
  }
  const sar=d.querySelectorAll(".nuq,.olish");
  sar.forEach(n=>n.style.zIndex=1);
};
chiz();
})();
