import React,{Component} from 'react';

class App extends Component{
    state={
        isClicked:false
    };

    handleClick=()=>{
        this.setState({isClicked:true});
    };

    render(){
        return(
            <>
              {this.state.isClicked && 'Button Clicked'}
              <button onClick={this.handleClick}>Click Me</button>
            </>
        );
    }
}

export default App;