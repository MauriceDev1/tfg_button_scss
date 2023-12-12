interface ButtonProps {
    title: string,
    link: string,
    color: string
}

function Button({title, link, color}: ButtonProps) {
  return (
    <a className="my-element" href={link} style={{borderColor: `${color}`}}>
        <p>
            {title}
        </p>
    </a>
  )
}

export default Button