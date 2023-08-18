"use client";

import {
  Avatar,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { BiGridAlt } from "react-icons/bi";
import React from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Header = () => {
  return (
    <HStack
      as={"header"}
      className="w-full py-3 px-6 shadow-sm bg-white border-b"
    >
      <FormControl>
        <InputGroup>
          <InputLeftElement>
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input
            variant={"filled"}
            type="search"
            placeholder="search for somthing ..."
            id="search"
            name="search"
            width={"20%"}
          />
        </InputGroup>
      </FormControl>
      <HStack width={"33%"} justifyContent={"end"}>
        <Button
          type="button"
          variant={"ghost"}
          w={"14"}
          p={"0"}
          color={"blue.700"}
          colorScheme="blue"
          rounded={"full"}
        >
          <BiGridAlt className="text-xl" />
        </Button>
        <Button
          type="button"
          variant={"ghost"}
          w={"14"}
          color={"blue.700"}
          colorScheme="blue"
          rounded={"full"}
        >
          <MdOutlineNotificationsNone className="text-xl" />
        </Button>
        <Wrap>
          <WrapItem>
            <Avatar
              name="ahmed shehata"
              src="https://bit.ly/sage-adebayo"
              size={"md"}
            />
          </WrapItem>
        </Wrap>
      </HStack>
    </HStack>
  );
};

export default Header;
