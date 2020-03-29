import React, { Component } from "react";
import FbImageLibrary from "react-fb-image-grid";
import FacebookEmoji from "react-facebook-emoji";
import Like from "../../Images/likeIcon.png";
import Comment from "../../Images/CommentIcon.png";
import Share from "../../Images/share.png";
import "../../App.css";
import { FiMessageSquare } from "react-icons/fi";
import { FaShare } from "react-icons/fa";

class Facebook extends Component {
  state={
    like:this.props.like,
    likeBtn:false
  }
  hover = () => {
    document.getElementById("react-Div").style.display = "inline";
    document.getElementById("react-Div").style.position = "absolute";
  };
like=()=>{
  const{like}=this.state  
  this.setState({
    likeBtn:true,
  })
  document.getElementById("react-Div").style.display = "none";

  

}
 
  render() {
    const {
      createBy,
      description,
      img1,
      profileLink,
      createAt,
      like
    } = this.props;
    console.log(like);
    const nameStyle = {
      color: "blue",
      textTransform: "capitalize",
      textDecoration: "none",
      fontSize: "1.8rem"
    };
    console.log(this.like)
    const image =
      "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    return (
      <div style={{backgroundColor:'#E9EBEE'}}>
      <div
        style={{
          width: "30rem",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "1px 1px 1px 2px lightgrey",
          marginTop: "3rem",
          paddingTop: "2rem",
          height:'40rem',
          backgroundColor:'white'


        }}
      >
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
        <p
          style={{
            position: "relative",
            left: "3rem",
            bottom: "1rem",
            fontSize: 1
          }}
        >
          {createAt}
        </p>
        <p
          style={{
            textTransform: "capitalize",
            position: "relative",
            bottom: "1.6rem"
          }}
        >
          {description}
        </p>
        <div style={{ position: "relative", bottom: "3rem" }}>
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
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            id="react-Div"
            className="react"
            style={{
              display: "none",
              position: "relative",
              top: "36rem",
              right: "48rem"
            }}
          >
            <FacebookEmoji onclick={this.click} size="sm" type="like" />
            <FacebookEmoji size="sm" type="love" />
            <FacebookEmoji size="sm" type="wow" />
            <FacebookEmoji size="sm" type="angry" />
            <FacebookEmoji size="sm" type="haha" />
            <FacebookEmoji size="sm" type="sad" />
          </div>
          {this.state.likeBtn? 
          <div>

            {this.state.like.map(item=>{
              return <div style={{display:'inline',position:'absolute', top:'36rem'}}>
                <a>{item} like your photo</a>
              </div>
            
                
            })}
          </div>:<p style={{marginBottom:'3px'}}>no like</p>
          
        }

          <button onClick={this.like}  style={{outline:'none', backgroundColor:'white',borderStyle:'none'  }} href="">
            <img src={Like} height="30px" width="30px" />
            <p
              onMouseOver={this.hover}
              className="like"
              style={{ display: "inline", position: "relative", top: "2px" }}
            >
              Like
            </p>
          </button>
          <a style={{ textDecoration: "none", color: "black" }} href="">
            {/* <img src={Comment} height="30px" width="30px"/> */}
            <FiMessageSquare />

            <p style={{ display: "inline", position: "relative", top: "2px" }}>
              Comment
            </p>
          </a>
          <a style={{ textDecoration: "none", color: "black" }} href="">
            {/* <img src={Share} height="30px" width="30px"/>
             */}
            <FaShare />
            <p style={{ display: "inline", position: "relative", top: "2px" }}>
              Share
            </p>
          </a>
         
        </div>
        <div>
        <a href={img1[0]}>
          {" "}
          <img
            src={img1[0]}
            height="25px"
            width="25px"
            style={{ borderRadius: "50%",marginLeft:'1rem' }}
            
          />
        </a>
        <input type='text' size='45' placeholder='Write a Comment'style={{  
          
          borderRadius: "25px",
          marginLeft:'12px',
          border: "2px solid lightgrey",
          outline:'none'

  }} /> 

        </div>
      </div>
      </div>
    );
  }
}
export default Facebook;
