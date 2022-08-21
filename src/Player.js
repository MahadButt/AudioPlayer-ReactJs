import React, { Component } from 'react'
export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: this.props.match.params.id,
            videoData: {}
        };
    }
    async componentDidMount() {
        try {
            const res = await fetch(`http://localhost:5000/api/user/music/${this.state.videoId}/data`);
            const data = await res.json();
            this.setState({ videoData: data.successResponse });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <audio controls muted autoPlay>
                        {Object.keys(this.state.videoData).length>0 && <source src={`http://localhost:5000/api/user/music/${this.state.videoData.file_path.split("audio/")[1]}`} type="audio/mp3"></source>}
                    </audio>
                    <h1>{this.state.videoData.title}</h1>
                </header>
            </div>
        )
    }
}