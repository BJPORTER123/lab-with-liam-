document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const allListItems = document.querySelectorAll('#reading-list')
  
  
  const book = document.querySelector('#new-item-form')
  book.addEventListener('submit',(evt) => {
    evt.preventDefault()
    const title = evt.target.title.value
    const author = evt.target.author.value
    const category = evt.target.category.value
    const readingList = document.querySelector('#reading-list')
    const newListItem = document.createElement('li')
    newListItem.textContent = `Title: ${title} Author: ${author} Category: ${category}`
    readingList.appendChild(newListItem)
    document.getElementById('new-item-form').reset()
  })

  const deleteAll = document.createElement('button')
  deleteAll.setAttribute('id', 'delete-btn')
  deleteAll.innerHTML = "Delete All Books"
  document.body.appendChild(deleteAll)
  deleteAll.addEventListener("click", () => {
    const deleteBut = document.querySelector('#reading-list')
    deleteBut.textContent = ' '
})



});

  


