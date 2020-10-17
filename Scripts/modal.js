onload = () => {
  create_modal()
  create_editor()
  new_article()
  editor_close()
  article_options()
}
const create_modal = () => {
  document.querySelector(`div.modal`).innerHTML = `
  <div class="modal-area editor">
    <span class="title">New Article</span>
    <span class="close">&#10005;
      <span class="tooltiptext">Draft</span>
    </span>
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
      <input type="button" value="Draft" id="draft-editor">
      <input type="button" value="Publish" id="publish-editor">
      <input type="button" value="Delete" id="delete-editor">
    </div>
  </div>
  <div class="modal-area publish">
  <span class="title">Publish</span>
  <span class="close">&#10005;
    <span class="tooltiptext">Draft</span>
  </span>
  <div class="article">
    <h1 class="article-title"></h1>
    <h3 class="article-subtitle"></h6>
    <article class="article-content"> </article>
  </div>
  <div class="buttons">
    <input type="button" value="Draft" id="draft-publish">
    <input type="button" value="Publish" id="publish-publish">
    <input type="button" value="Delete" id="delete-publish">
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

const new_article = () => {
  const new_article_btn = document.querySelector(`a.newArticle`)
  const modal = document.querySelector(`div.modal`)
  const modal_editor = document.querySelector(`div.editor`)
  const modal_publish = document.querySelector(`div.publish`)

  new_article_btn.addEventListener(`click`, () => {
    modal.style.visibility = `visible`
    modal.style.opacity = `1`
    modal.style.pointerEvents = `all`

    modal_publish.style.visibility = `hidden`
    modal_publish.style.opacity = `0`
    modal_publish.style.pointerEvents = `none`

    setTimeout(() => {
      modal_editor.style.visibility = `visible`
      modal_editor.style.opacity = `1`
      modal_editor.style.pointerEvents = `all`
    }, 250);
  })
}

const editor_close = () => {
  const modal = document.querySelector(`div.modal`)
  const modal_editor = document.querySelector(`div.editor`)
  const modal_publish = document.querySelector(`div.publish`)
  const editor_close_btn = modal_editor.querySelector(`span.close`)
  const publish_close_btn = modal_publish.querySelector(`span.close`)

  modal.addEventListener(`click`, (e) => {
    if (e.path[0].classList.contains(`modal`)) {
      modal_editor.style.visibility = `hidden`
      modal_editor.style.opacity = `0`
      modal_editor.style.pointerEvents = `none`

      setTimeout(() => {
        modal.style.visibility = `hidden`
        modal.style.opacity = `0`
        modal.style.pointerEvents = `none`
      }, 250);
    } else null

  })

  editor_close_btn.addEventListener(`click`, () => {
    modal_editor.style.visibility = `hidden`
    modal_editor.style.opacity = `0`
    modal_editor.style.pointerEvents = `none`

    modal_publish.style.visibility = `hidden`
    modal_publish.style.opacity = `0`
    modal_publish.style.pointerEvents = `none`

    setTimeout(() => {
      modal.style.visibility = `hidden`
      modal.style.opacity = `0`
      modal.style.pointerEvents = `none`
    }, 250);
  })

  publish_close_btn.addEventListener(`click`, () => {
    modal_editor.style.visibility = `hidden`
    modal_editor.style.opacity = `0`
    modal_editor.style.pointerEvents = `none`

    modal_publish.style.visibility = `hidden`
    modal_publish.style.opacity = `0`
    modal_publish.style.pointerEvents = `none`

    setTimeout(() => {
      modal.style.visibility = `hidden`
      modal.style.opacity = `0`
      modal.style.pointerEvents = `none`
    }, 250);
  })
}

const article_options = () => {
  const modal = document.querySelector(`div.modal`)

  const modal_editor = document.querySelector(`div.editor`)
  const modal_publish = document.querySelector(`div.publish`)

  const draft_editor = document.getElementById(`draft-editor`)
  const publish_editor = document.getElementById(`publish-editor`)
  const del_art_editor = document.getElementById(`delete-editor`)

  const draft_publish = document.getElementById(`draft-publish`)
  const publish_publish = document.getElementById(`publish-publish`)
  const del_art_publish = document.getElementById(`delete-publish`)

  draft_editor.addEventListener(`click`, () => {
    //this should save the article as draft
    modal_editor.style.visibility = `hidden`
    modal_editor.style.opacity = `0`
    modal_editor.style.pointerEvents = `none`

    modal_publish.style.visibility = `hidden`
    modal_publish.style.opacity = `0`
    modal_publish.style.pointerEvents = `none`

    setTimeout(() => {
      modal.style.visibility = `hidden`
      modal.style.opacity = `0`
      modal.style.pointerEvents = `none`
    }, 250);
  })

  publish_editor.addEventListener(`click`, () => {
    const title = document.getElementById(`title`)
    const subtitle = document.getElementById(`subtitle`)
    const tags = document.getElementById(`tags`)
    const content = document.querySelector(`div.modal div.modal-area div.ck-editor div.ck-editor__main div.ck-content`)

    const title_value = title.value
    const subtitle_value = subtitle.value
    const tags_value = tags.value
    const content_value = content.innerHTML

    modal_publish.querySelector(`div.article h1`).innerHTML = title_value
    modal_publish.querySelector(`div.article h3`).innerHTML = subtitle_value
    modal_publish.querySelector(`div.article article`).innerHTML = `<div>${content_value}</div>`

    modal_editor.style.visibility = `hidden`
    modal_editor.style.opacity = `0`
    modal_editor.style.pointerEvents = `none`

    setTimeout(() => {
      modal_publish.style.visibility = `visible`
      modal_publish.style.opacity = `1`
      modal_publish.style.pointerEvents = `all`
    }, 250);
  })

  del_art_editor.addEventListener(`click`, () => {
    //this should delete the article
    modal_editor.style.visibility = `hidden`
    modal_editor.style.opacity = `0`
    modal_editor.style.pointerEvents = `none`

    modal_publish.style.visibility = `hidden`
    modal_publish.style.opacity = `0`
    modal_publish.style.pointerEvents = `none`

    setTimeout(() => {
      modal.style.visibility = `hidden`
      modal.style.opacity = `0`
      modal.style.pointerEvents = `none`
    }, 250);
  })

  draft_publish.addEventListener(`click`, () => {
    //this should save the article as draft
    modal_editor.style.visibility = `hidden`
    modal_editor.style.opacity = `0`
    modal_editor.style.pointerEvents = `none`

    modal_publish.style.visibility = `hidden`
    modal_publish.style.opacity = `0`
    modal_publish.style.pointerEvents = `none`

    setTimeout(() => {
      modal.style.visibility = `hidden`
      modal.style.opacity = `0`
      modal.style.pointerEvents = `none`
    }, 250);
  })

  publish_publish.addEventListener(`click`, () => {
    //this should save the article as draft
    modal_editor.style.visibility = `hidden`
    modal_editor.style.opacity = `0`
    modal_editor.style.pointerEvents = `none`

    modal_publish.style.visibility = `hidden`
    modal_publish.style.opacity = `0`
    modal_publish.style.pointerEvents = `none`

    setTimeout(() => {
      modal.style.visibility = `hidden`
      modal.style.opacity = `0`
      modal.style.pointerEvents = `none`
    }, 250);
  })

  del_art_publish.addEventListener(`click`, () => {
    //this should save the article as draft
    modal_editor.style.visibility = `hidden`
    modal_editor.style.opacity = `0`
    modal_editor.style.pointerEvents = `none`

    modal_publish.style.visibility = `hidden`
    modal_publish.style.opacity = `0`
    modal_publish.style.pointerEvents = `none`

    setTimeout(() => {
      modal.style.visibility = `hidden`
      modal.style.opacity = `0`
      modal.style.pointerEvents = `none`
    }, 250);
  })
}