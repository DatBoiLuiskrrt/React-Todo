import React from 'react';
import TodoForm from "../src/components/TodoComponents/TodoForm";
import TodoList from "../src/components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      myList : ""
      // this is my state in which I am going to be passing my data to, I am initializing it to an empty string.
    };
  }

  toggleItem = clickedId => {
    const newToDo = this.state.myList.localeCompare(item => {
      
      if(item.id === clickedId){
        return {
          ...item,
          done: !item.done
        };
      }else {
        return item;
      }
    });
    this.setState({
      myList : newToDo
    });
  };

  addNewItem = itemText => {
    const newItem = {
      name: itemText,
      id: Date.now(),
      done: false
    }
    this.setState({
      myList: [...this.state.myList, newToDo]
    });
  };




  render() {
    return (
      <>
      <div>
        <h2>Welcome to My Todo App!</h2>
        <p>A mi el mencho me pela la verga</p>
        <TodoForm addNewItem={this.addNewItem}  />
        
      </div>
      <div>
        <TodoList myList={this.state.myList}
         toggleItem={this.toggleItem} />
      </div>
      </>
    );
  }
}

export default App;
