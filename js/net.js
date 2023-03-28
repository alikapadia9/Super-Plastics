import nets from "../data/nets.json" assert {type : "json"}

let gallery = document.querySelector("#net-grid")

nets.forEach(net => {

    let col = document.createElement('div')
    col.className = 'col'
    let tile = document.createElement('div')
    tile.className = 'card'

    let title = document.createElement('h3')
    title.textContent = net.title
    title.classList.add(['card-title' ,'text-center', 'text-dark'])

    let img = document.createElement('img')
    img.src = net.path
    img.classList.add(['card-img-top', 'furniture-image', 'rounded','mx-auto' ,'d-block'])

    tile.appendChild(title)
    tile.appendChild(img)
    col.appendChild(tile)

    gallery.appendChild(col)
    
});