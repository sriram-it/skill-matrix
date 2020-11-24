import React, { Component } from "react";
import Style from "./Skill.module.css";
import { LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ScoreBar = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 7.5,
  },
  colorPrimary: {
    backgroundColor: "#e0e0e0",
  },
  bar: {
    borderRadius: 7.5,
    backgroundColor: (props)=> ( props.value > 50 ? ((props.value >= 80) ? '#4caf50': '#2196f3') : "#f44336" ),
  },
}))(LinearProgress);

class Skill extends Component {
    constructor(){
        super();
        this.state = {
            value: 0
        }
    }
   
    componentDidMount(){
        this.timer = setInterval(()=>{
            if(this.state.value >= this.props.score) {
                clearInterval(this.timer)
            }else {
                return this.setState({value: this.state.value + 1})
            }
        }, 50)
    }
 

    render() {
    return (
      <>
        <div className={Style.skillContainer}>
          <p>{this.props.name}</p>
          <div>
            <ScoreBar variant="determinate" value={this.state.value} />
          </div>
          <p>{`${this.state.value}%`}</p>
        </div>
      </>
    );
  }
}

export default Skill;
