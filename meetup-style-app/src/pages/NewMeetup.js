import NewMeetupsForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
function addMeetupHandeler(MeetupData) {}

	return (
		<section>
			<h1>Add New Meetups</h1>
			<NewMeetupsForm onAddMeetup={addMeetupHandeler} />
		</section>
	);
}

export default NewMeetupsPage;
