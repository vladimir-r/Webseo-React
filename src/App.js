import React,{ Component} from 'react';
import logo from './logo.svg';



function App(){  
  return(
    <div>
      <PostList />
      </div>
  )
}

function PostList(props){
   const arrPosts=[
   {title:'t1',text:'text1'},
   {title:'t2',text:'text2'},
   {title:'t3',text:'text3'}
 ];
  const newArr=arrPosts.map((item,index)=>{ return (
    
    <Post title={item.title} text={item.text} key={index}/>)});
  return(
           <ul>
            {newArr}                 
            </ul>                  
    
  )
  
}
/*function Post(props){
  console.log(props)
  return(
  <li>
    <h1>{props.title}</h1>
      <p>{props.text}</p>
      <button>Close</button>
      <hr />
    </li>
  )
  
}
*/
   class Post extends React.Component {
       /* constructor(props){
      super(props)
      this.state={
          isOpen:true
      }
      
  }*/
     state={isOpen:true}                       
    
    hendleClick=()=>{
        
      this.setState({isOpen:!this.state.isOpen});
    console.log('click',this.state.isOpen);
  }
    
    
   render(){
       const section=this.state.isOpen && <p>{this.props.text}</p>;
       return (
      <li>
    <h1>{this.props.title}</h1>
      {section}
      <button onClick={this.hendleClick}>{this.state.isOpen ? "Close":"Open"}</button>
      <hr />
    </li>
    )
   }
    
                           
                            
                            }                         
                            

export default App;
                            
                            
                            
                            
                   
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
