
$('body').prepend('<header></header>');
$('header').load('./header.html .menu-trigger,.menu_bar,h1,.ic',menu);
chat();

function menu() {
    const elS3 = document.querySelector('header .menu-trigger');
    const elS3Nav = document.querySelector('.menu_bar nav');
    const elS3Back = document.querySelector('.menu_bar');
    const elS3NavMenu = document.querySelector('header .menu_bar .menu-trigger_2');
    const head = document.querySelector('header');
  
    let menuOpened = false;
  
    function toggleMenu(e) {
      e.preventDefault();
      menuOpened = !menuOpened;
  
      if (menuOpened) {
        elS3Nav.classList.add('active');
        elS3Back.classList.add('active');
      } else {
        elS3Nav.classList.remove('active');
        elS3Back.classList.remove('active');
      }
    }
  
    elS3Back.onclick = function (e) {
      let target = e.target.classList;
      if (menuOpened && (target.contains('menu_bar') || target.contains('menu-trigger_2') || e.target.tagName === 'SPAN')) {
        toggleMenu(e);
      }
    };
  
    elS3.addEventListener('click', toggleMenu);
    elS3.addEventListener('touchstart', toggleMenu);
    elS3NavMenu.addEventListener('click', toggleMenu);
    elS3NavMenu.addEventListener('touchstart', toggleMenu);
  
    // 스크롤 이벤트 핸들러 추가
    window.addEventListener('scroll', function () {
      const pos = {
        y: window.pageYOffset,
        y2: 0,
        status: true
      };
  
      if (pos.y) {
        head.classList.add('active');
      } else {
        head.classList.remove('active');
      }
    });
  }

function chat() {
    const elChat = document.querySelector('.chat'),
        elChatBot = document.querySelector('.chat_bot'),
        elChatClose = document.querySelector('.chat_bot .ch_contents .ch_header div img:nth-of-type(2)');

    elChat.onclick = function(e) {
        elChat.classList.add('active');
        elChatBot.classList.add('active');
        e.preventDefault(); 
    }

    elChatClose.onclick = function() {
        elChat.classList.remove('active');
        elChatBot.classList.remove('active');
    }
}

