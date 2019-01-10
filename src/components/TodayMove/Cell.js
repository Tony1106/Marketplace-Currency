import React from "react";
import { Label, Table } from "semantic-ui-react";
export default function Cell(props) {
	const {name, rate, change} = props || "";
	return (
		<Table.Row>
			<Table.Cell>
				<Label ribbon>{name}</Label>
			</Table.Cell>
			<Table.Cell>{rate} </Table.Cell>
			<Table.Cell>{change}</Table.Cell>
		</Table.Row>
	);
}
