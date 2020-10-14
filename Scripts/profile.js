onload = () => {
  header_animation()
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