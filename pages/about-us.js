import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SignUpForm from "/components/sections/SignUpForm.js"
import { useState, useEffect } from "react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 12,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
}
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

export default function Home() {


    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(storedLoginStatus);
      }, []);
      

    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openSignUpModal = () => {
      setIsSignUpModalOpen(true);
    };
  
    const closeSignUpModal = () => {
      setIsSignUpModalOpen(false);
    };


    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">

                <div>
                    <div className="page-title about-us relative">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                        <h1 data-wow-delay="0s" className="wow fadeInUp">FAQ's</h1>

                                    </div>
                                    <div className="icon-background">
                                        <img className="absolute item1" src="/assets/images/item-background/item11.png" alt="" />
                                        <img className="absolute item2" src="/assets/images/item-background/item10.png" alt="" />
                                        <img className="absolute item3" src="/assets/images/item-background/item12.png" alt="" />
                                        <img className="absolute item4" src="/assets/images/item-background/item13.png" alt="" />
                                    </div>
                                    {/* <div className="relative">
                                        <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-03.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-02.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 counter">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="counter__body-1">
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={12} data-inviewport="yes"><CounterUp count={12} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Live</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={118} data-inviewport="yes"><CounterUp count={118} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Champions</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={478651} data-inviewport="yes"><CounterUp count={478651} time={1} /></span>
                                            </div>
                                            <h6 className="title">Loot Boxes Opened</h6>
                                        </div>
                                        <div className="space">
                                            <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
                                                <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
                                                <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
                                            </svg>
                                        </div>
                                        <div className="counter-1">
                                            <div className="number-counter">
                                                <span className="number" data-speed={3000} data-to={328} data-inviewport="yes"><CounterUp count={328} time={1} /></span>K+
                                            </div>
                                            <h6 className="title">Wins</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">How It Works</h2>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/item-background/about-01.png" alt="" />
                                        <p>STEP 1</p>

                                        <div className="title"><Link href="#">Select a Loot Box</Link></div>
                                        <p>Each loot box holds the potential for extraordinary rewards, your adventure begins with a simple click.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/item-background/about-02.png" alt="" />
                                        <p>STEP 2</p>

                                        <div className="title"><Link href="#">Consider Options</Link></div>
                                        <p>Immerse yourself in the thrill of the unboxing experience. With each opening, you'll be greeted with anticipation as you unveil the secrets hidden within.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/item-background/about-03.png" alt="" />
                                        <p>STEP 3</p>
                                        <div className="title"><Link href="#">Recieve Your Rewards</Link></div>
                                        <p>Outshine Atlas, grab exclusive rewards! Open your loot box, and prove you're the best. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="widget-our-team">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">Meet Our Amazing Team</h2>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-01.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-02.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-03.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-04.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-05.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.5s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-06.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center">
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-07.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-08.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-09.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-10.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-11.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Link href="#" className="tf-button style-1 h50 w190 m-auto">Join us<i className="icon-arrow-up-right2" /></Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="tf-section-2 wrap-accordion pt-80">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">Frequently Asked Questions</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion">
                                    <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(1)}>1. What is a loot box platform?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <p>A loot box platform is an online service or marketplace where users can purchase virtual loot boxes containing randomized virtual items or rewards for use in video games or other digital experiences.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(2)}>2. How do loot boxes work?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <p>Loot boxes typically work by allowing users to purchase or earn virtual boxes containing random items of varying rarity. Users can then open these boxes to reveal the contents, which may include in-game items, cosmetics, or other virtual rewards.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>3. Are loot boxes considered gambling?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>The classification of loot boxes as gambling is a topic of debate and regulation varies by jurisdiction. Some consider loot boxes to be a form of gambling due to their randomized nature and potential for real-money investment, while others argue that they are closer to collectible card games or blind-box toys.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>4. What types of items can I find in loot boxes?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>Loot boxes can contain a wide variety of items, including in-game currency, character skins, weapons, emotes, and other virtual cosmetics or enhancements. The specific items available may vary depending on the game or platform.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>5. Are loot box contents predetermined or truly random?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>The randomness of loot box contents varies depending on the platform and implementation. While some platforms may use true randomization algorithms, others may predetermine the contents of loot boxes before they are opened.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion2">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>6. Can I trade or sell items obtained from loot boxes?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                <p>Whether or not you can trade or sell items obtained from loot boxes depends on the platform and the terms of service. Some platforms allow for trading or selling of virtual items, while others restrict or prohibit such activities.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>7. Are loot box purchases regulated to protect consumers?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                <p>Regulations regarding loot box purchases vary by country and region. Some jurisdictions have implemented regulations to protect consumers from potential harm associated with loot box mechanics, such as age restrictions or disclosure requirements.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>8. How does pricing for loot boxes work?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <p>Pricing for loot boxes can vary widely depending on factors such as the rarity of items contained within, the perceived value of the contents, and the platform's pricing strategy. Some platforms offer loot boxes for purchase with real currency, while others may allow users to earn them through gameplay or other means.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(9)}>9. Are there limits to how many loot boxes I can purchase?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                <p>Some platforms may impose limits on the number of loot boxes users can purchase within a certain time period. These limits may be in place to prevent excessive spending or to comply with regulations aimed at protecting consumers from harm.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(10)}>10. How can I ensure fairness and transparency when using loot box platforms?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                <p>Transparency and fairness are important considerations for loot box platforms. Users should look for platforms that provide clear information about the odds of obtaining specific items, as well as policies regarding refunds, trading, and dispute resolution.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="content">
                                        <div className="text">Still have question?</div>
                                        <p>Can't find what you're looking for? Please <Link href="#" className="tf-color">chat to our friendly team</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="widget-income">
                                        <div className="title">Start Earning Real-Life Rewards Today</div>
                                        <p>get started with the highest rewarding and fair loot box platform now.</p>
                                        <button onClick={openSignUpModal} href="#" className="tf-button style-1 h50 w190">Get started<i className="icon-arrow-up-right2" /></button>
                                        <div className="image">
                                            <img className="icon-1" src="/assets/images/item-background/item11.png" alt="" />
                                            <img className="icon-2" src="/assets/images/item-background/item12.png" alt="" />
                                            <img className="icon-3" src="/assets/images/item-background/item13.png" alt="" />
                                            <img className="icon-4" src="/assets/images/item-background/item14.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
                {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}
            </Layout>
        </>
    )
}