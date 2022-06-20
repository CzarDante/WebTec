function chamaHeroku(){
    var x = document.getElementById("noticia")
    const req_body = {"newsText": x.value}
    // const url ="https://bsf-chatbot.herokuapp.com/"
    const url ="https://bsf-chatbot.herokuapp.com/classifier/svm/predit"
    const Http = new XMLHttpRequest();
    
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
      }

    // Http.open("Post",url,req_body);
    // Http.send();

    // Http.onreadystatechange =function(){
    //     if(this.readyState==4 && this.status==200){
    //         document.getElementById("resultado").innerHTML = Http.responseText
    //     }
    // }

}
  


