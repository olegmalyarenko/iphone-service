const menuBtn = document.querySelector('#menuBtn');
const menuContainer = document.getElementById('menuContainer');
const header = document.querySelector('.header');
const welcome = document.querySelector('.welcome__title');

const menuIconClosed = 'menu-icon visible';
const menuIconOpen = 'menu-icon hidden';
const menuContClosed = 'menu-container hidden';
const menuContOpen = 'menu-container visible';
const menuExit = document.getElementById('closeBtn');

menuBtn.addEventListener('click', function() {
  console.log('one');
  menuBtn.classList = menuIconOpen;
  menuContainer.classList = menuContOpen;
  menuExit.classList = menuIconClosed;
  header.style.height = '170px';
  header.style.alignItems = 'start';
  
});

menuExit.addEventListener('click', () => {
  menuBtn.className = menuIconClosed;
  menuContainer.className = menuContClosed;
  menuExit.classList = menuIconOpen;
  header.style.height = '40px';
  header.style.alignItems = 'center';
});