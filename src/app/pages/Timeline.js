import { Timeline, Events, Event } from 'vertical-timeline-component-react';

const Main = () => {
	const customTheme = {
		borderDotColor: '#ffffff',
		descriptionColor: '#262626',
		dotColor: '#d0cdc4',
		eventColor: '#965500',
		lineColor: '#d0cdc4',
		subtitleColor: '#7c7c7c',
		titleColor: '#405b73',
		yearColor: '#405b73',
	};

	return (
		<Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse withoutDay>
			<Events
				title="What is lorem Ipsum?"
				subtitle="It's a fake text"
				startDate="2020/12/02"
				active
				defaultClosed
			>
				<Event
					title="Lorem Ipsum"
					description={[
						"Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
						'Is simply dummy text of the printing and typesetting industry.',
					]}
				/>
			</Events>
		</Timeline>
	);
};