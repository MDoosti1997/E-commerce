import { Box, Button, Container, Heading, VStack, Input, useColorModeValue, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
  });

  const { createProduct } = useProductStore();
  const toast = useToast();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: message,
        status: 'error',
        isClosable: true,
        description: true,
        duration: 3000
      });
    } else {
      toast({
        title: 'Product created successfully!',
        status: 'success',
        isClosable: true,
        description: true,
        duration: 3000
      })
      setNewProduct({ name: '', price: '', image: '' });
    }
  };

  return (
    <Container maxW="md" centerContent py={8}>
      <VStack spacing={6} w="full">
        <Heading
          as="h1"
          size="lg"
          textAlign="center"
          color={useColorModeValue('blue.600', 'blue.300')}
        >
          Create New Product
        </Heading>
        <Box
          w="full"
          bg={useColorModeValue('white', 'gray.800')}
          p={6}
          rounded="lg"
          shadow="xl"
        >
          <VStack spacing={4}>
            <Input
              variant="filled"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              size="lg"
            />
            <Input
              variant="filled"
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              size="lg"
            />
            <Input
              variant="filled"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              size="lg"
            />
            <Button
              colorScheme="blue"
              onClick={handleAddProduct}
              size="lg"
              w="full"
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
