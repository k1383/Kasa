/* Scss */
import '../styles/Collapse.scss';

import { IoMdArrowDown } from "react-icons/io"; // Arrow bottom <IoMdArrowDown />

type CollapseProps = {
    description: string;
    equipments: string[];
}

// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault()
// };

const Collapse: React.FC<CollapseProps> = ({description, equipments}) =>  (
    <section id="Collapse">
        <div>
            <details>
                <summary>
                    <h3>Description</h3>
                    <span><IoMdArrowDown className='arrowbottom'/></span>
                </summary>
                <p>{description}</p>
            </details>

            <details>
                <summary>
                    <h3>Équipement</h3>
                    <span><IoMdArrowDown className='arrowbottom'/></span>
                </summary>
                <p>{equipments}</p>
            </details>
            
        </div>
    </section>
);

export default Collapse;


            // <article>
            //     <h3>Description</h3>
            //     <span onClick={handleClick}><IoMdArrowDown className='arrowbottom'/></span>
            // </article>
            // <p>{description}</p>
            // <article>
            //     <h3>Équipements</h3>
            //     <span onClick={handleClick}><IoMdArrowDown className='arrowbottom'/></span>
            // </article>
            // <p>{equipments}</p>