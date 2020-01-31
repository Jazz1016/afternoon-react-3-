import React from "react";
import data from "./data";
import Previous from "./Previous";
import Next from "./Next";
import "../App.css";

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      page: 0
    };
  }

  handlePageNext = () => {
    let newPage = this.state.page;
    if (newPage >= data.length - 1) {
      newPage = 0;
    } else newPage += 1;
    this.setState({ page: newPage });
  };

  handlePageDown = () => {
    let pageDown = this.state.page;
    if (pageDown < 1) {
      pageDown = data.length - 1;
    } else pageDown -= 1;
    this.setState({ page: pageDown });
  };

  render() {
    // console.log(this.state.page);
    // let arrOfIds = this.state.data.map(person => {
    //   return person.id;
    // });

    let movies = data[this.state.page].favoriteMovies.map(movie => {
      return <li>{movie}</li>;
    });
    console.log(data);

    return (
      <div className="grey-box">
        <div className="page-num">
          {this.state.page + 1} / {data.length}
        </div>
        <div className="person">
          <p className="name">{`${data[this.state.page].name.first} ${
            data[this.state.page].name.last
          }`}</p>
          <p className="info">
            <div className="txt">
              <span className="info"> From: </span>
              {data[this.state.page].city}
            </div>

            <div className="txt">
              <span className="info">Job Title: </span>
              {data[this.state.page].title}
            </div>

            <div className="txt">
              <span className="info">Employer: </span>
              {data[this.state.page].employer}
            </div>
          </p>
          <p className="info">
            Favorite Movies:
            <ul className="txt">
              <li type="1">{data[this.state.page].favoriteMovies[0]}</li>
              <li type="1">{data[this.state.page].favoriteMovies[1]}</li>
              <li type="1">{data[this.state.page].favoriteMovies[2]}</li>
            </ul>
          </p>
        </div>
        <nav className="nav">
          <Previous Page={this.handlePageDown} />
          <Next Page={this.handlePageNext} />
        </nav>
      </div>
    );
  }
}

export default StateComponent;

{
  /* Favorite Movies:
              <li>
                Movie1{this.state.data[this.state.page].favoriteMovies[0]}
              </li>
              <li>
                Movie2{this.state.data[this.state.page].favoriteMovies[1]}
              </li>
              <li>
                Movie3{this.state.data[this.state.page].favoriteMovies[2]}
              </li> */
}
