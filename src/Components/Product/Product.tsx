import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

import { IproductInfo } from "../ProductInfo/ProductInfo";

export const ProductContainer = styled.div`
  display: flex;
  width: 33.33%;
  flex-direction: column;
  border: 1px solid #ccc;
  width: calc(33.33% - 38px);
  padding: 10px;
  margin: 0px 8px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 1px 1px #ccc;
`;

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  border: 1px solid green;
  background: green;
  color: white;
  padding: 5px;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
    scale: 1.1;
  }
`;

const UpdateContainer = styled.button`
  border: 1px solid #ddd;
  background: #ddd;
  padding: 10px 18px;
`;
interface Props extends IproductInfo {
  updateCart?: (ele: IproductInfo) => void;
}

export const Products: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  const [rating, setrating] = useState<number>(props.rating);
  const [editrating, seteditrating] = useState<boolean>(false);
  const [quantity, setquantity] = useState<number>(props.quantity);
  const [editquantity, seteditquantity] = useState<boolean>(false);

  const ratingref = useRef() as React.RefObject<HTMLInputElement>;

  useEffect(() => {
    setrating(parseInt(ratingref?.current?.value||'0'));
  }, []);

  const toggleQuantity = (): void => {
    seteditquantity((val) => !val);
  };
  const toggleRating = (): void => {
    seteditrating((val) => !val);
  };

  const handleRating = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setrating(+event.target.value);
  };

  const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setquantity(+event.target.value);
  };
  const addCart = (): void => {
    const cartElements = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity,
      rating,
    };
    props.updateCart?.(cartElements);
  };
  return (
    <ProductContainer>
      <h1>{props.name}</h1>
      <h3>Rs.{props.price}</h3>
      {props.children && <p>{props.children}</p>}
      {!editquantity && <p onClick={toggleQuantity}>Quantity:{quantity}</p>}
      {editquantity && (
        <>
          <input type="number" value={quantity} onChange={handleQuantity} />
          <div>
            <UpdateContainer onClick={toggleQuantity}>update</UpdateContainer>
          </div>
        </>
      )}
      {!editrating && <p onClick={toggleRating}>rating:{rating}</p>}
      {editrating && (
        <>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={handleRating}
            ref={ratingref}
          />
          <div>
            <UpdateContainer onClick={toggleRating}>update</UpdateContainer>
          </div>
        </>
      )}
      <ButtonContainer onClick={addCart}>Add To Cart</ButtonContainer>
    </ProductContainer>
  );
};
