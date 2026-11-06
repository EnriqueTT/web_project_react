export default function ImagePopup(props) {
  const { link, name } = props.card;

  return (
    <>
      <img class="popup__picture" src={link} alt=" " />
      <p class="popup__description">{name}</p>
    </>
  );
}
