import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import ListInput from './ListInput'
import MapList from './MapList'

function List() {
  return (
    <>
    <Container>
        <ListInput />     
    </Container>
    <Flex  justifyContent={"space-between"}>
        <MapList title="Incompleted" filters={{}} />
        <MapList title={"Completed"} filters={{type: 'completed'}} />
    </Flex>
    </>
  )
}

export default List