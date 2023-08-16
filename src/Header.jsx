function Header({selectedTeam, teamMemberCount}){
    return(
        <div className="header">
            <h3>Team Allocation</h3>
            <h5>{selectedTeam} has {teamMemberCount} members.</h5>
        </div>
    )
}

export default Header;