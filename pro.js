// let active= false
// function tog(){
//   let tog = document.querySelector("tog")
// }
// active=!active
// if(active){
//   tog.classlist.add('active')
// }
// else{
//   tog.classlist.remove('active')
// }else{
  
// }

let active = false;

function toggle() {
    let toggle = document.querySelector('.toggle');
    let bg = document.getElementById('world');
    active = !active
    if (active) {
        toggle.classList.add('active');
        bg.style.backgroundColor = 'red';

    } else {
        toggle.classList.remove('active');
        bg.style.backgroundColor = 'black';

    }
}