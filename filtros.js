
filterObjects("all")

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("evento");
    if (c == "all") c = "";
    for (i=0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}




// document.querySelector('.bt-caab').addEventListener('click', filterObjects('caab'))
// document.querySelector('.bt-asp').addEventListener('click', filterObjects('asp'))
// document.querySelector('.bt-pais').addEventListener('click', filterObjects('pais'))
// document.querySelector('.bt-all').addEventListener('click', filterObjects('all'))



















// Exibe e oculta detalhes do evento
// function show(e){
//     let wrap = e.children
//     let evento = wrap[0].children
//     let detalhes = evento[1].children
//     let titulo = evento[1].style 
    
//     if (detalhes[0].style.display == "none") {
//         detalhes[0].style.display = "block";
//     } else {
//     detalhes[0].style.display = "none"
//     }

    /*if (titulo.whiteSpace == "nowrap" && titulo.overflow == "hidden"*/ /*&& titulo.textOverflow == "ellipsis"*/ /*)  {*/
        // titulo.whiteSpace = "normal"
        // titulo.overflow = "visible"
        // titulo.textOverflow = "inherit"

    // } else {
    //     titulo.whiteSpace = "nowrap"
    //     titulo.overflow = "hidden"
        // titulo.textOverflow = "ellipis"
    //}
//}

// Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("buttons");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }