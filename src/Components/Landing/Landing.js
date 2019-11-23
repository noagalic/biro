import React from 'react';
import "./Landing.css";

const doit = () => {
	var style = document.createElement('style');
	style.innerHTML = `
	.logo {
	z-index: -1;
	opacity: 0.2;
	}`;
	document.head.appendChild(style);}

const Landing = () => {
	return (
		<div>
		<img class="logo" src={require("./FSB_Logo.png")} />
		<main id="foo" className="pa4 black-80">
			<div id="cont">
			<form id="formy" onMouseEnter={setTimeout(doit, 1000)} className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 center">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			      <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
			    </div>
			</form>
			</div>
		</main>
		</div>)

};

export default Landing;