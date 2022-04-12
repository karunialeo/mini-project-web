import React, { useState, useEffect } from "react";
import rupiahFormat from "rupiah-format";
import { pascalCase } from "change-case";

import { API } from "../config/api";
import { AppWrap } from "../wrapper";

function Customer() {
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      const response = await API.get("/product");
      setProduct(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();

    return () => {
      setProduct([]);
    };
  }, []);

  return (
    <>
      <h1 className="text-4xl pb-10">Product List</h1>

      <section className="flex justify-center">
        <div className="w-[80%] overflow-x-scroll xl:overflow-x-hidden">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Nama
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Kategori
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Harga
                </th>
                <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">
                  More
                </td>
              </tr>
            </thead>
            <tbody>
              {product.map((pd) => (
                <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {pascalCase(pd.nama)}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {pd.kategori}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {rupiahFormat.convert(pd.harga)}
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
