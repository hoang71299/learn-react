const ProductItem = (props) => {
  const {item } = props
  return (
    <div className="product-item" key={item.id}>
      <img className="product-image" src={item.image} alt={item.name} />
      <h3 className="product-name">{item.name}</h3>
      <div className="product-prices">Giá : {item.price}</div>
    </div>
  );
};

export default ProductItem;
