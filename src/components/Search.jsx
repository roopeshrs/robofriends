import React, {useState} from 'react'

const Search = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    }
  return (
    <div className='flex items-center justify-center m-5'>
        <input
            type="text"
            placeholder="Search robots here"
            value={searchTerm}
            onChange={handleInputChange}
            className='outline-none border rounded-xl px-4 py-2'
        />
    </div>
  )
}

export default Search