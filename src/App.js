import './App.css';
import {useState} from "react";

function App() {
    const [elements, setElements] = useState([]);

    const handleAddElement = () => {
        setElements([...elements, {name: '', initiative: 0, hp: 0, hpAddSubtract: 0}]);
    };

    const handleDeleteElement = (index) => {
        const updatedElements = elements.filter((_, i) => i !== index);
        setElements(updatedElements);
    };

    const handleNameChange = (index, event) => {
        const updatedElements = [...elements];
        updatedElements[index].name = event.target.value;
        setElements(updatedElements);
    };

    const handleInitiativeChange = (index, event) => {
        const updatedElements = [...elements];
        updatedElements[index].initiative = Number(event.target.value);
        setElements(updatedElements);
    };

    const handleHpChange = (index, event) => {
        const updatedElements = [...elements];
        updatedElements[index].hp = Number(event.target.value);
        setElements(updatedElements);
    };

    const handleHpAddSubtract = (index, event) => {
        const updatedElements = [...elements];
        updatedElements[index].hpAddSubtract = Number(event.target.value);
        setElements(updatedElements);
    };

    function addHp(index, hp, addSubtract) {
        const updatedElements = [...elements];
        if (hp != null) {
            switch (addSubtract) {
                case "add":
                    updatedElements[index].hp = updatedElements[index].hp + hp;
                    break;
                case "subtract":
                    if (updatedElements[index].hp > 0 && updatedElements[index].hp - hp >= 0) {
                        updatedElements[index].hp = updatedElements[index].hp - hp;
                    }
                    else{
                        updatedElements[index].hp = 0;
                    }
                    break;
                default:
                    break;
            }
            setElements(updatedElements);
        }
    }


    return (
        <div>
            <button onClick={handleAddElement}>Add Element</button>
            <ul style={{listStyle: 'none', padding: 0}}>
                {elements.map((element, index) => (
                    <li key={index}>
                        <label>Initiative:</label> <label>Name:</label> <label>Hit-points:</label>
                        <br/>
                        <input
                            type="number"
                            value={element.initiative}
                            onChange={(event) => handleInitiativeChange(index, event)}
                            placeholder="Enter initiative"
                        />
                        <input
                            type="text"
                            value={element.name}
                            onChange={(event) => handleNameChange(index, event)}
                            placeholder="Enter name"
                        />
                        <input
                            type="number"
                            value={element.hp}
                            onChange={(event) => handleHpChange(index, event)}
                            placeholder="Enter hit-points"
                        />
                        <input
                            type="number"
                            value={element.hpAddSubtract}
                            onChange={(event) => handleHpAddSubtract(index, event)}
                            placeholder="Enter hit-points"
                        />
                        <button className="plus-button"
                                onClick={(event) => addHp(index, element.hpAddSubtract, "add")}>+
                        </button>
                        <button className="minus-button"
                                onClick={(event) => addHp(index, element.hpAddSubtract, "subtract")}>-
                        </button>
                        <button onClick={() => handleDeleteElement(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default App;
