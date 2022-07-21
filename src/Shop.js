import React, { useState } from "react";
import uuid from "react-uuid";

import ItemList from "./ItemList"
import AddItem from "./AddItem"

export default function Shop() {
	const [items, setItems] = useState([]);
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [valid, setValid] = useState(true);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (name === "" || desc === "") {
			setValid(false);
		} else {
			setItems([...items, { id: uuid(), name, desc }]);
			setName("");
			setDesc("");
			setValid(true);
		}
	};

	const handleChangeName = (e) => {
		setName(e.target.value)
	}

	const handleChangeDesc = (e) => {
		setDesc(e.target.value)
	}

	const deleteItem = (id) => {
		const newList = items.filter((item) => item.id !== id);
		setItems(newList);
	};

	const noItemsBlock = (
		<div>
			<p className="ui-title">Добавьте первый товар</p>
		</div>
	);

	return (
		<>
			<AddItem name={name} desc={desc} valid={valid}
			         onFormSubmit={handleFormSubmit}
			         onChangeName={handleChangeName}
			         onChangeDesc={handleChangeDesc}
			/>
			{items.length === 0
				? noItemsBlock
				: <ItemList  items={items} onDeleteItem={deleteItem}/>
			}
		</>
	);
}
