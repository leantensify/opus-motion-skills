const LIBRARY = [
  {id:"kinetic-typography",title:"Kinetic Typography",engine:"letters",tags:["hook","bold","launch","title","social"],roles:["hook","cta"],tech:["Word Slam","Split Reveal","Tracking Explosion","Type Wall"]},
  {id:"swiss-international",title:"Swiss / International",engine:"the grid",tags:["premium","editorial","clear","precision","brand"],roles:["hook","cta","hero"],tech:["Grid Draw","Rule Snap","Poster Build","Column Slide"]},
  {id:"brutalist-web",title:"Brutalist Web",engine:"cursor + hard cuts",tags:["developer","web","raw","internet","playful"],roles:["hook","product"],tech:["Cursor Click Chain","Hard State Swap","Border Swallow","Selection Highlight"]},
  {id:"blueprint",title:"Blueprint",engine:"construction",tags:["engineering","technical","industrial","architecture","system"],roles:["explain","product"],tech:["Dimension Build","Exploded Assembly","Stroke Construction","Leader Note"]},
  {id:"terminal",title:"Terminal",engine:"output streaming",tags:["developer","coding","cli","ai","technical"],roles:["product","explain"],tech:["Command Prompt","Streaming Logs","Progress Fill","Diff Reveal"]},
  {id:"data-visualization",title:"Data Visualization",engine:"data transitions",tags:["metric","data","analytics","proof","growth","percent"],roles:["proof"],tech:["Bar Re-rank","Count Up","Outlier Focus","Threshold Cross"]},
  {id:"isometric",title:"Isometric",engine:"modular assembly",tags:["system","workflow","operations","logistics","platform","connect"],roles:["explain","product"],tech:["Tile Wave","Module Drop","Path Pulse","Layer Stack"]},
  {id:"liquid-morph",title:"Liquid Morph",engine:"fluid merging",tags:["organic","creative","identity","music","fluid"],roles:["hook","hero"],tech:["Metaball Orbit","Shape Absorb","Liquid Mask","Pour Transition"]},
  {id:"paper-cut-collage",title:"Paper Cut / Collage",engine:"physical layers",tags:["fashion","editorial","tactile","culture","organic"],roles:["hook","explain"],tech:["Ransom Build","Paper Slide","Photo Pinboard","Torn Wipe"]},
  {id:"pixel-art",title:"Pixel Art",engine:"sprites on a grid",tags:["game","playful","retro","fun"],roles:["hook","explain"],tech:["Sprite Run","Platform Type","Coin Spin","Pixel Dissolve"]},
  {id:"hand-drawn-sketch",title:"Hand-Drawn Sketch",engine:"strokes",tags:["education","idea","explain","human","sketch"],roles:["explain"],tech:["Construction Pass","Line Boil","Margin Note","Ink Commit"]},
  {id:"retro-futurism",title:"Retro Futurism",engine:"scanlines + signal",tags:["retro","history","music","technology"],roles:["hook","hero"],tech:["CRT Power-On","Chrome Title","Tracking Tear","Power-Off"]},
  {id:"cinematic-3d-type",title:"Cinematic 3D Type",engine:"camera + depth",tags:["premium","hero","cinematic","launch","luxury"],roles:["hero","cta"],tech:["Fog Rise","Orbit Reveal","Light Sweep","Hero Face-On"]},
  {id:"hud-sci-fi",title:"HUD / Sci-Fi",engine:"tracking + micro-data",tags:["ai","robotics","security","diagnostics","tracking"],roles:["product","proof"],tech:["Reticle Lock","Object Track","Scan Sweep","Telemetry Tick"]},
  {id:"generative-motion",title:"Generative Motion",engine:"procedural systems",tags:["ai","particles","finale","emergence","technology"],roles:["hero","cta"],tech:["Flow Field","Text Assembly","Explode/Reform","Singularity Collapse"]}
];

const KEYWORDS = {
  metric:["%","percent","metric","growth","revenue","faster","slower","reduction","increase","decrease","data","analytics","kpi"],
  ui:["ui","interface","dashboard","screen","product","app","software","saas"],
  developer:["developer","code","coding","api","cli","terminal","github","deploy"],
  systems:["system","workflow","operations","process","platform","connect","logistics","infrastructure"],
  premium:["premium","luxury","cinematic","high-end","elegant","confident"],
  technical:["technical","engineering","precise","industrial","architecture"],
  ai:["ai","artificial intelligence","model","agent","robotics","vision"],
  editorial:["editorial","magazine","fashion","design","poster"],
  playful:["playful","fun","game","gaming","cute"],
  organic:["organic","fluid","natural","soft","human","sustainable"],
  retro:["retro","history","vintage","1980","1990","nostalgia"],
  explain:["explain","educate","how it works","teach","step by step"],
  hook:["hook","attention","bold","strong opening","viral"],
  cta:["cta","call to action","sign up","try","start","book","contact"]
};

