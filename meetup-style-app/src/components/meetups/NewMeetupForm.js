import { useRef } from 'react';

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const meetupData = {
			title: titleInputRef.current.value,
			image: imageInputRef.current.value,
			address: addressInputRef.current.value,
			description: descInputRef.current.value
		}

		console.log(meetupData)
		props.onAddMeetup(meetupData)
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title" ref={titleInputRef} automagictag="titleInput" />
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Meetup Image</label>
					<input type="url" required id="image" ref={imageInputRef} automagictag="imageInput" />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Meetup Address</label>
					<input type="text" required id="address" ref={addressInputRef} automagictag="addressInput" />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Meetup Description</label>
					<textarea required id="description" rows="5" ref={descInputRef} automagictag="descriptionInput" />
				</div>
				<div className={classes.actions}>
					<button automagictag="addMeetupButton">Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
