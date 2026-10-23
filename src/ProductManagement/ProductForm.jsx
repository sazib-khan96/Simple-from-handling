import React from "react";

const ProductForm = ({ addProductHandle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quentity.value;

    const newProduct = {
      name,
      price,
      quantity,
    };
    if (!name) {
      alert("hello");
      return;
    }
    else if(!price || price < 0){
    alert('nagative value not allow')
    return
    }

    addProductHandle(newProduct);
  };
  return (
    <div className="border mx-auto w-5xl p-8">
      <h1>Product Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="border p-3"
          name="name"
          type="text"
          placeholder="Product Name"
        />
        <br />
        <input
          className="border p-3 my-3"
          name="price"
          type="number"
          placeholder="Product Price"
        />
        <br />
        <input
          className="border p-3"
          name="quentity"
          type="number"
          placeholder="Product Quantity"
        />
        <br />
        <input
          className="bg-amber-300 px-4 my-8 py-2"
          type="submit"
          value="Upload"
        />
      </form>
    </div>
  );
};

export default ProductForm;
