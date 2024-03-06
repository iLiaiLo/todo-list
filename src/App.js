import React from 'react'

function App() {
  const [text,setText]=React.useState("");
  const [content,setContent]=React.useState([]);

  React.useEffect(()=>{
    const storagedata=localStorage.getItem("todoData");
    if(storagedata){
      setContent(JSON.parse(storagedata));
    }
  },[])
  
  React.useEffect(()=>{
    localStorage.setItem("todoData",JSON.stringify(content))
  },[content])
  
  function changeText(e){
    setText(e.target.value);
  }
  
  function addContent(){
    setContent(prewcontent=>[{id:Math.random(),Text:text,completed:false},...prewcontent])
  
  }

  function checkId(id){
    setContent(content.map((item)=>{
      if(item.id===id){
        item.completed=!item.completed
      }
      return item
    }))
  }
  

  return (
    <div>
    <div className="addButTask">
    <input className="addtask" placeholder="create plan" type="text" value={text} onChange={changeText} />
    <button className="addBut" onClick={addContent}>add content</button>
    
    </div>
    <div>

    {content.map(item=>{
         return (
          <div style={{marginTop:"20px",display:"flex",flexDirection:"row",gap:"15px"}}>
          <input type="checkbox" checked={item.completed} style={{width:"5vh"}} onChange={()=>checkId(item.id)} />
        <div className="task" key={item.id}>{item.Text}</div>
        <button className="removeBut" onClick={()=>setContent(content.filter(it=>it.id!==item.id))}>remove</button>
        </div>
        )
      })}

    </div>
    
  </div>   

  );
}

export default App;
