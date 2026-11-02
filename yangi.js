(function(){
const st=document.createElement("style");
st.textContent=`.och{background:#EBECD0}.to{background:#779556}
.k{position:relative}
.k.son.och{background:#F5F682}.k.son.to{background:#B9CA43}
.k.t.och,.k.t.to{background:#BBCB2B}
.nuq{position:absolute;width:30%;height:30%;border-radius:50%;background:rgba(0,0,0,.2);pointer-events:none}
.olish{position:absolute;inset:3%;border-radius:50%;border:6px solid rgba(0,0,0,.2);pointer-events:none;box-sizing:border-box}`;
document.head.appendChild(st);
let prev=null,son=[];
const c0=chiz;
chiz=function(){
  c0();
  const now=taxta.map(q=>q.join(""));
  if(prev){
    const df=[];
    for(let r=0;r<8;r++)for(let c=0;c<8;c++)if(prev[r][c]!=now[r][c])df.push([r,c]);
    if(df.length>=2&&df.length<=4)son=df;
    else if(df.length>4)son=[];
  }
  prev=now;
  for(const [r,c] of son)d.children[r*8+c].classList.add("son");
  if(tanlangan){
    for(const [x,y] of yurishlar(tanlangan[0],tanlangan[1])){
      const n=document.createElement("div");
      n.className=taxta[x][y]=="."?"nuq":"olish";
      d.children[x*8+y].appendChild(n);
    }
  }
};
chiz();
})();
