document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Loaded');



    // Select the "DOWNLOAD" link
    const downloadLink = document.querySelector('.nav_item a[href="#game_section"]');
    // Add an event listener for click on the "DOWNLOAD" link
    downloadLink.addEventListener('click', function (event) {
        console.log('#game_section clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #game_section)
        const targetElement = document.querySelector('#game_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Select the "Holberton" link
    const holbertonLink = document.querySelector('.nav_item a[href="#holberton_section"]');
    // Add an event listener for click on the "Holberton" link
    holbertonLink.addEventListener('click', function (event) {
        console.log('#holberton_section clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #holberton_section)
        const targetElement = document.querySelector('#holberton_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Select the "Slides" link
    const slidesLink = document.querySelector('.nav_item a[href="#slides_section"]');
    // Add an event listener for click on the "Slides" link
    slidesLink.addEventListener('click', function (event) {
        console.log('#slides_section clicked')
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #slides_section)
        const targetElement = document.querySelector('#slides_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Select the "Trailer" link
    const trailerLink = document.querySelector('.nav_item a[href="#trailer_section"]');
    // Add an event listener for click on the "Trailer" link
    trailerLink.addEventListener('click', function (event) {
        console.log('#trailer_section clicked')
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #trailer_section)
        const targetElement = document.querySelector('#trailer_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Select the "Screenshots" link
    const screenshotsLink = document.querySelector('.nav_item a[href="#screenshots_section"]');
    // Add an event listener for click on the "Screenshots" link
    screenshotsLink.addEventListener('click', function (event) {
        console.log('#screenshots_section clicked')
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #screenshots_section)
        const targetElement = document.querySelector('#screenshots_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Select the "Assets" link
    const assetsLink = document.querySelector('.nav_item a[href="#assets_section"]');
    // Add an event listener for click on the "Assets" link
    assetsLink.addEventListener('click', function (event) {
        console.log('#assets_section clicked')
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #assets_section)
        const targetElement = document.querySelector('#assets_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Select the "Contact" link
    const contactLink = document.querySelector('.nav_item a[href="#contact_section"]');
    // Add an event listener for click on the "Contact" link
    contactLink.addEventListener('click', function (event) {
        console.log('#contact_section clicked')
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #contact_section)
        const targetElement = document.querySelector('#contact_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    ///////// DOWN ARROWS \\\\\\\\\\

    // Select the down arrow link
    const downarrowLink = document.querySelector('#game_section a[href="#holberton_section"]');
    // Add an event listener for click on the link within down arrow
    downarrowLink.addEventListener('click', function (event) {
        console.log('downarrow clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #holberton_section)
        const targetElement = document.querySelector('#holberton_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Hover effect
    const gameSection = document.querySelector('.shadow_container');
    const downarrow = document.querySelector('.downarrow');

    downarrow.addEventListener('mouseenter', function () {
        gameSection.classList.add('hover-shadow');
    });

    downarrow.addEventListener('mouseleave', function () {
        gameSection.classList.remove('hover-shadow');
    });

    // Select the down arrow 2 link
    const downarrowLink2 = document.querySelector('#holberton_section a[href="#slides_section"]');
    // Add an event listener for click on the link within down arrow
    downarrowLink2.addEventListener('click', function (event) {
        console.log('downarrow2 clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #slides_section)
        const targetElement = document.querySelector('#slides_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Hover effect
    const holbertonSection = document.querySelector('.shadow_container2');
    const downarrow2 = document.querySelector('.downarrow2');

    downarrow2.addEventListener('mouseenter', function () {
        holbertonSection.classList.add('hover-shadow');
    });

    downarrow2.addEventListener('mouseleave', function () {
        holbertonSection.classList.remove('hover-shadow');
    });

    // Select the down arrow 3 link
    const downarrowLink3 = document.querySelector('#slides_section a[href="#trailer_section"]');
    // Add an event listener for click on the link within down arrow
    downarrowLink3.addEventListener('click', function (event) {
        console.log('downarrow3 clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #trailer_section)
        const targetElement = document.querySelector('#trailer_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Hover effect
    const slideSection = document.querySelector('.shadow_container3');
    const downarrow3 = document.querySelector('.downarrow3');

    downarrow3.addEventListener('mouseenter', function () {
        slideSection.classList.add('hover-shadow');
    });

    downarrow3.addEventListener('mouseleave', function () {
        slideSection.classList.remove('hover-shadow');
    });

    // Select the down arrow 4 link
    const downarrowLink4 = document.querySelector('#trailer_section a[href="#screenshots_section"]');
    // Add an event listener for click on the link within down arrow
    downarrowLink4.addEventListener('click', function (event) {
        console.log('downarrow4 clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #screenshots_section)
        const targetElement = document.querySelector('#screenshots_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Hover effect
    const trailerSection = document.querySelector('.shadow_container4');
    const downarrow4 = document.querySelector('.downarrow4');

    downarrow4.addEventListener('mouseenter', function () {
        trailerSection.classList.add('hover-shadow');
    });

    downarrow4.addEventListener('mouseleave', function () {
        trailerSection.classList.remove('hover-shadow');
    });

    // Select the down arrow 4 link
    const downarrowLink5 = document.querySelector('#screenshots_section a[href="#assets_section"]');
    // Add an event listener for click on the link within down arrow
    downarrowLink5.addEventListener('click', function (event) {
        console.log('downarrow5 clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #assets_section)
        const targetElement = document.querySelector('#assets_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Hover effect
    const assetsSection = document.querySelector('.shadow_container5');
    const downarrow5 = document.querySelector('.downarrow5');

    downarrow5.addEventListener('mouseenter', function () {
        assetsSection.classList.add('hover-shadow');
    });

    downarrow5.addEventListener('mouseleave', function () {
        assetsSection.classList.remove('hover-shadow');
    });

    // Select the down arrow 6 link
    const downarrowLink6 = document.querySelector('#assets_section a[href="#contact_section"]');
    // Add an event listener for click on the link within down arrow
    downarrowLink6.addEventListener('click', function (event) {
        console.log('downarrow6 clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #contact_section)
        const targetElement = document.querySelector('#contact_section');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Hover effect
    const assetSection = document.querySelector('.shadow_container6');
    const downarrow6 = document.querySelector('.downarrow6');

    downarrow6.addEventListener('mouseenter', function () {
        assetSection.classList.add('hover-shadow');
    });

    downarrow6.addEventListener('mouseleave', function () {
        assetSection.classList.remove('hover-shadow');
    });


    //////////// LOGO AND TOP ARROW BUTTON \\\\\\\\\\\\\

    // Select the nav logo
    const navLogo = document.querySelector(".nav_logo");
    // Select the arrow button
    const arrowButton = document.querySelector(".toparrow");
    const backArrowButton1 = document.querySelector(".backtoparrow1");
    const backArrowButton2 = document.querySelector(".backtoparrow2");

    // Function to add hover listeners to arrowButton
    function addArrowButtonHoverListeners() {
        arrowButton.addEventListener('mouseenter', onArrowButtonMouseEnter);
        arrowButton.addEventListener('mouseleave', onArrowButtonMouseLeave);
    }

    // Function to remove hover listeners from arrowButton
    function removeArrowButtonHoverListeners() {
        arrowButton.removeEventListener('mouseenter', onArrowButtonMouseEnter);
        arrowButton.removeEventListener('mouseleave', onArrowButtonMouseLeave);
    }

    // Hover event handler for arrowButton mouse enter
    function onArrowButtonMouseEnter() {
        if (window.innerWidth <= 1050) {
            arrowButton.style.bottom = "-5px";
            backArrowButton1.style.bottom = "-15px";
            backArrowButton2.style.bottom = "-25px";
        } else {
            arrowButton.style.bottom = "-10px";
            backArrowButton1.style.bottom = "-25px";
            backArrowButton2.style.bottom = "-40px";
        }
    }

    // Hover event handler for arrowButton mouse leave
    function onArrowButtonMouseLeave() {
        arrowButton.style.bottom = "-25px";
        backArrowButton1.style.bottom = "-25px";
        backArrowButton2.style.bottom = "-25px";
    }

    // Listen for scroll events
    window.addEventListener("scroll", () => {
        // Get the current scroll position
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Show or hide the arrow button and logo based on scroll position
        if (scrollPosition > 800) {
            console.log('toparrow visible');
            // Make the logo visible
            navLogo.style.opacity = "1";
            // Show the arrow button
            arrowButton.style.bottom = "-25px";
            backArrowButton1.style.bottom = "-25px";
            backArrowButton2.style.bottom = "-25px";
            // Add hover listeners to arrowButton
            addArrowButtonHoverListeners();
            if (window.innerWidth <= 1050) {
                // For screens with width less than or equal to 1050px
                arrowButton.style.bottom = "-15px";
                backArrowButton1.style.bottom = "-15px";
                backArrowButton2.style.bottom = "-15px";
            }
        } else {
            console.log('toparrow unvisible');
            // Hide the logo
            navLogo.style.opacity = "0";
            // Hide the arrow button
            arrowButton.style.bottom = "-500px";
            backArrowButton1.style.bottom = "-500px";
            backArrowButton2.style.bottom = "-500px";
            // Remove hover listeners from arrowButton
            removeArrowButtonHoverListeners();
        }
    });


    // Listen for click events on the arrow button
    arrowButton.addEventListener("click", (onclick) => {
        // Prevent default click behavior
        console.log('toparrow clicked');
        onclick.preventDefault();

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    ////////// RESPONSIVE NAVIGATION BAR BEHAVIOR \\\\\\\\\\

    // Select the dots menu icon
    const dotsMenu = document.querySelector("#dots_menu");
    // Select the navigation menu container
    const navMenuContainer = document.querySelector("#nav_menu");

    // Check if the dots menu icon and navigation menu container are loaded
    console.log("Dots Menu:", dotsMenu);
    console.log("Navigation Menu Container:", navMenuContainer);

    // Listen for click events on the dots menu
    dotsMenu.addEventListener("click", () => {
        // Toggle the "active" class of the dots menu icon
        dotsMenu.classList.toggle("active");
        // Toggle the "active" class of the navigation menu container
        navMenuContainer.classList.toggle("active");
        console.log("Dots Menu Toggled:", dotsMenu.classList.contains("active"));
        console.log("Navigation Menu Toggled:", navMenuContainer.classList.contains("active"));
    });

    // Select all navigation links
    const navLinks = document.querySelectorAll(".links");

    // Iterate over each navigation link to add an event listener
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Close the menu by removing the "active" class from the navigation menu container
            navMenuContainer.classList.remove("active");
            // Reset the dots menu icon to its initial state if necessary
            dotsMenu.classList.remove("active");
        });
    });

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            // Top of the element is above or at the top of the viewport
            rect.top >= 0 &&
            // Bottom of the element is below or at the bottom of the viewport
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            // Top of the element is inside the viewport
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Function to set active navigation links based on viewport position
    function setActiveNavLinks() {
        const sections = document.querySelectorAll('section');
        let activeNav = null;
        sections.forEach(section => {
            const navLinks = document.querySelectorAll('.nav_item .links');

            // Iterate over each navigation link to add an event listener
            navLinks.forEach(link => {
                link.addEventListener("click", () => {
                    // Close the menu by removing the "active" class from the navigation menu container
                    navMenuContainer.classList.remove("active");
                    // Reset the dots menu icon to its initial state if necessary
                    dotsMenu.classList.remove("active");
                });
            });
        });

        if (activeNav) { // If there is an active navigation link
            const navLinks = document.querySelectorAll('.links');
            navLinks.forEach(navLink => {
                // Remove 'active-before' class from all navigation links
                navLink.classList.remove('active-before');
            });
            // Add 'active-before' class to the active navigation link
            activeNav.classList.add('active-before');
        }

        // Find the next section that is not active or active-before and is in the viewport
        const nextSection = document.querySelector('section:not(.active):not(.active-before)');
        if (nextSection && isInViewport(nextSection)) {
            const nextNavLink = document.querySelector(`.links[href="#${nextSection.id}"]`);
            // Add 'active-before' class to the navigation link corresponding to the next section
            nextNavLink.classList.add('active-before');
        }
    }

    // Call setActiveNavLinks function when DOM content is loaded
    document.addEventListener('DOMContentLoaded', () => {
        setActiveNavLinks();
    });

    // Call setActiveNavLinks function when scrolling occurs
    window.addEventListener('scroll', () => {
        setActiveNavLinks();
    });

    // Audio and audio icons
    var audio = document.getElementById('background_music');
    var muteButton = document.getElementById('mute_button');
    var muteIcon = document.getElementById('mute_icon');

    muteButton.addEventListener('click', function () {
        if (audio.muted) {
            audio.muted = false;
            muteIcon.src = "./ressources/others/sound_on.png";
        } else {
            audio.muted = true;
            muteIcon.src = "./ressources/others/sound_off.png";
        }
    });


    /////SIZE EFFECT/////

    // Function to add active class to the current section
    function setActiveSection() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav_item a');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                navItems.forEach(item => {
                    if (item.getAttribute('href') === `#${id}`) {
                        item.parentElement.classList.add('active');
                    } else {
                        item.parentElement.classList.remove('active');
                    }
                });
            }
        });
    }

    // Add event listener for scrolling
    window.addEventListener('scroll', setActiveSection);

    // Initial call to set active section on page load
    setActiveSection();



    ///// ARROW EVENTS FOR CONTACT SECTION ///////

    // Selecting DOM elements
    const contactContainer = document.querySelector('.contact_container');
    const contactContainer2 = document.querySelector('.contact_container2');
    const leftArrow = document.querySelector('.leftarrow');
    const rightArrow = document.querySelector('.rightarrow');

    // Function to display section 2 and hide section 1
    function showSection2() {
        console.log("Click on rightarrow: display contact_container2 and leftarrow");
        contactContainer.style.transform = 'translateX(-200%)';
        rightArrow.classList.add('hidden');
        contactContainer2.style.transform = 'translateX(0)';
        leftArrow.classList.remove('hidden');
    }

    function showSection1() {
        console.log("Click on leftarrow: display contact_container and rightarrow");
        contactContainer.style.transform = 'translateX(0)';
        rightArrow.classList.remove('hidden');
        contactContainer2.style.transform = 'translateX(200%)';
        leftArrow.classList.add('hidden');
    }

    // Adding event listeners for left and right arrows
    rightArrow.addEventListener('click', showSection2);
    leftArrow.addEventListener('click', showSection1);

    ///// SLIDESHOW IN SLIDES SECTION /////

    const slidesContainer = document.querySelector('.slides_container');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentSlide = 0;

    document.querySelector('.next').addEventListener('click', function () {
        moveToNextSlide();
    });

    document.querySelector('.prev').addEventListener('click', function () {
        moveToPrevSlide();
    });

    function moveToNextSlide() {
        currentSlide = (currentSlide === totalSlides - 1) ? 0 : currentSlide + 1;
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        currentSlide = (currentSlide === 0) ? totalSlides - 1 : currentSlide - 1;
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const slideWidth = slides[0].clientWidth;
        slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    updateSlidePosition();
});
