const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


if (bar){
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}


if (close){
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}



function smoothScroll(event, target) {
    event.preventDefault();
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

 // JavaScript function to scroll to the top of the page smoothly
 function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // JavaScript function to show/hide the back-to-top button
  window.onscroll = function() {
    showBackToTop();
  };
  
  function showBackToTop() {
    var button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }

//   document.querySelector('.LinkedIn').onclick = function() {
//     window.location.href = 'linkedin.com/in/manish-sonawane-599baa264';
//   };
