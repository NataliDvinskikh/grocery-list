import { Component } from "react";
import check from './6812.jpg';

// !важно onChangeEvent,addItem - это методы(не функции)

export class GroceryList extends Component {
constructor(){
  super()
  this.state = {
    //закладываем состояние
   userInput:'', // изначально пустая строка
   grocerylist: [], //все будет добавляться в массив
  }
}
onChangeEvent(e){ // т.к. хотим на каждое событие реагировать, следить за событием (клик, что вводит пользователь)
  // console.log(event.target.value); //доступ к тому, что пишет пользователь
  this.setState({userInput: e}) // т.е. приравниваем то, что пишет пользователь к событию( поэтому userInput: e)
  //console.log(e) - проверяем, что написано
}

addItem(input) { //можно хоть что написать вместо input
  if ( input === '') {
    alert ('Please enter an item')
  } else {
  let listArray = this.state.grocerylist;
  listArray.push(input);
  this.setState({grocerylist: listArray, userInput: ''}); //userInput: '' - нужно, чтобы опустошить userInput
}
}


deleteItem() {
  let listArray = this.state.grocerylist;
  listArray = [];
  this.setState({grocerylist: listArray})
}

crossedWord(event) {
  const li = event.target; // как будет что-то происходить с li , мы все будем остлеживать  и ставим как бы подслушку event.target и вместо li можем использовать любое название, потому что и так понять что мы ставим метод на эле-т li  <li  onClick={this.crossedWord}
  li.classList.toggle('crossed');
}

onFormSubmit(e) {
e.preventDefault();
}

render () {
  return (
    <div>
      <form onSubmit={this.onFormSubmit}> {/* добавляем ел-т через enter и тег from, который оборачиваем вс */}
      <div className="container">
        <input type='text'
        placeholder='What do you want to buy?'
         // onChange={this.onChangeEvent} так не оч
        onChange={(e) => {this.onChangeEvent(e.target.value)}} //e.target.value - прописываем тут, что реагируем на события
        value={this.state.userInput}/>  {/* value - что пишет пользователь и у нас к этому доступ*/}
          {/* onChange - нужно для того, чтобы видеть что пользователь вводит в input  атрибут, который позволяет смотреть как у нас что-либо меняется (т.е. именно меняется текст с каждым нажатиме*/}
      </div>
      <div className="container">
        <button onClick={()=>this.addItem(this.state.userInput)} className="add">Add</button>
      </div>
      <ul>
        {/* чтобы добавлять элементы используем метод map */}
        {/*   и когда мы так напишем будет такая ошибка - Manifest: Line: 1, column: 1, Syntax error. - но это норма */}
        {/* чтобы добавлялся уникальный ключ добавляем аргумент index и  key={index}*/}
        {this.state.grocerylist.map((item,index) => (
          <li  onClick={this.crossedWord} key={index}>
            <img src = {check} width='40px' alt="check" />
             {item}
          </li>
        ))}
      </ul>
      <div className="container">
      <button onClick={()=>this.deleteItem()} className="delete">Delete</button>
      </div>
      </form>
    </div>
  )
}
}
