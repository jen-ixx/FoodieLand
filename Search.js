const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("food-list")
    const food = document.querySelectorAll(".food")
    const fname = storeitems.getElementsByTagName("h2")

    for(var i=0; i < fname.length; i++){
        let match = food[i].getElementsByTagName('h2')[0];

        if(match){
           let textvalue = match.textContent || match.innerHTML

           if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            food[i].style.display = "";
           }else{
            food[i].style.display = "none";
           }
        }
    }
}