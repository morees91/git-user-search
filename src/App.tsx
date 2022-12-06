import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card/Card';
import Text from './Text/Text';
import Button from './Button/Button';
import Input from './Input/Input';
import Image from './Image/Image';
import List from './List/List';
import ListItem from './List-Item/List-Item';


function App() {

  const [search, setSearch] = useState("")
  const [user,Setuser]=useState<any>({})

  
  useEffect(()=>{

    console.log(user)
  })


  const HandelInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const input = e.target

    setSearch(input.value)
  }


  const SearchButton = async () => {
const url='https://api.github.com/users/'+search

try{
const response=await fetch(url)
const json = response.json()

console.log(json)

Setuser(await json)

}catch(err){


  console.log("Error",err)
}





  }

  return (
    <div className="App">


      <Card className='Section-1'>
        <Text className='Title'>devfinder</Text>
        <Button className='Mode' onClick={() => {

        }}>Dark</Button>
      </Card>

      <Card className='Section-2'>

        <Input name="search" Onchange={HandelInputs} Value={search} placeholder="Search User" className='SearchInput' />
        <Button className='btnSearch' onClick={() => SearchButton()}>Search</Button>
      </Card>
      
      <Card className={user.login!=null?'Section-3':'hide'}>

        <Card className='Section-3-1'>
        <Image img={user.avatar_url} imageName="test" className='profileImage' />
        <Text className='UserName'>
          {user.login}
          <Text className='Bios'>{user.bio==null?"this profile has no bios":user.bio}</Text>

        </Text>
        <Text className='Date'>Joined At {user.created_at}</Text>
       

        </Card>
       
        <Card className='Section-3-2'>
              <Text className='Repos' >Repos {user.public_repos}</Text>
              <Text className='Followers' >Followers {user.followers}</Text>
              <Text className='Following' >Following {user.following}</Text>
        </Card>

        <Card className='Section-3-3'>
          <Text className='location'>Location {user.location}</Text>
          <Text className='Twitter'>Twitter {user.twitter_username==null?"not Available":user.twitter_username}</Text>
          <Text className='gitHub-Link'>
          blog
            <a href={user.html_url} target="_blank" rel="noreferrer">{user.html_url}</a>
          </Text>
          <Text className='Work'>not Available</Text>

        </Card>
      </Card>

    </div>
  );
}

export default App;
