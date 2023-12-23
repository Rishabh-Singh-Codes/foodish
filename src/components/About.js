import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>LoggedIn User: {<UserContext.Consumer>{({loggedInUser}) => loggedInUser}</UserContext.Consumer>}</h2>
        <h2>This is the about us page.</h2>
        {/* <User name="Rishabh Singh (Function)"/> */}
        <UserClass name="Rishabh Singh" location="Bangalore" />
      </div>
    );
  }
}

export default About;

// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is the about us page.</h2>
//       {/* <User name="Rishabh Singh (Function)"/> */}
//       <UserClass name="Rishabh Singh (Class)" location="Bangalore (Class)"/>
//     </div>
//   );
// };

// export default About;
