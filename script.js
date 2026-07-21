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
    console.log('제이에이치창호 이미지 매핑 및 팝업 제어 스크립트 활성화');

    // 1. 팝업창 노출 제어 로직
    const popup = document.getElementById('mainPopup');
    const btnHide7Days = document.getElementById('btnHide7Days');
    const btnClosePopup = document.getElementById('btnClosePopup');

    if (popup) {
        const expireDate = localStorage.getItem('popupHideUntil');
        const now = new Date().getTime();

        // 저장된 기간이 없거나, 이미 만료 기간이 지났다면 팝업을 띄움
        if (!expireDate || now > parseInt(expireDate, 10)) {
            popup.style.display = 'flex';
        }

        // 7일 동안 보지 않기 클릭 이벤트
        btnHide7Days.addEventListener('click', () => {
            const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000; // 7일을 밀리초로 계산
            const limitTime = new Date().getTime() + sevenDaysInMs;
            
            localStorage.setItem('popupHideUntil', limitTime);
            popup.style.display = 'none';
        });

        // 그냥 창 닫기 클릭 이벤트
        btnClosePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    }

    // 2. 상단 메뉴 이동 확인용 콘솔 로그 (기존 기능)
    const hotspots = document.querySelectorAll('.hotspot');
    hotspots.forEach(spot => {
        spot.addEventListener('click', () => {
            const destination = spot.getAttribute('href');
            console.log(`[이동] ${destination}`);
        });
    });
});