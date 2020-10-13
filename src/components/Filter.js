import React from 'react';
import { useSelector } from 'react-redux';

function Filter({ sort, sortProducts, filterProducts }) {
    const count = useSelector(state => state.productReducer.filteredItems)

    return (
        <div className="filter">
            <div className="filter-result">{!count ? "0" : count.length} Products</div>
            <div className="filter-sort">
                Order{" "}
                <select value={sort}
                    onChange={sortProducts}>
                    <option value="">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <div className="filter-size">Filter{" "}
                <select onChange={filterProducts}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;