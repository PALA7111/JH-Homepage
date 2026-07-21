// 페이지 로드 시 정상 작동 및 링크 매핑 검증용 로그
document.addEventListener('DOMContentLoaded', () => {
    console.log('제이에이치창호 이미지 매핑 웹사이트 구조 활성화 완료.');
    
    // 전체 투명 핫스팟 영역 가져오기
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(spot => {
        spot.addEventListener('click', (e) => {
            const destination = spot.getAttribute('href');
            console.log(`[네비게이션 알림] 클릭된 타겟 페이지: ${destination}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('mainPopup');
    const btnCloseTop = document.getElementById('btnCloseTop');
    const btnHide7Days = document.getElementById('btnHide7Days');

    // 1. 브라우저 localStorage 확인 (7일 만료 시간 체크)
    if (popupOverlay) {
        const hideUntil = localStorage.getItem('jh_popup_hide_until');
        const now = new Date().getTime();

        // 저장된 만료 시각이 없거나 이미 지났으면 팝업 노출
        if (!hideUntil || now > parseInt(hideUntil, 10)) {
            popupOverlay.style.display = 'flex';
        } else {
            popupOverlay.style.display = 'none';
        }

        // 2. 우측 상단 X 버튼 클릭 시 단순 창 닫기
        if (btnCloseTop) {
            btnCloseTop.addEventListener('click', () => {
                popupOverlay.style.display = 'none';
            });
        }

        // 3. 하단 '7일 동안 열지 않음 ✕' 클릭 시 7일 저장 후 닫기
        if (btnHide7Days) {
            btnHide7Days.addEventListener('click', () => {
                const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
                const expireTime = new Date().getTime() + sevenDaysInMs;

                localStorage.setItem('jh_popup_hide_until', expireTime);
                popupOverlay.style.display = 'none';
            });
        }
    }
});