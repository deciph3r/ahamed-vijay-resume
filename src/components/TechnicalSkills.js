export default function TechnicalSkills(props) {
    const data = props.gree;
    const SkillNames= (data["Skill-Names"]) ? data["Skill-Values"].split(",") : [];
    const SkillValues= (data["Skill-Values"]) ? data["Skill-Values"].split(",") : [];
   
    const res=[];

    for(let i=0; i<SkillNames.length;i++){
      res.push((
         <div className="col-6">
            <h1>{SkillNames[i]}</h1>
            <input type="range" min="1" max="10" value={SkillValues[i]}></input>
         </div>
      ))
    }


    return (
       <div className="row">
          {res}
       </div>
    )

}
