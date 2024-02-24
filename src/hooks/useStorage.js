import { useState } from 'react'
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db ,storage } from '../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import useAuth from './useAuth';
import { collection, addDoc} from "firebase/firestore"; 

const useStorage = ()=>{
    const [progress,setProgress] = useState(0);
    const [error,setError] = useState(null);
    const {user} = useAuth();

    const addPost =(title,description,image,report)=>{
        if (!title && !description && !image && !report ) {
            return;    
        }
        const imageId = uuidv4();
        const reportId = uuidv4();
        const imageFormat = image.type.split("/")[1];
        const reportFormat = report.type.split("/")[1];

        const imageStorageRef = ref(storage, `images/${imageId}.${imageFormat}`);
        const imageUploadTask = uploadBytesResumable(imageStorageRef, image);

        const reportStorageRef = ref(storage, `images/${reportId}.${reportFormat}`);
        const reportUploadTask = uploadBytesResumable(reportStorageRef, report);

            imageUploadTask.on("state_changed",(snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress);
          },(error) => {
            setError(error);
          },async() => {        

            const downloadImageURL = await getDownloadURL(imageUploadTask.snapshot.ref);
            let currentDate= new Date();
            currentDate = currentDate.toLocaleDateString();
            reportUploadTask.on("state_changed",(snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(progress);
              },(error) => {
                setError(error);
              },async() => {            
                const downloadReportURL = await getDownloadURL(reportUploadTask.snapshot.ref);
                await addDoc(collection(db, "posts"), {
                    projectTitle:title,
                    projectDescription:description,
                    imageUrl: downloadImageURL,
                    reportUrl:downloadReportURL,
                    createdAt:currentDate,
                    userEmail:user?.email
                  });
                setProgress(0);
                console.log("Uploaded");
                });
    


            });
    
        
          }

    return{
        progress,
        error,
        setProgress,
        addPost,
    };
}

export default useStorage;