import React from 'react';
import './Header.css'
import headerImg from '../../../Images/headerImg.jpg'

const Header = () => {
    return (
        <header className="header-design">
            <div className="d-flex justify-content-center  align-items-center" style={{height:"100vh"}}>
                <div className="row w-75 ">
                    <div className="col-md-6">
                        <div className="text-white text-center " >
                            <h3><b>We provide the best experience for you to explore the nature</b></h3>
                            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta eos, maiores illo odio mollitia accusamus aliquam deserunt assumenda suscipit.</p>
                            <button className="btn btn-primary" > Learn More </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="headerImgDesign">
                            <img className="img-fluid" src={headerImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;