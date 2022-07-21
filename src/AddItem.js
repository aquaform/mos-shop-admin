import React, { useState } from "react";

export default function AddItem(props) {
	const {name, desc, valid, onFormSubmit, onChangeName, onChangeDesc} = props
	return <form onSubmit={onFormSubmit}>
		<div>
			<label htmlFor="name">Название:</label>
			<input
				type="text"
				id="name"
				value={name}
				onChange={onChangeName}
				placeholder="Название товара"
				className="ui-textfield"
			/>
		</div>
		<div>
			<label htmlFor="desc">Описание:</label>
			<input
				type="text"
				id="desc"
				value={desc}
				onChange={onChangeDesc}
				placeholder="Описание товара"
				className="ui-textfield"
			/>
		</div>
		<div className="form-footer">
			{!valid ? (
				<div className="validation">Заполнены не все поля</div>
			) : (
				""
			)}
			<input type="submit" className="ui-button" value="Добавить"/>
		</div>
	</form>
}