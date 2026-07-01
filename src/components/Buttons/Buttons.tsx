import {useState} from 'react';
import { StarlinkPlansHome, StarlinkPlansGo } from './buttons.plans';
import './buttons.css'

export const Buttons = () => {
  const [active, setActive] = useState <'personal' | 'business'>('personal');

  const handleClick = (tab: 'personal' | 'business') => {
    setActive(tab);
  };

  return (
    <div className="header__toggle">
      <button className= {active ==='personal' ? "header__toggle-btn header__toggle-btn--active" : "header__toggle-btn"} onClick={() => handleClick('personal')}>Personal</button>
      <button className= {active ==='business' ? "header__toggle-btn header__toggle-btn--active" : "header__toggle-btn"} onClick={() => handleClick('business')}>Business</button>
    </div>
  )


} // header btn personal business

type ButtonProps = { 
  label: string, 
  variant?: 'primary' | 'ghost',
  href?: string
}
 export const StarlinkButton = ({label, variant, href}: ButtonProps) => {
  return (
    href ? <a href={href} className="starlink-section__link--button">{label}</a> :
    <button className={`btn btn--${variant}`}>{label}</button>
  )
    
  
 } // general starlink buttons


 export const StarlinkResidentialButton = () => {
  const [residential, setResidential] = useState<'home' |'go'>('home');
   const handleClick = (tab: 'home' | 'go') => {
    setResidential(tab);
  };
  return (
    <div> 
    <div className="starlink-toggle">
      <button className= {residential ==='home' ? "starlink-toggle__btn starlink-toggle__btn--active" : "starlink-toggle__btn"} onClick={() => handleClick('home')}>At Home</button>
      <button className= {residential ==='go' ? "starlink-toggle__btn starlink-toggle__btn--active" : "starlink-toggle__btn"} onClick={() => handleClick('go')}>On the Go</button>
    </div>
 {residential === 'home' &&  <StarlinkPlansHome />}
 {residential === 'go' &&  <StarlinkPlansGo />}
 </div>
  )
  
 } // Plans - home & go btns 