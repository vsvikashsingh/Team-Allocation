import {useState, useEffect} from 'react';
import './App.css';
import Employees from './Employees';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import NotFound from './NotFound';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

function handleTeamSelectionChange(event){
  console.log(event.target.value)
  setTeam(event.target.value);
}

function handleEmployeeCardClick(event){
  const transformedEmployees = employees.map((employee)=>
    employee.id ===parseInt(event.currentTarget.id)?(employee.teamName===selectedTeam)?
    {...employee, teamName:''}:{...employee, teamName:selectedTeam}:employee)
 
 setEmployees(transformedEmployees);
 
  }

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB")

  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeesList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])

  useEffect(()=>{
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  },[selectedTeam])


  useEffect(()=>{
    localStorage.setItem('employeesList', JSON.stringify(employees))
  },[employees])

  return (
    <div>
      <Router>
      <Nav />
      <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter((employee)=> employee.teamName===selectedTeam).length} />
      <Routes>
        <Route path = "/" element={
          <Employees employees={employees} selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} 
          handleEmployeeCardClick={handleEmployeeCardClick} />}>
          </Route>
      <Route path= "/GroupedTeamMembers" element={
        <GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />
      } >
      </Route>
      <Route path="*" element={<NotFound />}>

      </Route>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
