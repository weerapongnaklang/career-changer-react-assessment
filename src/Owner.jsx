import Navbar from "./Nav";
import './style.css'

function Owner() {
  return (
    <div>
      <Navbar />
      <div className="nameOwner">
        <h1>Ruby_Weerapong_Group G_36</h1>
        <img
        style={{width:'500px',}}
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190902124355/ruby-programming-language.png"
          alt="ruby languge"
        />
        <h3>Short Biography</h3>
        <p>My name is Ruby. I'm a learner in JSD6 at Generation Thailand </p>
      </div>
    </div>
  );
}

export default Owner;