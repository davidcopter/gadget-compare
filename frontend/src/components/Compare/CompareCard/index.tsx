import React, { useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import AsyncSelect from 'react-select/async';
import * as compareAPI from '../../../features/compare/compareAPI';
import { Product } from '../../../interfaces/prodect.interface';
import NoProductSelected from '../NoProductSelected';
import NoImage from './NoImage_300x300.png';

type Props = {
  className?: string;
};

const promiseOptions = (inputValue: string) =>
  compareAPI
    .fetchProducts(inputValue)
    .then((response: AxiosRequestConfig) => response.data)
    .catch((error) => new Error(error.message));

export function CompareCard({ className }: Props) {
  const [selectedValue, setSelectedValue] = useState<Product | undefined>();

  const handleSelectedChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <div className={className + ` compare_card m-1 md:m-4 w-full`}>
      <div className="compare_select mb-10">
        <AsyncSelect
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
          getOptionLabel={(product) => product.name}
          getOptionValue={(product) => product.id}
          onChange={handleSelectedChange}
        />
      </div>
      {selectedValue ? (
        <div className="p-2 md:p-4 rounded-lg shadow-lg">
          {/* Name */}
          <div className="product_name">
            <h1 className="text-center text-lg md:text-2xl font-bold mb-8">
              {selectedValue.name}
            </h1>
            <img
              className="object-fill md:object-scale-down"
              src={selectedValue.imageUrl ? selectedValue.imageUrl : NoImage}
              alt={selectedValue.name + ' Image'}
            />
          </div>
          <div className="product_price flex justify-center py-8">
            <div className="product_price-icon mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="font-medium md:text-xl">
              ${selectedValue.price}
            </span>
          </div>
          {/* Description */}
          <div className="product_description py-4">
            <div className="flex justify-center items-center mb-2">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <h1 className="font-medium md:text-xl ml-2">Description</h1>
              </div>
            </div>
            <p className="text-center">{selectedValue.description}</p>
          </div>
          {/* category */}
          <div className="product_category py-4">
            <div className="flex justify-center items-center mb-2">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
                <h1 className="font-medium md:text-xl ml-2">Category</h1>
              </div>
            </div>
            <p className="text-center">{selectedValue.category}</p>
          </div>
          {/* Material */}
          <div className="product_material py-4">
            <div className="flex justify-center items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <h1 className="font-medium md:text-xl">Material</h1>
            </div>
            <p className="text-center">{selectedValue.material}</p>
          </div>
          {/* Dimension */}
          <div className="product_dimension py-4">
            <div className="flex justify-center items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
              <h1 className="font-medium md:text-xl">Dimension</h1>
            </div>
            <p className="text-center">{selectedValue.dimension} mm.</p>
          </div>
          {/* Weight */}
          <div className="product_weight py-4">
            <div className="flex justify-center items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
              <h1 className="font-medium md:text-xl">Weight</h1>
            </div>
            <p className="text-center">{selectedValue.weight}</p>
          </div>
        </div>
      ) : (
        <NoProductSelected />
      )}
    </div>
  );
}
