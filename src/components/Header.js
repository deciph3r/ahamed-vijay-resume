import React from 'react'
import TechnicalSkills from './TechnicalSkills'
import './Header.css'
import full from '../img/rating-full.png';
import zero from '../img/rating-zero.png';
import phone from '../img/phone.svg'
import link from '../img/link.svg'
import mail from '../img/mail.svg'
import location from '../img/location.svg'



function Rating({ number }) {
   number = (number > 5) ? 5 : number;
   number = (number < 1) ? 1 : number;
   const star = [];
   for (let i = 0; i < 5; i++) {
      if (number !== 0) {
         star.push((<img src={full} key={i} alt="" />)); number--;
      }
      else star.push((<img src={zero} key={i} alt="" />));
   }

   return (
      <div>
         {star}
      </div>
   )
};

export default function Header(props) {

   const data = props.gree;

   return (<div className="Header">

      <div className="mainpage">
         <h1 style={{ fontSize: '6vh', marginLeft: "76px" }}>{data["Name"]}</h1>
         <h2 style={{ color: "blue", marginLeft: "76px" }} >{data["Desiginition"]}</h2>

         {(props.Image) && <img id="user-dp" src={URL.createObjectURL(props.Image)} alt="Profile" />}
         <table>
            <tbody>
               <tr>
                  <td> <h6 style={{ marginLeft: "5.6em" }}><img src={phone} alt="" /> {data["Mobile"]}</h6></td>
                  <td style={{ paddingLeft: '5rem' }}> <h6><img src={mail} alt="" /> {data["E-mail"]}</h6></td>
               </tr>
               <tr >
                  <td><h6 style={{ marginLeft: "5.6em" }}><img src={link} alt="" /> {data["Company"]}</h6></td>
                  <td style={{ paddingLeft: '5rem' }}><h6><img src={location} alt="" /> {data["Location"]}</h6></td>
               </tr>
            </tbody>
         </table>
         <div className="secoundpage">
            <div className="grid-container">
               <div className="item1">
                  <h1 style={{ borderBottom: "3px solid black", fontWeight: "bold", fontSize: '2rem' }}>Education</h1>
                  <table>
                     <tbody>
                        <tr style={{ borderBottom: 'solid black 1px' }}>
                           <td style={{ width: "90%" }}>
                              <h1 style={{ fontSize: "1.3rem" }}>Class X</h1>
                              <h2 style={{ color: 'blue', fontSize: '1rem' }}>{data["SSLC-school"]}</h2>
                              <h3 style={{ fontSize: "0.6rem", color: "gray" }}>{`${data["SSLC-yop"] - 1}-${data["SSLC-yop"]}`}</h3>
                           </td>
                           <td>
                              <div className="Score" >
                                 <h1 >Score</h1>
                                 <br></br>
                                 <h1><span style={{ color: "blue" }}>{data["SSLC-percentage"]}</span>%</h1>
                              </div>
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <h1 style={{ fontSize: "1.3rem" }}>Class XII</h1>
                              <h2 style={{ color: 'blue', fontSize: '1rem' }}>{data['HSC-school']}</h2>
                              <h3 style={{ fontSize: "0.6rem", color: "gray" }}>{`${data["HSC-yop"] - 1}-${data["HSC-yop"]}`}</h3>
                           </td>
                           <td>
                              <div className="Score">
                                 <h1>GPA</h1>
                                 <br></br>
                                 <h1><span style={{ color: "blue" }}>{data["HSC-percentage"]}</span>%</h1>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>

                  <h1 style={{ borderBottom: "3px solid black", fontWeight: "bold", fontSize: '2rem' }}>TRAINING SCORE CARD</h1>
                  <div className="row">
                     <div className="col-6">
                        <h2 style={{ color: "blue", fontSize: '1rem' }}> Behavioral </h2>
                        <input type="range" min="1" max="10" value={data["Behavioural-skill"]} readOnly />
                     </div>
                     <div className="col-6">
                        <h2 style={{ color: "blue", fontSize: '1rem' }}> Soft Skills </h2>
                        <input type="range" min="1" max="10" value={data["soft-skill"]} readOnly />
                     </div>
                     <div className="col-6">
                        <h2 style={{ color: "blue", fontSize: '1rem' }}> Business Skills </h2>
                        <input type="range" min="1" max="10" value={data["business-skill"]} readOnly />
                     </div>
                  </div>
                  <h1 style={{ borderBottom: "3px solid black", fontWeight: "bold", fontSize: '2rem' }}>TECHNICAL SKILLS</h1>
                  <TechnicalSkills gree={data} />

               </div>
               <div className="item2">
                  <h1 style={{ borderBottom: "3px solid black", fontWeight: "bold", fontSize: '2rem' }}>MSYS HR</h1>
                  <h1>Communication</h1><br></br>
                  <label>Feedback:</label><Rating number={Number(data['Communication'])} /><hr />
                  <h1>Competency</h1><br></br>
                  <label>Feedback:</label><Rating number={Number(data['Competancy'])} /><hr />
                  <h1>Situation Handling</h1><br></br>
                  <label>Feedback:</label><Rating number={Number(data['Situation-Handeling'])} /><hr />
                  <h1>Technical Skills</h1><br></br>
                  <label>Feedback:</label><Rating number={Number(data['Technical-Skills'])} /><hr />
                  <h1>Behavior</h1><br></br>
                  <label>Feedback:</label><Rating number={Number(data['Behavior'])} /><hr />

                  <h1 style={{ borderBottom: "3px solid black", fontWeight: "bold", fontSize: '2rem' }}>OJT PERFORMANCE</h1>
                  <h1>Project Details</h1><br></br>
                  <label>Feedback: </label><h3>{data['Project-Summary']}</h3><hr />
                  <h1>Supervisor's Comments</h1><br></br>
                  <label>Feedback: </label><h3>{data['Supervisor-Comment']}</h3><hr />
                  <h1>Manager's Comments</h1><br></br>
                  <label>Feedback: </label><h3>{data[`Manager's-Comment`]}</h3><hr />
                  <h1>Peer's Comments</h1><br></br>
                  <label>Feedback: </label><h3>{data["Peers-Comment"]}</h3>
               </div>
            </div>
         </div>
      </div>
      <div className="emptyspace">

      </div>
   </div>
   )
}