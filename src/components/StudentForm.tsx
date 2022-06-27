import { useState, useEffect } from "react";
import React, { Component } from "react";
import TableData from "./table";
import Link from "../../node_modules/next/link";
function StudentForm(props) {
  const [fName, setFname] = useState("");
  const [lName, setLName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [item, setitem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setitem([
      ...item,
      { fName: fName, lName: lName, address: address, phone: phone },
    ]);
    setFname("");
    setLName("");
    setAddress("");
    setPhone("");
  };
  if (typeof window !== "undefined") {
    localStorage.setItem("data", JSON.stringify(item));
  }
console.log(...item)
  const changeFname = (event) => {
    setFname(event.target.value);
  };
  const changeLname = (event) => {
    setLName(event.target.value);
  };
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };
  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div>
      <form  >
        <div className="grid grid-cols-12 ">
        <span className="my-2 lg:col-span-4 md:col-span-6 sm:col-span-12">
          <label>First Name</label>
          <input
            type="text"
            className="border-2 border-black"
            id="fName"
            value={fName}
            onChange={changeFname}
            required
          ></input>
        </span>
        <span className="my-2 lg:col-span-4 md:col-span-6 sm:col-span-12">
          <label className="flex space-x-4" >Last Name</label>
          <input
            type="text"
            className="border-2 border-black"
            value={lName}
            id="lName"
            onChange={changeLname}
            required
          ></input>
        </span>
        <span className="my-2 lg:col-span-4 md:col-span-6 sm:col-span-12">
          <label className="flex space-x-4">Address</label>
          <input
            value={address}
            type="text"
            placeholder="Adress"
            className="border-2 border-black c"
            required
            onChange={changeAddress}
            id="address"
          ></input>
        </span>
        <span className="my-2 lg:col-span-4 md:col-span-6 sm:col-span-12">
          <label className="flex space-x-4">phone Number</label>
          <input
            value={phone}
            type="Number"
            required
            className="border-2 border-black 1px"
            onChange={changePhone}
            id="phone"
          ></input>
        </span>
        </div>
        <button className="align-middle bg-blue-700 place-items-start" onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}
export default StudentForm;