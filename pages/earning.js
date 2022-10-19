import React from 'react'
import Breadcam from '../components/Breadcam'
import IncomeList from '../components/Money/IncomeList'
import IncomePopup from '../components/Money/IncomePopup'

export default function Income({ allIncome }) {
  return (
    <div>
      <Breadcam title='Earning'/>
      <div className="popupinput">
        <IncomePopup />
      </div>
      <div className="income_list">
        <IncomeList allIncome={allIncome} />
      </div>
    </div >
  )
}
