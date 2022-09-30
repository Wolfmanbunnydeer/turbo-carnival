const media = ["Life of Pi", "The Bad guys", "Zootopia"];
document.getElementById("movies").innerHTML = media;

function mOver(obj) {
  obj.innerHTML = "Life of Pi, The Bad guys, Zootopia"
}
function mOut(obj) {
  obj.innerHTML = "Watch three Movies"
}   

//document.getElementId("result").addEventListener
        document.getElementById("filmsButton").addEventListener("click", myFunction);

        //function myfunction()={let result.value}
        function myFunction() {
            let theFilms = document.getElementById("films").value;
            let theFlix = document.getElementById("flix").value;
            let theGenre =
                document.getElementById("genre").value;

    
     
        
            //const result = divValue.textContent.trim(); alert(result)
            document.getElementById("filmsOutput").innerHTML =
                "The Genre are" + theGenre + ".<br>  Fun films as fun movies are:" + theFilms + ".<br> The movies are" + theFlix + ".";
    
      //const result = [""]; document.getElementbyId("").innerHTML=result.instanceofArray; 
const moviesfilm  = [ "Life of Pi", "The Bad guys", "Zootopia"];
document.getElementById("movies").innerHTML = moviesfilm.instanceofArray;  
   
      //const result = [""]; document.getElementbyId("").innerHTML=result; 
    const flix = [ "Life of Pi", "The Bad guys", "Zootopia"];
document.getElementById("movies").innerHTML = flix;      
        };          