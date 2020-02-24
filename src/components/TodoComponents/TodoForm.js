import React from "react";

class ListForm extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    handleChanges = e => {
        this.setState({
            newItem: e.target.value
        });
    };

    submitForm = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                
                <input
                type="text"
                name="newItem"
                value={this.state.name}
                onChange={this.handleChanges} 
                />
                <button>Add</button>
                
            </form>
        );
    }



};

export default ListForm;
