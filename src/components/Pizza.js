import React from "react"

const Pizza = (props) => {
  // console.log(props.pizza)
  let pizza = props.pizza
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian === false ? 'No' : 'Yes' }</td>
      <td><button onClick={() => props.editButton(pizza) }   type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
