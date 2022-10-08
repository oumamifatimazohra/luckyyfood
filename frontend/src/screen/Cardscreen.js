import React from 'react';
import {Card,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

function Cardscreen() {
  return (
    <div className='Cards'>
  <div className='Card'>
  <Card
  style={{
    width: '20rem'
  }}
>
  <img style={{
    height: '30vh'
  }}
    alt="Sample"
    src="https://i.ibb.co/L05jDgb/chef-08668bdf.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Healthy Cooking

    </CardTitle>
   
    <CardText>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos deleniti magnam enim temporibus at delectus quis nesciunt reprehenderit porro.
    </CardText>
    
  </CardBody>
</Card>
  </div>
  <div className='Card'>
  <Card
  style={{
    width: '20rem'
  }}
>
  <img style={{
    height: '30vh'
  }}
    alt="Sample"
    src="https://i.ibb.co/NLy7bbj/waiter-7ad62d48.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Free Environment

    </CardTitle>
  
    <CardText>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos deleniti magnam enim temporibus at delectus quis nesciunt reprehenderit porro.
    </CardText>
    
  </CardBody>
</Card>
  </div>
  <div className='Card'>
  <Card
  style={{
    width: '20rem'
  }}
>
  <img  style={{
    height: '30vh'
  }}
    alt="Sample"
    src="https://i.ibb.co/q5RC4KG/diliveryman-2ac41c21.jpg"
  />
  <CardBody>
    <CardTitle tag="h5">
    Quick Delivery

    </CardTitle>
   
    <CardText>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eos deleniti magnam enim temporibus at delectus quis nesciunt reprehenderit porro.
    </CardText>
    
  </CardBody>
</Card>
  </div>
    </div>
  )
}

export default Cardscreen

