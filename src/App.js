import "./App.css";
import React from "react";

const ROOM = "ROOM";
const INCR = "INCR";
const DECR = "DECR";
const ADULT = "ADULT";
const CHILDREN = "CHILDREN";

class App extends React.Component {
  state = {
    roomCount: 1,
    adultCount: 1,
    childrenCount: 0,
  };

  handleClick = (type, action) => {
    let { roomCount, adultCount, childrenCount } = this.state;
    switch (type) {
      case ROOM:
        if (action === DECR && roomCount > 1) {
          roomCount = roomCount - 1;
          if (adultCount + childrenCount > roomCount * 4) {
            childrenCount = 0;
            adultCount = roomCount * 4;
          }
        } else if (action === INCR && roomCount < 5) {
          roomCount = roomCount + 1;
          if (adultCount + childrenCount <= roomCount) {
            adultCount = roomCount;
          }
        }
        break;

      case ADULT:
        if (action === DECR && adultCount > 1) {
          adultCount = adultCount - 1;
          if (adultCount + childrenCount < roomCount) {
            roomCount = roomCount - 1;
          }
        } else if (
          action === INCR &&
          adultCount + childrenCount < roomCount * 4
        ) {
          adultCount = adultCount + 1;
          if (adultCount + childrenCount > roomCount * 4) {
            roomCount = Math.ceil((adultCount + childrenCount) / 4);
          }
        }
        break;

      case CHILDREN:
        if (action === DECR && childrenCount > 0) {
          childrenCount = childrenCount - 1;
          if (adultCount + childrenCount < roomCount) {
            roomCount = roomCount - 1;
          }
        } else if (
          action === INCR &&
          adultCount + childrenCount < roomCount * 4
        ) {
          childrenCount = childrenCount + 1;
          if (adultCount + childrenCount > roomCount * 4) {
            roomCount = Math.ceil((adultCount + childrenCount) / 4);
          }
        }
        break;

      default:
        return null;
    }

    this.setState({ roomCount, adultCount, childrenCount });
  };

  render() {
    const { roomCount, adultCount, childrenCount } = this.state;

    const style = {
      color: "blue",
    };

    return (
      <div className="App" style={{ flex: 1 }}>
        <div>
          <span style={style}>
            <i class="fa fa-users" style={{ color: "blue" }}></i> Choose number
            of <span style={{ fontWeight: "bold" }}>people </span>
          </span>
        </div>
        <table
          class="table table-striped"
          style={{
            border: "1px solid black !important",
            color: "blue",
            width: "50% ",
          }}
        >
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>
                <i class="fa fa-bed" style={{ color: "blue" }}></i> Rooms
              </td>
              <td>
                <i
                  class="fa fa-minus-circle"
                  style={{ color: roomCount === 1 ? "grey" : "blue" }}
                  onClick={() => this.handleClick(ROOM, DECR)}
                ></i>
                {roomCount}
                <i
                  class="fa fa-plus-circle"
                  style={{ color: roomCount === 5 ? "grey" : "red" }}
                  onClick={() => this.handleClick(ROOM, INCR)}
                ></i>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>
                <i class="fa fa-user" style={{ color: "blue" }}></i> Adults
              </td>
              <td>
                <i
                  class="fa fa-minus-circle"
                  style={{ color: adultCount === 1 ? "grey" : "blue" }}
                  onClick={() => this.handleClick(ADULT, DECR)}
                ></i>
                {adultCount}
                <i
                  class="fa fa-plus-circle"
                  style={{
                    color:
                      adultCount + childrenCount === roomCount * 4
                        ? "grey"
                        : "red",
                  }}
                  onClick={() => this.handleClick(ADULT, INCR)}
                ></i>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>
                <i class="fa fa-child" style={{ color: "blue" }}></i> Children
              </td>
              <td>
                <i
                  class="fa fa-minus-circle"
                  style={{ color: childrenCount === 0 ? "grey" : "blue" }}
                  onClick={() => this.handleClick(CHILDREN, DECR)}
                ></i>
                {childrenCount}
                <i
                  class="fa fa-plus-circle"
                  style={{
                    color:
                      adultCount + childrenCount === roomCount * 4
                        ? "grey"
                        : "red",
                  }}
                  onClick={() => this.handleClick(CHILDREN, INCR)}
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
