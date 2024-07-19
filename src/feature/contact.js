import React from "react";

function Contact(attr) {

    var data =[
        { category: "Student", number: "0469100001", active: true, name: "Arun" },
        { category: "Student", number: "0469100002", active: true, name: "Arun Hari" },
        { category: "Student", number: "0469100003", active: false, name: "Arun Haridas" },
        { category: "Parent", number: "0469100004", active: true, name: "Hari" },
        { category: "Parent", number: "0469100005", active: false, name: "Haridas" },
        { category: "Parent", number: "0469100006", active: true, name: "Haridas K" }
      ];

    var attributes= attr.type;

    return(

        <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{attributes}</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>


    )
}





function ContactCategoryRow(category){
    return(
    <tr>
        <th colSpan="2">
            { category }
        </th>
    </tr>
    )
}

function ContactRow({contact}){

    // console.log(contact);
const name = contact?.active ?contact?.name:
                <span style={{color:'red'}}>
                        { contact?.name }
                </span>

return(
    <tr>
        <td>{name}</td>
        <td>{contact?.number}</td>
    </tr>
)

}

function ContactTable({contacts}){

    contacts.forEach(contact => {
        
    
    });
    return("")
}

export default Contact 