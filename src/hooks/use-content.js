import { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target){
    const [content, setcontet] = useState([]);
    const { firebase } = useContext(FirebaseContext);
    
    useEffect(() => {
        firebase
        .firestore()
        .collection(target)
        .get()
        .then((snapshot) => {
            const allContent = snapshot.docs.map((contentObj) =>(
                {
                    ...contentObj.data(),
                   docId: contentObj.id
                }
            ));
            setcontet(allContent);
        })
        .catch((error) => {
            console.log(error.message);
        });        
    }, []);

    return { [target]: content }
}