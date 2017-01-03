import React from 'react';
export default class LoginForm extends React.Component {
	render() {
		return (
			<form action="action_page.php">
				<div class="form_container">
					<input type="text" placeholder="USER NAME" name="username" required />
					<input type="password" placeholder="PASSWORD" name="password" required />
					<div class="forgot_password">
						<label class="left">
							<input id="remember" class="remember" type="checkbox" />
							Remember Me
						</label>
						<a href="#" class="right">Forgot Password</a>
					</div>

				</div>
				<div class="form_container">
					<hr/>
					<button type="submit" class="btn btn-primary">Log in</button>
				</div>
			</form>
		)
	}
}