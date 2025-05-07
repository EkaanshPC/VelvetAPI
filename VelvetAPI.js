function velvetLoop(a,c){if(typeof a!=="number"||typeof c!=="function")throw new TypeError("VelvetAPI: Invalid arguments");while(a--)c();}
let velvetTimers=[],velvetIntervals=[],tickFunctions=[];
tick=()=>tickFunctions.forEach(f=>f());
function addTickFunction(f){if(typeof f!=="function")throw new TypeError("VelvetAPI: Expected a function");tickFunctions.push(f);}
function velvetTimeout(c,d){if(typeof c!=="function"||typeof d!=="number")throw new TypeError("VelvetAPI: Invalid arguments");velvetTimers.push({c,s:Date.now(),d});}
function velvetInterval(c,i){if(typeof c!=="function"||typeof i!=="number")throw new TypeError("VelvetAPI: Invalid arguments");return velvetIntervals.push({id:crypto.randomUUID(),c,s:Date.now(),i}),velvetIntervals.at(-1).id;}
function velvetClearInterval(id){if(typeof id!=="string")throw new TypeError("VelvetAPI: Expected a valid interval ID");velvetIntervals=velvetIntervals.filter(t=>t.id!==id);}
addTickFunction(()=>{velvetTimers=velvetTimers.filter(t=>Date.now()-t.s<t.d||(t.c(),0));
velvetIntervals.forEach(t=>Date.now()-t.s>=t.i&&(t.c(),t.s=Date.now()));});
function velvetAsync(c){if(typeof c!=="function")throw new TypeError("VelvetAPI: Expected a function");velvetTimeout(c,0);}
function velvetRandomNum(s,e){if(typeof s!=="number"||typeof e!=="number")throw new TypeError("VelvetAPI: Expected two numbers");return s+(Math.random()*(e-s)|0);}
function velvetJump(id,f){if(typeof id!=="string"||typeof f!=="number")throw new TypeError("VelvetAPI: Invalid arguments");api.setVelocity(id,0,f,0);}
function velvetDetectServerClient(){return["Standard Lobby","Discord Guild Lobby"][api.getLobbyType()]??"Unknown Lobby Type";}
function velvethasItem(myId,i,n){if(typeof myId!=="string"||typeof i!=="string"||typeof n!=="string")throw new TypeError("VelvetAPI: Invalid arguments");for(let j=51;j--;){let t=api.getItemSlot(myId,j);if(t?.name===i&&t.attributes?.customDisplayName===n)return!0}return!1}
function velvetGhostPlayer(p,o){if(typeof p!=="string")throw new TypeError("VelvetAPI: Expected valid player ID");if(typeof o!=="boolean")return api.sendMessage(p,`VelvetAPI: incorrect usage of velvetGhostPlayer: ${o}\nExpected Type: boolean`,{color:"#ff6666"});api.setPlayerOpacity(p,o?0:1)}
