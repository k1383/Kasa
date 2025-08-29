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

  const [DescriptionOpen, setDescriptionOpen] = useState(open);  
  const [EquipementsOpen, setEquipementsOpen] = useState(open);  

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
                    <div>
                        <article onClick={Description}>
                            <h3>Description</h3>
                            {!DescriptionOpen ? (
                                <IoMdArrowRoundDown />
                                ) : (
                                <IoMdArrowRoundUp />
                            )}
                        </article>
                        {!DescriptionOpen && <p>{description}</p>}
                    </div>

                    <div>
                        <article onClick={Equipements}>
                            <h3>Équipements</h3>
                            {EquipementsOpen ? (
                                <IoMdArrowRoundDown />
                                ) : (
                                <IoMdArrowRoundUp />
                            )}
                        </article>
                        {EquipementsOpen && <p>{equipments}</p>}
                    </div>             
                </div>
            </section>
        </>
    )
};

export default Collapse;

// <p>{description}</p>
// <p>{equipments}</p>