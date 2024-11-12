// function darkmode() {
//         document.getElementById('themeStyle').setAttribute('href', 'dark.css');
//         document.getElementById('toggle').className='fa-solid fa-toggle-off toggleon';
//         document.getElementById('shapeTop').src='../assets/img/shape-top-black-80.png'; 
//         document.getElementById('logoBottom').src='../assets/img/shape-top-dark-grey-80.png'; 
//         document.getElementById('bottomGrey').src='../assets/img/shape-top-dark-grey-80.png';
// }
// function lightmode() {
//         document.getElementById('themeStyle').setAttribute('href', 'light.css');
//         document.getElementById('toggle').className='fa-solid fa-toggle-on toggleon';
//         document.getElementById('shapeTop').src='../assets/img/shape-top-white-80.png';
//         document.getElementById('logoBottom').src='../assets/img/shape-top-grey-80.png'; 
//         document.getElementById('bottomGrey').src='../assets/img/shape-top-grey-80.png';
// }          


//Dark Mode

function togglemode() {
        const themeLink = document.getElementById('themeStyle');
        const toggleIcon = document.getElementById('toggle');
        const shapeTop = document.getElementById('shapeTop');
        const logoBottom = document.getElementById('logoBottom');
        const bottomGrey = document.getElementById('bottomGrey');
        //         const themeLink = document.getElementById('themeStyle');
        // 


if (themeStyle.getAttribute('href') === 'light.css') {
        themeLink.setAttribute('href', 'dark.css');
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        shapeTop.src = '../assets/img/shape-top-black-80.png';
        logoBottom.src = '../assets/img/shape-bottom-black-80.png';
        bottomGrey.src = '../assets/img/shape-top-dark-grey-80.png';
}

else {
        themeStyle.setAttribute('href', 'light.css');
        toggleIcon.className = 'fa-solid fa-toggle-on toggleon';
        shapeTop.src = '../assets/img/shape-top-white-80.png';
        logoBottom.src = '../assets/img/shape-bottom-white-80.png';
        bottomGrey.src = '../assets/img/shape-top-grey-80.png';
}
}
   
//     function openmenu() {
//         const menu = document.getElementById('sidemenu');
//         menu.classList.add('active'); // Show the menu
//     }
    
//     function closemenu() {
//         const menu = document.getElementById('sidemenu');
//         menu.classList.remove('active'); // Hide the menu
//     }
    
