'use strict';

class NewsResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            newsType: '',
            newsText: '' 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    chamaHeroku(){
        var x = document.getElementById("noticia")
        const url ="https://bsf-chatbot.herokuapp.com/classifier/svm/predit"
        const Http = new XMLHttpRequest();
        Http.open("POST", url);
        Http.setRequestHeader("Accept", "application/json");
        Http.setRequestHeader("Content-Type", "application/json");
        Http.send(JSON.stringify({"newsText": x.value}))
        
        Http.onreadystatechange =function(){
            if(this.readyState==4 && this.status==200){
                json_resp = JSON.parse(Http.responseText);
                if(json_resp.response == "This news was classified as True"){
                    document.getElementById("resultado").innerHTML = "Essa notícia foi classificada como verdadeira";
                } 
                if(json_resp.response == "This news was classified as Fake"){
                    document.getElementById("resultado").innerHTML = "Essa notícia foi classificada como falsa"; 
                }
            }
        }
    }

    handleChange(event) {
        this.setState({newsText: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.newsText);
        event.preventDefault();
    }

    render() {
        if (this.state.newsType == "") {
            return (
                <div>
                    <form>
                        <p><label>informe a notícia:</label></p>
                        <textarea id="noticia" name="noticia" rows="10" cols="70" placeholder="Digite a notícia aqui" onChange={this.handleChange}/>
		            </form>
                    <div>
			            <button type="button" onClick={this.handleSubmit}>Enviar</button>
		            </div>
                    <p>Envie uma notícia para ser classificada!</p>
                </div>
            );
        } else {
            if (this.state.newsType == "fake") {
                return (
                    <p>Esta notícia foi classificada como falsa.</p>
                );
            }
            if (this.state.newsType == "true") {
                return (
                    <p>Esta notícia foi classificada como verdadeira.</p>
                );
            }
        }
        
    }
}

