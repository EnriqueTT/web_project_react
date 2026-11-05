import { useState } from "react"
import avatar from "../../images/Avatar.png"
import Popup from "./components/Popup";
import NewCard from "../NewCard/NewCard";

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard/>
  };

  function handleOpenPopup(popup) {
    console.log("holaa")
    setPopup(popup);
  }

   function handleClosePopup() {
    console.log("adios")
    setPopup(null);
  }

    return (
    <main className="content">
      <section className="profile">
        <div className="picture profile__photo">
          <img
            className="profile__picture"
            src={avatar}
            alt="foto circular de una persona"
          />
          <div className="profile__overlay">✏️</div>
        </div>
        <div className="info profile__info">
          <h2 className="info__name">Juanito Perez</h2>
          <button className="info__edit-button" type="button"></button>
          <p className="info__about">Explorador</p>
        </div>
        <button className="profile__add-button"
        type="button"
        aria-label="Add card"
        onClick={() => handleOpenPopup(newCardPopup)}/>
      </section>

      {popup && (
        <Popup className="popup_opened"
          onClose={handleClosePopup} title={popup.title} >
          {popup.children}
        </Popup>
      )}
     
{/* <div className="popup" >
            <div className="popup__content">
                <button aria-label="Close modal" className="popup__close-button" type="button"
                onClick={() => handleClosePopup}></button>
                <h3 className="popup__title">{newCardPopup.title}</h3>
                {newCardPopup.children}
            </div>
        </div> */}

      <template id="card-template">
        <div className="card">
          <img
            className="card__img-trash"
            src="images/Trash.svg"
            alt="Ícono de un bote de basura"
          />
          <img className="card__img" src=" " alt=" " />
          <div className="card__bottom">
            <p className="card__text"></p>
            <img
              className="card__like"
              src="images/Corazon.svg"
              alt="Logo de corazon"
            />
          </div>
        </div>
      </template>
      
      <section className="places"></section>
      
    </main>
    
    )
}
export default Main