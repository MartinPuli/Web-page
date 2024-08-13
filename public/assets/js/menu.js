var menu = document.querySelector(".hamburger")

// event
menu.addEventListener("click", (e)=>{
  menu.classList.toggle("is-active");
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
});
