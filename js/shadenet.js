import shadenets from "../data/shadenets.json" assert {type : "json"}


let gallery = document.querySelector('#shade-grid')

shadenets.forEach(shadenet => {
    let col = document.createElement("div")
    col.className = 'col'
    let tile = document.createElement("div")
    tile.className = 'card'

    let title = document.createElement("h3")
    let img = document.createElement("img")
    let description = document.createElement("h4")

    title.textContent = shadenet.title
    title.className = 'card-title text-center text-dark'
    // title.classList.add(['card-title' ,'text-center', 'text-dark'])

    img.src = shadenet.path
    img.classList.add(['card-img-top', 'furniture-image', 'rounded','mx-auto' ,'d-block'])

    description.textContent = shadenet.description
    description.classList.add(['card-title' ,'text-center', 'text-dark'])

        tile.appendChild(title)
        tile.appendChild(img)
        tile.appendChild(description)
        col.appendChild(tile)

        gallery.appendChild(col)


})