

function doTransitionedRedirect(isBottomScroll=true){
    var onPage = document.title;
    console.log(onPage);
    if(onPage=="Web Wizards" && isBottomScroll)
        window.location.href = "./Rahim Portfolio.html";
    else if(onPage=="Rahim") {
        if(isBottomScroll) window.location.href = "./Nidhi Portfolio.html";
        else window.location.href = "./MainPage.html";
    }
    else if(onPage=="Sri Nidhi" && !isBottomScroll)
        window.location.href = "./Rahim Portfolio.html";
}

var scrollDirectionCount = 0;
var scrollThreshold = 1;
var previousScrollPos = 0;
document.addEventListener(
    'wheel', function(event) {
        // Do something with the event
        var currentScrollPos = window.innerHeight + window.scrollY
        if(previousScrollPos == currentScrollPos) {
            if(event.deltaY > 0) scrollDirectionCount += 1;
            else  scrollDirectionCount -= 1;
        }
        previousScrollPos = currentScrollPos;

        if(Math.abs(scrollDirectionCount) >= scrollThreshold){
            doTransitionedRedirect(scrollDirectionCount >= 0);
            scrollDirectionCount = 0;
        }
    }
);