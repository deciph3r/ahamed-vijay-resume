import {Link} from 'react-router-dom';
function CustomInput(props){
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{props.val}</span>
      <input type="text" id={props.val} className="form-control" onChange={props.handleEvent}/>
    </div>
  )
}


export default function UserDetails (props){
  return (
    <div className="App mt-5">
      <CustomInput val="Name" handleEvent={props.handleEvent}/>
      <CustomInput val="Desiginition" handleEvent={props.handleEvent}/>
      <CustomInput val="Company" handleEvent={props.handleEvent}/>
      <CustomInput val="Mobile" handleEvent={props.handleEvent}/>
      <CustomInput val="E-mail" handleEvent={props.handleEvent}/>
      <CustomInput val="Location" handleEvent={props.handleEvent}/>
      <span>Education</span>
      <CustomInput val="SSLC-school" handleEvent={props.handleEvent}/>
      <CustomInput val="SSLC-percentage" handleEvent={props.handleEvent}/>
      <CustomInput val="SSLC-yop" handleEvent={props.handleEvent}/>
      <CustomInput val="HSC-school" handleEvent={props.handleEvent}/>
      <CustomInput val="HSC-percentage" handleEvent={props.handleEvent}/>
      <CustomInput val="HSC-yop" handleEvent={props.handleEvent}/>
      <span>Msys HR</span>
      <CustomInput val="Communication" handleEvent={props.handleEvent}/>
      <CustomInput val="Competancy" handleEvent={props.handleEvent}/>
      <CustomInput val="Situation-Handeling" handleEvent={props.handleEvent}/>
      <CustomInput val="Technical-Skills" handleEvent={props.handleEvent}/>
      <CustomInput val="Behavior" handleEvent={props.handleEvent}/>
      <span>OJT Performance</span>
      <CustomInput val="Project-Summary" handleEvent={props.handleEvent}/>
      <CustomInput val="Supervisor-Comment" handleEvent={props.handleEvent}/>
      <CustomInput val="Manager's-Comment" handleEvent={props.handleEvent}/>
      <CustomInput val="Peers-Comment" handleEvent={props.handleEvent}/>
      <span>Training Scorecard</span>
      <CustomInput val="Behavioural-skill" handleEvent={props.handleEvent}/>      
      <CustomInput val="soft-skill" handleEvent={props.handleEvent}/>      
      <CustomInput val="business-skill" handleEvent={props.handleEvent}/>   
      <span>Technical Skill</span> 
      <CustomInput val="skill-name-1" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-value-1" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-name-2" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-value-2" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-name-3" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-value-3" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-name-4" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-value-4" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-name-5" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-value-5" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-name-6" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-value-6" handleEvent={props.handleEvent}/>
      <CustomInput val="skill-name-7" handleEvent={props.handleEvent}/>       
      <CustomInput val="skill-value-7" handleEvent={props.handleEvent}/>
      <div className="text-center mb-5">
        <Link to='/resume'>
          <button type="button" className="btn btn-primary " onClick={()=>console.log(props.data)}>Submit</button>
        </Link>
      </div>
    </div>
  )
}