import React from "react";
import CandidateNames from "./CandidateNames";

const list1 = ["vibhuti" , "kamlesh" , "nikul" , "tirth" , "riva" ];
const list2 = ["red" , "blue" , "yellow" , "white" , "pink" ];
const list3 = ["1" , "2" , "3" , "4" , "5" ];

class CandidatesContainer extends React.Component {
    
    constructor(props){
    super(props);
    this.state = {
    candidateNames: list1
      };
      this.changeList = this.changeList.bind(this);
    }
    changeList(){
        this.setState({candidateNames : list2});
        this.state = {
            candidateNames: list2
              };
              this.upadateList = this.upadateList.bind(this);
            }
           
        upadateList(){
                this.setState({candidateNames : list3});
    }

   
    render(){
        return <>
        <CandidateNames candidateNames = {this.state.candidateNames} />;
        <button onClick={this.changeList}>update list</button>

        <button onClick={this.upadateList}>change list</button>
        </>
    }
}
export default CandidatesContainer;