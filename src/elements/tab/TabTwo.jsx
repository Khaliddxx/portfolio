import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Experience",
        tab3 = "Awards",
        tab4 = "Education & Certification";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        {/* <Tab>{tab3}</Tab> */}
                                        <Tab>{tab4}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Web Development <span> - MERN Stack</span></a>
                                                    Delight the user and make it work.
                                                </li>
                                                <li>
                                                    <a href="/service">Web and user interface design<span> - Development</span></a>
                                                    Websites, web experiences, data collection.
                                                </li>
                                                <li>
                                                    <a href="/service">Mobile App Development <span> - Native IOS/Android | Cross-Platform</span></a>
                                                    Storyboards, MVPs, Backend, ...
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                    
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="https://congress.iads-web.com/">Website Developer & Design Consultant<span> - International Association of Dental Students IADS</span></a> 
                                                   March 2022 - Current
                                                   {/* <ul style={{listStyleType: "square", paddingLeft: '10px'}}>
                                                       <li>
                                                           a
                                                       </li>
                                                   </ul> */}
                                               </li>
                                               <li>
                                                   <a href="/service">Part-time MERN Full Stack Instructor<span> - GOMYCODE, Egypt</span></a> 
                                                   February 2021 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Student, Data Analytics<span> - Google </span></a> 
                                                   November 2021 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Student Member<span> - ACM & IEEECS </span></a> 
                                                   August 2018 - Current
                                               </li>
                                               <li>
                                                   <a href="/service">Presenter<span> - GITEX Highflyer YouthX, Ai Everything, UAE </span></a> 
                                                   October 2021
                                               </li>
                                               <li>
                                                   <a href="/service">Student, Front-End Development<span> - GOMYCODE, Egypt </span></a> 
                                                   April 2021 - July 2021
                                               </li>
                                               <li>
                                                   <a href="/service">Part-time Teaching Assistant<span> - The American University in Cairo </span></a> 
                                                   January 2018 - December 2019
                                               </li>
                                               <li>
                                                   <a href="/service">IOS Application development bootcamp<span> - London App Brewery </span></a> 
                                                   January 2018 - September 2019
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    {/* <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Awwwards.com <span>- Winner</span></a> 2019 - 2020
                                               </li>
                                               <li>
                                                   <a href="/service">CSS Design Awards <span>- Winner</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a href="/service">Design nominees <span>- site of the day</span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel> */}

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Current BSc In CSCE<span> - The American University in Cairo, Egypt</span></a> 2023
                                               </li>
                                               
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;