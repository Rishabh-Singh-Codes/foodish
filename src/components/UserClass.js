import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "loading ...",
        bio: "loading ...",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/Rishabh-Singh-Codes"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;

    // debugger;

    return (
      <div className="user-card">
        <div>
          <img src={avatar_url} className="user-pic" />
        </div>
        <div>
          <h2>Name: {name}</h2>
          <h3>About: {bio}</h3>
          <h4>Username: @Rishabh-Singh-Codes</h4>
        </div>
      </div>
    );
  }
}

export default UserClass;
