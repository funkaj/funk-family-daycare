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
						<div className='navbar-start has-text-centered'>
							<Link className='navbar-item' to='/about'>
								About
							</Link>
							<Link className='navbar-item' to='/blog'>
								Blog
							</Link>
							<Link className='navbar-item' to='/contact'>
								Contact
							</Link>
						</div>

						<div className='navbar-end has-text-centered'>
							<a
								className='navbar-item'
								title='instagram'
								href='mailto:funkfamilychildcare@hotmail.com'
								rel='noopener noreferrer'>
								<table>
									<tbody>
										<tr>
											<td>
												<p className='email-link'>
													funkfamilychildcare@hotmail.com
												</p>
											</td>
										</tr>
										<tr>
											<td>
												<p className='lic'>LIC# 334843725</p>
											</td>
										</tr>
									</tbody>
								</table>
							</a>
							<a
								className='navbar-item'
								title='facebook'
								href='https://facebook.com'
								rel='noopener noreferrer'>
								<span className='icon'>
									<img src={facebook} alt='Facebook' />
								</span>
							</a>
							<a
								className='navbar-item'
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
