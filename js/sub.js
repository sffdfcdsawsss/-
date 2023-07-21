
$('body').prepend('<header></header>');
$('header').load('./header.html .menu-trigger,.menu_bar,h1,.ic',menu);
chat();

function menu(){

    const head = document.querySelector('header'),
    elS3 = document.querySelector('header .menu-trigger'),
    elS3Nav = document.querySelector('.menu_bar nav'),
    elS3Back = document.querySelector('.menu_bar'),
    elS3NavMenu = document.querySelector('header .menu_bar .menu-trigger_2');
    let pos = {y:0,y2:0,status:true};


    elS3.onclick = function(e){
        e.preventDefault();
        elS3Nav.classList.add('active');
        elS3Back.classList.add('active');
    }

    elS3Back.onclick = function(e){
        let target = e.target.classList;                
        if(target.contains('menu_bar') || target.contains('menu-trigger_2') || e.target.tagName == 'SPAN'){
            elS3Nav.classList.remove('active');
            elS3Back.classList.remove('active');
        }
    }

    window.addEventListener('scroll',function(){ 
        pos.y = window.pageYOffset;
        pos.status = (pos.y > pos.y2) ? true : false;
        pos.y2 = pos.y;

        if(pos.y){ head.classList.add('active')  }
        else{ head.classList.remove('active')  }
    })


};


function chat(){
    const elChat = document.querySelector('.chat'),
    elChatBot = document.querySelector('.chat_bot'),
    elChatClose = document.querySelector('.chat_bot .ch_contents .ch_header div img:nth-of-type(2)');

    elChat.onclick = function(){
        elChat.classList.add('active');
        elChatBot.classList.add('active');
    }
    elChatClose.onclick = function(){
        elChat.classList.remove('active');
        elChatBot.classList.remove('active');
    }
}