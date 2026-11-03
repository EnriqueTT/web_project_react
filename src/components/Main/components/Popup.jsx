export default function Popup(props) {
    const {title, children} = props;

    return(
        <div className="popup">
            <div className="popup__content">
                <button className="popup__close-button" type="button"></button>
                <h3 className="popup__title">{title}</h3>
                {children}
            </div>
        </div>
    )
}