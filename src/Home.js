import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            videos: []
        };
    }
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:5000/api/user/get-all-musics/1');
            const data = await response.json();
            this.setState({ videos: [...data.successResponse] });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="App App-header">
                <div className="container">
                    <div className="row">
                        {this.state.videos.map(video =>
                        <div className="col-md-4 mb-2" key={video.id}>
                            <Link to={`/player/${video.id}`}>
                                <div className="card border-0">
                                    <div className="card-body">
                                        <p>{video.title}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}