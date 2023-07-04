import React from 'react'
import PriceFilter from '../price/priceFilter'
import Tags from '../Tags/Tags'
const SmallSideBar = ({collections, productCount, value, handleSliderChange, products, setData, setSelectedSortOption}) => {
  return (
      <div className="sidebar">
                        <div className="widget">
                            <Tags collections={collections} productCount={productCount} />
                        </div>
                        <div className="widget">
                            <PriceFilter
                                // products={products}
                                // setData={setData}
                                // setSelectedSortOption={setSelectedSortOption}
                                value={value}
                                handleSliderChange={handleSliderChange}
                            />
                        </div>
                    </div>
  )
}

export default SmallSideBar
