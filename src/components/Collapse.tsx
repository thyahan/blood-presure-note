import { FaAngleDown, FaRegCheckSquare } from "react-icons/fa";
import { useState } from "react";
import ProductCard from "./ProductCard";

interface Props {
  list: Array<any>;
  noCheckbox?: boolean;
  icon?: React.ReactNode;
}

const Collapse = ({ list, noCheckbox, icon }: Props) => {
  const [isExpand, setIsExpand] = useState(false);

  const expandClassName = isExpand ? "collapse-header-icon-rotate" : "";
  const headerClassName = isExpand ? "collapse-header-expand" : "";
  const bodyClassName = isExpand ? "collapse-body-expand" : "";
  const bodyContentClassName = isExpand ? "visible" : "invisible";

  return (
    <div className="collapse">
      <div className={`collapse-header ${headerClassName}`}>
        {icon && <div className="collapse-header-title-icon">{icon}</div>}
        <div className="collapse-header-content">
          <p>
            hello myname is adfgjdlfg sdfgl;kdjfgjdf klkjkjkjdfgklkjkjkjdfgklkjkjkjdfg klkjkjkjdfgklkjkjkjdfgklkjkjkjdfg kjdklfjg lksdjfkjkdf gsfgsfg
            sdfgkj kj kjkjkjkjkj dsfgkljlkj
          </p>
          <p>hello myname is adfgjdlfg sdfgl;kdjfgjdf klkjkjkjdfg kjdklfjg lksdjfkjkdf gsfgsfg sdfgkj kj kjkjkjkjkj dsfgkljlkj</p>
        </div>
        <div className={`collapse-header-icon ${expandClassName}`} onClick={() => setIsExpand(!isExpand)}>
          <FaAngleDown size={22} />
        </div>
      </div>
      <div className={`collapse-body ${bodyClassName}`}>
        <div className={`collapse-body-content ${bodyContentClassName}`}>
          {list.map((_, index) => (
            <ProductCard key={index}>{index}</ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
