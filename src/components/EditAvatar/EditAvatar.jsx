export default function EditAvatar(){

    return(
        <form className="popup__form form photo-form" novalidate>
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
    );
}