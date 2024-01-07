import "./NewUser.css"

const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="John"/>
          </div>
          <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder="John Kennedy"/>
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="John@gmail.com"/>
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password"/>
          </div>
          <div className="newUserItem">
            <label>Phone</label>
            <input type="number" placeholder="9826776138"/>
          </div>
          <div className="newUserItem">
            <label>Address</label>
            <input type="name" placeholder="Indore MP"/>
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male"/>
            <label form="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"/>
            <label form="female">Female</label>
            <input type="radio" name="gender" id="other" value="other"/>
            <label form="other">Others</label>
            </div>
            
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <div className="newUserSelect">
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            </div>
            
          </div>
          <div className="newUserItem">
          <button className="newUserButton">Create</button>
          </div>
          
        </form>
        
    </div>
  )
}

export default NewUser
