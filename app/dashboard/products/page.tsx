'use client'
import React, {useState, useEffect} from 'react'
import {IProduct} from "../../../typeings"
import {products} from "../../../data/products"
import Image from "next/image";
function Products() {

    const [editCell, setEditCell] = useState<IProduct | null>(null)
    const [productList, setProductList] = useState(products)

    useEffect(() => {
      setProductList(products);
    }, [products])

    const editProduct = (product: IProduct) => {
        //edit Product
        console.log("Clicked")
    }

    const deleteProduct = (id: string) => {
        //delete Product
      setProductList(productList.filter(p => p.id !== id))
      console.log(`deleted + ${id}`)

    }

    const handleAddProduct = () => {
      console.log("Added Product")
    }

  return (
    <div className='pl-5'>
      <div className='flex pb-5 justify-end'>
      <h1>Products</h1>
       
      <button className='bg-blue-300 px-4 py-2 rounded' onClick={() => handleAddProduct()}>Add Product</button>
      </div>     
      <div>
      <table className="table-auto mx-auto border drop-shadow-md">
      <thead className='bg-slate-50'>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: IProduct) => (
          <tr key={product.id} className='odd:bg-white even:bg-slate-50'>
            
            <td className="border px-4 py-2">{product.id}</td>
            <td className="border px-4 py-2">{product.name}</td>
            <td className="border px-4 py-2">{product.price}</td>
            <td className='border px-4 py-2'>
                <button className='p-1 text-gray-600 hover:text-gray-800' onClick={() => deleteProduct(product.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
      
      </div>
    </div>
  );
}

export default Products;