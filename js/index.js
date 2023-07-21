
$('body').prepend('<header></header>');
$('header').load('./header.html .menu-trigger,.menu_bar,h1,.ic', menu, contentsMove);
chat();
idx();


//init
function contentsMove(){
    const elSection = document.querySelectorAll('.section'),
    elRight = document.querySelector('.right'),
    elAside = document.querySelectorAll('.right a'),
    elAsideAct = document.querySelector('.act'),
    elMain = document.querySelector('main'),
    elIc = document.querySelectorAll('header .ic a img'),
    elH1 = document.querySelector('header h1 a img'),
    elBurger = document.querySelector('header .menu-trigger');

    let str1 = image.src;
    let changeStr = str1.replace('.png','2.png'); 
    
    let cIdx = 0;
    let move = 0;
    let posY = [];
    

    elSection.forEach((ele)=>{
        if(ele.tagName != 'FOOTER'){
            posY.push(ele.getBoundingClientRect().y);
        }else{
            posY.push(ele.getBoundingClientRect().y - (window.innerHeight - ele.offsetHeight));
        }
    })
    document.body.style= `height:${elMain.offsetHeight*2}px`;


    //move
    function conMove(){
        elMain.style = `transform:translateY(-${posY[cIdx]}px); `;
        elAsideAct.style = `top:${elAside[cIdx].offsetTop - 14}px`;
        if(elSection[cIdx].classList.contains('black')){
            elRight.classList.add('black')
            elBurger.classList.add('black')
            image.src = changeStr;
            
            elIc.forEach(function(img,k){
                let str = img.getAttribute('src');
                if(!str.match('_1')) img.src = img.src.replace('.png','_1.png');
            })
        }else{
            elRight.classList.remove('black')
            elBurger.classList.remove('black')
            image.src = str1;
            elIc.forEach(function(img,k){
                img.src = img.src.replace('_1.png','.png');
            })
        }
    }

    //event
    let pos = {y:0,y2:0,state:true}
    window.addEventListener('scroll',function(e){
        pos.y = window.pageYOffset;
        pos.status = (pos.y > pos.y2) ? true : false;
        pos.y2 = pos.y;
        
        clearTimeout(move);
        move = setTimeout(()=>{
            (pos.status) ? cIdx++ : cIdx--;
            if(cIdx < 0) {cIdx=0;}
            else if(cIdx > elSection.length-1){ cIdx= elSection.length-1 }
            
            conMove();
        },100)
    });

    elAside.forEach(function(menu,key){
        menu.onclick = function(){
            cIdx = key;
            conMove();
        }
    });

    setTimeout(()=>{
        elMain.style = `transform:translateY(0px); `;
        document.documentElement.scrollTop = 0;
    },150)
}
window.addEventListener('load',contentsMove);


function menu(){

    const elS3 = document.querySelector('header .menu-trigger'),
    elS3Nav = document.querySelector('.menu_bar nav'),
    elS3Back = document.querySelector('.menu_bar'),
    elS3NavMenu = document.querySelector('header .menu_bar .menu-trigger_2');


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


function idx(){
    const elSpan_1 = document.querySelector('main .index .bottom div span:nth-of-type(1)'),
    elSpan_2 = document.querySelector('main .index .bottom div span:nth-of-type(2)'),
    elSpot_1 = document.querySelector('main .index .spot_1'),
    elSpot_2 = document.querySelector('main .index .spot_2');

    let num = 0;

    elSpan_1.onclick =function(){
            elSpan_1.classList.add('active');
            elSpan_2.classList.remove('active');
            elSpot_2.classList.remove('active');
            elSpot_1.classList.add('active');
        }
    elSpan_2.onclick =function(){
        elSpan_2.classList.add('active');
        elSpan_1.classList.remove('active');
        elSpot_1.classList.remove('active');
        elSpot_2.classList.add('active');
    }
} 

const elSection = document.querySelectorAll('.section');

const callback = (entry, observer) => {
    entry.forEach(function(ele){
        if( ele.isIntersecting ){
            ele.target.classList.add('active')
        }else{
            ele.target.classList.remove('active')
        }
    })
}

let options = {
  	threshold: 0.8
}
let observer = new IntersectionObserver(callback, options);

elSection.forEach(function(selector){
    observer.observe( selector)
})



