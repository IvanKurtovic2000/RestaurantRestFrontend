



//showallproducts
function GetAllProducts() {
var url  = "http://localhost:8080/RestaurantRestBackend/rest/product/showallproducts";
var xhr  = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onload = function () {
	var showallproducts = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
        document.getElementById("demo").innerHTML = this.responseText;
        console.table(showallproducts);
	} else {
		console.error(showallproducts);
	}
}
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(null);

}

// Get a Product by Id
function GetProductById(){
var url  = "http://localhost:8080/RestaurantRestBackend/rest/product/getproduct";
var xhr  = new XMLHttpRequest()
//Get Product with the id 
var id = document.getElementById("getid").value;
xhr.open('GET', url+'?id='+id, true)
xhr.onload = function () {
	var getproduct = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		document.getElementById("output").innerHTML = this.responseText;
    console.table(getproduct);
	} else {
		console.error(getproduct);
	}
}
xhr.send(null);
}



// Post a product
function AddProduct(){
var url = "http://localhost:8080/RestaurantRestBackend/rest/product/addproduct";

 var data = {};
 
 data.name = document.getElementById("name").value;
 data.description  = document.getElementById("description").value;
 data.price =  document.getElementById("price").value;

 var sel = document.getElementById("dropdown");
 var text= sel.options[sel.selectedIndex].text;
 data.category = text;

 data.creationdate = Date.now();
 var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var addproduct = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(addproduct);
	} else {
		console.error(addproduct);
	}
}
xhr.send(json);

}




// Update a Product by id
function UpdateProduct(){
var url = "http://localhost:8080/RestaurantRestBackend/rest/product/updateproduct";

var data = {};
data.name = "Update";
data.description = "Update";
data.price = 5;
data.category  = "Update";
data.creationdate = Date.now();

var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url+'/86', true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function () {
	var updateproduct = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(updateproduct);
	} else {
		console.error(updateproduct);
	}
}
xhr.send(json);

}


// Delete a Product
function DeleteProduct(){
var url = "http://localhost:8080/RestaurantRestBackend/rest/product/deleteproduct";
var xhr = new XMLHttpRequest();

var id = document.getElementById("deleteid").value;
xhr.open("DELETE", url+'?id='+id, true);
xhr.onload = function () {
	var deleteproduct = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
    document.getElementById("output1").innerHTML = this.responseText;
  	console.table(deleteproduct);
	} else {
		console.error(deleteproduct);
	}
}
xhr.send(null);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//showallproducts
function GetAll() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:8080/RestaurantRestBackend/rest/product/showallproducts" , true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}

//            <button type="submit" onclick="GetAll()">GetAll</button>
