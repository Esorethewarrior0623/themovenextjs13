'use client'
import React from "react"


interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: String
    onClick: (event: React.MouseEvent) => void
    role?: 'submit' | 'cancel' | 'void'
    
}
const style ={
    button:`py-2 px-4 outline outline-1 rounded-sm outline-gray-400 {role === 'submit' && 'bg-green-500'}`,
    text:`text-blue-500`,
    
}

const Button = (props: IButtonProps) => {

  const {text, onClick} = props
  return (
    <button  onClick={onClick} className={style.button}>
        <div className={style.text}>
        {text}
        </div>
    </button>
  )
}

export default Button