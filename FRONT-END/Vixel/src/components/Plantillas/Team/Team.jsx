import React from "react";
import './Team.css';
import TeamMember1 from '../../../img/team-member-1.png';
import TeamMember2 from '../../../img/team-member-2.png';
import TeamMember3 from '../../../img/team-member-3.png';
import TeamMember4 from '../../../img/team-member-4.png';
import TeamMember6 from '../../../img/team-member-6.png';
import TeamMember7 from '../../../img/team-member-7.png';
import TeamMember8 from '../../../img/team-member-8.png';
import TeamMember9 from '../../../img/team-member-9.png';
import TeamMember10 from '../../../img/team-member-10.png';
import TeamMember11 from '../../../img/team-member-11.png';
import TeamMember12 from '../../../img/team-member-12.png';
import TeammatesIcons from "../../Atoms/TeammatesIcons/TeammatesIcons";

export default function Team (){
    return(
        <section class="team" id="team">
          <div class="container">

            <h2 class="h2 section-title">Miembros activos del equipo</h2>

            <ul class="team-list">
                <TeammatesIcons imgMember={TeamMember1}/>
                <TeammatesIcons imgMember={TeamMember2}/>
                <TeammatesIcons imgMember={TeamMember3}/>
                <TeammatesIcons imgMember={TeamMember4}/>
                <TeammatesIcons imgMember={TeamMember6}/>
                <TeammatesIcons imgMember={TeamMember7}/>
                <TeammatesIcons imgMember={TeamMember8}/>
                <TeammatesIcons imgMember={TeamMember9}/>
                <TeammatesIcons imgMember={TeamMember10}/>
                <TeammatesIcons imgMember={TeamMember11}/>
                <TeammatesIcons imgMember={TeamMember12}/>
            </ul>

            <button class="btn btn-primary">Ver todos los miembros</button>

          </div>
        </section>

    );
}