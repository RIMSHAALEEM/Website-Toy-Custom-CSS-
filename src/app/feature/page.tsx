import React from 'react'
import Image from 'next/image'
import img1 from "@/public/img1.png"
import img2 from "@/public/img2.png"
import img3 from "@/public/img3.png"
import img4 from "@/public/img4.png"
import img5 from "@/public/img5.png"
import img6 from "@/public/img6.png"
import img9 from "@/public/img9.png"
import img10 from "@/public/img10.png"
import img11 from "@/public/img11.png"
import img12 from "@/public/img12.png"
import img13 from "@/public/img13.png"
import img14 from "@/public/img14.png"

const Home = () => {
  return (
  <div className="container">
    <h2 className="title">Shop</h2>
    <h2 className="title featured-food">By <span className="accent">Categories</span></h2>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam perferendis blanditiis omnis quisquam repellat porro nisi eaque esse illum. Optio eligendi eaque quis harum? Neque eum eaque quibusdam voluptates.</p>
    <div className="dash"></div>

    <div className="grid">
         {/* First card  */}
        <div className="card card-first">
            <Image className="card-img" src={img1} alt="img" ></Image>
            <div className="card-content">
                {/* <div className="dash"></div> */}
                {/* <h2 className="card-title">Diecast Car Modules</h2> */}
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* Second card  */}
        <div className="card card-second">
            <Image className="card-img" src={img2} alt="img"></Image>
            <div className="card-content">
                {/* <div className="dash"></div> */}
                {/* <h2 className="card-title">Drawings and Paintings</h2> */}
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* Third card */}
        <div className="card card-third">
            <Image className="card-img" src={img3} alt="img"></Image>
            <div className="card-content">
                {/* <div className="dash"></div> */}
                {/* <h2 className="card-title">Guns and Blasters</h2> */}
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>
    </div>

    <div className="grid">
         {/* Fourth card  */}
        <div className="card card-first">
            <Image className="card-img" src={img4} alt="img" ></Image>
            <div className="card-content">
                {/* <div className="dash"></div> */}
                {/* <h2 className="card-title">Diecast Car Modules</h2> */}
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* fifth card  */}
        <div className="card card-second">
            <Image className="card-img" src={img5} alt="img"></Image>
            <div className="card-content">
                {/* <div className="dash"></div> */}
                {/* <h2 className="card-title">Drawings and Paintings</h2> */}
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* sixth card */}
        <div className="card card-third">
            <Image className="card-img" src={img6} alt="img"></Image>
            <div className="card-content">
                {/* <div className="dash"></div> */}
                {/* <h2 className="card-title">Guns and Blasters</h2> */}
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>
    </div>




    {/* new arrival  */}
    <div className="container">
    <h2 className="title">New</h2>
    <h2 className="title featured-food">Arrival <span className="accent">Products</span></h2>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem magnam perferendis blanditiis omnis quisquam repellat porro nisi eaque esse illum. Optio eligendi eaque quis harum? Neque eum eaque quibusdam voluptates.</p>
    <div className="dash"></div>

    <div className="grid">
         {/* First card  */}
        <div className="card card-first">
            <Image className="card-img" src={img9} alt="img" ></Image>
            <div className="card-content">
                <div className="dash"></div> 
                 <h2 className="card-title">Range Rider</h2>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* Second card  */}
        <div className="card card-second">
            <Image className="card-img" src={img10} alt="img"></Image>
            <div className="card-content">
                <div className="dash"></div> 
                <h2 className="card-title">Trainer</h2>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* Third card */}
        <div className="card card-third">
            <Image className="card-img" src={img11} alt="img"></Image>
            <div className="card-content">
                 <div className="dash"></div> 
                 <h2 className="card-title">Mini Racer</h2> 
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>
    </div>

    <div className="grid">
         {/* Fourth card  */}
        <div className="card card-first">
            <Image className="card-img" src={img12} alt="img" ></Image>
            <div className="card-content">
                <div className="dash"></div>
                 <h2 className="card-title">Storm Chaser</h2>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* fifth card  */}
        <div className="card card-second">
            <Image className="card-img" src={img13} alt="img"></Image>
            <div className="card-content">
                 <div className="dash"></div> 
                 <h2 className="card-title">Mini Merc</h2> 
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>

         {/* sixth card */}
        <div className="card card-third">
            <Image className="card-img" src={img14} alt="img"></Image>
            <div className="card-content">
                 <div className="dash"></div> 
                 <h2 className="card-title">Benz Twister</h2> 
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ipsam exercitationem quisquam! Voluptatum eius, quo vel quia ad nesciunt magni. Odio ut fugit sequi fuga eveniet error maiores similique!</p>
            </div>
        </div>
    </div>
    
</div>
</div>






 

  )
};

export default Home
