import { useMutation } from "react-query";
import { createProduct } from "./api";

export const useAddProductMutation = () => {
    return useMutation(
      (ProductData) => {
        return createProduct(ProductData);
      },
      {
        onSuccess: () => {
          alert("상품이 등록되었어요.");
        },
        onError: () => {
          alert("상품을 등록하지 못 했어요.");
        },
      }
    );
  };