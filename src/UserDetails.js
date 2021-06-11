import {Link} from 'react-router-dom';
function CustomInput(props){
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">{props.spantext || props.val}</span>
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
      <CustomInput val="SSLC-school" spantext="CLASS-X-School" handleEvent={props.handleEvent}/>
      <CustomInput val="SSLC-percentage" spantext="CLASS-X-Percentage" handleEvent={props.handleEvent}/>
      <CustomInput val="SSLC-yop" spantext="CLASS-X-Year-Of-Passing" handleEvent={props.handleEvent}/>
      <CustomInput val="HSC-school" spantext="CLASS-XII-School" handleEvent={props.handleEvent}/>
      <CustomInput val="HSC-percentage" spantext="CLASS-XII-Percentage" handleEvent={props.handleEvent}/>
      <CustomInput val="HSC-yop" spantext="CLASS-XII-Year-Of-Passing" handleEvent={props.handleEvent}/>
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
      <div className="input-group mb-3">
          <span className="input-group-text">Skill-Names</span>
          <textarea id="Skill-Names" className="form-control" onChange={props.handleEvent} rows="4"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Skill-Values</span>
        <textarea id="Skill-Values" className="form-control" onChange={props.handleEvent} rows="4"/>
      </div>
      <div className="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02" onChange={(event)=> props.updateImage(event.target.files[0])} />
        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
      </div>
      <div className="text-center mb-5">
        <Link to='/resume'>
          <button type="button" className="btn btn-primary " onClick={()=>console.log(props.data)}>Submit</button>
        </Link>
      </div>
    </div>
  )
}