
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { ListGroup } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { Redirect } from 'react-router-dom';

class App extends React.Component{
   
    constructor(){
        super();
        this.state={
            contents:[],
            Isdone:false,   
        }
    }
    componentDidMount(){
        if(localStorage["contents"]){
        let contents = JSON.parse(localStorage["contents"])
        this.setState({contents:contents})
        }
    } 
    saveToLocalStorage=()=>{
        localStorage["contents"] = JSON.stringify(this.state.contents);
    }

    addContent=(content)=>{
        this.state.contents.push(content);
        this.setState({contents:this.state.contents});
        this.saveToLocalStorage();
    }
    deleteContent=(content)=>{
        this.state.contents.pop(content);
        this.setState({contents:this.state.contents});
        this.saveToLocalStorage();
    }
    IsdoneContent=(content)=>{
        this.setState({Isdone: !this.state.Isdone})
    }


    

    render(){
        return <div>
            <h3 style={{textAlign:"center",}}> My List To Do</h3>
            <div className="container center" >
            <DisplayTasks contents={this.state.contents} Isdone={this.state.Isdone} deleteContent={this.deleteContent} IsdoneContent={this.IsdoneContent}/><br/>
            </div>
            <AddTask style={{textAlign:"center",}}addContent={this.addContent} />
        </div>
    }

}


class AddTask extends React.Component{

    constructor(props){
        super();
        this.state={
            content:"",
           
        }
    }

    addContent=()=>{
        let content = {
            content:this.state.content, 
        }

        this.props.addContent(content);
    }


    render(){
        return <div>
            content : <input type="text" value={this.state.content} onChange={(e)=>this.setState({content:e.target.value})} />
           <br/> <button onClick={this.addContent} className="btn btn-primary " style={{ margin: 30,}}>Add</button>
        </div>
    }
}


class DisplayTasks extends React.Component{
   
    constructor(props){
            super();
        }
    
    render(){
        return <div class="list-group ">          
            {this.props.contents.length > 0 ?this.props.contents.map((item)=>{
                return <DisplayTask content={item} key={item.content} Isdone={this.props.Isdone} IsdoneContent={this.props.IsdoneContent} deleteContent={this.props.deleteContent} />
            }):"Empty"}
        </div>
    }
}

DisplayTasks.defaultProps={
    contents:[]
}

class DisplayTask extends React.Component{
    
    
    constructor(props){
        super();
        
    }
    // style={{backgroundColor: "lightblue"}}
    render(){
        let task_status = this.props.Isdone ? "DoneTask" : "NotDoneTask";
        return <div  className={" list-group-item list-group-item-action "+task_status} >
      <a style={{width:600 ,fontWeight:'bolder',marginRight:50,}}>{this.props.content.content} 
      <button  onClick={this.props.IsdoneContent} className="btn btn-success  " style={{ marginLeft: 400,marginRight: 10 ,paddingRight:10}}><i className="fa fa-check "></i></button> 
      <button onClick={this.props.deleteContent}  className="btn btn-danger" ><i className="fa fa-times btn-danger" ></i></button></a>
      
    </div>
    }
}
export default App;