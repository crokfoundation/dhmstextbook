document.addEventListener('DOMContentLoaded', () => {
    const loadingProgress = document.querySelector('.loading-progress');
    const spaceBackground = document.querySelector('.space-background');
    const liquidGlassBox = document.querySelector('.liquid-glass-box');
    const textTd = document.querySelector('.text-td');
    const loadingBarWrapper = document.querySelector('.loading-bar-wrapper');

    // --- 별 생성 및 애니메이션 (t=0s부터 시작) ---
    function createStars(count, sizeClass, speed) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = `star ${sizeClass}`;
            // 별이 화면 안쪽에서 생성되도록 조정 (너무 가장자리에 생성 안 되게)
            star.style.left = `${Math.random() * 90 + 5}vw`; 
            star.style.top = `${Math.random() * 90 + 5}vh`;
            star.style.opacity = Math.random() * 0.8 + 0.2; 
            star.style.animationName = 'starMoveFast'; // 초기 빠르게
            star.style.animationDuration = `${speed}s`;
            star.style.animationDelay = `-${Math.random() * speed}s`; // 한 번에 움직이지 않게 딜레이
            spaceBackground.appendChild(star);
        }
    }
    
    createStars(70, 'small', 8); // 70개, 8초 한 바퀴 (초기 빠르게)
    createStars(30, 'medium', 12); // 30개, 12초 한 바퀴
    createStars(15, 'large', 18); // 15개, 18초 한 바퀴

    // --- 별 애니메이션 속도 변경 (t=2s) ---
    // 네모박스가 나타나는 시간 즈음에 별을 느리게 함
    setTimeout(() => {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            let currentSpeed = parseFloat(star.style.animationDuration);
            let newSpeed = currentSpeed * 2; // 원래 속도보다 2배 느리게
            star.style.animationDuration = `${newSpeed}s`;
            star.style.animationName = 'starMoveSlow'; // 느린 애니메이션 적용
        });
    }, 2000); // 2초 후


    // --- 네모박스 페이드인 (t=1s 시작, 1s 동안) ---
    setTimeout(() => {
        liquidGlassBox.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        liquidGlassBox.style.opacity = 1;
        liquidGlassBox.style.transform = 'translateY(0)';
    }, 1000); // 1초 후에 시작

    // --- 'ㅌㄷ' 텍스트 페이드인 (t=2.5s 시작, 1s 동안) ---
    setTimeout(() => {
        textTd.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        textTd.style.opacity = 1;
        textTd.style.transform = 'translateY(0)';
    }, 2500); // 2.5초 후에 시작 (박스 나타난 후 1.5초)

    // --- 로딩바 시작 (t=4s 시작, 3s 동안) ---
    setTimeout(() => {
        loadingBarWrapper.style.transition = 'opacity 0.5s ease-out';
        loadingBarWrapper.style.opacity = 1; // 로딩바 컨테이너를 보이게 함
        
        // 로딩바 진행
        loadingProgress.style.transition = 'width 3s linear'; // 3초간 채워지는 애니메이션
        loadingProgress.style.width = '100%'; 
    }, 4000); // 4초 후에 시작 (텍스트 나타난 후 1.5초)


    // --- 최종 페이지 이동 (t=7s) ---
    // 로딩바가 3초 동안 진행된 후 (4초 + 3초 = 7초)
    setTimeout(() => {
        window.location.href = 'homepage.html'; // 존슨우의 홈페이지 파일 이름으로 변경!
    }, 7000); // 7초 (7000ms) 후에 이동
});