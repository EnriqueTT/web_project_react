export default function ImagePopup(props) {
  const { link, name } = props.card;

  return (
    <>
      <img className="popup__picture" src={link} alt=" " />
      <p className="popup__description">{name}</p>
    </>
  );
}
