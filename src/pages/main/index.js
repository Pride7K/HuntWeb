import React, { useState, useEffect } from "react"
import api from "../../services/api"
import "./style.css"
import {Link} from "react-router-dom"

export default function Main() {
    const [products, setProducts] = useState([]);
    const [productsInfo, setProductsInfo] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>
    {
        async function loadProducts(page) {
            const response = await api.get(`/products?page=${page}`)
            setProductsInfo(response.data)
            setProducts(response.data.docs);
        }
        loadProducts(currentPage) 
    },[currentPage])


    function prevPage() {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1)
    }

    function nextPage() {
        if (currentPage === productsInfo.pages) return;
        setCurrentPage(currentPage + 1)
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <Link to={`/product/${product._id}`}>Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={currentPage === 1 } onClick={prevPage}>Anterior</button>
                <button disabled={currentPage === productsInfo.pages }  onClick={nextPage}>Próximo</button>
            </div>
        </div>
    )
}