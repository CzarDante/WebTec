'use strict';

class NewsResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            newsType: '' 
        };
    }

    render() {
        if (this.state.newsType == "") {
            this.setState({newsType: 'false news'})
        }
        return (
            <p>hello</p>
        );
    }
}

