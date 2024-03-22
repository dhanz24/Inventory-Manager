
import { BadgeDelta, Card, Flex, Metric, Text } from '@tremor/react'

import React, { createContext, useState, useContext } from 'react';

const CardItemContext = createContext();

const CardItem = ({itemName = 'undefined', item = '0'}) => {

  return (
    <Card className='w-xs' decoration='top' decorationColor='indigo'>
      <Flex justifyContent='between' alignItems='center'>
        <Text>{itemName}</Text>
        {/* <BadgeDelta deltaType='moderateIncrease'>+12.5%</BadgeDelta> */}
      </Flex>
      <Metric>{item}</Metric>
    </Card>
  )
}

export default CardItem