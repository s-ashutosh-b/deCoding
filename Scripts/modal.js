onload = () => {
  ClassicEditor
  .create(document.querySelector('#editor'))
  .catch(error => {
    console.error(error);
  });

  (() => {
    const modal = document.querySelector(`.modal`)
    const newArticle = document.querySelector(`.newArticle`)
    const closeButton = document.querySelector(`span.close`)
    newArticle.addEventListener(`click`, () => {
      modal.style.opacity = `1`
      modal.style.visibility = `visible`
      modal.style.pointerEvents = `all`
    })
    modal.addEventListener(`click`, (e) => {
      let targate = e.path[0]
      if (targate.classList.contains(`modal`)) {
        modal.style.opacity = `0`
        modal.style.visibility = `hidden`
        modal.style.pointerEvents = `none`
      }
    })
    closeButton.addEventListener(`click`, () => {
      modal.style.opacity = `0`
      modal.style.visibility = `hidden`
      modal.style.pointerEvents = `none`
    })
  })()
}