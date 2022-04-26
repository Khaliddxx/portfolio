import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor, FiGitBranch } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Technology Solutions',
        description: 'I like optimality by reducing clutter and investing in digital education for digitization.'
    },
    {
        icon: <FiLayers />,
        title: 'Website Development',
        description: 'I handle website development intimately through user centered decisions.'
    },
    {
        icon: <FiUsers />,
        title: 'Marketing & Reporting',
        description: 'Data-driven decision making is a critical part for business growth and success.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Mobile App Development',
        description: 'With touches from user\'s fingers they can interact with the world. Crazy right?'
    },
    {
        icon: <FiGitBranch />,
        title: 'Data Anlaysis',
        description: 'Want to find out what products do you sell more with which circumstances?'
    },
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i} style={{cursor: "pointer"}}>
                            {/* <a href="/service-details"> */}
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            {/* </a> */}
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
