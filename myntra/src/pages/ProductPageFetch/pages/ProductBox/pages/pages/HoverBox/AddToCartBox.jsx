import React from 'react'
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { Text, Box, Button } from "@chakra-ui/react";

export const AddToCartBox = ({data}) => {

    data.size.length = 5 
  return (
    <Box mt="5px">
              <Button
                mb="2"
                borderRadius={"0px"}
                w="100%"
                border={"1px solid black"}
                gap="3"
              >
                <Text textAlign={"start"}>
                  <BsHeart color="black" />
                </Text>{" "}
                <Text color="black">WISHLIST</Text>
              </Button>
              <Button
                borderRadius={"0px"}
                w="100%"
                border={"1px solid black"}
                gap="3"
              >
                <Text textAlign={"start"}>
                  <BsCart color="black" />
                </Text>{" "}
                <Text color="black">ADD TO CART</Text>
              </Button>

              <Text color="black">size :- {data.size.join(" ")} </Text>
              <Text textAlign={"start"}>
                <Text as="b" color="black">
                  Rs.{data.strike_price}
                </Text>
              </Text>
            </Box>
  )
}