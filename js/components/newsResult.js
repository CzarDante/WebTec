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
        Http.open("POST", url);
        Http.setRequestHeader("Accept", "application/json");
        Http.setRequestHeader("Content-Type", "application/json");
        Http.send(JSON.stringify({"newsText": x}))

        Http.onreadystatechange = function(){
            if(this.readyState==4 && this.status==200){
                var json_resp = JSON.parse(Http.responseText);
                if(json_resp.response == "This news was classified as True"){
                    alert("This new was classified as true!");
                } 
                if(json_resp.response == "This news was classified as Fake"){
                    alert("This new was classified as fake!");
                }
            }
        }
    }

    handleChange(event) {
        this.setState({newsText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.chamaHeroku(this.state.newsText);
    }

    render() {
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

    }
}

