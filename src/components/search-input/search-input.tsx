import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className='input-container'>
      <FiSearch className='icon' />
      <input type="text" placeholder="Qual comida você está procurando?" />
    </div>
  );
}