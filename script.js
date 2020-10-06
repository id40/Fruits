var showMenu = false;

function Menu() {
  showMenu = !showMenu;

  if (showMenu == true) {
    document.getElementById("mob-divs").style.top = "60px";
  } else {
    document.getElementById("mob-divs").style.top = "-100%";
  }
}
