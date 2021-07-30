import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
	const [displayConfirmModal, setDisplayConfirmModal] = useState(false);

	function deleteTodo() {
		console.log(`Boom! Delete ${props.title}`);
		setDisplayConfirmModal(true);
	}

	function closeConfirmModal() {
		console.log(`Closing Confirm Modal`);
		setDisplayConfirmModal(false);
	}

	function onCancel() {
		console.log("onCancel");
		setDisplayConfirmModal(false);
	}

	function onConfirm() {
		console.log("onConfirm");
		setDisplayConfirmModal(false);
	}

	return (
		<div className="card" automagictag="card-n">
			<h2>{props.title}</h2>
			<div className="actions" automagictag="actions">
				<button className="btn" automagictag="deleteBtn" onClick={deleteTodo}>
					Delete
				</button>
			</div>
			{displayConfirmModal && <Modal onCancel={onCancel} onConfirm={onConfirm}/>}
			{displayConfirmModal && <Backdrop onClick={closeConfirmModal} />}
		</div>
	);
}

export default Todo;
