import {FC} from "react";

interface PageSectionHeader {
    value: string
}

const PageSectionHeader: FC<PageSectionHeader> = ({value}) => {
    return (
        <div className="main__header">
            <h1>{value}</h1>
        </div>
    );
};

export default PageSectionHeader;