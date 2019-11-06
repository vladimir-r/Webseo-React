import React,{Component} from 'react'; 

class Elem extends React.Component {
       constructor(props){
           super(props)
           this.state={
               color:false,
               numClick:0
           }
       }
      
    handleClick=()=>{
        this.setState({color:true,  numClick: this.state.numClick+1});
       this.props.remTask() 
    }
    
   render(){
       let styles=this.state.color ? {color:"blue"}: {color:"black"};
        (this.state.numClick>=3) ?  styles.fontSize="48px" :  styles.fontSize="18px";
       return (
      <li style={styles} onClick={this.handleClick}>
           {this.props.task}
            
            <button>remove </button>
      
    </li>
    )
   }
}
    
       export default Elem                    
                            
                               