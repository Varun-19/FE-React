import React from 'react';
import axios from 'axios';

class SearchFalcone extends React.Component {
    render() {
        const search = () => {


            axios.post('https://findfalcone.herokuapp.com/token',{},{
                headers : { 'Accept' : 'application/json' }
            }).then(response => {
                console.log(response.data['token']);
            })
        }
        return (
            <button onClick={search}>Search Falcone</button>
        )
    }
}

export default SearchFalcone;