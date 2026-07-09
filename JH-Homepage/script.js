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