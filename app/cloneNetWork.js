// 1. 데이터 준비 (나중에 서버에서 받아올 데이터라고 가정)
const movieData = [
  {
    title: "주술회전",
    desc: "자신의 내면에 깃든 저주의 왕을 죽이려는 고등학생의 활약을 그린 애니메이션 시리즈. 스튜디오 마파에서 제작했으며, 크런치롤 아니메 어워즈에서 3개 부문의 상을 수상했다.",
    bgImage: "https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYLaq630tL4Z5V4yAsWeAg4LOTRlMSdT8jgeD6E0fkYnlxCymvsR52JM7NuqRHLdMQ4o3KwktgSvfMBL7INkurRAcrm72kdXm6bh.webp?r=81f"
  },
  {
    title: "오징어 게임",
    desc: "456억 원의 상금이 걸린 의문의 서바이벌에 참가한 사람들이 최후의 승자가 되기 위해 목숨을 걸고 극한의 게임에 도전하는 이야기를 담은 넷플릭스 시리즈.",
    bgImage: "https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbvsyspsGUWRe7_I7DOz0hCi2WJMyA5TydGlc4bdWT0AlrBw_ntIciQ73woRGgzGZg2pFrbDHFWiW3lq5QifrOU7MAxyVChnCPOu.webp?r=bd9" 
  },
  {
    title: "기묘한 이야기",
    desc: "인디애나주의 작은 마을에서 한 소년이 흔적도 없이 사라진다. 미스터리한 힘을 가진 소녀가 나타나고, 마을에는 기이한 일들이 벌어지기 시작하는데...",
    bgImage: "https://occ-0-2218-988.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABTM988KfIANXIFZAO_n3EPx5Aarirel53Pz8dUTJlHSEX6wVE9uDpAiq4B61o3aWyrPhAwfwsMo-mmhjUN5iOFeHMqjKg-PisxPg.webp?r=b38"  
  }
];

function setRandomBanner() {
  const randomIndex = Math.floor(Math.random() * movieData.length);
  const selectedMovie = movieData[randomIndex];

  const infoDiv = document.getElementById('info');
  const body = document.querySelector('body');

  if (infoDiv) {
    if(selectedMovie.bgImage) {
        body.style.backgroundImage = `url('${selectedMovie.bgImage}')`;
    }

    infoDiv.innerHTML = `
      <h1 style="font-size: 50px; margin-bottom: 20px;">${selectedMovie.title}</h1>
      <div>${selectedMovie.desc}</div>
    `;
  }
}

function setupButtons() {
    const playBtn = document.querySelector('.btn-11-play');
    const infoBtn = document.querySelector('.btn-11-info');

    if(playBtn) {
        playBtn.addEventListener('click', () => {
            alert('영상을 재생합니다!');
        });
    }

    if(infoBtn) {
        infoBtn.addEventListener('click', () => {
            alert('상세 정보를 불러옵니다...');
        });
    }
}

function init() {
  setRandomBanner();
  setupButtons();
  window.addEventListener('scroll', handleScroll);
}

init();