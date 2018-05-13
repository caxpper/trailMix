import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Search extends Component{

    constructor(props){
        super(props);
        console.log('search props:', this.props);


        this.state = {
            location: ''
        }
        console.log('search state:', this.state);
    }

    handleLocationChange(event){
        const newLocation = event.target.value;

        this.setState({
            location: newLocation
        });
        console.log('search state:', this.state);

    }

    handleEnterKey(e,queryStr){ //queryStr not needed?
        if (e.keyCode == 13) {
            this.props.history.push(`/trailList/${this.state.location}`);
        }
    }

    render(){
        
        return (  
            <div className=''>
                <input className='form-control searchInput' onKeyUp={this.handleEnterKey.bind(this)} id='searchInput' onChange={this.handleLocationChange.bind(this)} value={this.state.location} type="text" placeholder="Current location"/>     
                <div className="input-group-btn">
                    <Link to={`/trailList/${this.state.location}`}>
                        <button className="startBtn">
                            <i className="fas fa-search"></i>
                        </button>
                    </Link>
                </div>
            </div>          
        );
    }
};

export default Search;