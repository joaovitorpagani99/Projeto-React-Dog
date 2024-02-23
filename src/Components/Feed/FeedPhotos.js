import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useFetch(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }
  }, []);
  return (
    <div>
      <FeedPhotosItem />
    </div>
  );
};

export default FeedPhotos;
