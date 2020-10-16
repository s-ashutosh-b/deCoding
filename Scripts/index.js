onload = () => {
  header_animation()
  aside_expand_collapse()
  menu_button()
  carousal_animation()
  console.log()
}

const header_animation = () => {
  let header = document.querySelector(`header`)
  let scroll_prev = 0
  let scroll_new = 0
  let header_sticky = false

  addEventListener(`scroll`, (e) => {
    scroll_prev = scroll_new
    scroll_new = e.path[1].window.scrollY

    scroll_prev > scroll_new ? (!header_sticky ? showHeader() : null) : (header_sticky ? hideHeader() : null)
    if (scroll_new == 0) {
      header.removeAttribute(`style`)
    }
  })
  function showHeader() {
    header_sticky = true
    header.style = `position: sticky; top: 0; box-shadow: 0 4px 4px rgba(0,0,0,0.25);`
  }
  function hideHeader() {
    header_sticky = false
    header.removeAttribute(`style`)
  }
}


const aside_expand_collapse = () => {
  const timeline_title = document.querySelector(`main aside.timeline span.timeline-title`)
  const blog_title = document.querySelector(`main aside.latest-blogs span.blog-title`)

  //marks
  const timeline_mark = document.querySelector(`main aside.timeline span.mark`)
  const blog_mark = document.querySelector(`main aside.latest-blogs span.mark`)

  //links
  const timeline_link = document.querySelectorAll(`main aside.timeline a`)
  const blog_link = document.querySelectorAll(`main aside.latest-blogs a`)

  timeline_title.addEventListener(`click`, () => {
    if (window.innerWidth < 720) {
      timeline_link.forEach(link => {
        link.classList.toggle(`visible`)
        if (link.classList.contains(`visible`)) {
          link.style.display = `block`
          link.style.height = `fit-content`
          timeline_mark.style = `transform: rotate(180deg)`
        } else {
          link.removeAttribute(`style`)
          timeline_mark.style = `transform: rotate(0deg)`
        }
      });
    }
  })
  blog_title.addEventListener(`click`, () => {
    if (window.innerWidth < 720) {
      blog_link.forEach(link => {
        link.classList.toggle(`visible`)
        if (link.classList.contains(`visible`)) {
          link.style.display = `block`
          link.style.height = `fit-content`
          blog_mark.style = `transform: rotate(180deg)`
        } else {
          link.removeAttribute(`style`)
          blog_mark.style = `transform: rotate(0deg)`
        }
      });
    }
  })
}

const menu_button = () => {
  const menubutton = document.querySelector(`header svg.menu-button`)
  const nav = document.querySelector(`nav`)
  menubutton.addEventListener(`click`, () => {
    if (nav.style.display == `flex`) {
      nav.style.display = `none`
    } else {
      nav.style.display = `flex`
    }
  })

}

