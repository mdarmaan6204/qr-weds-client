import { useEffect } from "react";
import { useState } from "react";
import { useAuth } from "../auth";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { authorizationToken, API } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(users ${data});
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user on delete button
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(users after delete: ${data});

      if (response.ok) {
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                NAME
              </th>
              <th scope="col" className="px-6 py-3">
                MOBILE NUMBER
              </th>
              <th scope="col" className="px-6 py-3">
                EDIT
              </th>
              <th scope="col" className="px-6 py-3">
                DELETE
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((curUser, index) => {
              return (
                // <tr key={index}>
                //   <td>{curUser.username}</td>
                //   <td>{curUser.phone}</td>
                //   <td>
                //     <Link to={"/admin/users/${curUser._id}/edit"}>Edit</Link>
                //   </td>
                //   <td>
                //     <button onClick={() => deleteUser(curUser._id)}>
                //       Delete
                //     </button>
                //   </td>
                // </tr>
                <tr
                  key={curUser?.index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {curUser?.username}
                  </th>
                  <td className="px-6 py-4">{curUser?.phone}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={"/admin/users/${curUser._id}/edit"}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => deleteUser(curUser._id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.phone}</td>
                    <td>
                      <Link to={"/admin/users/${curUser._id}/edit"}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(curUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminUsers;
