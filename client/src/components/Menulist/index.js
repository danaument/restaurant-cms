import React, {useEffect, useState} from "react";
import { ListItem, List } from "../List";
// import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const PostsList = () => {

    const [items, setItems] = useState()

  const getPosts = async () => {
    try {
      const response = await API.getPosts();

    setItems(response.data);

    } catch(error) {
      console.log(error);
    }
  };

  

  useEffect(() => {

    //add conditional logic - if logged in - use user api. if not logged in - use default api.
    getPosts();
  }, []);

  return (
    <div>
      <h1>All Blog Posts</h1>
      <h3 className="mb-5 mt-5">Click on a post to view</h3>
      {/* Replace `[]` with the appropriate arrays */}
      {items.posts.length ? (
        <List>
          {items.posts.map(post => (
            <ListItem key={post._id}>
              <Link to={"/posts/" + post._id}>
                <strong>
                  {post.title} by {post.author}
                </strong>
              </Link>
              <DeleteBtn onClick={() => {removePost(post._id)}} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>You haven't added any posts yet!</h3>
      )}

    </div>
  );
};

export default PostsList;