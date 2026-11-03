
import avatar from "../../images/Avatar.png"

function Main() {

    return (
  <>
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
        <button className="profile__add-button"></button>
      </section>
      <div className="popup">
        <form className="popup__form form" novalidate>
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Editar perfil</h3>
          <fieldset className="form__fieldset">
            <label className="form__label">
              <input
                className="form__name form__input"
                id="name"
                type="text"
                placeholder="Nombre"
                name="name"
                minlength="2"
                maxlength="40"
                aria-label="Nombre"
                required
              />
              <span className="form__input-error" id="name__input-error">55</span>
            </label>
            <label className="form__label">
              <input
                id="about"
                className="form__about form__input"
                type="text"
                placeholder="Acerca de mí"
                name="about"
                aria-label="Acerca de mí"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="form__input-error" id="about__input-error">3</span>
            </label>
            <button className="form__submit-button" type="submit">Guardar</button>
          </fieldset>
        </form>
      </div>
      <div className="popup_photo popup">
        <form className="popup__form form photo-form" novalidate>
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Cambiar Foto de perfil</h3>
          <fieldset className="form__fieldset">
            <label className="form__label">
              <input
                className="form__link form__input"
                type="url"
                id="link"
                placeholder="Enlace a la imagen"
                name="enlace"
                aria-label="Enlace a la imagen"
                required
              />
              <span className="form__input-error" id="link__input-error"></span>
            </label>
            <button className="form__submit-button create-button" type="submit">
              Guardar
            </button>
          </fieldset>
        </form>
      </div>
      <div className="popup_add popup">
        <form className="popup__form form add-form" novalidate>
          <button className="popup__close-button" type="button"></button>
          <h3 className="popup__title">Nuevo Lugar</h3>
          <fieldset className="form__fieldset">
            <label className="form__label">
              <input
                className="form__name form__input"
                id="title"
                type="text"
                placeholder="Título"
                minlength="2"
                maxlength="30"
                name="titulo"
                aria-label="Título"
                required
              />
              <span className="form__input-error" id="title__input-error"></span>
            </label>
            <label className="form__label">
              <input
                className="form__link form__input"
                type="url"
                id="link"
                placeholder="Enlace a la imagen"
                name="enlace"
                aria-label="Enlace a la imagen"
                required
              />
              <span className="form__input-error" id="link__input-error"></span>
            </label>
            <button className="form__submit-button create-button" type="submit">
              Crear
            </button>
          </fieldset>
        </form>
      </div>
      <div className="popup_img popup">
        <div className="popup__img-div">
          <button
            className="popup__close-button popup__close-img"
            type="button"
          ></button>
          <img className="popup__picture" src=" " alt=" " />
          <p className="popup__description"></p>
        </div>
      </div>
      <div className="popup_confirmation popup">
        <form className="popup__form form" novalidate>
          <button
            className="popup__close-button popup__close-img"
            type="button"
          ></button>
          <h3 className="popup__title">Estás seguro/a?</h3>

          <button className="form__submit-button create-button" type="submit">
            Si
          </button>
        </form>
      </div>
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
      </>
    )
}
export default Main