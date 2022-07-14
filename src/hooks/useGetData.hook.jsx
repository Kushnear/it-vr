import React, {useState, useEffect} from 'react'
import getPhotos from '../services/getPhotos.service'

export const useGetData = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
      const promise = getPhotos();
      promise.then(photoData => {setData(photoData)})
      .catch(e => console.log(e));
  }, [])

  return data;
}
