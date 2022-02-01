const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');



function clockArrow( time, current_time){
    return (360 * current_time ) / time;
}

setInterval( () => {
    let time = new Date();
    let c_sec = time.getSeconds();
    let c_min = time.getMinutes();
    let c_hors = time.getHours();

    sec.style.transform = `rotate(${clockArrow(60 , c_sec)}deg)`
    min.style.transform = `rotate(${clockArrow(60 , c_min)}deg)`
    hour.style.transform = `rotate(${clockArrow(12 , c_hors)}deg)`

},1000)

