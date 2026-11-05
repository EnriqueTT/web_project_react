import { useState } from "react"
import avatar from "../../images/Avatar.png"
import Popup from "./components/Popup";
import NewCard from "../NewCard/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import Card from "./components/Card"

function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard/>
  };

  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile/>,
  }

  const editAvatarPopup = {
    title: "Cambiar Avatar",
    children: <EditAvatar/>,
  }

  function handleOpenPopup(popup) {
    console.log("holaa")
    setPopup(popup);
  }

   function handleClosePopup() {
    console.log("adios")
    setPopup(null);
  }

const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
  {
    isLiked:false,
    link:"https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    name:"Parque Van",
    _id: "6a18850852bbb80019652d04",
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },{
    isLiked: false,
    _id: '5d1f064ed32b4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

    return (
    <main className="content">
      <section className="profile">
        <div className="picture profile__photo">
          <img
            className="profile__picture"
            src={avatar}
            alt="foto circular de una persona"
            onClick={() => {handleOpenPopup(editAvatarPopup)}}
          />
          <div className="profile__overlay">✏️</div>
        </div>
        <div className="info profile__info">
          <h2 className="info__name">Juanito Perez</h2>
          <button className="info__edit-button" type="button"
          onClick={() => handleOpenPopup(editProfilePopup)}></button>
          <p className="info__about">Explorador</p>
        </div>
        <button className="profile__add-button"
        type="button"
        aria-label="Add card"
        onClick={() => handleOpenPopup(newCardPopup)}/>
      </section>

      {popup && (
        <Popup 
          onClose={handleClosePopup} title={popup.title} >
          {popup.children}
        </Popup>
      )}
     
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
      
      <section className="places">
        
        {cards.map((card) => (
          <Card key={card._id} card= {card} />
        ))}
       
      </section>
      
    </main>
    )
}

export default Main