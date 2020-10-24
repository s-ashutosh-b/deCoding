onload = () => {
  header_animation()
  login_signup_switch()
  form_validation()
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
const login_signup_switch = () => {
  const nav_btns = document.querySelectorAll(`span.heading`)
  const forms = document.querySelectorAll(`form`)
  let activ_tab
  let inactiv_tab
  nav_btns.forEach(nav => {
    nav.addEventListener(`click`, () => {
      if (nav.classList.contains(`active`)) {
        null
      } else if (!nav.classList.contains(`active`)) {
        if (nav.classList.contains(`login`)) {
          nav_btns[0].classList.remove(`active`)
          nav_btns[1].classList.remove(`active`)
          nav.classList.add(`active`)
          forms[0].style.display = `block`
          forms[1].style.display = `none`
        } else null

        if (nav.classList.contains(`signup`)) {
          nav_btns[1].classList.remove(`active`)
          nav_btns[0].classList.remove(`active`)
          nav.classList.add(`active`)
          forms[1].style.display = `block`
          forms[0].style.display = `none`
        } else null
      }
    })

  })
}

const form_validation = () => {
  //confirm password check
  const password = document.getElementById(`signup_password`)
  const password_confirm = document.getElementById(`signup_password_confirm`)
  const password_confirm_label = password_confirm.parentNode.children[1].children[0]
  console.log(password_confirm_label.style)

  password_confirm.addEventListener(`keyup`, () => {
    if (password_confirm.value === password.value) {
      password_confirm_label.style.color = `limegreen`
    } else {
      password_confirm_label.style.color = `red`

    }
  })
}