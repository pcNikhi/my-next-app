import React, { useState, useEffect } from "react";
import Link from "../../node_modules/next/link";
function TableData() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("data")));
  }, []);
  console.log(cart);
  
  return (
    <>
      <div className="items-center">
        <table className="bg-orange-200 border border-collapse border-black table-auto">
          <tr>
            <td className="border border-black ">First Name</td>
            <td className="border border-black">Last Name</td>
            <td className="border border-black">Adress</td>
            <td className="border border-black">Phone number</td>
            <td className="border border-black">edit</td>
          </tr>
          {cart.map(function (d, id) {
            return (
              <tr>
                <td className="border border-black">{d.fName}</td>
                <td className="border border-black">{d.lName}</td>
                <td className="border border-black">{d.address}</td>
                <td className="border border-black">{d.phone}</td>
                <td className="border border-black">
                  <button >remove</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default TableData;
