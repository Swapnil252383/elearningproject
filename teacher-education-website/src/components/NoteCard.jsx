import "./NoteCard.css";

function NoteCard({subject,description}){

return(

<div className="note-card">

<h2>{subject}</h2>

<p>{description}</p>

<button>Download Notes</button>

</div>

)

}

export default NoteCard;