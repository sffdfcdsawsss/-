

const elLi =  document.querySelectorAll('main .q_a_box li');
const elimg =  document.querySelectorAll('main .q_a_box li span a img');
let num = 0;

elLi.forEach(function(ele, key){
    ele.onclick = function(e){
        this.classList.toggle('active');
        if(num != key){
            elLi[num].classList.remove('active');
        }
        num = key;
    }
})

const mediaViewContent = window.matchMedia(`(max-width:1279px)`);
const elServ =  document.querySelector('main .q_a a:nth-of-type(1)');

if (mediaViewContent.matches) {
    elServ.onclick = function(e) {
        e.preventDefault();
    };
}
