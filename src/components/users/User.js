import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {useQuery} from 'react-query'

const User = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery ('userView', () => {
    const viewData = axios.get(`http://localhost:3003/users/${id}`);
    return viewData;
  })

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      {isLoading ? (
        "Loading..."
      ): (
        <>
          {error ? (
             <div>No data found</div>
           ) : null}
          <h1 className="display-4">User Id: {id}</h1>
          <hr />
          <ul className="list-group w-50">
            <li className="list-group-item">name: {data.data.name}</li>
            <li className="list-group-item">user name: {data.data.username}</li>
            <li className="list-group-item">email: {data.data.email}</li>
            <li className="list-group-item">phone: {data.data.phone}</li>
            <li className="list-group-item">website: {data.data.website}</li>
            {/* {
              data.data.address.city === '' ? (
                <>
                  <li className="list-group-item">No city found</li>
                </>
              ): (
                <>
                  <li className="list-group-item">city: {data.data.address.city}</li>
                </>
                
              )
            } */}
          </ul>
        </>
      )}
    </div>
  );
};

export default User;
