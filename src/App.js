import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
state= {
  pizzas:[],
  pizza: ''
}

componentDidMount(){
  fetch('http://localhost:3000/pizzas')
  .then(res=> res.json())
  .then(data => {
    this.setState({pizzas: data})})
}


editButton = (pizza) => {
//  console.log(pizza)
 this.setState({pizza})

}

// updateForm () {

// }


formSubmit (pizza) {
   fetch(`http://localhost:3000/pizza/${pizza.id}`, {
     method: 'PATCH',
     headers: {
      'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       topping: pizza.topping,
       size: pizza.size,
       vegetarian: pizza.vegetarian
      })
   })
   .then((response) => response.json())
   .then((data) => {
    console.log(data)
   })
}



  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm pizza={this.state.pizza} />
        <PizzaList pizzas={this.state.pizzas} editButton={this.editButton}/>
      </Fragment>
    );
  }
}

export default App;
