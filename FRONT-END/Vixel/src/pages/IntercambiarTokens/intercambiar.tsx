import React, { useState } from "react";
import {
  Center,
  Heading,
  VStack,
  Input,
  Button,
  useToast,
  Spacer,
  Box,
  Stepper as ChakraStepper,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepNumber,
  useSteps,
  HStack,
  Text,
} from "@chakra-ui/react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useAccount, useAlert } from "@gear-js/react-hooks";
import { useSailsCalls } from "@/app/hooks";
import {  web3Enable, web3FromSource } from "@polkadot/extension-dapp";
import { VIXEL_CONTRACT } from "@/app/consts";
import { useSailsConfig } from "@/app/hooks/useSailsConfig";
import HeaderPage from "@/components/Organismos/HeaderPage/HeaderPage";

const steps = [
  "Deploy",
  "Sell Vixelcoins",
  "Confirm and Execute",
  "Integration Complete",
];

function VixelcoinSellForm() {
  
  const toast = useToast();
  const [amount, setAmount] = useState("");
  const { activeStep, setActiveStep } = useSteps({ initialStep: 0 });
  const [blockhash, setBlockhash] = useState<any>("");

  const { account } = useAccount();
  const sails = useSailsCalls();
  const alert = useAlert();

  const sailsConfig = {
    network: "wss://testnet.vara.network",
    contractId: VIXEL_CONTRACT.programId,
    idl: VIXEL_CONTRACT.idl,
  };

  useSailsConfig(sailsConfig);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handleDeploy = () => {
    setActiveStep(1); 
  };

  const handleSubmit = async () => {
    if (!amount) {
      toast({ title: "Please enter an amount", status: "error" });
      return;
    }

    const callArguments = [Number(amount)];

    toast({
      render: () => (
        <Box color="white" p={3} bg="#00ffc4" borderRadius="md" boxShadow="lg">
          <Heading size="sm">Executing SellVixelcoins</Heading>
          <Text mt={2}>Parameters: {JSON.stringify(callArguments)}</Text>
        </Box>
      ),
      duration: 5000,
      isClosable: true,
    });

    if (!sails) {
      alert.error("SailsCalls is not started!");
      return;
    }

    if (!account) {
      alert.error("Account is not ready");
      return;
    }

    
      // Llama primero a web3Enable
      const extensions = await web3Enable('diavlo');

      if (extensions.length === 0) {
          console.error('No Web3 extensions found or the user denied access.');
          return;
      }

    const { signer } = await web3FromSource(account.meta.source);

    try {
      const response = await sails.command(
        "VixelcoinSystem/SellVixelcoins",
        {
          userAddress: account.decodedAddress,
          signer,
        },
        {
          callArguments: callArguments,
          callbacks: {
            onBlock(blockHash) {
              setBlockhash(blockHash);
            },
            onSuccess() {
              setActiveStep(3); 
              toast({ title: "Integration successful!", status: "success" });
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

  const goToPreviousStep = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    
    <Center>
      <HeaderPage/>
      <VStack spacing={6}>
        <Heading
          textColor="#00ffc4"
          textShadow="2px 2px 0 #00bfa1, 4px 4px 0 #008f7d, 6px 6px 0 rgba(0,0,0,0.2)"
          fontSize="4xl"
        >
          Vixelcoin Sell Form
        </Heading>
        <Spacer />
        <Box
          width="100%"
          maxW="600px"
          padding={6}
          boxShadow="lg"
          borderRadius="md"
          bg="gray.50"
          marginTop={20}
        >
          <ChakraStepper size="lg" index={activeStep} colorScheme="teal" mb={6}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepNumber />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>
                <StepSeparator />
              </Step>
            ))}
          </ChakraStepper>

          {activeStep === 0 && (
            <VStack spacing={6}>
              <Button
                onClick={handleDeploy}
                size="lg"
                bg="#00ffc4"
                color="black"
                _hover={{ bg: "#00e6b0" }}
                fontWeight="bold"
              >
                Deploy
              </Button>
            </VStack>
          )}

          {activeStep === 1 && (
            <VStack spacing={6}>
              <Input
                placeholder="Amount of Vixelcoins"
                name="amount"
                value={amount}
                onChange={handleInputChange}
                bg="white"
                fontWeight="bold"
                color="black"
                _placeholder={{ color: "gray.500" }}
                borderColor="gray.300"
                focusBorderColor="#00ffc4"
              />
              <HStack spacing={4}>
                <Button
                  bg="transparent"
                  color="black"
                  colorScheme="solid"
                  leftIcon={<FaArrowCircleLeft size="40px" color="#00ffc4" />}
                  onClick={goToPreviousStep}
                />

                <Button
                  onClick={handleSubmit}
                  bg="#00ffc4"
                  color="black"
                  _hover={{ bg: "#00e6b0" }}
                  fontWeight="bold"
                >
                  Execute SellVixelcoins
                </Button>
              </HStack>
            </VStack>
          )}

          {activeStep === 3 && (
            <VStack spacing={6}>
              <Heading size="lg" color="teal.500">
                🎉 Successful Integration!
              </Heading>
              <Text>
                Your service has been successfully deployed and executed.
              </Text>
              <Button
                onClick={() => setActiveStep(0)}
                bg="#00ffc4"
                color="black"
                _hover={{ bg: "#00e6b0" }}
                fontWeight="bold"
              >
                Start Over
              </Button>
            </VStack>
          )}
        </Box>
      </VStack>
    </Center>
  );
}

export { VixelcoinSellForm };