import React, { useEffect, useState } from "react";
import CustomSlider from "../../components/custom.slider";
import { bannerApi } from "../../api/bannerApi";
import Loading from "../../components/Loading";
import AppUrl from "../../api/AppURL";

export default function Slider() {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await bannerApi.getAll();
                setBanners(response.data);
            } catch (error) {
                console.error("Error fetching banners:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);
    const displayedBanners = banners.slice(0, 2);
    if (loading) {
        return <Loading />;
    }

    return (
        <div
            className="slider-container col l-8 m-12 c-12"
            style={{ margin: "auto", display: "flex", marginTop: "10px" }}
        >
            <div
                className="slider-main col l-8 m-4 c-6"
                style={{ padding: "0" }}
            >
                <CustomSlider>
                    {banners.map((banner, index) => (
                        <img
                            key={index}
                            src={`${AppUrl.ImageUrl}/images/banners/${banner.image}`}
                            alt={banner.description || `Banner ${index + 1}`}
                            data-link={banner.link}
                            style={{ width: "100%" }}
                        />
                    ))}
                </CustomSlider>
            </div>
            <div className="slider-right col l-4 m-4 c-6">
                {displayedBanners.map((image, index) => (
                    <div
                        className="slider-item"
                        key={index}
                        style={{ marginTop: index > 0 ? 5 : 0 }}
                    >
                        <img
                            className="img-right"
                            src={`${AppUrl.ImageUrl}/images/banners/${image.image}`}
                            alt={`Sidebar Image ${index + 1}`}
                            style={{ width: "100%" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
