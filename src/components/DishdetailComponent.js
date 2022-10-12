// import React, { Component } from "react";
// import {
//   Card,
//   CardImg,
//   CardImgOverlay,
//   CardText,
//   CardBody,
//   CardTitle,
// } from "reactstrap";
// class Dishdetail extends Component {
//   constructor(props) {
//     super(props);
//   }
//   renderDish(dish) {
//     if (dish != null) {
//       return (
//         <Card>
//           <CardImg width="100%" src={dish.image} alt={dish.name} />
//           <CardBody>
//             <CardTitle>{dish.name}</CardTitle>
//             <CardText>{dish.description}</CardText>
//           </CardBody>
//         </Card>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
//   formatDate(dateString) {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       month: "short",
//       day: "numeric",
//       year: "numeric",
//     });
//   }
//   renderComments(dish) {
//     if (dish != null) {
//       const comments = dish.comments.map((comment) => {
//         return (
//           <li key={comment.id}>
//             <p>{comment.comment}</p>
//             <p>
//               -- {comment.author}, {this.formatDate(comment.date)}
//             </p>
//           </li>
//         );
//       });
//       return (
//         <div>
//           <h4>Comments</h4>
//           <ul className="list-unstyled">{comments}</ul>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
//   render() {
//     if (this.props.sldish != null) {
//       return (
//         <div className="row">
//           <div className="col-12 col-md-5 mt-1">
//             {this.renderDish(this.props.sldish)}
//           </div>
//           <div className="col-12 col-md-5 mt-1">
//             {this.renderComments(this.props.sldish)}
//           </div>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
// }
// export default Dishdetail;

import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments != null) {
    const com = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </li>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">{com}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.sldish != null) {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <div>
            <RenderDish dish={props.sldish} />
          </div>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.sldish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
