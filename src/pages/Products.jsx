import {
  Badge,
  Button,
  Card,
  FileInput,
  Flex,
  Group,
  Image,
  Modal,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { Link } from "react-router-dom";

import {
  useAddProductMutation,
  useProductsQuery,
} from "../app/services/ProductsApi";

function Products() {
  
  //products
  const {
    data: products,
    error: prodError,
    isLoading: prodLoading,
  } = useProductsQuery();
  const [opened, { open, close }] = useDisclosure(false);

  // add new product
  const [title,setTitle] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [image,setImage] = useState(null)
  const [category,setCategory] = useState("")

  const handleTitleOnchange = (e)=>{
    setTitle(e.target.value)
  }
  const handlePriceOnchange = (e)=>{
    setPrice(e.target.value)
  }
  const handleDescriptionOnchange = (e)=>{
    setDescription(e.target.value)
  }
  const handleCategoryOnchange = (e)=>{
    setCategory(e.target.value)
  }

  const [addProduct] = useAddProductMutation()
  
  const handleProductSubmission = async (e)=>{
    e.preventDefault()
    try {
      const product = {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category
    }

    const res = await addProduct(product)
    console.log("add prod response",res);
    setTitle("")
    setPrice("")
    setDescription("")
    setImage(null)
    setCategory("")
    close()
    } catch (error) {
      console.log(error);
    }
  }


  
  // Loading and error handling
  if (prodLoading) {
    return <div>Loading...</div>;
  }

  if (prodError ) {
    return <div>Error loading products or categories.</div>;
  }

  // Function to render product cards
  const renderProductCards = (productList) => {
    return productList.map((product, index) => (
      <Card
        key={index}
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        w="20rem"
      >
        <Card.Section mx="auto">
          <Image
            src={product.image}
            w="10rem"
            h="10rem"
            alt={product.title}
            fit="contain"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{product.name}</Text>
          <Badge color="pink" size="sm">
            {product.category}
          </Badge>
        </Group>

        <Text size="sm" c="dimmed">
          {product.description.slice(0, 100) + "..."}
        </Text>

        <Button color="orange" fullWidth mt="md" radius="md">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/products/${index + 1}`}
          >
            Read More ...
          </Link>
        </Button>
      </Card>
    ));
  };

  return (
    <>
    
      {/* Modal */}
      <Modal opened={opened} onClose={close} centered>
        <Text fw="bold" my="1rem" fz="h3" ta="center">
          Add Product
        </Text>
        <form onSubmit={handleProductSubmission}>
          {/* title field */}
          <TextInput
            size="md"
            label="Title"
            value={title}
            onChange={handleTitleOnchange}
            variant="default"
            placeholder="test product"
          />
          <Space h="md"></Space>
          {/* price field */}
          <TextInput
            size="md"
            label="Price"
            value={price}
            onChange={handlePriceOnchange}
            variant="default"
            placeholder="13.5"
          />
          <Space h="md"></Space>
          {/* description field */}
          <TextInput
            size="md"
            label="Description"
            variant="default"
            value={description}
            onChange={handleDescriptionOnchange}
            placeholder="lorem ipsum set"
          />
          <Space h="md"></Space>
          <FileInput size="md"
            label="Image"
            variant="default"
            placeholder="Upload product image"
            leftSection={<FaImage/>}
            value={image}
            onChange={setImage} />
          <Space h="md"></Space>
          {/* category field */}
          <TextInput
            size="md"
            label="Category"
            variant="default"
            value={category}
            onChange={handleCategoryOnchange}
            placeholder="electronic"
          />
          <Space h="md"></Space>

          <Button type="submit" style={{ float: "right" }} my="1rem">
            Submit
          </Button>
        </form>
      </Modal>
      {/* Product cards */}
      <Flex wrap="wrap" gap="lg" justify="center">
        {renderProductCards(products)}
      </Flex>
    </>
  );
}

export default Products;
