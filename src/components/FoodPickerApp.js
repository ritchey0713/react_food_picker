import React from 'react'
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

export default class FoodPickerApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }


  handlePick = () => {
   let option = this.state.options[Math.floor(Math.random() * this.state.options.length)]
    this.setState(() => {
      return {
        selectedOption: option
      }
    })
  }

  handleAddOption = (option) =>{
    if(!option){
      return "enter valid restuarant";
    } else if(this.state.options.indexOf(option) > -1){
      return "This option already exists!"
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
        
      })
    }
    
  }

  handledeleteOption = (option) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((oldOption) => {
          return option != oldOption
        })
      }
    })
  }


  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  
  componentDidMount(){
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)
      if(options){
        this.setState(() => {
          return {
            options: options
          }
        })
      }
      
    } catch(e){
      console.log("ERROR", e)
    }
    console.log("mounted")
    
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem("options", json)
      console.log("updated")
    }
    
    
  }

  componentWillUnmount(){
    console.log("unmounted")
  }

  render() {
    const title = "Food Picker"
    const subTitle = "Find a place to snack!"
    return (
      <div>
        <Header subtitle={subTitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handledeleteOption={this.handledeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        <OptionModal selectedOption={this.state.selectedOption} />
      </div>
    )
  }
}

// FoodPickerApp.defaultProps = {
//   options: []
// }