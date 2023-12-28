import { instance } from "../instance/instance";

export const createProduct = async (ProductData) => {
    const { data } = await instance.post(`/api/board`, ProductData);
    return data;
  };

export const getAllProduct = async () => {
    const { data } = await instance.get(`/api/board`);
    return data;
}

export const getSellProduct = async () => {
    const { data } = await instance.get(`/api/board/sell`);
    return data;
}

export const getRentalProduct = async () => {
    const { data } = await instance.get(`/api/board/rental`);
    return data;
}

export const getProductBySearch = async (title) => {
    const { data } = await instance.get(`/api/board/search?title=${title}`);
    return data;
}

export const getProductById = async (id) => {
    const { data } = await instance.get(`/api/board/${id}`);
    return data;
}

export const getImgBySrc = async (src) => {
    const { data } = await instance.get(`/src`);
    return data;
}