import React from 'react';
import CreateForm from '../components/CreateForm';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        
    }

    render() {
        return(
            <div className='full'>
                <CreateForm />
            </div>
        );
    }
}

export default Home;