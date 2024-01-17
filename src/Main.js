import "./App.css";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  const initialvalues = {
    rno:"",   
    name:"",
    s1:"",
    s2:"",
    s3:"",
    s4:"",
    s5:"",
    total:"",
    per:""
    };


  const[data,setData] = useState(initialvalues);       
  const[mydata,myalldata]=useState([]); 
  const[search,setSearch]=useState('');
  const[edit,editdata]=useState([]);
  const[isedit,issetedit]=useState(false); 
  const[editid,seteditid]=useState(-1);
  

                                                     
  const handleChange = (e) =>{
         setData({...data,[e.target.name]:e.target.value});
  }
  const btnhandler = () => {
    data.total= parseInt(data.s1) + parseInt(data.s2) + parseInt(data.s3) + parseInt(data.s4) + parseInt(data.s5);
    data.per = data.total/5;

    console.log(data);

    if(isedit)
    {
      let edata = [...mydata]
      edata[editid] = data;
      myalldata(edata)
      setData({
        rno:'',
        name:'',
        s1:'',
        s2:'',
        s3:'',
        s4:'',
        s5:''
  })
    }
    else{
      myalldata(mydata => [...mydata,data]);
      setData({
        rno:'',
        name:'',
        s1:'',
        s2:'',
        s3:'',
        s4:'',
        s5:''
  })
    }


  }
  const deletehandler = (k) =>{
        console.log(k);
        const newPeople = mydata.filter((t,i) => i !== k );
        myalldata(newPeople);
  }
  const edithandler = (k) => {
        
     seteditid(k);
     issetedit(true)
     const newPeople = mydata[k];
     console.log(newPeople);
     setData(newPeople);
  }


  useEffect(() => {
    console.log(mydata);
    console.log(edit);
  },[mydata,edit])


  return(
    <div className="App">
       
       <div className="container">
       <div className="row">
        <div className="col-sm-8">
        <div className="form-row row">
           <h2 className='mb-5 mt-5 text-center'>STUDENT FORM</h2>
         <div className="col-12 mb-4">
           <input type="integer" onChange={handleChange} value={data.rno} autoComplete='off' name="rno" className="form-control"  placeholder="Enter Your Roll No" />
         </div>
         <div className="col-12 mb-4">
           <input type="text" onChange={handleChange} value={data.name} autoComplete='off' name="name" className="form-control" placeholder="Enter Your name" />
         </div>
         <div className="col-12 mb-4">
           <input type="integer" onChange={handleChange} value={data.s1} autoComplete='off' name="s1" className="form-control" placeholder="React js " />
         </div>
         <div className="col-12 mb-4">
           <input type="integer" onChange={handleChange} value={data.s2} autoComplete='off' name="s2" className="form-control" placeholder="Node js " />
         </div>
         <div className="col-12 mb-4">
           <input type="integer" onChange={handleChange} value={data.s3} autoComplete='off' name="s3" className="form-control" placeholder="Python" />
         </div>
         <div className="col-12 mb-4">
           <input type="integer" onChange={handleChange} value={data.s4} autoComplete='off' name="s4" className="form-control" placeholder=".Net" />
         </div>
         <div className="col-12 mb-4">
           <input type="integer" onChange={handleChange} value={data.s5} autoComplete='off' name="s5" className="form-control" placeholder="Rubby" />
         </div>
         <div className="col-12 mb-4">
           <input type="submit" onClick={btnhandler} className="btn btn-success" /><br/><br/>
         </div>
         <div>
           
         </div>
       </div>
       

      
        </div>
       
    </div>
          
       <input type="search" className="ps-5 col-9 " placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}></input><br/><br/>    


       <table border="2">
        <tr>
           <th>Rno</th>
           <th>Name</th>
           <th>Sub1</th>
           <th>Sub2</th>
           <th>Sub3</th>
           <th>Sub4</th>
           <th>Sub5</th>
           <th>Total</th>
           <th>Per</th>
           <th>delete</th>
           <th>edit</th>
        </tr>

       {
        mydata.filter((el) => {
            if(search){
              return el.name.includes(search)
            }
            else{
              return el
            }
        }).map((item,k) => {
          return(
            <tr>
              
              <th>{item.rno}</th>
              <th>{item.name}</th>
              <th>{item.s1}</th>
              <th>{item.s2}</th>
              <th>{item.s3}</th>
              <th>{item.s4}</th>
              <th>{item.s5}</th>  
              <th>{item.total}</th>
              <th>{item.per}</th>
              <th><button className="btn btn-warning" onClick={()=>{deletehandler(k)}}>Delete</button></th>
              <th><button className="btn btn-warning" onClick={()=>{edithandler(k)}}>Edit</button></th>
              
            </tr>
          )
        })
       }
       </table>
       
       
       </div>


           </div>
  )
}
export default App