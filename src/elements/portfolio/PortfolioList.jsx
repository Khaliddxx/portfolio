import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
  {
    image: "image-15",
    category: "CEO & Developer",
    title: "Float Animation Studio",
    link: "https://floatanimationstudio.com",
  },
  {
    image: "image-14",
    category: "Management & Development",
    title: "IADS Web",
    link: "https://iads-web.com",
  },
  {
    image: "image-13",
    category: "Design & Development",
    title: "IADS Congress",
    link: "https://congress.iads-web.com/",
  },
  {
    image: "image-1",
    category: "Design & Development",
    title: "Risc-V processor",
    link: "https://github.com/Khaliddxx/RISC-V-Processor",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Cache Simulator",
    link: "https://github.com/Khaliddxx/cacheSim",
  },
  {
    image: "image-3",
    category: "3D Game Development",
    title: "Unity C#",
    link: "https://drive.google.com/drive/folders/1GCevlIfHulaEqM6Yrc-lgbWfH_ewRAuc?usp=sharing",
  },
  {
    image: "image-4",
    category: "C Development",
    title: "Nut Shell",
    link: "https://github.com/Khaliddxx/Nut-Shell",
  },
  {
    image: "image-5",
    category: "Mobile Design & Development",
    title: "Get Safe",
    link: "https://github.com/Khaliddxx/GetSafe",
  },
  {
    image: "image-6",
    category: "Website",
    title: "CMOS Generator",
    link: "https://github.com/Khaliddxx/CMOS_SpiceGen",
  },
  {
    image: "image-7",
    category: "Development",
    title: "Matrix OOP Class",
    link: "https://github.com/Khaliddxx/cpp_Matrix_Class",
  },
  {
    image: "image-8",
    category: "Design & Development",
    title: "QuoteLine",
    link: "https://github.com/Khaliddxx/QuoteLine-MERNG-cllient",
  },
  {
    image: "image-9",
    category: "Development",
    title: "Verilog Testbench Generator",
    link: "https://github.com/Khaliddxx/Verilog-auto-tbgen",
  },
  {
    image: "image-10",
    category: "Development",
    title: "Macro Floorplanner",
    link: "https://github.com/Khaliddxx/Macro_Floorplanner",
  },
  {
    image: "image-11",
    category: "Development",
    title: "Automatic Clockgating",
    link: "https://github.com/Khaliddxx/Automatic_Clock_Gating",
  },
  {
    image: "image-12",
    category: "2D Game Development",
    title: "C++ SFML Game",
    // link: ""
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                {/* <img src={value.image} alt={`thumbnail ${value.image}`}/> */}
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    {/* <a href="/portfolio-details"> */}
                    {value.title}
                    {/* </a> */}
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href={value.link}>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              {/* <Link className="link-overlay" to="/portfolio-details"></Link> */}
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;