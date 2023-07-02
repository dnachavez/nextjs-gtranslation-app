import {
  Box,
  Heading,
  VStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaCopy } from "react-icons/fa";
import { useClipboard } from "@chakra-ui/react";
import TranslationForm from "../components/TranslationForm";
import { useState } from "react";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [translation, setTranslation] = useState(null);
  const [error, setError] = useState(null);
  const bg = useColorModeValue("gray.50", "gray.800");
  const { onCopy } = useClipboard(translation);

  const handleTranslate = async ({ text, from, to }) => {
    setError(null);
    setTranslation(null);
    try {
      const res = await fetch(
        `api/translate?from=${from}&to=${to}&text=${encodeURIComponent(text)}`
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      if (!data.status) {
        throw new Error(data.message);
      }
      setTranslation(data.translated);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <VStack
      spacing={8}
      justify="center"
      align="center"
      minHeight="100vh"
      bg={bg}
      padding={6}
    >
      <Heading>Google Translation</Heading>
      <IconButton
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        aria-label="Toggle dark mode"
      />
      <TranslationForm
        onTranslate={handleTranslate}
        translation={translation}
        setTranslation={setTranslation}
      />
      {translation && (
        <Box
          w={{ base: "65%", lg: "25%", md: "25%" }}
          p={5}
          borderWidth={1}
          borderRadius="lg"
        >
          <Flex justifyContent="space-between" align="center">
            <Box>{translation}</Box>
            <IconButton
              icon={<FaCopy />}
              onClick={onCopy}
              aria-label="Copy translation"
            />
          </Flex>
        </Box>
      )}
      {error && (
        <Box
          w={{ base: "65%", lg: "25%", md: "25%" }}
          p={5}
          borderWidth={1}
          borderRadius="lg"
          color="red.500"
        >
          {error}
        </Box>
      )}
    </VStack>
  );
}
