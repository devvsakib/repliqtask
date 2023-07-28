import axios from 'axios';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const api = axios.create({
       baseURL: 'https://fantasiserver.onrender.com/'
});

export function useProducts() {
    const { data, error } = useSWR('/', async url => {
        const response = await api.get(url);
        return response.data;
    });

    return {
        products: data,
        isLoading: !error && !data,
        isError: error
    };
}

export function useCustomers() {
    const { data, error } = useSWR('/user', async url => {
        const response = await api.get(url);
        return response.data;
    });

    return {
        customers: data,
        isLoading: !error && !data,
        isError: error
    };
}

export function useProductById(slug) {
    const { data, error } = useSWR(`/product/${slug}`, async url => {
        const response = await api.get(url);
        return response.data;
    });

    return {
        product: data,
        isLoading: !error && !data,
        isError: error
    };
}

export function useCustomerByUsername(username) {
    const { data, error } = useSWR(`/user/${username}`, async url => {
        const response = await api.get(url);
        return response.data;
    });

    return {
        customer: data,
        isLoading: !error && !data,
        isError: error
    };
}
export function useCategories() {
    const { data, error } = useSWR(`/categories`, async url => {
        const response = await api.get(url);
        return response.data;
    });

    return {
        categories: data,
        isLoading: !error && !data,
        isError: error
    };
};

export default api;