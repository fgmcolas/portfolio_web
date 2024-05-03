document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded');



    // Select the "DOWNLOAD" link
    const downloadLink = document.querySelector('.nav_item a[href="#game_section"]');
    // Add an event listener for click on the "DOWNLOAD" link
    downloadLink.addEventListener('click', function(event) {
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

    // Select the "Screenshots" link
    const screenshotsLink = document.querySelector('.nav_item a[href="#screenshots_section"]');
    // Add an event listener for click on the "Screenshots" link
    screenshotsLink.addEventListener('click', function(event) {
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

    // Select the "Holberton" link
    const holbertonLink = document.querySelector('.nav_item a[href="#holberton"]');
    // Add an event listener for click on the "Holberton" link
    holbertonLink.addEventListener('click', function(event) {
        console.log('#holberton_section clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #holberton)
        const targetElement = document.querySelector('#holberton');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });

    // Select the link within the game_section
    const gameLink = document.querySelector('#game_section a[href="#holberton"]');
    // Add an event listener for click on the link within game_section
    gameLink.addEventListener('click', function(event) {
        console.log('#game_section clicked');
        // Prevent the default behavior of the link (navigation to the anchor)
        event.preventDefault();
        // Select the target element you want to scroll to (here, #holberton)
        const targetElement = document.querySelector('#holberton');
        // Calculate the position of the target element relative to the top of the page
        const targetOffset = targetElement.offsetTop;
        // Perform smooth scrolling to the target element
        window.scrollTo({
            top: targetOffset,
            // Smooth animation
            behavior: 'smooth'
        });
    });



    //////////// LOGO AND ARROW BUTTON \\\\\\\\\\\\\



    // Select the nav logo
    const navLogo = document.querySelector(".nav_logo");
    // Select the arrow button
    const arrowButton = document.querySelector(".toparrow");
    // Listen for scroll events
    window.addEventListener("scroll", () => {
        console.log('.toparrow loaded');
        // Get the current scroll position
        let scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Show or hide the arrow button and logo based on scroll position
        if (scrollPosition > 400) {
            // Make the logo visible
            navLogo.style.opacity = "1";
            // Show the arrow button
            arrowButton.style.bottom = "25px";
        } else {
            // Hide the logo
            navLogo.style.opacity = "0";
            // Hide the arrow button
            arrowButton.style.bottom = "-150px";
        }
    });
    // Listen for click events on the arrow button
    arrowButton.addEventListener("click", (onclick) => {
        // Prevent default click behavior
        onclick.preventDefault();

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });



    /////////// SECTION SCREENSHOT \\\\\\\\\\\\\\



    // Select all the screenshot images within the screenshots container
    const screenshots = document.querySelectorAll(".screenshots_container .screenshot");
    console.log('Screenshots:', screenshots);

    // Loop through each screenshot image
    for (let screenshot of screenshots) {
        console.log('Adding event listener to:', screenshot);

        // Create a function to handle click events
        const handleClick = (screenshot) => {
            return () => {
                console.log('Clicked:', screenshot);
                // Toggle the "screenshot_overlay" class of the screenshot
                screenshot.classList.toggle("screenshot_overlay");
            };
        };

        // Add event listener for click event
        screenshot.addEventListener("click", handleClick(screenshot));
    }



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
            console.log("Navigation Menu Removed:", navMenuContainer.classList.contains("active"));
            console.log("Dots Menu Removed:", dotsMenu.classList.contains("active"));
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
                console.log("Navigation Menu Removed:", navMenuContainer.classList.contains("active"));
                console.log("Dots Menu Removed:", dotsMenu.classList.contains("active"));
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
            muteIcon.src = "./ressources/sound_on.png";
        } else {
            audio.muted = true;
            muteIcon.src = "./ressources/sound_off.png";
        }
    });
});
