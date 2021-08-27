// Loading
// window.onload = ()=>{
// //     document.querySelector('main').style.display = 'none'
// // }

// setTimeout(() => {
//     document.querySelector('#loading').style.display = 'none';
//     document.querySelector('main').style.display = 'block'
// }, 3000);




document.addEventListener("scroll", handleScroll);
let scrollToTopBtn = document.querySelector("#scrollToTopBtn");

function handleScroll() {
    let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if ((document.documentElement.scrollTop / scrollableHeight) > 0.5) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}
