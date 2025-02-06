import { useState } from 'react'
import logo from '/vite.svg'

export default function Header(){
    const [now, setNow] = useState(new Date())
    setInterval(() => setNow(new Date()), 1000)
    return (
    <header>
        <img src={logo} alt="" />
        <h3>НЛО-net</h3>
        <span>Час: {now.toLocaleTimeString()}</span>
    </header>);
  }