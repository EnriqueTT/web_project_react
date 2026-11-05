export default function NewCard() {
    return (
        <form className="popup__form form add-form" name="card-form" id="new-card-form" noValidate>
          <fieldset className="form__fieldset">
            <label className="form__label">
              <input
                className="form__name form__input"
                id="title"
                type="text"
                placeholder="Título"
                minLength="1"
                maxLength="30"
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
    );
}