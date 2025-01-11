import "./TeamMember.css";

export default function TeamMember ({objTeamMember}){
    return(
        <main className="content-info-member">
            <img src={objTeamMember.srcPhoto}/>
            <p>{objTeamMember.nameMember}</p>
            <h6>{objTeamMember.points} pts.</h6>
        </main>
    );
}