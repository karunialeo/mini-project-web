import React, { useState, useEffect } from "react";
import { pascalCase } from "change-case";

import { API } from "../config/api";
import { AppWrap } from "../wrapper";

function Customer() {
  const [customer, setCustomer] = useState([]);

  const getCustomer = async () => {
    try {
      const response = await API.get("/customer");
      setCustomer(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getCityName = (city) => {
    switch (city) {
      case "JAK-PUS":
        return "Jakarta Pusat";
      case "JAK-UT":
        return "Jakarta Utara";
      case "JAK-TIM":
        return "Jakarta Timur";
      case "JAK-BAR":
        return "Jakarta Barat";
      case "JAK-SEL":
        return "Jakarta Selatan";
      default:
        return "Jakarta";
    }
  };

  useEffect(() => {
    getCustomer();

    return () => {
      setCustomer([]);
    };
  }, []);

  return (
    <>
      <h1 className="text-4xl pb-10">Customer List</h1>

      <section className="flex justify-center">
        <div className="w-full md:w-[80%] overflow-x-scroll xl:overflow-x-hidden">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Nama
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Domisili
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Jenis Kelamin
                </th>
                <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">
                  More
                </td>
              </tr>
            </thead>
            <tbody>
              {customer.map((user) => (
                <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {user.nama}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {getCityName(user.domisili)}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {pascalCase(user.jenis_kelamin)}
                  </td>
                  <td className="pr-8 relative">
                    <div className="dropdown-content mt-8 absolute left-0 -ml-12 shadow-md z-10 hidden w-32">
                      <ul className="bg-white dark:bg-gray-800 shadow rounded py-1">
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Edit
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Delete
                        </li>
                        <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                          Duplicate
                        </li>
                      </ul>
                    </div>
                    <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-dots-vertical dropbtn"
                        width={28}
                        height={28}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={19} r={1} />
                        <circle cx={12} cy={5} r={1} />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AppWrap(Customer, "customer", "customer");
