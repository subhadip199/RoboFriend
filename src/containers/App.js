import React, {Component} from 'react';
import CardList from '../Component/CardList';
import SearchBox from '../Component/SearchBox'
import './App.css';
import scroll from '../Component/scroll';


class App extends Component{
	constructor()
	{
		super()
		this.state={
			robots: [],
			searchfield:''
		}
	}

	 componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
    }

    onsearchchange=(event)=>
    {
   			this.setstate({searchfield: event.target.value})
    }

	render()
	{
		const{robots , searchfield}=this.state;
    	const filteredRobots=robots.filter(robot=>{
         return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    	})
    	if(!robots.length )
    	{
    		return <h1>Loading</h1>
    	}
    	else
    	{
		return(
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchchange={this.onsearchchange}/>
			<scrool>
			<CardList robots={filteredRobots}/>
			</scrool>
		</div>
		);
	}

	}
}
export default App;