import React from 'react';

function DestinationList() {
  const destinations = [
    { name: 'Paris, France', description: 'The city of lights and romance.', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg' },
    { name: 'Tokyo, Japan', description: 'A perfect blend of tradition and technology.', image: 'https://media.cntraveler.com/photos/63482b255e7943ad4006df0b/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg' },
    { name: 'Sydney, Australia', description: 'Home to the famous Sydney Opera House.', image: 'https://cms.finnair.com/resource/blob/673872/3523a759b61b788b834fe56aa57fa255/sydney-main-data.jpg?impolicy=crop&width=2247&height=2247&x=877&y=0' },
    { name: 'New York, USA', description: 'The city that never sleeps.', image: 'https://image.cnbcfm.com/api/v1/image/106268734-1574876711571gettyimages-1059614218.jpeg?v=1576856860' },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {destinations.map((destination, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card">
              <img src={destination.image} className="card-img-top" alt={destination.name} height="100rem" width="100rem"/>
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text">{destination.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationList;
