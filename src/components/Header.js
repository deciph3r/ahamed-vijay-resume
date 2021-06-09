import React from 'react'

import TechnicalSkills from './TechnicalSkills'
import './styles.css'

const  Header = (props) => {
    
   const data =props.gree;

    return (<div>
              
           <div className="mainpage">     
            <h1 style={{fontSize:'5vh'}}>{data["Name"]}</h1>
            <h2 style={{color:"blue"}} >{data["Desiginition"]}</h2>
            
             {/* <img src={data.image} alt="Profile"/> */}
             <table>
                <tr>
                   <td> <h6>✆ {data["Mobile"]}</h6></td>
                   <td style={{paddingLeft:'5rem'}}> <h6>@ {data["E-mail"]}</h6></td>
                 </tr>
                 <tr >
                 <td><h6>🏢 {data["Company"]}</h6></td>
                  <td style={{paddingLeft:'5rem'}}><h6>📍 {data["Location"]}</h6></td>
                  </tr>
             </table>
             <div className="secoundpage">
                <div class="grid-container">
                         <div class="item1">
                             <h1 style={{borderBottom: "3px solid black",fontWeight:"bold",fontSize:'2rem'}}>Education</h1>
                        <table>
                            <tr><td style={{width:"90%"}}>
                         
                         <h1 style={{fontSize:"1.3rem"}}>Class X</h1>
                         <h2 style={{color:'blue',fontSize:'1rem'}}>{data["Degree-1"]}</h2>
                         <h3 style={{fontSize:"0.6rem",color:"gray"}}>{data.duration10}</h3>
                          </td>
                         <td>
                         <div className="Score" >
                             <h1 >Score</h1>
                             <br></br>
                             <h1><span style={{color:"blue"}}>{data["Degree-1-percentage"]}</span>/100</h1>
                         </div> 
                        </td>
                         </tr>
                         <hr></hr>
                        <tr>
                       <td>
                         <h1 style={{fontSize:"1.3rem"}}>Class XII</h1>
                         <h2 style={{color:'blue',fontSize:'1rem'}}>{data['Degree-2']}</h2>
                         <h3 style={{fontSize:"0.6rem",color:"gray"}}>{data.duration12}</h3>
                         </td>
                         <td>
                          <div className="Score">
                             <h1>GPA</h1>
                             <br></br>
                             <h1><span style={{color:"blue"}}>{data["Degree-2-percentage"]}</span>/100</h1>
                            </div>
                            </td>
                            </tr>
                         </table>
                         {/* Tarining Score Card */}
                         <h1 style={{borderBottom: "3px solid black",fontWeight:"bold",fontSize:'2rem'}}>TRAINING SCORE CARD</h1>
                             <table><tr>
                             <td><h2 style={{color:"blue",fontSize:'1rem'}}>Behavioral</h2>
                             <input type="range" min="1" max="10" value={data["Behavioural-skill"]}></input></td>
                             
                             <td><h2  style={{color:"blue",fontSize:'1rem'}}>Soft Skills</h2>
                             <input type="range" min="1" max="10" value={data["soft-skill"]}></input></td>
                              
                             </tr>
                             <h2  style={{color:"blue",fontSize:'1rem'}}>Business Skills</h2>
                             <input type="range" min="1" max="10" value={data['business-skill']}></input>
                             </table>
                              <h1 style={{borderBottom: "3px solid black",fontWeight:"bold",fontSize:'2rem'}}>TECHNICAL SKILLS</h1> 
                             <TechnicalSkills gree = {data}/>
                         
                         </div>
                         <div class="item2">
                             <h1 style={{borderBottom: "3px solid black",fontWeight:"bold",fontSize:'2rem'}}>MSYS HR</h1>
                             <h1>Communication</h1><br></br>
                           <label>Feedback:</label><h3>{data["Communication"] === 5 ? "⭐⭐⭐⭐⭐":"⭐⭐⭐⭐"}</h3><hr/>
                            <h1>Competency</h1><br></br>
                           <label>Feedback:</label><h3>{data["Competancy"] === 5 ? '⭐⭐⭐⭐⭐ ':data["Communication"] === 4 ? '⭐⭐⭐⭐': "⭐⭐⭐"}</h3><hr/>
                            <h1>Situation Handling</h1><br></br>
                           <label>Feedback:</label><h3>{data.Communication = 5 ? '⭐⭐⭐⭐⭐ ': data.Communication =4 ? '⭐⭐⭐⭐': data.Communication = 3?"⭐⭐⭐" :data.Communication =2? '⭐⭐':'⭐'}</h3><hr/>
                            <h1>Technical Skills</h1><br></br>
                           <label>Feedback:</label><h3>{data.Communication = 5 ? '⭐⭐⭐⭐⭐ ': data.Communication =4 ? '⭐⭐⭐⭐': data.Communication = 3?"⭐⭐⭐" :data.Communication =2? '⭐⭐':'⭐'}</h3><hr/>
                            <h1>Behavior</h1><br></br>
                           <label>Feedback:</label><h3>{data.Communication = 5 ? '⭐⭐⭐⭐⭐ ': data.Communication =4 ? '⭐⭐⭐⭐': data.Communication = 3?"⭐⭐⭐" :data.Communication =2? '⭐⭐':'⭐'}</h3><hr/>  

                                 <h1 style={{borderBottom: "3px solid black",fontWeight:"bold",fontSize:'2rem'}}>OJT PERFORMANCE</h1>
                              <h1>Project Details</h1><br></br>
                           <label>Feedback: </label><h3>{data['Project-Summary']}</h3><hr/>
                            <h1>Supervisor's Comments</h1><br></br>
                           <label>Feedback: </label><h3>{data['Supervisor-Comment']}</h3><hr/>
                            <h1>Manager's Comments</h1><br></br>
                           <label>Feedback: </label><h3>{data[`Manager's-Comment`]}</h3><hr/>
                            <h1>Peer's Comments</h1><br></br>
                           <label>Feedback: </label><h3>{data["Peers-Comment"]}</h3>
                         </div>
                </div>
                 </div>
            </div>
            </div>


    )
}

export default Header
