import React from "react";
import Item from "./Item"

export default function ItemList(props) {
	const {items, onDeleteItem} = props
	return <ul className="ui-list">
			{items.map((item) => {
				return (
					<li key={item.id} className="ui-item-list">
						<Item info={item} />
						<button
							className="item-button"
							onClick={() => onDeleteItem(item.id)}
						>
							Удалить
						</button>
					</li>
				);
			})}
	</ul>
}