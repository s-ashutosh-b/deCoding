onload = () => {
  header_animation()
  aside_expand_collapse()
  menu_button()
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
    if (window.innerWidth < 720){
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
    if (window.innerWidth < 720){
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