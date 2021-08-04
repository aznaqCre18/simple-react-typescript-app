import { useState } from "react";
import { ListName } from "../App";

interface IProps {
    people: ListName["people"],
    setPeople: React.Dispatch<React.SetStateAction<ListName["people"]>>
}

const AddForm: React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        notes: "",
        img: "",
    })

    const _handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.name)
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const _handleClick = (): void => {
        console.log(input)
        if(!input.name || !input.age || !input.notes) {
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                notes: input.notes,
                img: input.img,
            }
        ])

        setInput({
            name: "",
            age: "",
            notes: "",
            img: "",
        })
    }

    return (
        <div className="wrapper-form">
            <h3>Add List Name</h3>
            <div className="form">
                <input type="text" name="name" placeholder="name" onChange={_handleChange} value={input.name} />
                <input type="number" name="age" placeholder="age" onChange={_handleChange} value={input.age} />
                <input type="text" name="notes" placeholder="notes" onChange={_handleChange} value={input.notes} />
                <input type="text" name="img" placeholder="image" onChange={_handleChange} value={input.img} />
                <button onClick={_handleClick}>ADD TO LIST</button>
            </div>
        </div>
    )
}

export default AddForm;