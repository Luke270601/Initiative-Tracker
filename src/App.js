import './App.css';
import {useState} from "react";

function App() {
    const [elements, setElements] = useState([]);

    const handleAddElement = () => {
        setElements([...elements, {name: '', number: 0}]);
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

    const handleNumberChange = (index, event) => {
        const updatedElements = [...elements];
        updatedElements[index].number = Number(event.target.value);
        setElements(updatedElements);
    };

    return (
        <div>
            <button onClick={handleAddElement}>Add Element</button>
            <ul style={{listStyle: 'none', padding: 0}}>
                {elements.map((element, index) => (
                    <li key={index}>
                        <label>Initiative:</label> <label>Name:</label> <label>Hit-points</label>
                        <br/>
                        <input
                            type="number"
                            value={element.number}
                            onChange={(event) => handleNumberChange(index, event)}
                            placeholder="Enter number"
                        />
                        <input
                            type="text"
                            value={element.name}
                            onChange={(event) => handleNameChange(index, event)}
                            placeholder="Enter name"
                        />
                        <input
                            type="number"
                            value={element.number}
                            onChange={(event) => handleNumberChange(index, event)}
                            placeholder="Enter number"
                        />
                        <button onClick={() => handleDeleteElement(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
