let componentIndex = 1;
const components = document.getElementsByClassName("component");                

function showComponent(n) {
    let index = componentIndex += n;

    if (index > components.length) { 
        componentIndex = 1 
    }            
    if (index < 1) {
        componentIndex = components.length 
    }

    for (var i = 0; i < components.length; i++) {
        components[i].style.display = "none";
    }

    components[componentIndex - 1].style.display = "flex";
}

window.onscroll = function() {            
    if (window.pageYOffset > 600) {
        document.getElementById("navbar").classList.remove('hide');
    } else {
        document.getElementById("navbar").classList.add('hide');
    }
}

showComponent(0);