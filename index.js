

let data = []
let main = document.getElementById("main")
let tbody = document.getElementById("tbody")


data = JSON.parse(localStorage.getItem("data")) || []
window.onload = addProductToList(data)
window.onload =  addProduct()


function addProduct(){


    main.innerHTML = `
            <form class="row g-3 fw-bolder" id="form">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Product Name</label>
              <input type="text" class="form-control" id="id" hidden>
              <input type="text" class="form-control" id="pname" required>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Price</label>
              <input type="number" class="form-control" id="pprice" required>
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Address</label>
              <input type="text" class="form-control" required id="paddress" placeholder="1234 Main St">
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label">Product Image</label>
              <input type="text" class="form-control" id="pimage" required placeholder="Enter URL">
            </div>
            <div class="col-md-6">
              <label for="inputCity" class="form-label">Condition</label>
              <input type="text" class="form-control" id="pcondition" required>
            </div>
            <div class="col-md-4">
              <label for="category" class="form-label">Category</label>
              <select id="category" class="form-select" required>
                <option selected>Choose...</option>
                <option>Books</option>
                <option>Electronics</option>
                <option>Cloths</option>
                <option>Travel</option>
                <option>Beauty Products</option>
            
              </select>
            </div>
   
   
            <div class="col-12">
              <button type="submit" id="submit" class="btn btn-primary">Add product</button>
            </div>
          </form>
    `
}




document.getElementById("form").addEventListener("submit",function(e){

    e.preventDefault();
    let id = document.getElementById("id").value
    let pname = document.getElementById("pname").value
    let pprice = document.getElementById("pprice").value
    let paddress = document.getElementById("paddress").value
    let pimage = document.getElementById("pimage").value
    let pcondition = document.getElementById("pcondition").value
    let category = document.getElementById("category").value




if(id){

    let updateData = data.map((ele) => {
        if(ele.id == id){
      
        ele.pname   =  document.getElementById("pname").value
          ele.pprice  =document.getElementById("pprice").value 
        ele.paddress   = document.getElementById("paddress").value 
          ele.pimage = document.getElementById("pimage").value 
   ele.pcondition        = document.getElementById("pcondition").value 
       ele.category    = document.getElementById("category").value 

            document.getElementById("submit").innerHTML = "Enter Task"
            document.getElementById("submit").style.background = "#380E60"
          

        }
        return ele
    })

    localStorage.setItem("data",JSON.stringify(updateData))
    data = JSON.parse(localStorage.getItem("data"))
    addProductToList(data)
    
}
else{
    
    let num = Math.random()
    let obj = {
        "id":Math.round(num*1000),
        "pname":pname,
        "pprice":pprice,
        "paddress":paddress,
        "pimage":pimage,
        "pcondition":pcondition,
        "pnamcategorye":category,
    }

    data.push(obj)

    localStorage.setItem("data",JSON.stringify(data))
    data = JSON.parse(localStorage.getItem(data))
    addProductToList(data)

}
        document.getElementById("id").value  =""
    document.getElementById("pname").value =""
    document.getElementById("pprice").value =""
    document.getElementById("paddress").value =""
        document.getElementById("pimage").value =""
    document.getElementById("pcondition").value =""
    document.getElementById("category").value =""
}) 

function deleteProduct(id){
    let deleData = data.filter((ele) => ele.id != id)
    localStorage.setItem("data",JSON.stringify(deleData))
    data = JSON.parse(localStorage.getItem("data"))
    
    addProductToList(data)
}


function editProduct(id){
    let updateData = data.filter((ele) =>{
        if(ele.id == id){

            document.getElementById("id").value  =ele.id
            document.getElementById("pname").value = ele.pname
            document.getElementById("pprice").value =ele.pprice
            document.getElementById("paddress").value = ele.paddress
            document.getElementById("pimage").value = ele.pimage
            document.getElementById("pcondition").value = ele.pcondition
            document.getElementById("category").value = ele.category
        }
    })

        document.getElementById("submit").innerHTML = "update"
    document.getElementById("submit").style.background = "#FFC107"
}

function addProductToList(data){

    tbody.innerHTML=""
    data.map((ele)=>{

        tbody.innerHTML += `
   
          <div class="col-3 my-3" >

<div class="brutalist-card">
  <div class="brutalist-card__header">

    <div class="brutalist-card__alert">${ele.pname}</div>
  </div>
  <div class="brutalist-card__message ratio ratio-1x1">
        <img src="${ele.pimage}" class="img-fluid">
  </div>
  <div class="brutalist-card__message">
        <h5>Price: ${ele.pprice}</h5>
        <h5>Price: ${ele.pnamcategorye}</h5>
  </div>
  <div class="brutalist-card__actions">
    <a class="brutalist-card__button brutalist-card__button--mark" href="#"
      onclick="editProduct(${ele.id})">Edit</a
    >
    <a class="brutalist-card__button brutalist-card__button--read" onclick="deleteProduct(${ele.id})" href="#"
      >delete</a
    >
  </div>
</div>

</div>
   
 

        `
    })



}

    // location.reload()