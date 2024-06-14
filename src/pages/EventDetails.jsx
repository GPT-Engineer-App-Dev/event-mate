import { useParams } from "react-router-dom";
import { Container, Heading, Text, VStack } from "@chakra-ui/react";

const EventDetails = () => {
  const { id } = useParams();

  // Mock data for demonstration purposes
  const event = {
    id,
    name: `Event ${id}`,
    date: "2023-10-01",
    description: `Details about Event ${id}`,
  };

  return (
    <Container centerContent maxW="container.md" mt={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl" textAlign="center">{event.name}</Heading>
        <Text fontSize="lg" textAlign="center">{event.date}</Text>
        <Text fontSize="md" textAlign="center">{event.description}</Text>
      </VStack>
    </Container>
  );
};

export default EventDetails;