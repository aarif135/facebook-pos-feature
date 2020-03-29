import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Facebook from './Components/FacebookComponent'
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'
import * as moment from 'moment'
class App extends Component{
render(){
  const img="img.jpg"
  const createAt=moment().calendar();  
  this.state={
    like:["arif"]
  }             
  return(
    <div>
      <Facebook  description={
        "having a wonderFull dinner with family it is very memorable for us"} 
      createBy={"Muhammad aarif ahmad"}
        img1={[img1,img2,img3,img4,img5]}
        profileLink={"https://www.facebook.com/arif.ahmad.1466126"}
        createAt={createAt}
        like={this.state.like}
      />

    

    </div>

  )
}

}

export default App;
