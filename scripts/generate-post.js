const fs = require('fs');
const path = require('path');

const keywords = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/keywords.json'),'utf8'));
const today = new Date().toISOString().slice(0,10);

const icons = {'변기교체':'🚽','세면대수전교체':'🪣','싱크대수전교체':'🍳','샤워기수전교체':'🚿','환풍기교체':'💨','전체인테리어':'🏠','바닥보수':'🪵','도배':'🖼️','타일시공':'🔲','누수수리':'💧'};
const imgBg = {'변기교체':'#dbeafe','세면대수전교체':'#e0f2fe','싱크대수전교체':'#fef9c3','샤워기수전교체':'#d1fae5','환풍기교체':'#ede9fe','전체인테리어':'#fee2e2','바닥보수':'#fef3c7','도배':'#fce7f3','타일시공':'#f0fdf4','누수수리':'#eff6ff'};

const posts = [];

keywords.forEach(k => {
  const slug = `${k.location}-${k.service}`.replace(/\s/g,'-');
  const dir = path.join(__dirname,'../posts',slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir,{recursive:true});

  const title = `${k.location} ${k.service} 출장 안내`;
  const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${title} | 스마트디자인</title>
  <meta name="description" content="${k.location} ${k.service} 전문 스마트디자인. 정찰제, 당일 출장, 무상 A/S. 0503-7150-5346"/>
  <link rel="canonical" href="https://1485testing.netlify.app/posts/${slug}/"/>
  <script src="/js/layout.js"></script>
  <style>
.post-hero{background:linear-gradient(135deg,#0d2647,#1e4d8c);padding:36px 20px;color:#fff;text-align:center}
.post-hero h1{font-size:22px;font-weight:900;line-height:1.4;margin-bottom:10px;word-break:keep-all}
.post-hero p{font-size:13px;color:rgba(255,255,255,.75)}
.post-body{padding:24px 16px}
.post-card{background:#fff;border:1px solid var(--bd);border-radius:14px;padding:20px;margin-bottom:14px;box-shadow:var(--sh0)}
.post-card h2{font-size:16px;font-weight:800;margin-bottom:10px;color:var(--p)}
.post-card p{font-size:13.5px;color:var(--mu);line-height:1.85;word-break:keep-all}
.cta-band{background:var(--a);padding:24px 20px;text-align:center}
.cta-band p{font-size:13px;color:rgba(255,255,255,.88);margin-bottom:12px}
.cta-band a{display:inline-flex;align-items:center;gap:8px;background:#fff;color:var(--a);padding:13px 28px;border-radius:10px;font-size:19px;font-weight:900}
  </style>
</head>
<body>
<div id="sd-header"></div>
<div class="post-hero">
  <h1>${title}</h1>
  <p>스마트디자인 · 정찰제 · 당일 출장 · 무상 A/S</p>
</div>
<div class="post-body">
  <div class="post-card">
    <h2>${icons[k.service]||'🔧'} ${k.service} 서비스 안내</h2>
    <p>${k.location} 지역 ${k.service} 전문 출장 서비스입니다. 방문 전 금액을 먼저 안내드리며, 추가 비용 없는 정찰제로 운영합니다. 시공 불가 시 비용을 청구하지 않습니다.</p>
  </div>
  <div class="post-card">
    <h2>📍 서비스 지역</h2>
    <p>${k.location} 및 인근 지역 당일 출장 가능합니다. 강동구, 하남시, 송파구, 광진구 전 지역 서비스합니다.</p>
  </div>
  <div class="post-card">
    <h2>💰 비용 안내</h2>
    <p>방문 전 전화로 예상 금액을 안내드립니다. 현장 확인 후 정확한 견적을 드리며, 동의 후 시공을 진행합니다. 숨겨진 추가 비용이 없습니다.</p>
  </div>
</div>
<div class="cta-band">
  <p>${k.location} ${k.service} 문의는 지금 바로 전화하세요</p>
  <a href="tel:0503-7150-5346">📞 0503-7150-5346</a>
</div>
<div id="sd-footer"></div>
<script>SD.init('',true)</script>
</body>
</html>`;

  fs.writeFileSync(path.join(dir,'index.html'),html,'utf8');

  posts.push({
    id: slug,
    title,
    location: k.location,
    service: k.service,
    date: today,
    url: `/posts/${slug}/`,
    icon: icons[k.service]||'🔧',
    imgBg: imgBg[k.service]||'#dde8f5',
    image: ''
  });
});

fs.writeFileSync(path.join(__dirname,'../data/posts.json'), JSON.stringify(posts,null,2),'utf8');
console.log(`생성 완료: ${posts.length}개 포스트`);
