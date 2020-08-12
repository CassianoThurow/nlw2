import React from "react";
import whatsappicons from "../../assets/images/icons/whatsapp.svg";
import "./style.css";
import api from "../../services/api";

export interface Teacher{
  
    id: number,
    avatar: string, 
    bio: string,
    cost: number,
    name: string, 
    subject: string, 
    whatsapp: string,

}


interface TeacherItemPros{
  teacher:Teacher
}

const TeacherItem:React.FunctionComponent<TeacherItemPros> = ({teacher}) => {

  function createNewConnection(){
    api.post('connections', {
      user_id: teacher.id,
    })
  }
  return (
    <article className="teatcher-item">
      <header>
        <img
          src={teacher.avatar}
          alt={teacher.name}
        />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>{teacher.cost}</strong>
        </p>
        <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappicons} alt="" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
