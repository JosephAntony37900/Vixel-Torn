import TableTeam from "@/components/Moleculas/TableTeam/TableTeam";
import "./LeaderBoard.css";

export default function LeaderBoard (){
    return(
        <main>
            <h3 className="center-this-tittle">Tabla de clasificación</h3>
            <div className="content-tables-of-participants">
                <TableTeam teamColor={"Rojo"}/>
                <TableTeam teamColor={"Verde"}/>
                <TableTeam teamColor={"Azúl"}/>
            </div>
        </main>
    );
}