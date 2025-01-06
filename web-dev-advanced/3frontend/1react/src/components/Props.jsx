function Props(props) {
    // console.log(props);
    // const { name, age } = props;  // props basic & loop props
    const { name, age } = props.profile;  // use .profile

    return (
        <div>
          {/*
          (1) Basic
          <h1>Welcome, Edo</h1>
          <p>Age : 25</p>
          <hr /> 

          (2) Without Destructuring
          <h1>Welcome, {props.name}</h1>
          <p>Age : {props.age}</p>
          <hr /> 

          (3) With Destructuring*/}
          <h1>Welcome, {name}</h1>
          <p>Age : {age}</p>
          <hr />
        </div>
      )
}

export default Props;