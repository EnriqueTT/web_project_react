export default function Popup(props) {
  const { onClose, title, children } = props;

  return (
    <div className="popup">
      <div className={`popup__content ${!title ? "popup__img-div" : ""}`}>
        <button
          aria-label="Close modal"
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
        {title && <h3 className="popup__title">{title}</h3>}

        {children}
      </div>
    </div>
  );
}
