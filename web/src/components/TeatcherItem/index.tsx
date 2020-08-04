import React from "react";
import whatsappicons from "../../assets/images/icons/whatsapp.svg";
import "./style.css";

function TeacherItem() {
  return (
    <article className="teatcher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/42628309?s=460&u=d3fd100f33b2910b682915ea84458f9568277223&v=4"
          alt=""
        />
        <div>
          <strong>Cassiano Thurow</strong>
          <span>Programação</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel veritatis,
        pariatur quas modi inventore veniam, cumque iusto <br />
        quia harum necessitatibus amet tempora reiciendis accusamus, temporibus
        quod eius aspernatur at voluptatibus!
      </p>
      <footer>
        <p>
          Preço/hora
          <strong> R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappicons} alt="" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
