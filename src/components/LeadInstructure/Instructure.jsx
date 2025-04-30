import React from 'react'
import './Instructure.css';
import instructureImg from '../../assets/mentor.png';


const Instructure = () => {
  return (
    <div className='leadInstructure'>
        <div className="insTitle">
          <h1>Lead <span>Instructure</span></h1>
        </div>
        <div className="instrucutreContainer">
             <div className="insImg">
              <img src={instructureImg}
              alt="instructure"
              className='instructureImg' />
             </div>
             <div className="insLine"></div>
             <div className="insContent">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam ducimus hic et alias deleniti veritatis ipsa saepe nemo fugiat magni quas dignissimos itaque reiciendis <br /> consequuntur, ad totam nihil, commodi nobis at! Ipsum iure non nulla exercitationem quis sint <br /> iusto ipsa eius officiis repudiandae, labore amet Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore, corporis rerum necessitatibus quibusdam. Veritatis adipisci qu</p>
             </div>
        </div>
    </div>
  )
}

export default Instructure
