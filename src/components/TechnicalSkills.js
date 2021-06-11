export default function TechnicalSkills(props) {
   const data = props.gree;
   const SkillNames = (data["Skill-Names"]) ? data["Skill-Names"].trim().split(",") : [];
   const SkillValues = (data["Skill-Values"]) ? data["Skill-Values"].trim().split(",") : [];

   const res = [];

   for (let i = 0; i < SkillNames.length; i++) {
      res.push((
         <div key={i} className="col-6">
            <h2 style={{ color: 'blue' }}>{SkillNames[i]}</h2>
            <input type="range" min="1" max="10" value={SkillValues[i]} readOnly />
         </div>
      ))
   }


   return (
      <div className="row">
         {res}
      </div>
   )

}
