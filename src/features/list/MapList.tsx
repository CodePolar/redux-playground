import {
  Box,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Button,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ListItemType, ListState, done } from "./listSlice";

function MapList({ filters = {}, title }: { filters: any; title: string }) {
  const list = useAppSelector((state) => state.list.list);

  return (
    <>
      <Box textAlign={"center"}>
        <Heading color={"white"} mb={2}>
          {title}
        </Heading>
      {filters.type === "completed"? (
        <Completed list={list} />
      ) : <Incompleted list={list} />}
      </Box>
    </>
  );
}


const Incompleted = ({list}: {list: ListItemType[]}) => {

  const dispatch = useAppDispatch();

  return (
    <>
    <Box mx={2} >
    {list.map((e: ListItemType, i) => {
      return !e.completed? (
        <Box bg="white" borderRadius={5} p={2} key={i} my={2}>
          <>
          {e.title}
          <Button colorScheme={"red"} ml={3}>
            Delete
          </Button>
          <Button onClick={() => {
            dispatch(done(i));
          }} colorScheme={"blue"} ml={3}>
            Done
          </Button>
          </>
        </Box>
      ) : <></>;
    })}
    </Box>
    </>
  );
}

const Completed = ({list}: {list: ListItemType[]}) => {
  return (
    <>
    <Box   mx={2} >
    {list.map((e: ListItemType, i) => {
      return e.completed? (
        <Box bg="white" borderRadius={5} p={2} key={i} my={2}>
          <>
          {e.title}
          <Button colorScheme={"red"} ml={3}>
            Delete
          </Button>
          <Button onClick={() => {
            
          }} colorScheme={"blue"} ml={3}>
            Done
          </Button>
          </>
        </Box>
      ) : <></>;
    })}
    </Box>
    </>
  );
}

export default MapList;
