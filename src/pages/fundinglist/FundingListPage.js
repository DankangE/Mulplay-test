import "./FundingListPage.css"
import { useState } from 'react';
import image1 from '../../assets/image/profile1.png';
import FundingListPage_Card from "../../components/layout/ListCard";


const FundingListPage = () => {

    return (
        <div className="fundinglistpage">
            <div className="fundinglist_tab">
                <ul className="fundinglist_tabs">
                    <li data-index="0">
                        <button className="fundinglist_Imagetab">
                            <div className="Imagetab_img">
                                <img src={image1} alt="" width={50}/>
                            </div>
                            <div>전체</div>
                        </button>
                    </li>
                    <li data-index="1">
                        <button className="fundinglist_Imagetab">
                            <div className="Imagetab_img">
                                <img src={image1} alt="" width={50}/>
                            </div>
                            <div>웹</div>
                        </button>
                    </li>
                    <li data-index="2">
                        <button className="fundinglist_Imagetab">
                            <div className="Imagetab_img">
                                <img src={image1} alt="" width={50}/>
                            </div>
                            <div>애플리케이션</div>
                        </button>
                    </li>
                    <li data-index="3">
                        <button className="fundinglist_Imagetab">
                            <div className="Imagetab_img">
                                <img src={image1} alt="" width={50}/>
                            </div>
                            <div>일반 소프트웨어</div>
                        </button>
                    </li>
                    <li data-index="4">
                        <button className="fundinglist_Imagetab">
                            <div className="Imagetab_img">
                                <img src={image1} alt="" width={50}/>
                            </div>
                            <div>게임</div>
                        </button>
                    </li>
                    <li data-index="5">
                        <button className="fundinglist_Imagetab">
                            <div className="Imagetab_img">
                                <img src={image1} alt="" width={50}/>
                            </div>
                            <div>커머스 쇼핑몰</div>
                        </button>
                    </li>
                    <li data-index="6">
                        <button className="fundinglist_Imagetab">
                            <div className="Imagetab_img">
                                <img src={image1} alt="" width={50}/>
                            </div>
                            <div>퍼블리싱</div>
                        </button>
                    </li>
                    <li data-index="7">
                        <button className="fundinglist_Imagetab">
                            <div className="Imagetab_img">
                                <img src={image1} alt="" width={50}/>
                            </div>
                            <div>디자인</div>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="fundinglist_contents">
                <div className="fundinglist_title">
                    <p>전체</p>
                    <div className="fundinglist_title_tab">
                        <ul>
                            <li>추천순</li>
                            <li>최신순</li>
                            <li>달성률순</li>
                            <li>마감임박순</li>
                        </ul>
                    </div>
                </div>

                <div className="">
                    <FundingListPage_Card />
                    <FundingListPage_Card />
                    <FundingListPage_Card />
                    <FundingListPage_Card />
                    <FundingListPage_Card />
                    <FundingListPage_Card />
                </div>
            </div>
        </div>
    )
}

export default FundingListPage;