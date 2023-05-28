import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
  {
    image: "image-21",
    category: "Web Development | Web Design",
    title: "Assistio",
    techs: "React | AWS | Figma",
    link: "https://main.df2af5sh88023.amplifyapp.com/",
  },
  {
    image: "image-22",
    category: "Web Development | Web Design",
    title: "GPT-4 Article Summarizer",
    techs: "Vite | React | Tailwind | RapidAPI | Redux",
    link: "https://gpt4sum.khalidxah.tech/",
  },
  {
    image: "image-20",
    category: "CTO | Visual Identity | System Design | Fullstack Development",
    title: "Elaj",
    techs: "React | AWS | MongoDB | Node | Figma",
    link: "https://elajsd.com",
  },
  {
    image: "image-19",
    category: "Fullstack Development | SysAdmin",
    title: "KSM Sudan",
    techs: "React | MongoDB | Mongoose | Express.js | DevOps | Node",
    link: "https://ksmsudan.com",
  },
  {
    image: "image-18",
    category: "Front End Development",
    title: "Training Project",
    techs: "React | Figma",
    link: "https://gpt3.khalidxah.tech",
  },
  {
    image: "image-17",
    category: "Development",
    title: "IADS Mid-year Congress",
    techs: "React | Node | Javascript | SCRUM | Git | Excel | Figma",
    link: "https://congress.iads-web.com/",
  },
  {
    image: "image-16",
    category: "Founder & Developer",
    title: "Skinly",
    techs: "Branding | Content | Shopify API | CSS | React | Stripe",
    link: "https://skinli.online",
  },
  {
    image: "image-15",
    category: "CEO & Developer",
    title: "Float Animation Studio",
    techs: "React | NodeJS",
    link: "https://floatanimationstudio.com",
  },
  {
    image: "image-14",
    category: "Management & Development",
    title: "IADS Web",
    techs:
      "React | Node | Javascript | MongoDB | Express | SCRUM | Git | Excel| Figma",
    link: "https://iads-web.com",
  },
  {
    image: "image-13",
    category: "Design & Development",
    title: "IADS Kazakh Congress",
    techs: "React | Node | Javascript | SCRUM | Git | Excel | Figma",
    link: "https://kzcongress.iads-web.com/",
  },
  {
    image: "image-1",
    category: "Design & Development",
    title: "Risc-V processor",
    techs: "Verilog",
    link: "https://github.com/Khaliddxx/RISC-V-Processor",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Cache Simulator",
    techs: "C++",
    link: "https://github.com/Khaliddxx/cacheSim",
  },
  {
    image: "image-3",
    category: "3D Game Development",
    title: "Unity",
    techs: "C# | Unity | Blender",
    link: "https://drive.google.com/drive/folders/1GCevlIfHulaEqM6Yrc-lgbWfH_ewRAuc?usp=sharing",
  },
  {
    image: "image-4",
    category: "Acedemic Project",
    title: "Nut Shell",
    techs: "C",
    link: "https://github.com/Khaliddxx/Nut-Shell",
  },
  {
    image: "image-5",
    category: "Mobile Design & Development",
    title: "Get Safe",
    techs: "Kotlin | Swift | Canva | MariaDB",
    link: "https://github.com/Khaliddxx/GetSafe",
  },
  {
    image: "image-6",
    category: "Website",
    title: "CMOS Generator",
    techs: "C++",
    link: "https://github.com/Khaliddxx/CMOS_SpiceGen",
  },
  {
    image: "image-7",
    category: "Development",
    title: "Matrix OOP Class",
    techs: "C++ OOP",
    link: "https://github.com/Khaliddxx/cpp_Matrix_Class",
  },
  {
    image: "image-8",
    category: "Design & Development",
    title: "QuoteLine",
    techs: "React | NodeJS | GraphQL",
    link: "https://github.com/Khaliddxx/QuoteLine-MERNG-cllient",
  },
  {
    image: "image-9",
    category: "Development",
    title: "Verilog Testbench Generator",
    techs: "Verilog",
    link: "https://github.com/Khaliddxx/Verilog-auto-tbgen",
  },
  {
    image: "image-10",
    category: "Development",
    title: "Macro Floorplanner",
    techs: "Python",
    link: "https://github.com/Khaliddxx/Macro_Floorplanner",
  },
  {
    image: "image-11",
    category: "Development",
    title: "Automatic Clockgating",
    techs: "Python",
    link: "https://github.com/Khaliddxx/Automatic_Clock_Gating",
  },
  {
    image: "image-12",
    category: "2D Game Development",
    title: "Brojekt",
    techs: "SFML | C++",
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
                  <p style={{ marginBottom: "10px" }}>{value.category}</p>
                  <h4 style={{ marginBottom: "10px" }}>
                    {/* <a href="/portfolio-details"> */}
                    {value.title}
                    {/* </a> */}
                  </h4>
                  <p>{value.techs}</p>
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
