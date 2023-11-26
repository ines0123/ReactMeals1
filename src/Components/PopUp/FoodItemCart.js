function FoodItemCart(props) {
  return (
    <div className="row">
      <div className="col-6">{props.name}</div>
      <div className="col-3">{props.price}</div>
      <div className="col-3">
        <input
          type="button"
          value="-"
          onClick={props.onRemove}
          className="btn btn-danger"
        />
        {props.amount}
        <input
          type="button"
          value="+"
          onClick={props.onAdd}
          className="btn btn-success"
        />
      </div>
    </div>
  );
}
export default FoodItemCart;
