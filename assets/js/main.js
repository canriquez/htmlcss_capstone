$(document).ready(function () {

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log('window load, vh is currently: ', vh);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        let iw = window.innerWidth;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        console.log('Screen resize, width is currently: ', iw);
        if (iw >= 768) {
            var myElementShow = document.getElementById("main-user-page");
            var myElementHyde = document.getElementById("main-super-page");
            var myElementHyde2 = document.getElementById("main-message-page");
            var myElementHyde3 = document.getElementById("main-chat-page");
            myElementHyde.style.display = "";
            myElementShow.style.display = "";
            myElementHyde2.style.display = "";
            myElementHyde3.style.display = "";

            const element = document.querySelector("#general-layout");
            element.classList.remove("layout-user-page");
            element.classList.remove("layout-message-page");
            console.log('removed user an message classes')
        }
        /* ONLY FOR TESTS - code below
        Makes sure that we eliminate the meesage-layout / user-layout 
        if we are resizing from pc to mobile after tested pc message 
        to user layout and back */

        if (iw < 768) {
            const element = document.querySelector("#general-layout");
            if (element.classList.contains("layout-user-page")) {
                console.log('yes, user-layout class exists')
                element.classList.remove("layout-user-page");
                var myElementHyde = document.getElementById("main-user-page");
                myElementHyde.style.display = "none";
            }
            if (element.classList.contains("layout-message-page")) {
                console.log('yes, message-layout class exists')
                element.classList.remove("layout-message-page");
                var myElementHyde = document.getElementById("main-chat-page");
                myElementHyde.style.display = "none";
            }
        }

    });

    $('.learn-more').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -learn-more- class");
        var myElementShow = document.getElementById("main-user-page");
        var myElementHyde = document.getElementById("main-super-page");
        myElementHyde.style.display = "none";
        myElementShow.style.display = "flex";

    });

    $('.link-back-arrow').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -arrow-back- class");
        var myElementShow = document.getElementById("main-user-page");
        var myElementHyde = document.getElementById("main-super-page");
        myElementHyde.style.display = "flex";
        myElementShow.style.display = "none";
    });

    $('.back-from-user-page').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -arrow-back- class");
        var myElementShow = document.getElementById("main-user-page");
        var myElementHyde = document.getElementById("main-super-page");
        myElementHyde.style.display = "flex";
        myElementShow.style.display = "none";
    });

    $('.link-to-main-messages').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -main-messages link- class");
        var myElementShow = document.getElementById("main-super-page");
        var myElementHyde = document.getElementById("main-message-page");
        myElementHyde.style.display = "block";
        myElementShow.style.display = "none";
    });

    $('.back-to-main-page').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -main-messages link- class");
        var myElementShow = document.getElementById("main-super-page");
        var myElementHyde = document.getElementById("main-message-page");
        myElementHyde.style.display = "none";
        myElementShow.style.display = "flex";
    });

    $('.link-to-detail-chat').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -link-to-detail-chat- class");
        var myElementShow = document.getElementById("main-message-page");
        var myElementHyde = document.getElementById("main-chat-page");
        myElementHyde.style.display = "block";
        myElementShow.style.display = "none";
    });

    $('.first-chat-link').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -link-to-detail-chat- class");
        var myElementShow = document.getElementById("main-message-page");
        var myElementHyde = document.getElementById("main-chat-page");
        myElementHyde.style.display = "block";
        myElementShow.style.display = "none";
    });

    $('.fnc-back').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -link-to-detail-chat- class");
        var myElementShow = document.getElementById("main-chat-page");
        var myElementHyde = document.getElementById("main-message-page");
        myElementHyde.style.display = "block";
        myElementShow.style.display = "none";
    });

    $('.link-user-layout').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -link-user-layout- class");

        const element = document.querySelector("#general-layout");
        element.classList.add("layout-user-page");
        element.classList.remove("layout-message-page");

        var myElementShow1 = document.getElementById("main-super-page");
        var myElementShow2 = document.getElementById("main-user-page");

        var myElementHyde1 = document.getElementById("main-message-page");
        var myElementHyde2 = document.getElementById("main-chat-page");

        myElementHyde1.style.display = "none";
        myElementHyde2.style.display = "none";
        myElementShow1.style.display = "flex";
        myElementShow2.style.display = "flex";
    });

    $('.link-to-message-layout').click(function (event) {
        // Don't follow the link
        event.preventDefault();
        // Log the clicked element in the console
        console.log("You clicked -link-to-message-layout- class");

        const element = document.querySelector("#general-layout");
        element.classList.add("layout-message-page");
        element.classList.remove("layout-user-page");


        var myElementShow1 = document.getElementById("main-message-page");
        var myElementShow2 = document.getElementById("main-chat-page");

        var myElementHyde1 = document.getElementById("main-super-page");
        var myElementHyde2 = document.getElementById("main-user-page");

        myElementHyde1.style.display = "none";
        myElementHyde2.style.display = "none";
        myElementShow1.style.display = "block";
        myElementShow2.style.display = "block";
    });

});