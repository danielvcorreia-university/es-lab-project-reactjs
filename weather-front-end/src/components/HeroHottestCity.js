import React from 'react';
import WeatherService from '../services/WeatherService';

class HeroHottestCity extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        WeatherService.get_pt_hottest_city().then((response) => {
            this.setState({ data: response.data })
        });
    }

    render() {
        return (
            
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        {
                            this.state.data.map(
                                city =>
                                <div key={city.id}>
                                    <h1 className="display-4">{city.cityname} é a cidade mais quente em Portugal</h1>
                                    <p className="lead">Última atualização: {city.publicationDateTime}</p>
                                </div> 
                            )
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroHottestCity