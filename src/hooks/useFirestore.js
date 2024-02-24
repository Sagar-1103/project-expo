import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";



const useFirestore = (collectionName) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const q = query(collection(db,collectionName),orderBy("createdAt","desc"));
        // eslint-disable-next-line
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const temp = [];
          querySnapshot.forEach((post) => {
              const info = post.data();
              temp.push(info);
            
          });
          setPosts(temp);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  }, [collectionName]);

  return {
    posts,
    isLoading,
  };
};

export default useFirestore;