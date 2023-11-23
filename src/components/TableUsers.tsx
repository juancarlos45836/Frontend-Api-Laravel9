import { useState, useEffect } from "react";
export function TableUsers() {
  const [users, setUsers] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/api/getUsers")
      .then((res) => res.json())
      .catch((error) => console.error("Error: en la respuesta", error))
      .then((response) => setUsers(response));
  }, []);
  console.log(users);

  return (
    <div>
      <div className="bg-gray-50 min-h-screen">
        <nav>
          <div className="flex justify-between items-center p-4 bg-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 hidden"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10">
                <img
                  className="rounded-full"
                  src="https://forbesthailand.com/wp-content/uploads/2021/08/https-specials-images.forbesimg.com-imageserve-5f47d4de7637290765bce495-0x0.jpgbackground000000cropX11699cropX23845cropY1559cropY22704.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className="p-4">
            <div className="bg-white p-4 rounded-md">
              <div>
                <h2 className="mb-4 text-xl font-bold text-gray-700">
                  Admin & User
                </h2>
                <div>
                  <div>
                    <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div className="px-2 flex flex-col w-[200px] items-center">
                        <span>Name</span>
                      </div>
                      <div className="px-2 flex flex-col w-[200px] items-center">
                        <span>Email</span>
                      </div>
                    </div>
                    <div>
                      {Object.keys(users).map((key) => (
                        <li key={key}>
                          <div className="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                            <div className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4">
                              <div className="px-2 flex flex-col w-[200px] items-center">
                                <span className="text-black">
                                  {users[key].name}
                                </span>
                              </div>
                              <div className="px-2 flex flex-col w-[200px] items-center">
                                <span className="text-black">
                                  {users[key].email}
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
