import React from "react"; 

const auth = () => {
  return (
    <body>
    <form action="/" method="post">
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
        <br/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </body>
  );
}

export default auth; 



