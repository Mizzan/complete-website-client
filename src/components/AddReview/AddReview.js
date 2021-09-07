import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState('');

  const onSubmit = (data) => {
    const itemData = {
      name: data.name,
      quote: data.quote,
      whereFrom: data.whereFrom,
      imageURL: imageURL,
    };
    const url = `https://gentle-temple-03042.herokuapp.com/addReview`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemData),
    }).then((res) => console.log('server side response', res));
    alert('You review added successfully');
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '6649be412aa6fc905f380e4aa868fe91');
    imageData.append('image', event.target.files[0]);

    const axiosPost = async () => {
      try {
        const imgData = await axios.post(
          'https://api.imgbb.com/1/upload',
          imageData
        );
        // console.log(imgData.data.data.display_url);
        setImageURL(imgData.data.data.display_url);
      } catch (err) {
        console.log(err);
      }
    };

    axiosPost();
  };
  return (
    <div>
      <h1>Add your review item here</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <input
              name="name"
              className="form-control"
              placeholder="Your Name"
              ref={register}
            />
          </div>
          <div className="col">
            <textarea
              name="quote"
              className="form-control"
              placeholder="Enter your comment here"
              ref={register}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              name="itemImage"
              className="form-control mt-4"
              type="file"
              onChange={handleImageUpload}
              ref={register}
            />
          </div>
          <div className="col">
            <input
              name="whereFrom"
              className="form-control mt-4"
              type="text"
              placeholder="Enter location"
              ref={register}
            />
          </div>
          <div className="col">
            {imageURL !== '' ? (
              <input
                className="primary-button mt-4"
                type="submit"
                defaultValue="Add Review"
              />
            ) : (
              <input
                className="manage-btn mt-4"
                defaultValue="Wait for image upload."
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
