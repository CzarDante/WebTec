'use strict';

class NewsResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            newsType: '' 
        };
    }

    render() {
        this.setState({newsType: 'false news'})
        return (
            <p>hello</p>
        );
    }
}

