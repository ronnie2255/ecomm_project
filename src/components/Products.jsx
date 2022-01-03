import styled from "styled-components";
import {popularProducts} from "../data";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`;

export const Products = () => {
    return (
        <Container>
            {popularProducts.map((item)=> (
                <Products item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
