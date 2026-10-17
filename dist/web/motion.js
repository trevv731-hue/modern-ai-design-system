/* MIT. Vanilla DOM motion; no framework, colors, network or business state. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.DSMotion=api;})(typeof globalThis==='object'?globalThis:this,function(){
  'use strict';
  function create(options={}) {
    const media=options.matchMedia||(typeof matchMedia==='function'?matchMedia.bind(globalThis):null);
    const active=new WeakMap();
    function reduced(){return !!media?.('(prefers-reduced-motion: reduce)').matches;}
    function cancel(element){active.get(element)?.cancel();active.delete(element);}
    function play(element,frames,duration,easing='cubic-bezier(.2,0,0,1)'){
      if(!element)return null;cancel(element);
      if(reduced()||typeof element.animate!=='function')return null;
      const animation=element.animate(frames,{duration,easing});
      active.set(element,animation);
      animation.finished?.then(()=>{if(active.get(element)===animation)active.delete(element);}).catch(()=>{});
      return animation;
    }
    return {
      enter(element){return play(element,[{opacity:0},{opacity:1}],180);},
      update(element){return play(element,[{opacity:.65},{opacity:1}],140);},
      springIn(element){return play(element,[{opacity:0,transform:'scale(.94)'},{opacity:1,transform:'scale(1)'}],240,'cubic-bezier(.34,1.56,.64,1)');},
      sharedAxis(element,offset=16){return play(element,[{opacity:0,transform:`translateX(${offset}px)`},{opacity:1,transform:'translateX(0)'}],280,'cubic-bezier(.05,.7,.1,1)');},
      cancel,reduced,
    };
  }
  return {create};
});
