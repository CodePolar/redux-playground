import { Box, Button, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { add, selectList } from "./listSlice";

export default function ListInput() {
    const dispatch = useAppDispatch();
    const [text, setText] = useState("");

    return (
        <Box >
            <Heading color="white" my={5}>TODO App</Heading>
            <Flex>
            <Input color="white" value={text} onChange={(e) => setText(e.target.value)} placeholder="Name"  />
            <Button ml={2} onClick={() => dispatch(add({title: text, completed: false}))}>Add Item</Button>
            </Flex>
        </Box>
    )


}