import React from 'react';
import ImageHead from './Imagehead'
import images from './Imagescontent'
import Donation from '../Donation'
import AdminPage from '../admin/AdminPage'

function CreateImage(image) {
  console.log(image);
  return <ImageHead
    key={image.id}
    index={image.index}
    img={image.imgURL}
  />
}

 function Home() {
    return (
      <div>
        <div className="home-page">
          {images.map(CreateImage)}
          <Donation />
        </div>
        <Donation />
        <AdminPage />
      </div>
    )
}


export default Home
