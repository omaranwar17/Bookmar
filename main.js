var inputName = document.getElementById('addInputName');
var inputUrl = document.getElementById('addInputUrl');
var inputSearch = document.getElementById("searchInput")
var addInput = document.getElementById("addName")
var apdInput = document.getElementById("apdName")
var index = 0;


var x = [];

if(localStorage.getItem("localInput")  !== null ){

    x = JSON.parse( localStorage.getItem("localInput") );
    
display()
}



function addBtn(){
    if(validationUrl() == true){
        var inputs = {
            name: inputName.value,
            url: inputUrl.value,
        }
        x.push(inputs);
        
        
        localStorage.setItem("localInput" , JSON.stringify(x))
        
        display()
        clear()

    }
}




function clear(){
    inputName.value = null
inputUrl.value = null
}

function deleteInput(indexItem){
    x.splice(indexItem , 1)
    console.log(x)
    display()
    localStorage.setItem("localInput" , JSON.stringify(x))

}
function display(){
var term = inputSearch.value;
var cartona = "";
for(var i =0; i < x.length; i++){
    if(x[i].name.toLowerCase().startsWith(term.toLowerCase()) == true){
        cartona += ` <tr>
        <td>${x[i].name}</td>
        <td>${x[i].url}</td>
        <td>
            <button onclick="Update(${i})" class="btn btn-success">Update</button>
        </td>
        <td><button onclick="deleteInput(${i})" class="btn btn-warning">delete</button></td>
    </tr>
     
        `

    }
    


}
document.getElementById("omar").innerHTML = cartona;

}
function validationName(){
   var text = inputName.value;// i
   var regex = /^[A-Z][a-z]{3,8}$/;

   if(regex.test(text) == true){
    inputName.classList.add("is-valid")
    inputName.classList.remove("is-invalid")

   }
   else{
 inputName.classList.add("is-invalid")
 inputName.classList.remove("is-valid")

   }
}

function validationUrl(){
    var text = inputUrl.value;// i
    var regex = /^[A-Z][a-z]{3,8}[1-9]{2,6}@.com$/;


    var msInputUrl = document.getElementById("msInput")
 
    if(regex.test(text) == true){
     inputUrl.classList.add("is-valid")
     inputUrl.classList.remove("is-invalid")
     msInputUrl.classList.add("d-none")
     return true;
 
    }
    else{
  inputUrl.classList.add("is-invalid")
  inputUrl.classList.remove("is-valid")
  msInputUrl.classList.remove("d-none")
 return false;
    }

}
function Update(indexInput){
   inputName.value = x[indexInput].name;
   inputUrl.value = x[indexInput].url;

   addInput.classList.add("d-none");
   apdInput.classList.remove("d-none");
   index = indexInput

}
function updateInput(){
    var inputs = {
        name: inputName.value,
        url: inputUrl.value,
    }
    x.splice(  index , 1  , inputs )
    display()
    clear()
    localStorage.setItem("localInput" , JSON.stringify(x))
    addInput.classList.remove("d-none");
    apdInput.classList.add("d-none");
}

