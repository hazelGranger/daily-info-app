import React, { Component } from 'react'

import Modal from '../../components/Modal'

class ExpenseAddForm extends Component{
  render(){
    console.log(this.props.modalOpen);
    return(
      <Modal
        title="Add An Expense Item"
        open={this.props.modalOpen}
      >
        <p>12323fdaf</p>
      </Modal>
    )
  }
}

export default ExpenseAddForm