const ROLE_LABELS = {
  hook:"Hook",explain:"Explain the system",proof:"Proof",product:"Product moment",hero:"Hero payoff",cta:"CTA"
};

let currentDirection = null;

document.querySelectorAll(".tone").forEach(btn => btn.addEventListener("click",()=>btn.classList.toggle("active")));
document.getElementById("generate").addEventListener("click", generate);
document.getElementById("copyJson").addEventListener("click",()=>copyText(JSON.stringify(currentDirection,null,2),"JSON copied"));
document.getElementById("copyPrompt").addEventListener("click",()=>copyText(buildPrompt(currentDirection),"Build prompt copied"));
document.getElementById("downloadJson").addEventListener("click", downloadJson);

function activeTones(){
  return [...document.querySelectorAll(".tone.active")].map(x=>x.dataset.tone);
}
function hasAny(text, terms){ return terms.some(t=>text.includes(t)); }
function diagnose(brief, tones){
  const text=brief.toLowerCase();
  const flags={};
  Object.entries(KEYWORDS).forEach(([k,v])=>flags[k]=hasAny(text,v));
  tones.forEach(t=>flags[t]=true);
  return flags;
}
function scoreStyles(flags, brief){
  const text=brief.toLowerCase();
  return LIBRARY.map(s=>{
    let score=0;
    const reasons=[];
    s.tags.forEach(tag=>{
      if(flags[tag] || text.includes(tag)){score+=3; reasons.push(tag);}
    });
    if(s.id==="data-visualization" && flags.metric){score+=8;reasons.push("metric");}
    if((s.id==="isometric"||s.id==="blueprint") && flags.systems){score+=6;reasons.push("system");}
    if((s.id==="terminal"||s.id==="brutalist-web") && flags.developer){score+=7;reasons.push("developer");}
    if(s.id==="cinematic-3d-type" && flags.premium){score+=6;reasons.push("premium");}
    if(s.id==="swiss-international" && (flags.premium||flags.editorial)){score+=5;reasons.push("clarity");}
    if((s.id==="hud-sci-fi"||s.id==="generative-motion") && flags.ai){score+=4;reasons.push("AI");}
    if(s.id==="paper-cut-collage" && flags.editorial){score+=5;reasons.push("editorial");}
    if(s.id==="liquid-morph" && flags.organic){score+=6;reasons.push("organic");}
    if(s.id==="pixel-art" && flags.playful){score+=6;reasons.push("playful");}
    if(s.id==="retro-futurism" && flags.retro){score+=7;reasons.push("retro");}
    return {...s,score,reasons:[...new Set(reasons)]};
  }).sort((a,b)=>b.score-a.score);
}
function chooseCount(duration){
  if(duration<=12)return 2;
  if(duration<=25)return 3;
  return 4;
}
function selectStyles(scored, duration, flags){
  const count=chooseCount(duration);
  const selected=[];
  const take=id=>{const s=scored.find(x=>x.id===id); if(s&&!selected.some(x=>x.id===id))selected.push(s);};
  if(flags.metric)take("data-visualization");
  if(flags.systems)take("isometric");
  if(flags.ui && flags.developer)take("terminal");
  if(flags.premium)take("cinematic-3d-type");
  scored.forEach(s=>{if(selected.length<count && s.score>0)take(s.id);});
  if(!selected.length)take("kinetic-typography");
  if(selected.length<count)take(flags.premium?"swiss-international":"kinetic-typography");
  if(selected.length<count)take("generative-motion");
  return selected.slice(0,count);
}
function makeRoles(duration, flags){
  if(duration<=12)return ["hook","hero","cta"];
  if(duration<=25)return flags.metric?["hook","explain","proof","cta"]:["hook","explain","hero","cta"];
  const roles=["hook","explain"];
  if(flags.ui)roles.push("product");
  if(flags.metric)roles.push("proof");
  roles.push("hero","cta");
  return roles.slice(0,6);
}
function styleForRole(role, selected, scored){
  const pool=[...selected,...scored.filter(x=>!selected.some(s=>s.id===x.id))];
  const exact=pool.filter(s=>s.roles.includes(role));
  if(exact.length)return exact.sort((a,b)=>b.score-a.score)[0];
  return selected[0];
}
function sceneMessage(role, brief, flags){
  const quoted=[...brief.matchAll(/["“](.+?)["”]/g)].map(m=>m[1]);
  if(role==="hook")return quoted[0] || "Make the central promise impossible to miss.";
  if(role==="explain")return flags.systems?"Show how the parts connect into one system.":"Make the product logic visually obvious.";
  if(role==="product")return "Show one believable product/UI moment without inventing functionality.";
  if(role==="proof")return "Make the strongest metric or evidence the visual hero.";
  if(role==="hero")return "Resolve the story into the clearest, most premium brand moment.";
  return "End on one confident action and a clean brand lockup.";
}
function allocateTimes(duration, roles){
  const weights=roles.map(r=>({hook:.14,explain:.22,product:.19,proof:.18,hero:.18,cta:.09}[r]||1/roles.length));
  const sum=weights.reduce((a,b)=>a+b,0);
  let cursor=0;
  return roles.map((role,i)=>{
    const end=i===roles.length-1?duration:+(cursor+duration*(weights[i]/sum)).toFixed(1);
    const out={role,start:+cursor.toFixed(1),end};
    cursor=end; return out;
  });
}
function transition(a,b){
  if(!a||!b)return null;
  const key=a.id+"|"+b.id;
  const map={
    "kinetic-typography|swiss-international":"Stretch a letter stem into the Swiss grid rule.",
    "kinetic-typography|data-visualization":"Turn repeated type rows into measurable chart bars.",
    "isometric|data-visualization":"Flatten modular blocks into chart geometry while preserving position.",
    "data-visualization|cinematic-3d-type":"Extrude the proof graphic into depth and let the camera inherit its axis.",
    "terminal|data-visualization":"Convert ASCII progress bars into real chart bars.",
    "cinematic-3d-type|swiss-international":"Flatten the hero light sweep into a precise editorial rule.",
    "cinematic-3d-type|generative-motion":"Release depth particles into a structured flow field.",
    "hud-sci-fi|generative-motion":"Dissolve scan-grid intersections into particles.",
    "generative-motion|swiss-international":"Collapse particles into one dot, then place it on the grid."
  };
  return map[key] || `Preserve one ${a.engine.split(" + ")[0]} element and reinterpret it through ${b.engine}.`;
}
function conceptFor(flags){
  if(flags.systems && flags.metric)return "From complexity to measurable control.";
  if(flags.ai && flags.premium)return "Make intelligence feel precise, useful and inevitable.";
  if(flags.organic)return "Let one visual system evolve naturally into the next.";
  if(flags.developer)return "Turn invisible technical work into visible momentum.";
  return "Move from a sharp promise to a clear, designed payoff.";
}
function generate(){
  const brief=document.getElementById("brief").value.trim();
  const duration=Math.max(6,Math.min(120,+document.getElementById("duration").value||30));
  const ratio=document.getElementById("ratio").value;
  if(!brief)return;
  const tones=activeTones();
  const flags=diagnose(brief,tones);
  const scored=scoreStyles(flags,brief);
  const selected=selectStyles(scored,duration,flags);
  const roles=makeRoles(duration,flags);
  const timing=allocateTimes(duration,roles);
  const scenes=timing.map((t,i)=>{
    const style=styleForRole(t.role,selected,scored);
    const nextRole=timing[i+1]?.role;
    const nextStyle=nextRole?styleForRole(nextRole,selected,scored):null;
    const techniques=style.tech.slice(0,t.role==="hook"?3:2);
    return {
      id:`scene-${String(i+1).padStart(2,"0")}`,
      start:t.start,end:t.end,role:t.role,
      style:style.id,motion_engine:style.engine,
      message:sceneMessage(t.role,brief,flags),
      techniques,
      transition_in:i===0?null:"inherit previous handoff",
      transition_out:nextStyle?transition(style,nextStyle):null,
      implementation:{preferred:stackFor(style.id),requires_3d:style.id==="cinematic-3d-type"}
    };
  });
  const primary=selected[0];
  currentDirection={
    schema_version:"0.1",
    project:{title:"Untitled MotionOS Direction",duration,fps:30,aspect_ratio:ratio,source_brief:brief},
    diagnosis:{tones,signals:Object.keys(flags).filter(k=>flags[k])},
    direction:{
      concept:conceptFor(flags),
      viewer_takeaway:flags.metric?"The product creates a clear system and a provable outcome.":"The product's value should feel understandable before it feels impressive.",
      primary_style:primary.id,
      supporting_styles:selected.slice(1).map(s=>s.id)
    },
    scenes
  };
  render(currentDirection,selected,flags);
}
function stackFor(id){
  if(id==="cinematic-3d-type")return["Three.js","GSAP"];
  if(["generative-motion","pixel-art","data-visualization"].includes(id))return["Canvas","GSAP"];
  if(["blueprint","hud-sci-fi","hand-drawn-sketch"].includes(id))return["SVG","GSAP"];
  return["HTML","CSS","GSAP"];
}
function render(dir,selected,flags){
  document.getElementById("empty").classList.add("hidden");
  document.getElementById("direction").classList.remove("hidden");
  document.getElementById("concept").textContent=dir.direction.concept;
  document.getElementById("takeaway").textContent=dir.direction.viewer_takeaway;
  const signals=dir.diagnosis.signals.length?dir.diagnosis.signals:["general motion"];
  document.getElementById("diagnosis").innerHTML=signals.map(s=>`<span class="chip">${escapeHtml(s)}</span>`).join("");
  document.getElementById("styleSystem").innerHTML=selected.map((s,i)=>`
    <article class="style-card ${i===0?"primary":""}">
      <span class="num">${String(i+1).padStart(2,"0")} · ${i===0?"PRIMARY":"SUPPORT"}</span>
      <span class="engine">${escapeHtml(s.engine)}</span>
      <h4>${escapeHtml(s.title)}</h4>
      <p>${s.reasons.length?"Selected for "+escapeHtml(s.reasons.join(", ")):"Selected to support pacing and contrast."}</p>
    </article>`).join("");
  document.getElementById("timeline").innerHTML=dir.scenes.map(scene=>{
    const style=LIBRARY.find(s=>s.id===scene.style);
    return `<article class="scene">
      <div class="time">${fmt(scene.start)}–${fmt(scene.end)}</div>
      <div>
        <h4>${ROLE_LABELS[scene.role]||scene.role}</h4>
        <p>${escapeHtml(scene.message)}</p>
        <div class="techs">${scene.techniques.map(t=>`<span>${escapeHtml(t)}</span>`).join("")}</div>
      </div>
      <div class="scene-style">${escapeHtml(style?.title||scene.style)}</div>
    </article>`;
  }).join("");
  document.getElementById("jsonView").textContent=JSON.stringify(dir,null,2);
  document.getElementById("result").scrollIntoView({behavior:"smooth",block:"start"});
}
function fmt(n){
  const s=Math.round(n*10)/10;
  return "0:"+String(s.toFixed(s%1?1:0)).padStart(2,"0");
}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function buildPrompt(d){
  if(!d)return "";
  return `Use the Motion Director and the referenced motion skills from opus-motion-skills.

Build this motion project in code.

PROJECT
Duration: ${d.project.duration}s
Aspect ratio: ${d.project.aspect_ratio}
FPS: ${d.project.fps}

CONCEPT
${d.direction.concept}

SOURCE BRIEF
${d.project.source_brief}

SCENE PLAN
${d.scenes.map(s=>`- ${s.start}–${s.end}s · ${s.style} · ${s.role}
  Message: ${s.message}
  Techniques: ${s.techniques.join(", ")}
  Transition out: ${s.transition_out||"final hold"}`).join("\n")}

RULES
- Load each selected style's SKILL.md plus references/techniques.md and references/recipes.md.
- Preserve object continuity between scenes.
- Do not invent product functionality, metrics, UI states or factual claims.
- Avoid generic slideshow fades when a motivated transformation exists.
- Create a readable hero frame for every scene.
- Keep procedural animation deterministic.
- Build the simplest technical stack that can express the direction.
`;
}
async function copyText(text, label){
  if(!text)return;
  await navigator.clipboard.writeText(text);
  const btn=event?.currentTarget;
  if(btn){const old=btn.textContent;btn.textContent=label;setTimeout(()=>btn.textContent=old,1200);}
}
function downloadJson(){
  if(!currentDirection)return;
  const blob=new Blob([JSON.stringify(currentDirection,null,2)],{type:"application/json"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="motionos-direction.json";a.click();URL.revokeObjectURL(a.href);
}

generate();
