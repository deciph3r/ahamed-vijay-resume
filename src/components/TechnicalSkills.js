import React from 'react'
const style={
    color:"blue"
}

export default function TechnicalSkills(props) {
    const data = props.gree;

    return (
        <div style={style}>
            <table>
            <tr>
            <td><h1>{data["skill-name-1"]}</h1>
            <input type="range" min="1" max="10" value={data["skill-value-1"]}></input></td>
           <td> <h1>{data["skill-name-2"]}</h1>
             <input type="range" min="1" max="10" value={data["skill-value-2"]}></input></td>
            </tr>
            <tr>
            <td><h1>{data["skill-name-3"]}</h1>
            <input type="range" min="1" max="10" value={data["skill-name-3"]}></input></td>
           <td> <h1>{data["skill-name-4"]}</h1>
            <input type="range" min="1" max="10" value={data["skill-name-4"]}></input></td>
            </tr>
            <tr>
            
           <td> <h1>{data["skill-name-5"]}</h1>
            <input type="range" min="1" max="10" value={data["skill-value-5"]}></input></td>
            <td><h1>{data["skill-name-6"]}</h1>
             <input type="range" min="1" max="10" value={data["skill-value-6"]}></input></td>
            </tr>
            <tr>
           
            <h1>{data["skill-name-7"]}</h1>
            <input type="range" min="1" max="10" value={data["skill-value-7"]}></input>
            </tr>
           

            </table>
        </div>
    )
}
