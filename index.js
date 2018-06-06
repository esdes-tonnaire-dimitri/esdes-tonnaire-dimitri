var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
function changeClass () {
    var button = document.getElementById("myButton");
    if (button.className == "rotate") {
        button.className = "";

    } else {
        button.className = "rotate";
    }

}
var functionBasedDelay = anime({
    targets: 'article',
    translateX: 250,
    direction: 'alternate',
    loop: true,
    delay: function (el, i, l) {
      return 500 + i * 100;
    }
  });  