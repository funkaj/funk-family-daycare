import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import facebook from '../img/social/facebook.svg';
import group from '../img/group.svg';

import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			navBarActiveClass: '',
		};
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active',
					  })
					: this.setState({
							navBarActiveClass: '',
					  });
			}
		);
	};

	render() {
		return (
			<nav
				className='navbar is-transparent'
				role='navigation'
				aria-label='main-navigation'>
				<div className='container'>
					<div className='navbar-brand'>
						<div>
							<img
								src={group}
								alt='group'
								style={{ width: '88px', minHeight: '100px' }}
							/>
						</div>
						<Link to='/' className='navbar-item' title='Home'>
							<img
								src={logo}
								alt='Funk Family Childcare'
								style={{ width: '150px', minHeight: '100px' }}
							/>
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target='navMenu'
							onClick={() => this.toggleHamburger()}>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id='navMenu'
						className={`navbar-menu ${this.state.navBarActiveClass}`}>
						<div className='navbar-start'>
							<Link className='navbar-item ' to='/about'>
								<span className='nav-text'>About</span>
							</Link>
							<Link className='navbar-item ' to='/blog'>
								<span className='nav-text'>Blog</span>
							</Link>
							<Link className='navbar-item ' to='/contact'>
								<span className='nav-text'>Contact</span>
							</Link>
						</div>

						<div className='navbar-end navbar-item'>
							<table>
								<tbody>
									<tr>
										<td>
											<a
												title='email'
												href='mailto:funkfamilychildcare@hotmail.com'
												rel='noopener noreferrer'>
												<p className='email-link nav-text'>
													funkfamilychildcare@hotmail.com
												</p>
											</a>
										</td>
									</tr>
									<tr>
										<td>
											<p className='lic'>LIC# 334843725</p>
										</td>
									</tr>
								</tbody>
							</table>
							<a
								className='navbar-item nav-icons'
								title='facebook'
								href='https://facebook.com'
								rel='noopener noreferrer'>
								<span className='icon'>
									<img src={facebook} alt='Facebook' />
								</span>
							</a>
							<a
								className='navbar-item nav-icons'
								href='https://github.com/funkaj/funk-family-daycare'
								target='_blank'
								rel='noopener noreferrer'>
								<span className='icon'>
									<img src={github} alt='Github' />
								</span>
							</a>
						</div>
					</div>
				</div>
			</nav>
		);
	}
};

export default Navbar;
