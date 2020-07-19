import React, { useState, useEffect } from 'react';
import api from "../../services/api"
import "./style.css"


export default function Product({match}) {
    const [product, setProduct] = useState({});
    useEffect(() => {
        async function loadProduct() {
            const {id} = match.params;
            const response = await api.get(`/products/${id}`)
            setProduct(response.data)
        }
        loadProduct();
    }, [])

    return (
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.title}</p>
            <p>
                <a href={product.url}>{product.url}</a>
            </p>
        </div>
    )
}