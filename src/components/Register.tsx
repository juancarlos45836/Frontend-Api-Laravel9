import { ReactElement, useState } from "react";
import axios from "axios";

interface DataInterface {
  name: string;
  email: string;
  password: number;
  passwordConfirmation: number;
}
export default function Register() {
  const [data, setData] = useState<DataInterface>({
    name: "",
    email: "",
    password: 0,
    passwordConfirmation: 0,
  });

  const handleName = (value: string) => {
    setData({ ...data, name: value });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value });
  };
  const handlePassword = (value: number) => {
    setData({ ...data, password: value });
  };
  const handlePasswordConfirmation = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setData({ ...data, passwordConfirmation: e.target.valueAsNumber });
  };

  const sendData = (e: Event) => {
    e.preventDefault();

    fetch("http://localhost:8000/api/register", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "cache-control": "no-cache",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error: en la respuesta", error))
      .then((response) => console.log("Success:", response));
  };
  return (
    <div className="font-sans">
      <div className="relative w-[500px] min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor=""
              className="block mt-3 text-sm text-gray-700 text-center font-semibold"
            >
              Registrate
            </label>
            <form onSubmit={sendData} className="mt-10">
              <div>
                <input
                  type="text"
                  onChange={(e) => handleName(e.target.value)}
                  required
                  name="name"
                  placeholder="Nombres"
                  className="mt-1 text-black block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="email"
                  onChange={handleEmail}
                  required
                  name="email"
                  placeholder="Correo electronico"
                  className="mt-1 text-black  block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  onChange={(e) => handlePassword(e.target.valueAsNumber)}
                  required
                  name="password"
                  placeholder="Contraseña"
                  className="mt-1 text-black  block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <input
                  type="password"
                  onChange={handlePasswordConfirmation}
                  required
                  name="password_confirmation"
                  placeholder="Confirmar contraseña"
                  className="mt-1 text-black  block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                />
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Registrar
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <hr className="border-gray-300 border-1 w-full rounded-md" />
                <label className="block font-medium text-sm text-gray-600 w-full">
                  Registrate con
                </label>
                <hr className="border-gray-300 border-1 w-full rounded-md" />
              </div>

              <div className="flex mt-7 justify-center w-full"></div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <a
                    href="#"
                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    Iniciar sesion
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
