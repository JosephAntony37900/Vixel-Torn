import "./FrontPageStream.css";

export default function FrontPageStream ({objStream}){
    return(
        <main className="stream-item">
            <img src={objStream.srcPortada}/>
            <p>{objStream.views}</p>
            <h4>{objStream.title}</h4>
            <p>{objStream.nameStreamer}</p>
        </main>
    )
}