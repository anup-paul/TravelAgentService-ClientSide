import React from 'react';
import './MemorableMoments.css';
import memorableImg from '../../../Images/memorableImg.jpg';

const MemorableMoment = () => {
    return (
        <section>
            <h3 className="text-center my-5" ><b>Memories</b></h3>
            <div className="d-flex justify-content-center align-items-center my-5 memorableRow">
                <div className="row w-75">
                    <div className="col-md-6">
                        <div>
                            <h3><b>Amazing Image Capture <br/> From Wonderland</b></h3>
                            <p className="text-secondary my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error soluta eos, maiores illo odio mollitia accusamus aliquam deserunt assumenda suscipit.</p>
                            <button className="btn btn-primary" > Check it Out </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="memorableImgDesign">
                            <img className="img-fluid" src={memorableImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MemorableMoment;