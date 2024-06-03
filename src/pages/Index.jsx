import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Checkbox, IconButton, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (newHabit.trim() !== "") {
      setHabits([...habits, { text: newHabit, completed: false }]);
      setNewHabit("");
    }
  };

  const toggleHabitCompletion = (index) => {
    const updatedHabits = habits.map((habit, i) => (i === index ? { ...habit, completed: !habit.completed } : habit));
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Habit Tracker</Text>
        <HStack width="100%">
          <Input placeholder="New Habit" value={newHabit} onChange={(e) => setNewHabit(e.target.value)} />
          <Button onClick={addHabit} colorScheme="teal">
            Add
          </Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {habits.map((habit, index) => (
            <HStack key={index} width="100%" justifyContent="space-between" p={2} borderWidth={1} borderRadius="md">
              <Checkbox isChecked={habit.completed} onChange={() => toggleHabitCompletion(index)}>
                <Text as={habit.completed ? "s" : ""}>{habit.text}</Text>
              </Checkbox>
              <IconButton aria-label="Delete Habit" icon={<FaTrash />} onClick={() => deleteHabit(index)} />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
