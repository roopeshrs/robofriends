import React, {useState, useEffect} from 'react'
import Search from './components/Search'
import Card from './components/Card';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    const fetchUsers = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setIsLoading(false);
      }catch(error){
        console.error('Error fetching users:', error);
      }
    }
    fetchUsers();
  }, [])
  const handleSearch = (searchTerm) => {
    const filteredResults = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredUsers(filteredResults);
  }
  return (
    <div>
      <h1 className='uppercase text-center text-5xl font-bold text-blue-300 pt-5'>robofriends</h1>
      <Search onSearch={handleSearch} />
      <div>
        {isLoading? (
          <p className='text-3xl font-semibold p-5 text-blue-300'>Loading...</p>
        ): (
          <div className='flex flex-wrap justify-center gap-4'>
            {filteredUsers.map(user => <Card key={user.id} user={user} />)}
          </div>
        )}
      </div>
    </div>
  )
}

export default App