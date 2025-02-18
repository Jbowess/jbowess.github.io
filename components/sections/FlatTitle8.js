

import Link from "next/link"
import TitileSlider1 from "../slider/TitileSlider1"
import TitileSlider6 from "../slider/TitileSlider6"
import TitileSlider7 from "../slider/TitileSlider7"
import SignUpForm from "./SignUpForm"
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'
import { useState } from "react"

export default function FlatTitle8() {

    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openSignUpModal = () => {
      setIsSignUpModalOpen(true);
    };
  
    const closeSignUpModal = () => {
      setIsSignUpModalOpen(false);
    };

    return (
        <>
            <div className="flat-pages-title-home8 relative">
                <div className="tf-bg-line" />
                <div className="themesflat-container2">
                    <div className="row">
                        <div className="col-12 pages-title">
                        <div className="content">                
                       
                                <h1> <br></br><h2></h2></h1>
                            </div>
                            <div className="content">
                                <h1>LootBoxes <br></br><h2>Compete In Skill-Based Games</h2></h1>
                                
                                <div className="flat-button flex">
                                    <button onClick={openSignUpModal} className="tf-button style-1 h50 w190 active">Sign Up <i className="icon-wa" /></button>
                                </div>
                            </div>
                            <div className="icon-background">
                                <img className="absolute item1" src="/assets/images/item-background/item8.png" alt="" />
                                <img className="absolute item2" src="/assets/images/item-background/item1.png" alt="" />
                                <img className="absolute item3" src="/assets/images/item-background/item1.png" alt="" />
                                <img className="absolute item4" src="/assets/images/item-background/item7.png" alt="" />
                                <img className="absolute item5" src="/assets/images/item-background/item2.png" alt="" />
                                <img className="absolute item6" src="/assets/images/item-background/item1.png" alt="" />
                                <img className="absolute item7" src="/assets/images/item-background/item9.png" alt="" />
                                <img className="absolute item8" src="/assets/images/item-background/item1.png" alt="" />
                                <img className="absolute item9" src="/assets/images/item-background/item1.png" alt="" />
                                <img className="absolute item10" src="/assets/images/item-background/item2.png" alt="" />
                            </div>
                            
                            <div className="bg-home7">

                            </div>
                        </div>
                    </div>
                </div>
                {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}
            </div>
            <div className="themesflat-container w1490">
                <div className="relative">
                    <TitileSlider1 />
                </div>
            </div>
        </>
    )
}
