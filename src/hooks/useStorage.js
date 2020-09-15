import { useState, useEffect } from "react";
import { storage, firestore, timeStamp } from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = storage.ref(file.name);
    const collectionRef = firestore.collection("images");

    // to upload file to firebase storage use the put method, it is async and so we can attach events to it.
    // storageRef.put(file).on(event, progress, error, url)

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => setError(error),
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({ url, createdAt: timeStamp() });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;
