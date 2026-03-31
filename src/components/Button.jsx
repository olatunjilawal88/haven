
const Button = ({ text }) => {
  return (
    <button className="px-3 py-2 bg-white text-black transition duration-300 rounded-full text-sm hidden md:block">{text}</button>
  )
}

export default Button