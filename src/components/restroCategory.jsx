import React, { useState } from 'react'
import ItemList from './itemList';
import styled from 'styled-components';

const RestroCategory = (props) => {

const {title,itemCards}=props.data;

const {showItems,setShowindex}=props


const handleAccordion =()=>{
    setShowindex()
}


  return (
      <AccordionWrap>
          <InnerAccWrap onClick={handleAccordion}>
              <span>
                  {title}  ({itemCards.length})
              </span>
              <span>
              &darr; &uarr;
              </span>
          </InnerAccWrap>

          {
             showItems && <ItemList 
              data={itemCards}
               />
          }


      </AccordionWrap>
  )
}

export default RestroCategory;

const AccordionWrap =styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    `

const InnerAccWrap=styled.div`
width: 50%;
    padding: 16px;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    cursor: pointer;
    border-radius: 10px;

    span{
        font-size: 17px;
        font-weight:bold;
        }
`