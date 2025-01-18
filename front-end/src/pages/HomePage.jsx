import React, { useEffect } from 'react';
import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient='linear(to-l,rgb(40, 191, 202),rgb(17, 0, 255))'
          bgClip='text'
          fontSize={{ base: "22", sm: "28" }}
          fontWeight='bold'
          textAlign={"center"}
          textTransform={"uppercase"}
        >
          Current Product 📦
        </Text>

        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text fontSize='xl' textAlign={'center'} fontWeight={'bold'} color={'gray.5000'}>
            No product found 😕{' '}
            <Link to={'/create'}>
              <Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
