let tabs = document.querySelector(".tabs")
let btns = document.querySelectorAll('.button')
let articles = document.querySelectorAll('.content')

tabs.addEventListener('click', (event) => {
   let id = event.target.dataset.id
   if (id) {
      btns.forEach((btn) => {
         btn.classList.remove('live')
      })
      event.target.classList.add('live')
      articles.forEach((article) => {
         article.classList.remove('live')
      })
      let ele = document.getElementById(id)
      ele.classList.add('live')
   }
})