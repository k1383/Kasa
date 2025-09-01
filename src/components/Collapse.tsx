/* Scss */
import '../styles/Collapse.scss';

/* Icons */
import { IoMdArrowRoundDown } from "react-icons/io"; // <IoMdArrowRoundDown />
import { IoMdArrowRoundUp } from "react-icons/io"; // <IoMdArrowRoundUp />
import { useState } from "react";

type CollapseProps = {
    description: string;
    equipments: string[];
}

const Collapse: React.FC<CollapseProps> = ({description, equipments}) =>  {

  const [DescriptionOpen, setDescriptionOpen] = useState(true);  // True for open / false for closed
  const [EquipementsOpen, setEquipementsOpen] = useState(false);  

    const Description = () => {
        setDescriptionOpen((prev) => !prev);
    };

    const Equipements = () => {
        setEquipementsOpen((prev) => !prev);
    };

    return (
        <>
            <section id="Collapse">
                <div>
                    <div className='border'>
                        <article onClick={Description}>
                            <h3>Description</h3>
                            {!DescriptionOpen ? (
                                <IoMdArrowRoundDown className='arrow'/>
                                ) : (
                                <IoMdArrowRoundUp className='arrow'/>
                            )}
                        </article>
                        {DescriptionOpen && <p>{description}</p>}
                    </div>

                    <div className='border'>
                        <article onClick={Equipements}>
                            <h3>Équipements</h3>
                            {EquipementsOpen ? (
                                <IoMdArrowRoundUp className='arrow'/>
                                ) : (
                                <IoMdArrowRoundDown className='arrow'/>
                            )}
                        </article>
                        <div>
                            {EquipementsOpen && <p>{equipments[0]}</p>}
                            {EquipementsOpen && <p>{equipments[1]}</p>}
                            {EquipementsOpen && <p>{equipments[2]}</p>}
                            {EquipementsOpen && <p>{equipments[3]}</p>}
                        </div>
                    </div>             
                </div>
            </section>
        </>
    )
};

export default Collapse;

// <p>{description}</p>
// <p>{equipments}</p>