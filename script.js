// console.log('bde')
// let heading = document.querySelector('h2')
// console.log(heading.textContent)
// heading.textContent = 'plastics';

let gallery = document.querySelector('#gallery')

products.forEach(product => {
    let tile = document.createElement('div')
    tile.className= 'tile'
    let title = document.createElement('span')
    let description = document.createElement('span')
    let img = document.createElement('img')
    let imgwrp = document.createElement('div')
    imgwrp.className= 'img-wrapper'
    title.textContent = product.title;
    title.className = 'tittle'
    description.textContent = product.description
    description.className = 'description'

    img.src = product.path;
    img.className = 'img'
    tile.appendChild(title)
    imgwrp.appendChild(img)
    tile.appendChild(imgwrp)
    tile.appendChild(description)
    gallery.appendChild(tile)
})



// let tile2 = document.createElement('div')
// console.log(tile2)
// let title2 = document.createElement('span')
// let description2 = document.createElement('span')
// let img2 = document.createElement('img')
// title2.textContent = 'Coffee Table'
// title2.className= 'tittle'
// description2.textContent = 'Comfortable for 4 person'
// description2.className = 'description'

// img2.src="https://m.media-amazon.com/images/I/61iBlyJ-1uL._SX522_.jpg"
//  img2.className = 'img'
// // img.src="https://m.media-amazon.com/images/I/61iBlyJ-1uL._SX522_.jpg"
// tile2.appendChild(title2)
// tile2.appendChild(img2)
// tile2.appendChild(description2)
// console.log(tile2)
// gallery.appendChild(tile2)




// let tile3 = document.createElement('div')
// let img3 = document.createElement('img')
// img3.src='https://rukminim1.flixcart.com/image/416/416/xif0q/outdoor-chair/k/d/y/10-1-pvc-polyvinyl-chloride-12-400-265132-dahuja-18-brown-original-imagge6ww6czfbza.jpeg?q=70'
// img3.className = 'img'
// tile3.appendChild(title2)
// tile3.appendChild(img3)
// tile3.appendChild(description2)
// gallery.appendChild(tile3)
