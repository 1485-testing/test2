/* =====================================================
   스마트디자인 — Shared Layout (layout.js)
   사용법: <div id="sd-header"></div>
           <div id="sd-footer"></div>
           <script src="/js/layout.js"></script>
           <script>SD.init('home')</script>
   active: 'home' | 'cases' | ''
===================================================== */
;(function(w,d){'use strict';
  var PHONE='0503-7150-5346';
  var PHONE_TEL='tel:'+PHONE;
  var KAKAO='https://place.map.kakao.com/245135047';
  var CSS=':root{--p:#1e3a5f;--p2:#2557a0;--p3:#e8f0fb;--a:#e53030;--a2:#c82020;--bg:#f0f4f8;--card:#fff;--tx:#111827;--mu:#6b7280;--mu2:#9ca3af;--bd:#e5e7eb;--sh0:0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.04);--sh1:0 4px 12px rgba(0,0,0,.08);--sh2:0 8px 24px rgba(0,0,0,.12)}'
    +'*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}'
    +'html{scroll-behavior:smooth}'
    +'body{font-family:"Apple SD Gothic Neo","Malgun Gothic","Noto Sans KR",sans-serif;background:var(--bg);color:var(--tx);font-size:15px;line-height:1.6;-webkit-font-smoothing:antialiased}'
    +'a{color:inherit;text-decoration:none}'
    +'img{max-width:100%;height:auto;display:block}'
    +'button{font-family:inherit;cursor:pointer}'
    +'.sd-hd{position:sticky;top:0;z-index:500;background:#fff;border-bottom:1px solid var(--bd);box-shadow:0 2px 10px rgba(0,0,0,.06);display:flex;align-items:center;justify-content:space-between;height:62px;padding:0 20px}'
    +'.sd-logo{font-size:20px;font-weight:900;letter-spacing:-.5px;color:var(--p)}'
    +'.sd-logo b{color:var(--a)}'
    +'.sd-call{display:flex;align-items:center;gap:6px;background:var(--a);color:#fff;padding:9px 18px;border-radius:8px;font-weight:700;font-size:13px;box-shadow:0 3px 10px rgba(229,48,48,.28);transition:background .15s;white-space:nowrap}'
    +'.sd-call:hover{background:var(--a2)}'
    +'.sd-nav{position:sticky;top:62px;z-index:490;background:#fff;border-bottom:2px solid var(--bd);display:flex}'
    +'.sd-nav a{flex:1;text-align:center;padding:14px 8px;font-size:14px;font-weight:700;color:var(--mu);border-bottom:2px solid transparent;margin-bottom:-2px;transition:color .15s,border-color .15s}'
    +'.sd-nav a.on{color:var(--p);border-bottom-color:var(--p)}'
    +'.sd-nav a:hover:not(.on){color:var(--p2)}'
    +'.sd-ft{background:#0d2647;color:rgba(255,255,255,.55);font-size:12.5px;text-align:center;padding:36px 20px 28px;line-height:2.2;margin-top:48px}'
    +'.sd-ft-logo{font-size:22px;font-weight:900;color:#fff;margin-bottom:6px;letter-spacing:-.5px}'
    +'.sd-ft-logo b{color:#ff7b7b}'
    +'.sd-ft a{color:rgba(255,255,255,.5)}'
    +'.sd-ft a:hover{color:rgba(255,255,255,.88)}';

  function mkHeader(){
    return '<header class="sd-hd">'
      +'<a href="/" class="sd-logo">스마트<b>디자인</b></a>'
      +'<a href="'+PHONE_TEL+'" class="sd-call">📞 긴급상담</a>'
      +'</header>';
  }
  function mkNav(active){
    function t(key,href,label){return '<a href="'+href+'"'+(active===key?' class="on"':'')+'>'+label+'</a>';}
    return '<nav class="sd-nav">'+t('home','/','🏠 홈')+t('cases','/cases/','📸 시공사례')+'</nav>';
  }
  function mkFooter(){
    return '<footer class="sd-ft">'
      +'<div class="sd-ft-logo">스마트<b>디자인</b></div>'
      +'대표자: 함종록 &nbsp;|&nbsp; 사업자: 427-05-01489<br>'
      +'경기도 하남시 대청로 59번길 15<br>'
      +'<a href="'+PHONE_TEL+'">📞 '+PHONE+'</a>'
      +' &nbsp;|&nbsp; '
      +'<a href="'+KAKAO+'" target="_blank" rel="noopener">📍 카카오맵</a><br>'
      +'© 2026 스마트디자인. All rights reserved.'
      +'</footer>';
  }
  function injectCSS(){
    if(d.getElementById('sd-css'))return;
    var s=d.createElement('style');s.id='sd-css';s.textContent=CSS;
    d.head.insertBefore(s,d.head.firstChild);
  }
  w.SD={
    init:function(active,noNav){
      injectCSS(); active=active||'';
      var hEl=d.getElementById('sd-header');
      if(hEl){var html=mkHeader();if(!noNav)html+=mkNav(active);hEl.outerHTML=html;}
      var fEl=d.getElementById('sd-footer');
      if(fEl)fEl.outerHTML=mkFooter();
    },
    PHONE:PHONE, PHONE_TEL:PHONE_TEL
  };
})(window,document);
