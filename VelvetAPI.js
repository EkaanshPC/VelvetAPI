/*Paste this to your world code.*/
tickFunctions=[];
tick=()=>tickFunctions.forEach(f=>f());

generateID=()=>Math.random().toString(36).substring(2,10); // ✅ Replaces crypto.randomUUID()

vvt={timers:[],intervals:[],tickFns:[],devMode:true,
    tick(){this.timers=this.timers.filter(t=>Date.now()-t.s<t.d||(t.c(),false)),this.intervals.forEach(t=>t.s+=t.i,t.c())},

    loop:(n,c)=>{if(typeof n!=="number"||typeof c!=="function")return vvt.error(`loop() expects number & function!`); while(n--)c()},
    async:c=>{if(typeof c!=="function")return vvt.error(`async() expects function!`); vvt.timeout(c,0)},
    timeout:(c,d)=>{if(typeof c!=="function"||typeof d!=="number")return vvt.error(`timeout() expects function & number!`); vvt.timers.push({c,s:Date.now(),d})},
    interval:(c,i)=>{if(typeof c!=="function"||typeof i!=="number")return vvt.error(`interval() expects function & number!`); let id=generateID(); vvt.intervals.push({id,c,s:Date.now(),i}); return id},
    clearInterval:id=>{if(typeof id!=="string")return vvt.error(`clearInterval() expects string!`); vvt.intervals=vvt.intervals.filter(t=>t.id!==id)},

    randomNum:(s,e)=>{if(typeof s!=="number"||typeof e!=="number")return vvt.error(`randomNum() expects numbers!`),0; return s+(Math.random()*(e-s)|0)},
    jump:(id,f)=>{if(typeof id!=="string"||typeof f!=="number")return vvt.error(`jump() expects ID & number!`); api.setVelocity(id,0,f,0)},

    detectServer:()=>["Standard Lobby","Discord Guild Lobby"][api.getLobbyType()]??"Unknown Lobby",

    hasItem:(p,i,n)=>{if([p,i,n].some(x=>typeof x!=="string"))return vvt.error(`hasItem() expects strings!`),false; return [...Array(51)].some((_,j)=>{let t=api.getItemSlot(p,j); return t?.name===i&&t.attributes?.customDisplayName===n})},
    ghostPlayer:(p,o)=>{if(typeof p!=="string")return vvt.error(`ghostPlayer() expects ID!`); if(typeof o!=="boolean")return vvt.error(`ghostPlayer() expects boolean!`); api.setPlayerOpacity(p,o?0:1)},

    addTickFn:(f,id=generateID())=>{if(typeof f!=="function")return vvt.error(`addTickFn() expects function!`); vvt.tickFns.push({id,fn:f}); return id},
    removeTickFn:id=>{if(typeof id!=="string")return vvt.error(`removeTickFn() expects string ID!`); vvt.tickFns=vvt.tickFns.filter(t=>t.id!==id)},

    log:l=>{if(vvt.devMode&&typeof l=="string")api.broadcastMessage(`🔶 VelvetAPI Log: ${l}`,{color:"#FFCC00"})},
    error:e=>{if(vvt.devMode)api.broadcastMessage(`❌ VelvetAPI Error: ${e}`,{color:"#FF3333"})}
}; 

velvet = vvt;
vvt.addTickFn(()=>vvt.tick());
