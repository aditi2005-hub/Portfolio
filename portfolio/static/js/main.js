const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

      if(navToggle){
        navToggle.addEventListener('click', () =>{
          navMenu.classList.add('show_menu')
        })
      }
      if(navClose){
        navClose.addEventListener('click', () =>{
          navMenu.classList.remove('show_menu')
        })
      }
      
      const navLink = document.querySelectorAll('nav__link')

function linkAction(){
    const navMenu = document.getElementById('.nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const skillsContent = document.getElementsByClassName('skills_content'),
skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
  let itemClass = this.parentNode.className

  for(i=0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills_content skills_close'
  }
  if(itemClass ==='skills_content skills_close'){
    this.parentNode.className = 'skills_content skills_open'
  }
}
skillsHeader.forEach((el) =>{
el.addEventListener('click', toggleSkills) 
})
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tab.forEach(tab =>{
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
  })
})

const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal_close')

      let modal = function(modalClick){
        modalViews[modalClick].classList.add('active_modal')
      }

      modalBtns.forEach((modalBtn, i) =>{
        modalBtn.addEventListener('click', () =>{
          modal(i)
        })
      })

      modalCloses.forEach((modalClose) =>{
        modalClose.addEventListener('click', () =>{
          modalViews.forEach((modalView) =>{
            modalView.classList.remove('active_modal')
          })
        })
      })
      let swiper = new Swiper('.portfolio_container', {
        cssMode: true,
        loop : true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable : true,
        },
        
      });

      /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




function scrollHeader(){  
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})