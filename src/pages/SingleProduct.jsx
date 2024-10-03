import { Badge, Button, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useSingleProductQuery } from "../app/services/ProductsApi";
import { addCart } from "../app/slices/cartSlice";


function SingleProduct() {
  const { productId } = useParams();
  const { data, error, isLoading } = useSingleProductQuery(productId);
  const navigate = useNavigate();

  // add To Cart
  const cart = useSelector((state) => state.cart.products);
  const dispatch = useDispatch()
  const handleAddCart = ()=>{
    console.log(cart);
    const product = {
      productId:productId,
      quantity: 1
    }
    dispatch(addCart(product))
  }



  if (isLoading) return <h1> loading ... </h1>;
  if (error) return <h1> Error .... </h1>;
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Flex justify={"space-around"} direction={{base:"column",sm:"row"}} gap="4rem" p="4rem">
        <Image shadow="sm" withBorders w="20rem" src={data.image} />
        <Stack>
          <Title> {data?.title} </Title>
          <Text> {data?.description} </Text>
          <Text fz={44} fw={"bold"} > <FaDollarSign  />  {data?.price} </Text>
          <Badge bg="pink" size="lg"> {data?.category} </Badge>
          <Group>
            <Button onClick={handleGoBack} variant="default">
              Go Back
            </Button>
            <Button onClick={handleAddCart}>Add To Cart</Button>
          </Group>
        </Stack>
      </Flex>
    </div>
  );
}

export default SingleProduct;
