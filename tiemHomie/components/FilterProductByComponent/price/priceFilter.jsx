import React from "react";
import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const PriceFilter = ({ handleSliderChange, value}) => {
    const sliderStyle = {
        width: "100%",
        margin: "0 auto",
        // Add more styles as needed
    };
    const valueContainerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        // Add more styles as needed
    };
    const valueLabelStyle = {
        marginRight: "10px",
        // Add more styles as needed
    };
    const handleStyle = {
        borderColor: "#FFF",
        backgroundColor: "#FFF",
    };
    const trackStyle = {
        backgroundColor: "red",
    };
    return (
        <div>
            <h5>Giá</h5>
            <Slider
                range
                // step={50000}
                min={0}
                max={1000000}
                value={value}
                onChange={handleSliderChange}
                style={sliderStyle}
                trackStyle={trackStyle}
                handleStyle={[handleStyle, handleStyle]} // Apply handle styles to both markers
            />
            <div style={valueContainerStyle}>
                <div style={valueLabelStyle}>Giá:</div>
                <div className="fw-bold">
                    {formatPrice(value[0])}VND-{formatPrice(value[1])}VND
                </div>
            </div>
        </div>
    );
};
export default PriceFilter