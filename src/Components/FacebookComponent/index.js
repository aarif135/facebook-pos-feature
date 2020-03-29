import React, { Component } from "react";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from 'react-facebook-emoji';
import Like from '../../Images/likeIcon.png'
import Comment from '../../Images/CommentIcon.png'
import Share from '../../Images/share.png'
import '../../App.css'

class Facebook extends Component {
  hover=()=>{
    document.getElementById("react-Div").style.display="inline"
    document.getElementById("react-Div").style.position="absolute"

  }
  hoverOff=()=>{
    document.getElementById("react-Div").style.display="none"

  }
  render() {
    const { createBy, description, img1, profileLink, createAt } = this.props;
    const nameStyle = {
      color: "blue",
      textTransform: "capitalize",
      textDecoration: "none",
      fontSize: "1.8rem"
    };

    const image =
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    return (
      <div style={{    width: "30rem",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow:'1px 1px 1px 2px lightgrey',
      marginTop:'3rem',
      paddingTop:'2rem'
      }}>
        <a href={img1[0]}>
          {" "}
          <img
            src={img1[0]}
            height="40px"
            width="40px"
            style={{ borderRadius: "50%" }}
          />
        </a>
        <a href={profileLink} target="blank" style={nameStyle}>
          {createBy}
        </a>
        <p style={{position:"relative",left:'3rem', bottom:'1rem', fontSize:1}}>{createAt}</p>
        <p style={{ textTransform: "capitalize" ,position:'relative',bottom:'1.6rem'}}>{description}</p>
        <div style={{position:"relative",bottom:'3rem'}}>
          <FbImageLibrary
            images={[
              image,
              img1[0],
              img1[1],
              img1[2],
              img1[3],
              img1[4],
              img1[5]
            ]}
          />
        </div>
        <div style={{display:"flex", justifyContent:'space-around'}}> 
        <div  id="react-Div" className="react" style={{display:"none"}}>
        <FacebookEmoji type="like"/>
        <FacebookEmoji type="love"/>
        <FacebookEmoji type="wow"/>
        <FacebookEmoji type="yay"/>
        <FacebookEmoji type="angry"/>
        <FacebookEmoji type="haha"/>
        <FacebookEmoji type="sad"/>
    </div>
        <a style={{textDecoration:"none",color:'black'}} href="">
          <img  src={Like} height="30px" width="30px"/>
          <p onMouseOver={this.hover} onMouseOut={this.hoverOff} className="like" style={{display:"inline" ,position:"relative",top:'2px' ,}}>Like</p>
          </a>
          <a style={{textDecoration:"none",color:'black'}} href="">
          <img src={Comment} height="30px" width="30px"/>
          <p style={{display:"inline" ,position:"relative",top:'2px'}}>Comment</p>
          </a>
          <a style={{textDecoration:"none",color:'black'}} href="">
          <img src={Share} height="30px" width="30px"/>
          <p  style={{display:"inline" ,position:"relative",top:'2px'}}>Share</p>
          </a>



        </div>
      </div>
    );
  }
}
export default Facebook;
