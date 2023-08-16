import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

function Employees({employees, selectedTeam, handleTeamSelectionChange, handleEmployeeCardClick}){

    

    return(
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
                <option value="teamA">TeamA</option>
                <option value="teamB">TeamB</option>
                <option value="teamC">TeamC</option>
                <option value="teamD">TeamD</option>
              </select>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8">
              <div className="card-collection">
            {
                employees.map((employee) => 
                <div id={employee.id} className={(employee.teamName===selectedTeam?"card m-3 standout":"card m-3")} onClick={handleEmployeeCardClick}>
                  {(employee.gender==='male')?<img className="card-img-top" src={maleProfile} alt="img" />
                  :<img className="card-img-top" src={femaleProfile} alt="img" />}
                  <div className="card-body">
                    <p className="card-title">Full Name: {employee.fullName}</p>
                    <p className="card-text"><b>Designation:</b> {employee.designation}</p>
                    </div>  
                    </div>
                )
            }
            </div>
        </div>
        </div>
        </div>
    )
}

export default Employees;