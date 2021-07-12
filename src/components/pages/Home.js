import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useQuery} from 'react-query'

const Home = () => {

  const { isLoading, error, data, refetch } = useQuery ('userList', () => {
    const getData = axios.get("http://localhost:3003/users");
    return getData;
  })

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
  };


  useEffect(() => {
    refetch()
  }, [])


  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        {isLoading ? (
          "Loading..."
        ): (
          <>
            <table className="table border shadow">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.data.reverse().map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-primary mr-2"
                        to={`/users/edit/${user.id}`}
                      >
                        Edit
                      </Link>
                      <Link
                        className="btn btn-danger"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
