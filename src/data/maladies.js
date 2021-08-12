import React, { Component } from 'react'
import axios from 'axios';

class DataMaladies extends Component {

    state = {
        login: "okenhde",
        password: "",
        maladies: [],
        url: "http://localhost:8000/api/maladies"
    }

    getMaladies = async () => {
        const maladies = await axios.get(this.state.url);
        this.setState({ maladies: maladies.data });
    };

    componentDidMount() {
        this.getMaladies();
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default DataMaladies;