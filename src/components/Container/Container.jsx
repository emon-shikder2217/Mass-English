import { BsBookFill } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import './Container.css';



const Container = () => {
  return (
    <>
      <div className="parent">
        <div className='child1'>
          <div className="head1">
            <div className="bookIcon">
              <BsBookFill />
            </div>
            <h3>English  <span className='span'>Grammer</span></h3>
          </div>
          <div className="child1Content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ad iure perspiciatis. Dolores numquam cumque doloremque?
            </p>
          </div>
        </div>
        <div className='child2'>
        <div className="head2">
            <div className="micIcon">
            <FaMicrophoneAlt />
            </div>
            <h3>English  <span className='span'>Spoken</span></h3>
          </div>
          <div className="child2Content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quod quos perspiciatis cupiditate corrupti sunt rem.</p>
          </div>
        </div>
        <div className='child3'>
        <div className="head2">
            <div className="goalIcon">
            <GoGoal />
            </div>
            <h3>IELTS  <span className='span'>Practice</span></h3>
          </div>
          <div className="child2Content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo similique aliquid consectetur velit...</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Container