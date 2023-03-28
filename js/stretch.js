import stretch from "../data/stretchfilms.json" assert {type : "json"}

let gallery = document.querySelector('#str-grid')

stretch.forEach(strflm => {
    let col = document.createElement("div")
    col.className = 'col'
    let tile = document.createElement("div")
    tile.className = 'card'

    let title = document.createElement("h3")
    let img = document.createElement("img")

    title.textContent = strflm.title
    title.classList.add(['card-title' ,'text-center', 'text-dark'])

    img.src = strflm.path
    img.classList.add(['card-img-top', 'furniture-image', 'rounded','mx-auto' ,'d-block'])

        tile.appendChild(title)
        tile.appendChild(img)
        col.appendChild(tile)

        gallery.appendChild(col)


})