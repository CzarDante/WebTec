function chamaHeroku(){
    var x = document.getElementById("noticia")
    const req_body = {"newsText": x.value}
    const url ="https://bsf-chatbot.herokuapp.com/classifier/svm/predit"
    const Http = new XMLHttpRequest();
    
    Http.open("POST", url);
    Http.setRequestHeader("Accept", "application/json");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.onload = () => console.log(Http.responseText);
    Http.send(JSON.stringify({"newsText": x.value}))
    
    Http.onreadystatechange =function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("resultado").innerHTML = Http.responseText["response"]
        }
    }

}
  


