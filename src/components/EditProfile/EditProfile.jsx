export default function EditProfile() {

    return(
        <form className="popup__form form" noValidate>
          <fieldset className="form__fieldset">
            <label className="form__label">
              <input
                className="form__name form__input"
                id="name"
                type="text"
                placeholder="Nombre"
                name="name"
                minLength="2"
                maxLength="40"
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
                minLength="2"
                maxLength="200"
                required
              />
              <span className="form__input-error" id="about__input-error">3</span>
            </label>
            <button className="form__submit-button" type="submit">Guardar</button>
          </fieldset>
        </form>
    );
}
