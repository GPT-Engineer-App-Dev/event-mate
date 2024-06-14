import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle event creation
    console.log("Event Created:", { eventName, eventDate, eventDescription });
  };

  return (
    <Container centerContent maxW="container.md" mt={10}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="xl" textAlign="center">Create New Event</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="event-name" isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Enter event name" />
            </FormControl>
            <FormControl id="event-date" isRequired>
              <FormLabel>Event Date</FormLabel>
              <Input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </FormControl>
            <FormControl id="event-description">
              <FormLabel>Event Description</FormLabel>
              <Textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} placeholder="Enter event description" />
            </FormControl>
            <Button colorScheme="teal" size="lg" type="submit">Create Event</Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default CreateEvent;