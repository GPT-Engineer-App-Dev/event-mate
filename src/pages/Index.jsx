import { Container, VStack, Heading, Text, Button, Box, HStack, IconButton } from "@chakra-ui/react";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">Events Management</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <HStack spacing={4}>
          <Button as={Link} to="/create-event" leftIcon={<FaPlus />} colorScheme="teal" size="lg">Create Event</Button> {/* Update button to use Link */}
          <Button leftIcon={<FaCalendarAlt />} colorScheme="blue" size="lg">View Events</Button>
        </HStack>
        <Box width="100%" mt={10}>
          <Heading as="h2" size="lg" mb={4}>Upcoming Events</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Event 1</Heading>
              <Text mt={4}>Details about Event 1</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Event 2</Heading>
              <Text mt={4}>Details about Event 2</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Event 3</Heading>
              <Text mt={4}>Details about Event 3</Text>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;