import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';
import facebook from '../img/social/facebook.svg';

const Footer = class extends React.Component {
	render() {
		return (
			<footer className='footer has-background-black has-text-white-ter'>
				<div className='content'>
					<img
						src={logo}
						alt='Funk Family Child Care'
						style={{ width: '14em', height: '10em' }}
					/>
				</div>
				<div className='content has-text-centered has-background-black has-text-white-ter'>
					<div className='container has-background-black has-text-white-ter'>
						<div className='columns'>
							<div className='column is-4'>
								<section className='menu'>
									<ul className='menu-list'>
										<li>
											<Link to='/' className='navbar-item'>
												Home
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/about'>
												About
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/contact'>
												Contact
											</Link>
										</li>
										<li>
											<Link className='navbar-item' to='/blog'>
												Latest Stories
											</Link>
										</li>

										<li>
											<a
												className='navbar-item'
												href='/admin/'
												target='_blank'
												rel='noopener noreferrer'>
												Admin
											</a>
										</li>
										<li>
											<a
												className='navbar-item'
												href='mailto:funkfamilychildcare@hotmail.com'
												rel='noopener noreferrer'>
												<p className='email-link'>
													funkfamilychildcare@hotmail.com
												</p>
											</a>
										</li>
										<li>
											<p
												className='lic navbar-item'
												href='mailto:funkfamilychildcare@hotmail.com'
												rel='noopener noreferrer'>
												LIC# 334843725
											</p>
										</li>
									</ul>
								</section>
							</div>

							<div className='column is-4'></div>
							<div className='column is-4 social'>
								<a
									title='facebook'
									href='https://facebook.com'
									style={{ color: 'green' }}>
									<img
										src={facebook}
										alt='Facebook'
										style={{ width: '1em', height: '1em', filter: 'invert(1)' }}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
};

export default Footer;
