function Modal(props) {
	function cancleDialog() {
		props.onCancel();
	}
	function confirmDialog() {
		props.onConfirm();
	}

	return (
		<div className="modal" automagictag="popUp">
			<p>Are you sure?</p>
			<button className="btn btn--alt" automagictag="confirmBtn" onClick={confirmDialog}>
				Confirm
			</button>
			<button className="btn" automagictag="cancelBtn" onClick={cancleDialog}>
				Cancel
			</button>
		</div>
	);
}

export default Modal;
