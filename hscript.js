document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const targetTab = tabBtn.dataset.tab;
      if (!targetTab) return;

      // 이미 선택된 탭이면 아무 액션 안함
      const currentActive = document.querySelector('.tab-button.active');
      if (currentActive === tabBtn) return;

      // 탭 버튼 active 상태 바꾸기
      tabs.forEach(b => {
        b.classList.toggle('active', b === tabBtn);
        b.setAttribute('aria-selected', b === tabBtn);
        b.tabIndex = b === tabBtn ? 0 : -1;
      });

      // 탭 콘텐츠 보이기/숨기기
      tabContents.forEach(panel => {
        if (panel.id === targetTab) {
          panel.classList.add('active');
          panel.removeAttribute('aria-hidden');
          panel.tabIndex = 0;
          panel.focus();
        } else {
          panel.classList.remove('active');
          panel.setAttribute('aria-hidden', 'true');
          panel.tabIndex = -1;
        }
      });
    });
  });

  const projectSettingsBtn = document.querySelector('.project-settings-button');
  if (projectSettingsBtn) {
    projectSettingsBtn.addEventListener('click', () => {
      alert('v1 for CrokOS');
      // 이동 시 아래 주석 해제하고 경로 설정 ㄱㄱ
      // window.location.href = 'project_settings.html';
    });
  }
});