const test=require('node:test');const assert=require('node:assert/strict');const {create}=require('../web/motion.js');
test('rapid motion cancels the previous animation and reduced motion uses no animation',()=>{
 let reduced=false,cancelled=0,played=0;const motion=create({matchMedia:()=>({matches:reduced})});
 const element={animate(_frames,options){played++;assert.ok(options.duration<=200);return {cancel(){cancelled++;},finished:new Promise(()=>{})};}};
 motion.enter(element);motion.update(element);assert.equal(cancelled,1);assert.equal(played,2);
 reduced=true;assert.equal(motion.enter(element),null);assert.equal(cancelled,2);assert.equal(played,2);assert.equal(motion.reduced(),true);
});
test('motion supports DOM nodes without the Web Animations API',()=>{
 const motion=create({matchMedia:()=>({matches:false})});assert.equal(motion.enter({}),null);assert.equal(motion.enter(null),null);
});
test('motion lint stops at declaration boundaries but rejects layout transitions',()=>{
 const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),cp=require('node:child_process');
 const folder=fs.mkdtempSync(path.join(os.tmpdir(),'motion-lint-')),file=path.join(folder,'test.css');
 try{
   const lint=()=>cp.spawnSync(process.execPath,[path.join(__dirname,'../.cursor/skills/hybrid-native-ui/scripts/check-css-motion.mjs'),file],{encoding:'utf8',windowsHide:true});
   fs.writeFileSync(file,'.button { transition: opacity 150ms; width: 40px; }\n@media(prefers-reduced-motion: reduce){.button{transition:none;}}');assert.equal(lint().status,0);
   fs.writeFileSync(file,'.button { transition: width 150ms; }\n@media(prefers-reduced-motion: reduce){.button{transition:none;}}');assert.notEqual(lint().status,0);
 }finally{fs.rmSync(folder,{recursive:true,force:true});}
});
