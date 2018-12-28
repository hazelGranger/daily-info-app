import React from 'react'
import FoodIcon from '@material-ui/icons/Fastfood'
import HouseIcon from '@material-ui/icons/Home'
import BusIcon from '@material-ui/icons/DirectionsBus'
import LearningIcon from '@material-ui/icons/LibraryBooks'
import ClassIcon from '@material-ui/icons/Class'

const typeIcon = {
  food: FoodIcon,
  living: HouseIcon,
  transportation: BusIcon,
  learning: LearningIcon,
  others: ClassIcon
}

const ExpenseTypeIcon = (props) => {
  const { type, color, className } = props
  const Icon = type ? typeIcon[type] : typeIcon['others']
  return(
    <Icon style={{color: color ? color :'inherit'}} className={className}></Icon>
  )
}

export default ExpenseTypeIcon