const carousal_animation = () => {

  const CAROUSAL_SLIDES = document.querySelectorAll(`div.carousal div.carousal-slide`)
  const CAROUSAL_SLIDER = document.querySelector(`div.carousal div.slider`)

  // Creating Sliders
  for (let index = 0; index < CAROUSAL_SLIDES.length; index++) {
    CAROUSAL_SLIDER.innerHTML += `<span id="slider-${index}" class="slide-bar"></span>`
  }
  const CAROUSAL_SLIDERS = document.querySelectorAll(`div.carousal div.slider span.slide-bar`)
  const CAROUSAL_NAVS = document.querySelectorAll(`div.carousal div.carousal-nav-buttons`)

  let ACTIVE_SLIDE = 0
  let PREVIOUS_SLIDE = CAROUSAL_SLIDES.length - 1
  let NEXT_SLIDE = ACTIVE_SLIDE + 1

  let repeatTime = 5000

  // Live Slide props
  const Previous_slide = (slideNumber) => {
    CAROUSAL_SLIDES[slideNumber].style.display = `block`
    CAROUSAL_SLIDES[slideNumber].style.left = `-100%`
    CAROUSAL_SLIDERS[slideNumber].removeAttribute(`style`)
  }
  const Active_slide = (slideNumber) => {
    CAROUSAL_SLIDES[slideNumber].style.display = `block`
    CAROUSAL_SLIDES[slideNumber].style.left = `0`
    CAROUSAL_SLIDERS[slideNumber].style.background = `rgba(255,255,255,1)`
  }
  const Next_slide = (slideNumber) => {
    CAROUSAL_SLIDES[slideNumber].style.display = `block`
    CAROUSAL_SLIDES[slideNumber].style.left = `100%`
    CAROUSAL_SLIDERS[slideNumber].removeAttribute(`style`)
  }

  //Dead Slides Props
  const Rearrange_slides = (previous, active, next) => {
    for (let x = 0; x < CAROUSAL_SLIDES.length; x++) {
      if (!(x == previous || x == active || x == next)) {
        CAROUSAL_SLIDES[x].style.display = `none`
      }
    }
  }

  // Slide Calculater
  const Slide_calculator = (ActiveslideNumber, direction) => {
    if (direction == true) {
      if (ActiveslideNumber == 0) {
        PREVIOUS_SLIDE = ActiveslideNumber
        ACTIVE_SLIDE = NEXT_SLIDE
        NEXT_SLIDE = ACTIVE_SLIDE + 1
      } else if (ActiveslideNumber > 0 && (ActiveslideNumber < (CAROUSAL_SLIDES.length - 1))) {
        PREVIOUS_SLIDE = ACTIVE_SLIDE
        ACTIVE_SLIDE = NEXT_SLIDE
        ACTIVE_SLIDE == (CAROUSAL_SLIDES.length - 1) ? NEXT_SLIDE = 0 : NEXT_SLIDE = (ACTIVE_SLIDE + 1)
      } else if (ActiveslideNumber == (CAROUSAL_SLIDES.length - 1)) {
        PREVIOUS_SLIDE = ActiveslideNumber
        ACTIVE_SLIDE = 0
        NEXT_SLIDE = ACTIVE_SLIDE + 1
      }
    } else if (direction == false) {
      if (ActiveslideNumber == 0) {
        NEXT_SLIDE = ActiveslideNumber
        ACTIVE_SLIDE = PREVIOUS_SLIDE
        PREVIOUS_SLIDE = CAROUSAL_SLIDES.length - 2
      } else if (ActiveslideNumber > 0 && (ActiveslideNumber < (CAROUSAL_SLIDES.length - 1))) {
        NEXT_SLIDE = ACTIVE_SLIDE
        ACTIVE_SLIDE = PREVIOUS_SLIDE
        ACTIVE_SLIDE == 0 ? PREVIOUS_SLIDE = (CAROUSAL_SLIDES.length - 1) : PREVIOUS_SLIDE = (ACTIVE_SLIDE - 1)

      } else if (ActiveslideNumber == (CAROUSAL_SLIDES.length - 1)) {
        NEXT_SLIDE = ActiveslideNumber
        ACTIVE_SLIDE = PREVIOUS_SLIDE
        PREVIOUS_SLIDE = ACTIVE_SLIDE - 1
      }
    }
  }

  // Showing first slide
  Previous_slide(PREVIOUS_SLIDE)
  Active_slide(ACTIVE_SLIDE)
  Next_slide(NEXT_SLIDE)

  //automate slides
  //? how to debounce?
  const automate = (interval) => {
    setInterval(() => {
      Slide_calculator(ACTIVE_SLIDE, true)
      Previous_slide(PREVIOUS_SLIDE)
      Active_slide(ACTIVE_SLIDE)
      Next_slide(NEXT_SLIDE)
      Rearrange_slides(PREVIOUS_SLIDE, ACTIVE_SLIDE, NEXT_SLIDE)
    }, interval);
  }
  automate(repeatTime)

  // Next button events
  CAROUSAL_NAVS[0].addEventListener(`click`, () => {
    //! direction = true
    Slide_calculator(ACTIVE_SLIDE, true)
    Previous_slide(PREVIOUS_SLIDE)
    Active_slide(ACTIVE_SLIDE)
    Next_slide(NEXT_SLIDE)
    Rearrange_slides(PREVIOUS_SLIDE, ACTIVE_SLIDE, NEXT_SLIDE)
  })

  // Previous button events
  CAROUSAL_NAVS[1].addEventListener(`click`, () => {
    //! direction = true

    Slide_calculator(ACTIVE_SLIDE, false)
    Previous_slide(PREVIOUS_SLIDE)
    Active_slide(ACTIVE_SLIDE)
    Next_slide(NEXT_SLIDE)
    Rearrange_slides(PREVIOUS_SLIDE, ACTIVE_SLIDE, NEXT_SLIDE)
  })

  // Sliders event listener
  for (let index = 0; index < CAROUSAL_SLIDERS.length; index++) {
    const element = CAROUSAL_SLIDERS[index];
    element.addEventListener(`click`, () => {
      let difference = index - ACTIVE_SLIDE
      if (difference > 0) {
        for (let index = 0; index < difference; index++) {
          Slide_calculator(ACTIVE_SLIDE, true)
          Previous_slide(PREVIOUS_SLIDE)
          Active_slide(ACTIVE_SLIDE)
          Next_slide(NEXT_SLIDE)
          Rearrange_slides(PREVIOUS_SLIDE, ACTIVE_SLIDE, NEXT_SLIDE)
        }
      } else if (difference < 0) {
        difference = Math.abs(difference)
        console.log(difference)
        for (let index = 0; index < difference; index++) {
          Slide_calculator(ACTIVE_SLIDE, false)
          Previous_slide(PREVIOUS_SLIDE)
          Active_slide(ACTIVE_SLIDE)
          Next_slide(NEXT_SLIDE)
          Rearrange_slides(PREVIOUS_SLIDE, ACTIVE_SLIDE, NEXT_SLIDE)
        }
      }
    })
  }

  // Carousal touch event
  let touch_start_cord_x
  let touch_end_cord_x
  CAROUSAL_SLIDES.forEach(slide => {
    slide.addEventListener(`touchstart`, (e) => {
      touch_start_cord_x = e.touches[0].clientX
    })
    slide.addEventListener(`touchmove`, (e) => {
      touch_end_cord_x = e.touches[0].clientX
    })
    slide.addEventListener(`touchend`, () => {
      if ((touch_start_cord_x - touch_end_cord_x) > 50) {
        //! direction = true
        Slide_calculator(ACTIVE_SLIDE, true)
        Previous_slide(PREVIOUS_SLIDE)
        Active_slide(ACTIVE_SLIDE)
        Next_slide(NEXT_SLIDE)
        Rearrange_slides(PREVIOUS_SLIDE, ACTIVE_SLIDE, NEXT_SLIDE)
      } else if ((touch_end_cord_x - touch_start_cord_x) > 50) {
        //! direction = false
        Slide_calculator(ACTIVE_SLIDE, false)
        Previous_slide(PREVIOUS_SLIDE)
        Active_slide(ACTIVE_SLIDE)
        Next_slide(NEXT_SLIDE)
        Rearrange_slides(PREVIOUS_SLIDE, ACTIVE_SLIDE, NEXT_SLIDE)
      } else null
    })
  });
}