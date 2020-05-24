import React, { Component } from "react";


class App extends Component{
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render(){
        return(
            <div>
                <h1>Welcome my friends!</h1>
                <p>My name is Dougla Yoshioka. I'm Enginering Computer Student at State University of Campinas.</p>
                <p>I have a lot of interesting at Education, my goal is use my knowlage to improve the public educational in Brazil</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>more informations about me</p>
                            <p>more informations about me</p>
                            <p>more informations about me</p>
                            <p>more informations about me</p>
                            <p>more informations about me</p>
                            <button onClick={this.toggleDisplayBio}>Mostrar menos</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Ler mais</button>
                        </div>
                    )
                }
            </div>
            
        )
    }
}

export default App;