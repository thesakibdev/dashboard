import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { data } from "@/data/data.js";

export default function Customers() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="w-full m-auto border rounded-lg bg-white overflow-y-auto">
        <div className="my-3 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer">
          <span>Name</span>
          <span className="sm:text-left text-right">Email</span>
          <span className="hidden md:grid">Last Order</span>
          <span className="hidden sm:grid">Method</span>
        </div>
        <ul>
          {data.map((order, id) => (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center justify-between cursor-pointer"
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <BsPersonFill className="text-purple-800" />
                </div>
                <p className="pl-4">
                  {order.name.first + " " + order.name.last}
                </p>
              </div>
              <p className="text-gray-600 sm:text-left text-right">
                {order.name.first}@gmail.com
              </p>
              <p className="hidden md:flex">{order.date}</p>
              <div className="hidden sm:flex justify-between items-center">
                <p className="hidden sm:flex">{order.method}</p>
                <BsThreeDotsVertical />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
