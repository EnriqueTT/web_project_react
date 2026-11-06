export default function Card(props) {
  const { name, link, isliked } = props.card;

  return (
    <li className="card">
      <img
        className="card__img"
        src={link}
        alt={name}
        onClick={props.onPictureClick}
      />
      <button
        className="card__delete-button"
        aria-label="Delete card"
        type="button"
        onClick={props.onDeleteClick}
      />
      <div className="card__bottom">
        <p className="card__text">{name}</p>
        <button
          className="card__like-button"
          src="../../../images/Corazon.svg"
          type="button"
        />
      </div>
    </li>
  );
}
