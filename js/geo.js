import go from "../data/geonets.json" assert {type : "json"}

let gallery = document.querySelector('#geonet-grid')

go.forEach(geo => {
    let col = document.createElement("div")
    col.className = 'col'
    let tile = document.createElement("div")
    tile.className = 'card'

    let title = document.createElement("h3")
    let img = document.createElement("img")

    title.textContent = geo.title
    title.classList.add(['card-title' ,'text-center', 'text-dark'])

    img.src = geo.path
    img.classList.add(['card-img-top', 'furniture-image', 'rounded','mx-auto' ,'d-block'])

        tile.appendChild(title)
        tile.appendChild(img)
        col.appendChild(tile)

        gallery.appendChild(col)


})