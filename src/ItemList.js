import React from "react";
import Item from "./Item"

export default function ItemList(props) {
	const {items, onDeleteItem} = props
	return <ul className="ui-list">
		<li className="ui-item-list">
			{items.map((item) => {
				return (
					<>
						<Item key={item.id} info={item} />
						<button
							className="item-button"
							onClick={() => onDeleteItem(item.id)}
						>
							Удалить
						</button>
					</>
				);
			})}
		</li>
	</ul>
}