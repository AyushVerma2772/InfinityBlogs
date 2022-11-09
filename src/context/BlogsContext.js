import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect, createContext } from "react";
import { db } from "../firebase-config";

// creating context
export const BlogsContext = createContext();


export const BlogsContextProvider = ({ children }) => {

    // creating an empty array for storing users data
    const colRef = collection(db, "blogs");
    const [blogs, setBlogs] = useState([]);

    //! Fetching data of all users
    useEffect(() => {
        const unsub = onSnapshot(colRef, snapshot => {
            setBlogs(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        });

        return () => {
            unsub();
        }

        // eslint-disable-next-line
    }, [])

    

    return (
        <BlogsContext.Provider value={blogs} >
            {children}
        </BlogsContext.Provider>
    );

}
