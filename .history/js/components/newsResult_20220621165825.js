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

    chamaHeroku(text){
        var x = text;
        const url ="https://bsf-chatbot.herokuapp.com/classifier/svm/predit"
        const Http = new XMLHttpRequest();
        const result = "";
        Http.open("POST", url);
        Http.setRequestHeader("Accept", "application/json");
        Http.setRequestHeader("Content-Type", "application/json");
        Http.send(JSON.stringify({"newsText": x}))
        Http.onreadystatechange =function(){
            if(this.readyState==4 && this.status==200){
                var json_resp = JSON.parse(Http.responseText);
                console.log(json_resp.response);
                if(json_resp.response == "This news was classified as True"){
                    result = "true";
                } 
                if(json_resp.response == "This news was classified as Fake"){
                    result = "fake";
                }
            }
        }
        this.setState({newsType: result});
    }

    handleChange(event) {
        this.setState({newsText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.newsText);
        this.chamaHeroku(this.state.newsText);
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

