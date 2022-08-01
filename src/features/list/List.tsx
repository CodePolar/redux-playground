import { Box, Button, Container, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useGetUserMutationMutation, useGetUsersQuery } from "../../services/users";
import ListInput from "./ListInput";
import MapList from "./MapList";

function List() {
  const [val, setVal] = useState("");
  // const  { data, error, isLoading } = useGetUsersQuery("data");
  const [attempt, {data, error, isLoading}] = useGetUserMutationMutation();

  return (
    <>
      <>
        {isLoading ? (
          <Text color="white">Loading</Text>
        ) : (
          <>
            <Container>
              <ListInput />
            </Container>
            <Flex justifyContent={"space-between"}>
              <MapList title="Incompleted" filters={{}} />
              <MapList title={"Completed"} filters={{ type: "completed" }} />
            </Flex>
          </>
        )}
        <Container>
          <Heading color="white">Search</Heading>
          <Input value={val} onChange={(e) => setVal(e.target.value)} />
        </Container>
        <Button onClick={async () => {
          attempt("data");
        }}>Fetch</Button>
      </>
    </>
  );
}

export default List;
