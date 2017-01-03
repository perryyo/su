import React from 'react';
import Heading from '../login/Heading';
import LoginForm from '../login/LoginForm';

export default class Login extends React.Component {
	render() {
		return (
			<section class="container">
				<Heading/>
				<LoginForm/>
			</section>
		)
	}
}
