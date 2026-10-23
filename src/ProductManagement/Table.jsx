import React from "react";

const Table = ({ item }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
        
          <tbody>
            {/* row 1 */}
            <tr>
              <td>{item.index}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
            {/* row 2 */}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
