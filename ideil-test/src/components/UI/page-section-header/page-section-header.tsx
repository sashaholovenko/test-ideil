import {FC} from "react";
import twitterLogo from "../../../assets/twitter-logo-small.svg";
import facebookLogo from "../../../assets/facebook-logo-small.svg";

interface PageSectionHeader {
    value: string
    fontSize: number
}

const PageSectionHeader: FC<PageSectionHeader> = ({value, fontSize}) => {
    return (
        <div className="main-header" style={{fontSize: `${fontSize}px`}}>
            <h1>{value}</h1>

        </div>
    );
};

export default PageSectionHeader;