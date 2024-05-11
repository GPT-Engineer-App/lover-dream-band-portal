import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF, FaSpotify, FaYoutube, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      <FeatureSection />
      <Footer />
    </Container>
  );
};

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justify="space-between" p={4} bg="white" boxShadow="sm" position="sticky" top={0} zIndex="banner">
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        Lover Dream
      </Heading>
      <Flex align="center">
        <NavButton href="#home" text="Home" />
        <NavButton href="#about" text="About" />
        <NavButton href="#tour" text="Tour" />
        <NavButton href="#music" text="Music" />
        <NavButton href="#merch" text="Merch" />
        <NavButton href="#contact" text="Contact" />
      </Flex>
    </Flex>
  );
};

const NavButton = ({ href, text }) => (
  <Button as={Link} href={href} variant="ghost" p={4} fontSize="md" fontWeight="bold" _hover={{ bg: "gray.100" }}>
    {text}
  </Button>
);

const FeatureSection = () => {
  return (
    <VStack spacing={8} py={10} align="center" w="full">
      <Image src="https://images.unsplash.com/photo-1534447677768-be436bb09401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwTG92ZXIlMjBEcmVhbSUyMHBlcmZvcm1pbmd8ZW58MHx8fHwxNzE1NDQ0NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Lover Dream Band" boxSize="full" objectFit="cover" />
      <VStack spacing={3} textAlign="center">
        <Heading as="h2" size="xl">
          Welcome to Lover Dream
        </Heading>
        <Text fontSize="lg" maxW="container.md">
          Dive into the world of Lover Dream, explore our music, check out our latest tour dates, and grab some exclusive merch!
        </Text>
        <Button colorScheme="purple" size="lg">
          Explore More
        </Button>
      </VStack>
    </VStack>
  );
};

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={5}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <VStack align="start">
            <Text fontWeight="bold" fontSize="lg">
              Follow Us
            </Text>
            <Flex>
              <SocialIcon icon={FaInstagram} href="https://instagram.com" />
              <SocialIcon icon={FaTwitter} href="https://twitter.com" />
              <SocialIcon icon={FaFacebookF} href="https://facebook.com" />
              <SocialIcon icon={FaSpotify} href="https://spotify.com" />
              <SocialIcon icon={FaYoutube} href="https://youtube.com" />
            </Flex>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" fontSize="lg">
              Quick Links
            </Text>
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#tour">Tour</Link>
            <Link href="#music">Music</Link>
            <Link href="#merch">Merch</Link>
            <Link href="#contact">Contact</Link>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" fontSize="lg">
              Shop
            </Text>
            <Link href="#merch" leftIcon={<FaShoppingCart />}>
              Merchandise
            </Link>
          </VStack>
          <VStack align="start">
            <Text fontWeight="bold" fontSize="lg">
              Legal
            </Text>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </VStack>
        </SimpleGrid>
        <Text pt={10} fontSize="sm" textAlign="center">
          © 2023 Lover Dream. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

const SocialIcon = ({ icon, href }) => (
  <Link href={href} isExternal p={2}>
    {icon({ size: "20px", color: "white" })}
  </Link>
);

export default Index;
