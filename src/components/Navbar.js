import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import piggy from '../img/piggy.svg';
import dino from '../img/dino.svg';
import ducky from '../img/ducky.svg';
import robo from '../img/robo.svg';
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
						<div>
							<img
								src={piggy}
								alt='Funk Family Childcare'
								style={{ width: '88px', minHeight: '100px' }}
							/>
							<img
								src={dino}
								alt='Dino'
								style={{ width: '88px', minHeight: '100px' }}
							/>
							<img
								src={robo}
								alt='Robo'
								style={{ width: '88px', minHeight: '100px' }}
							/>
							<img
								src={ducky}
								alt='Ducky'
								style={{ width: '88px', minHeight: '100px' }}
							/>
						</div>
						<div className='navbar-end has-text-centered'>
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
								title='instagram'
								href='https://instagram.com'
								rel='noopener noreferrer'>
								<span className='icon'>
									<img src={instagram} alt='Instagram' />
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
