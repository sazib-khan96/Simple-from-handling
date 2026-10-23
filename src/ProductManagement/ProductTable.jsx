import React from "react";
import Table from "./Table";

const ProductTable = ({ product }) => {
  return (
    <div>
      <h1>Product table</h1>
      <h2> Product : {product.length}</h2>
      <thead className="border">
        <tr className="flex gap-30 border">
          <th className="">Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <div>
        {product.map((item,index) => (
          <Table item={(item)} key={index + 1}></Table>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
