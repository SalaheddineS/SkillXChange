import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const Header: React.FC = () => {
const [name, setName] = useState<string>('');
const [email, setEmail] = useState<string>('');
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(`Name: ${name}, Email: ${email}`);
};

return (
<div className="container">
<h1 className="text1">Test Yourself</h1>
<h1 className="text">Let's Get Started</h1>
<form onClick={handleSubmit}>
<input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
<input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
<Link to="/choix">
<button type="submit" >Submit</button>
</Link>
</form>
</div>
);
};

export default Header;




