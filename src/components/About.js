import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div>
          <h4> About Us</h4>  
          <p>To do lists don't need to 
              be complicated—plenty of people use a pen and paper for 
              the job without any problem. And yet a new to-do list app seems to 
              come out every day. Why? Because keeping track of your tasks is an intensely
               personal thing, and people will reject anything that doesn't feel right 
               pretty much instantly. That makes it hard to find the right app.</p>
          <Link to='/'>Go Back </Link>
        </div>
    )
}

export default About
