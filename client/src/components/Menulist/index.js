import React, { useEffect, useState } from "react";
// import { ListItem, List } from "../List";
// import DeleteBtn from "../DeleteBtn";
// import { Link } from "react-router-dom";
import API from "../../utils/API";

const Menulist = () => {
  const [items, setItems] = useState();

  const getDefault = async () => {
    try {
      const response = await API.getDefault();

      setItems(response.data);

      console.log(response.data);
      // console.log(JSON.stringify(items)); //always undefined
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //add conditional logic - if logged in - use user api. if not logged in - use default api.
    getDefault();
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {/* Replace `[]` with the appropriate arrays */}
      {items ? <p> {items[0].name} </p> : <h3>You haven't added any items yet!</h3>}
    </div>
  );
};

export default Menulist;
