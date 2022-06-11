const templates = document.querySelector(".template").content;
const list = document.querySelector(".cards-list");
const all = document.querySelector('.form-select')
const name = document.querySelector('.form-select')


const getDate = (date) => {
    const newDate = new Date(date)
    return `${newDate.getFullYear()}/${newDate.getMonth()}/${newDate.getDate()}`
}

const praduct = (product) => {
    const {title,img,price,model,addedDate,benefits} = product;
    console.log(title,img,price,model,addedDate,benefits);
    
    const abrazes = templates.cloneNode(true)

    abrazes.querySelector(".card-img-top").src = img
    abrazes.querySelector(".card-title").textContent = title
    abrazes.querySelector(".mark").textContent = price
    abrazes.querySelector(".price-sale").textContent = price / 100 * 50
    abrazes.querySelector(".model").textContent = model
    abrazes.querySelector(".data").textContent = getDate(addedDate)
    abrazes.querySelector(".benefits").textContent = benefits

    return abrazes
}
  for(i =0; i < products.length; i++){
    list.append(praduct(products[i]))
}
const select = document.querySelector('#product-manufacturerr')
const option = document.querySelector('.options')

for(let i = 0; i < manufacturers.length; i++) {
    const options = document.createElement('option')
    options.textContent = manufacturers[i].name
    options.value = manufacturers[i].name
    select.append(options)
}


const listPhone = document.querySelector('.telefon-list')
const form = document.querySelector(".formss")
const title = document.querySelector("#product-title")
const narxi = document.querySelector('#price')
const benif = document.querySelector('#benefits')
const btns = document.querySelector('.btn')


function even(event) {
    event.preventDefault()
    let newObj = {}
    newObj.title = title.value
    newObj.img =  "https://picsum.photos./300/200"
    newObj.price = narxi.value
    newObj.model = select.value
    newObj.addedDate = new Date()
    newObj.benefits = benif.value
    products.push(newObj)
    listPhone.append(praduct(newObj));
    form.reset() 
}

form.addEventListener("submit" , even)


