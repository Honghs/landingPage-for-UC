



/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list'),
    bodySection = document.querySelectorAll('section'), 
    landing = document.getElementsByClassName('landing__container').length;
    

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// build the nav

//navbar__list = ul


for (i=1; i< landing+1; i++){
    let navList = document.createElement('li');
    let sections = document.getElementsByTagName('section');
    let listId = 'nav' + (i);
    navList.innerHTML = `<a href="#${sections[i-1].id}">${sections[i-1].id}</a>`;
    navbar.appendChild(navList);
    navList.setAttribute('id', listId);
    // -------------------------------------------------------
    // button for scroll into view -> gototop

    let itemTarget = document.getElementById('section' + i),
        listTarget = document.getElementById(listId),
        buttonName = 'section' + i + 'button',
        buttonAdd = document.getElementById(buttonName);

    // function for click
    
    listTarget.addEventListener('click', function(){
        itemTarget.scrollIntoView ({behavior: 'smooth'})
        buttonAdd.innerHTML = "<button class='sectionbutton' onclick='goToTop()'>Return to Top</button>";
    })
}

// use arrow function
const scrollToTop = () => {
// set for scroll function
    const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
    if ( scrolling > 0 ){
// using callback fuction
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrolling - scrolling / 10);
    }
};


//click to the top 

function goToTop(){
    scrollToTop();

    for (i =1; i < landing +1; i++){
        let buttonDelecte = document.getElementById('section' + i + 'button');
        buttonDelecte.innerHTML = "";
    }
}

// Add class 'active' to section when near top of viewport
// reference: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/


function inViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener("scroll", function(){
    for (const section of bodySection) {
        if (inViewport(section)){
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class");
        }
    }
});





