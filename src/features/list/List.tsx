import { Box, Button, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { increment, selectList } from "./listSlice";

export function List() {
    const list = useAppSelector(selectList);
    const dispatch = useAppDispatch();
    const [text, setText] = useState("");

    useEffect(() => {
        if(list.length > 0) {
            console.log(list);
        }
    }, [list])

    return (
        <Container>
            <Heading my={5}>TODO App</Heading>
            <Flex>
            <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Name" />
            <Button ml={2} onClick={() => dispatch(increment(text))}>Add Item</Button>
            </Flex>
            <Box>    
                {list.map((e, i) => {
                    return (
                        <Flex mt={5} mb={5} p={3} bg={"blue.300"} borderRadius={10}>
                            <Heading fontSize={"xl"} color={'white'}>{e}</Heading>
                        </Flex>
                    )
                })}
            </Box>

        {/* <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <div>   
                {list.map(e => {
                    return <p>{e}</p>
                })}
            </div>
        </div> */}
        </Container>
    )


}