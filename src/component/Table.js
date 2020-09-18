import React from 'react';
const table=(props) =>{
    return(
                 <tr>
                <td>{props.no}</td>
                <td>{props.name}</td>
                <td>{props.salary}</td>
                <td>{props.grade}</td>
                <td>{props.status}</td>
                </tr>
        
 

    )
}
export default table;