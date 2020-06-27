import React from 'react';
import { postData, isUrl } from '../helper/Utlis';

class CreateForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            path: '',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({url: event.target.value});
    }
    
    async handleSubmit() {

        // get url from state
        let url = this.state.url;

        // return when url length is not present
        if(url.length === 0) return;

        // check if the url is valid or not. if not valid, return
        if(!isUrl(url)) return;

        // create new entry for url
        let res = await postData('/url', { url: url });
        if(res.data) {
            this.setState(prevState => ({
                url: res.data.url ? res.data.url : prevState.url,
                path: res.data.path ? res.data.path : '',
                error: res.data.error ? res.data.error : ''
            }));
        }
    }
    
    renderError() {
        if(this.state.error.length > 0) {
            return (
                <span class='output error'>Error:: {this.state.error}</span>
            );
        }
        return '';
    }

    renderPath() {
        if(this.state.path.length > 0) {
            return (
                <span className='output success'>Short Path:: <a href={this.state.path} target='_blank' rel="noopener noreferrer">{this.state.path}</a></span>
            );
        }
        return '';
    }

    render() {
        return(
            <div className='center' id='create-form'>
                <form>
                    <label className='url-label' form='url'>URL</label><br />
                    <input className='url-field' type='text' name='url' value={this.state.url}  onChange={this.handleChange} /><br />
                    <input className='url-btn' type="button" value="Short It" onClick={this.handleSubmit}/>
                </form>
                {this.renderError()}
                {this.renderPath()}
            </div>
        );
    }
}

export default CreateForm;