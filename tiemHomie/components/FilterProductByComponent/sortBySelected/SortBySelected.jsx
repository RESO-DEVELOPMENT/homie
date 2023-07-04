import React from 'react'

const SortBySelected = ({ handleSortOptionChange, selectedSortOption }) => {
    return (
        <div className="d-flex align-items-center me-2">
            <span className="me-2">Sắp xếp theo:</span>
            <div className="custom_select text-end">
                <select
                    className="form-control form-control-sm"
                    onChange={handleSortOptionChange}
                    value={selectedSortOption}
                >
                    <option value="">Mặc định</option>
                    <option value="popularity">Nổi bật</option>
                    <option value="date">Mới nhất</option>
                    <option value="price">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                </select>
            </div>
        </div>
    )
}

export default SortBySelected
