import React from 'react';
import { Link } from 'gatsby';
import github from '../img/github-icon.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';

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
							{/* Create logo for FFC */}
							{/* <img src={logo} alt="Funk Family Childcare" style={{ width: '88px' }} /> */}
							<h1 style={{ width: '88px', color: '#ff4400' }}>
								Funk Family Childcare
							</h1>
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
							{/* Most likley not going to use these pages. Remove them */}
							{/* <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
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
