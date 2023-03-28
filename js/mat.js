import mats from '../data/mats.json' assert {type : 'json'}

let gallery = document.querySelector('#mat-grid')

mats.forEach(mat => {
    let col = document.createElement('div')
    col.className = 'col'
    let tile = document.createElement('div')
    tile.className = 'card'

    let title = document.createElement('h3')
    title.textContent = mat.title
    title.classList.add(['card-title' ,'text-center', 'text-dark'])

    let img = document.createElement('img')
    img.src = mat.path
    img.classList.add(['card-img-top', 'furniture-image', 'rounded','mx-auto' ,'d-block'])

    tile.appendChild(title)
    tile.appendChild(img)
    col.appendChild(tile)

    gallery.appendChild(col)

})