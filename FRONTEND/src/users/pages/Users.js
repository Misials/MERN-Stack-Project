import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Mikołaj Michalski',
			image:
				'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=826&t=st=1669546054~exp=1669546654~hmac=2b8a439a09f0bd2e8f42b6568c781f5103b81e7fb69be566c67df47ea35813e8',
			places: 3,
		},
	];

	return <UsersList items={USERS} />;
};

export default Users;
