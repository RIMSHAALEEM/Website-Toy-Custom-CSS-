import React from 'react'
import Image from 'next/image'
import blog1 from "@/public/blog1.png"
import blog2 from "@/public/bog2.png"
import blog3 from "@/public/blog3.png"


const News = () => {
  
    return (
        
        <div className="container">
          <h2 className="title">News</h2>
          <h2 className="title featured-food">And <span className="accent">Update</span></h2>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam perferendis blanditiis omnis quisquam repellat porro nisi eaque esse illum. Optio eligendi eaque quis harum? Neque eum eaque quibusdam voluptates.</p>
          <div className="dash"></div>
      
          <div className="grid">
               {/* First card  */}
              <div className="card card-first">
                  <Image className="card-img" src={blog1} alt="img" ></Image>
                  <div className="card-content">
                      <div className="dash"></div> 
                       <h2 className="card-title">How to select ideal electric car for your kid</h2> 
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
                  </div>
              </div>
      
               {/* Second card  */}
              <div className="card card-second">
                  <Image className="card-img" src={blog2} alt="img"></Image>
                  <div className="card-content">
                      <div className="dash"></div> 
                       <h2 className="card-title">Why Slide are every kid's dream</h2> 
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
                  </div>
              </div>
      
               {/* Third card */}
              <div className="card card-third">
                  <Image className="card-img" src={blog3} alt="img"></Image>
                  <div className="card-content">
                       <div className="dash"></div> 
                       <h2 className="card-title">Best electric car for your child's safety</h2>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
                  </div>
              </div>
          </div>
      
         
             
      
              
          </div>
      
  )
}

export default News
