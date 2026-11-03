(function(){
const BOSH=["rnbqkbnr","pppppppp","........","........","........","........","PPPPPPPP","RNBQKBNR"].join("");
let ac=null,yoq=true,prev=null;
function ctx(){
  if(!ac){try{ac=new (window.AudioContext||window.webkitAudioContext)();}catch(e){}}
  if(ac&&ac.state=="suspended")ac.resume();
  return ac;
}
["touchstart","click"].forEach(e=>addEventListener(e,ctx,{passive:true}));
function ton(f,s,u,tip,v){
  if(!yoq)return;
  const a=ctx();if(!a)return;
  const o=a.createOscillator(),g=a.createGain();
  o.type=tip||"sine";o.frequency.value=f;
  const t=a.currentTime+s;
  g.gain.setValueAtTime(0.0001,t);
  g.gain.exponentialRampToValueAtTime(v||0.3,t+0.01);
  g.gain.exponentialRampToValueAtTime(0.0001,t+u);
  o.connect(g);g.connect(a.destination);
  o.start(t);o.stop(t+u+0.05);
}
const yurishS=()=>{ton(220,0,0.08,"triangle",0.45);ton(160,0.01,0.1,"sine",0.35);};
const olishS=()=>{ton(130,0,0.16,"sawtooth",0.25);ton(90,0.02,0.2,"square",0.15);};
const rokS=()=>{yurishS();setTimeout(yurishS,130);};
const shohS=()=>{ton(880,0,0.12,"square",0.12);ton(880,0.16,0.12,"square",0.12);};
const matS=()=>{ton(392,0,0.25,"triangle",0.35);ton(330,0.25,0.25,"triangle",0.35);ton(262,0.5,0.6,"triangle",0.4);};
const old=chiz;
chiz=function(){
  old();
  const s=taxta.map(q=>q.join("")).join("");
  if(prev!==null&&s!==prev&&s!==BOSH){
    const a=prev.replace(/\./g,"").length,b=s.replace(/\./g,"").length;
    let df=0;
    for(let i=0;i<64;i++)if(prev[i]!==s[i])df++;
    if(b<=a){
      if(tugadi&&shohOstida(navbat=="w"))matS();
      else if(shohOstida(navbat=="w"))shohS();
      else if(b<a)olishS();
      else if(df>=4)rokS();
      else yurishS();
    }
  }
  prev=s;
};
const t=tugma("\uD83D\uDD0A",()=>{yoq=!yoq;t.textContent=yoq?"\uD83D\uDD0A":"\uD83D\uDD07";});
t.style.padding="12px 14px";
})();
