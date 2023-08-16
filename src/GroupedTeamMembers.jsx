import { useState } from "react";

function GroupedTeamMembers({employees, selectedTeam, setTeam}){

    const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers())

function groupedTeamMembers(){
    var teams = [];

    var teamAMembers = employees.filter((employee)=> employee.teamName==='teamA');
    var teamA = {team: 'teamA', members:teamAMembers, collapsed: selectedTeam==='teamA'?false:true}
    teams.push(teamA)

    var teamBMembers = employees.filter((employee)=> employee.teamName==='teamB');
    var teamB = {team: 'teamB', members:teamBMembers, collapsed: selectedTeam==='teamB'?false:true}
    teams.push(teamB)

    var teamCMembers = employees.filter((employee)=> employee.teamName==='teamC');
    var teamC = {team: 'teamC', members:teamCMembers, collapsed: selectedTeam==='teamC'?false:true}
    teams.push(teamC)

    var teamDMembers = employees.filter((employee)=> employee.teamName==='teamD');
    var teamD = {team: 'teamD', members:teamDMembers, collapsed: selectedTeam==='teamD'?false:true}
    teams.push(teamD)

return teams;
}

function handleTeamClick(event){
    
}

    return(
        <div className="container">
            {
                groupedEmployees.map((item)=>{
                    return(
                        <div key={item.team} className="card mt-2" style={{cursor:"pointer"}}>
                            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>Team Name: {item.team}
                            </h4>
                            <div id={"collapse_" + item.team} className={item.collapsed===true?"collapse":""} >
                                <hr />
                                {
                                    item.members.map(member=>{
                                        return(
                                            <div className="mt-2">
                                                <h5 className="card-title mt-2">
                                                    <span className="text-dark">Full Name: {member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation} </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
                })
            }
          
        </div>
    )
}

export default GroupedTeamMembers;