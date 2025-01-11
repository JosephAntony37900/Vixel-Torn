import "./TableTeam.css";
import PhotoMember from "../../../img/team-member-9.png";
import TeamMember from "@/components/Atoms/TeamMember/TeamMember";

export default function TableTeam ({teamColor, teamParticipant /* Usa este objeto en vez del atributo local */}){
    
    const objParticipant = {
        srcPhoto: PhotoMember,
        nameMember: "Richardo",
        points: 99999,
    }
    
    return(
        <main className="table-participants-content">
            <div className="center-this-text">
                <h4>{teamColor}</h4>
            </div>
            <div>
                <TeamMember objTeamMember={objParticipant}/>
                <TeamMember objTeamMember={objParticipant}/>
                <TeamMember objTeamMember={objParticipant}/>
                <TeamMember objTeamMember={objParticipant}/>
            </div>
        </main>
    )
}