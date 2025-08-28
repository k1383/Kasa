/* Scss */
import '../styles/Collapse.scss';

import { IoMdArrowDown } from "react-icons/io"; // Arrow bottom <IoMdArrowDown />

type CollapseProps = {
    description: string;
    equipments: string[];
}

const Collapse: React.FC<CollapseProps> = ({description, equipments}) =>  (
    <section id="Collapse">
        <div>
            <article>
                <h3>Description</h3>
                <IoMdArrowDown className='arrowbottom'/>
            </article>
            <p>{description}</p>
            <article>
                <h3>Équipements</h3>
                <IoMdArrowDown className='arrowbottom'/>
            </article>
            <p>{equipments}</p>
            
        </div>
    </section>
);

export default Collapse;