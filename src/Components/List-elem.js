import React,{Component} from 'react'; 
import Elem from './Elem'; 


const ToDoList=
      ['Task1','Task2','Task3'];

class ElemList extends React.Component{
state={tasks:ToDoList}
    
    removeTask=()=>{
        this.setState({tasks:['Task1','Task2']})
        
    }
    
    render(){
           const   str= this.state.tasks.map(
       (item,index)=>{return(
   
       <Elem task={item} key={index}  remTask={this.removeTask}/> 
       
    )
                             })
   
    return(
         <ul>
          {str}
         </ul>
    )
    }
    
}

export default ElemList