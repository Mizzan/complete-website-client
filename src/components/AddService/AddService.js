import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState('');

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      price: data.price,
      serviceInfo: data.serviceInfo,
      imageURL: imageURL,
    };
    const url = `https://gentle-temple-03042.herokuapp.com/addService`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log('server side response', res));
    alert('You service added successfully');
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
      <h1>Add your service here</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col">
            <input
              name="name"
              className="form-control"
              placeholder="Service Name"
              ref={register}
            />
          </div>
          <div className="col">
            <textarea
              name="serviceInfo"
              className="form-control"
              placeholder="Service Info"
              ref={register}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              name="serviceImage"
              className="form-control mt-4"
              type="file"
              onChange={handleImageUpload}
              ref={register}
            />
          </div>
          <div className="col">
            <input
              name="price"
              className="form-control mt-4"
              type="text"
              placeholder="Enter price"
              ref={register}
            />
          </div>
          <div className="col">
            {imageURL !== '' ? (
              <input
                className="primary-button mt-4"
                type="submit"
                defaultValue="Add Service"
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
