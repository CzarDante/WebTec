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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({"newsText": x})
        };
        fetch('https://bsf-chatbot.herokuapp.com/classifier/svm/predit', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    }

    handleChange(event) {
        this.setState({newsText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.newsText);
        chamaHeroku(this.state.newsText);
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

