onload = () => {
  create_modal()
  create_editor()
  editor_close()
  article_options()
}
const create_modal = () => {
  document.querySelector(`div.modal`).innerHTML = `
  <div class="modal-area editor">
    <span class="title">New Article</span>
    <span class="close">&#10005;</span>
    <div class="title article-field">
      <input type="text" id="title" required>
      <label for="title">
        <span>Title</span>
      </label>
    </div>
    <div class="subtitle article-field">
      <input type="text" id="subtitle" required>
      <label for="subtitle">
        <span>Subtitle</span>
      </label>
    </div>
    <div class="tags article-field">
      <input type="text" id="tags" required>
      <label for="tags">
        <span>Tags</span>
      </label>
    </div>
    <div id="editor"></div>
    <div class="buttons">
      <input type="button" value="Draft" id="draft-article">
      <input type="button" value="Publish" id="publish-article">
      <input type="button" value="Delete" id="delete-article">
    </div>
  </div>
  <div class="modal-area publish" style="display:none;">
  <div class="article">
    <h1 class="article-title"></h1>
    <h3 class="article-subtitle"></h6>
    <article class="article-content"> </article>
  </div>
  <div class="buttons">
    <input type="button" value="Draft" id="draft-article">
    <input type="button" value="Publish" id="publish-article">
    <input type="button" value="Delete" id="delete-article">
  </div>
</div>
  `
}


const create_editor = () => {
  ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
      console.error(error);
    });
}

const editor_close = () => {
  const modal = document.querySelector(`.modal`)
  const modal_area_editor = document.querySelector(`.modal-area.editor`)
  const modal_area_publish = document.querySelector(`.modal-area.publish`)
  const newArticle = document.querySelector(`.newArticle`)
  const closeButton = document.querySelector(`span.close`)
  newArticle.addEventListener(`click`, () => {
    modal.style.opacity = `1`
    modal.style.visibility = `visible`
    modal.style.pointerEvents = `all`

    modal_area_editor.style.display = `block`
    modal_area_editor.style.opacity = `1`
    modal_area_editor.style.visibility = `visible`
    modal_area_editor.style.pointerEvents = `all`

    modal_area_publish.style.display = `none`
    modal_area_publish.style.opacity = `0`
    modal_area_publish.style.visibility = `hidden`
    modal_area_publish.style.pointerEvents = `none`
  })
  modal.addEventListener(`click`, (e) => {
    let targate = e.path[0]
    if (targate.classList.contains(`modal`)) {
      modal_area_editor.style.opacity = `0`
      modal_area_editor.style.visibility = `hidden`
      modal_area_editor.style.pointerEvents = `none`

      modal_area_publish.style.opacity = `0`
      modal_area_publish.style.visibility = `hidden`
      modal_area_publish.style.pointerEvents = `none`
      setTimeout(() => {
        modal_area_editor.style.display = `none`
        modal_area_publish.style.display = `none`

        modal.style.opacity = `0`
        modal.style.visibility = `hidden`
        modal.style.pointerEvents = `none`
        setTimeout(() => {
          modal.style.display = `none`
        }, 1000);
      }, 1000);
    }
  })
  closeButton.addEventListener(`click`, () => {
    modal_area_editor.style.opacity = `0`
    modal_area_editor.style.visibility = `hidden`
    modal_area_editor.style.pointerEvents = `none`

    modal_area_publish.style.opacity = `0`
    modal_area_publish.style.visibility = `hidden`
    modal_area_publish.style.pointerEvents = `none`
    setTimeout(() => {
      modal_area_editor.style.display = `none`
      modal_area_publish.style.display = `none`

      modal.style.opacity = `0`
      modal.style.visibility = `hidden`
      modal.style.pointerEvents = `none`
      setTimeout(() => {
        modal.style.display = `none`
      }, 1000);
    }, 1000);
  })
}

const article_options = () => {
  const draft = document.querySelector(`div.modal div.modal-area div.buttons input#draft-article`)
  const publish = document.querySelector(`div.modal div.modal-area div.buttons input#publish-article`)
  const del = document.querySelector(`div.modal div.modal-area div.buttons input#delete-article`)

  const modal_area_editor = document.querySelector(`.modal-area.editor`)
  const modal_area_publish = document.querySelector(`.modal-area.publish`)

  const title = document.getElementById(`title`)
  const subtitle = document.getElementById(`subtitle`)
  const tags = document.getElementById(`tags`)

  draft.addEventListener(`click`, () => {
    //this button should save the article but not publish it
  })

  publish.addEventListener(`click`, () => {
    
    const title_value = title.value
    const subtitle_value = subtitle.value
    const tags_value = tags.value

    const content = document.querySelector(`div.modal div.modal-area div.ck-editor div.ck-editor__main div.ck-content`).innerHTML
    
    modal_area_publish.querySelector(`div.article h1`).innerHTML = title_value
    modal_area_publish.querySelector(`div.article h3`).innerHTML = subtitle_value
    modal_area_publish.querySelector(`div.article article`).innerHTML = content

    modal_area_editor.style.opacity = `0`
    modal_area_editor.style.visibility = `hidden`
    modal_area_editor.style.pointerEvents = `none`
    setTimeout(() => {
      modal_area_editor.style.display = `none`
      modal_area_publish.style.display = `block`

      modal_area_publish.style.opacity = `1`
      modal_area_publish.style.visibility = `visible`
      modal_area_publish.style.pointerEvents = `all`
    }, 1000);


  })

  del.addEventListener(`click`, () => {
    //this should delete the article
  })
}