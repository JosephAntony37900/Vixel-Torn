import React, { useState } from "react";
import {
  Center,
  Heading,
  VStack,
  Input,
  Button,
  useToast,
  Box,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./UserContrat.css";
import { useAccount, useAlert } from "@gear-js/react-hooks";
import { useSailsCalls } from "@/app/hooks";
import {  web3Enable, web3FromSource } from "@polkadot/extension-dapp";
import { VIXEL_CONTRACT } from "@/app/consts";
import { useSailsConfig } from "@/app/hooks/useSailsConfig";

function RegisterUserForm() {
  const toast = useToast();
  const [username, setUsername] = useState("");
  const { account } = useAccount();
  const sails = useSailsCalls();
  const alert = useAlert();
  const navigate = useNavigate();

  const sailsConfig = {
    network: "wss://testnet.vara.network",
    contractId: VIXEL_CONTRACT.programId,
    idl: VIXEL_CONTRACT.idl,
  };

  useSailsConfig(sailsConfig);

  const handleSubmit = async () => {
    if (!username) {
      toast({ title: "Please enter a username", status: "error" });
      return;
    }

    if (!sails) {
      alert.error("SailsCalls is not started!");
      return;
    }

    if (!account) {
      alert.error("Account is not ready");
      return;
    }

    const extensions = await web3Enable('diavlo');
                    
    if (extensions.length === 0) {
    console.error('No Web3 extensions found or the user denied access.');
        return;
    }

    const { signer } = await web3FromSource(account.meta.source);

    try {
      const response = await sails.command(
        "VixelcoinSystem/RegisterUser",
        {
          userAddress: account.decodedAddress,
          signer,
        },
        {
          callArguments: [username],
          callbacks: {
            onSuccess() {
              toast({ title: "User registered successfully!", status: "success" });
              navigate("/home");
            },
            onError() {
              alert.error("An error occurred!");
            },
          },
        }
      );

      console.log("Response: ", response);
    } catch (e) {
      alert.error("Error while sending message");
      console.error(e);
    }
  };

  return (
    <Center>
      <VStack spacing={6}>
        <Heading
          textColor="#00ffc4"
          textShadow="2px 2px 0 #00bfa1, 4px 4px 0 #008f7d, 6px 6px 0 rgba(0,0,0,0.2)"
          fontSize="4xl"
          marginTop={20}
        >
          Register User
        </Heading>
        <Spacer />
        <Box
          width="100%"
          maxW="600px"
          padding={6}
          boxShadow="lg"
          borderRadius="md"
          bg="gray.50"
        >
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            bg="white"
            fontWeight="bold"
            color="black"
            _placeholder={{ color: "gray.500" }}
            borderColor="gray.300"
            focusBorderColor="#00ffc4"
            mb={4}
          />
          <Button
            onClick={handleSubmit}
            bg="#00ffc4"
            color="black"
            _hover={{ bg: "#00e6b0" }}
            fontWeight="bold"
          >
            Register
          </Button>
        </Box>
      </VStack>
    </Center>
  );
}

export { RegisterUserForm };