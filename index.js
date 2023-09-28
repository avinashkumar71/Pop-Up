const btn_click = document.getElementById('btn');
const pop_element = document.getElementById('pop-up');
const ok_element = document.getElementById('ok-btn');
btn_click.addEventListener('click',()=>{
        pop_element.classList.add('visible');
});

ok_element.addEventListener('click',()=>{
        pop_element.classList.remove('visible');
});