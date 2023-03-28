import grow from "../data/growbags.json" assert {type : "json"}

let gallery = document.querySelector('#grow-grid')

grow.forEach(bag => {
    let col = document.createElement("div")
    col.className = 'col'
    let tile = document.createElement("div")
    tile.className = 'card'

    let title = document.createElement("h3")
    let img = document.createElement("img")

    title.textContent = bag.title
    title.classList.add(['card-title' ,'text-center', 'text-dark'])

    img.src = bag.path
    img.classList.add(['card-img-top', 'furniture-image', 'rounded','mx-auto' ,'d-block'])

        tile.appendChild(title)
        tile.appendChild(img)
        col.appendChild(tile)

        gallery.appendChild(col)


})