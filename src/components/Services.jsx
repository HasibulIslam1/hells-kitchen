

const Services = () => {
    return (
        // These are same slider used in Home Page
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/src/assets/Home/banner.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Resort & Restaurant</h1>
                            <p className="mb-5">Exotic Feeling in Our Resort & Restaurant</p>
                            <button className="btn btn-primary hover:animate-bounce">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/src/assets/Home/02.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Food Delivery</h1>
                            <p className="mb-5">We Provide Food From store to Door</p>
                            <button className="btn btn-primary hover:animate-bounce">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(/src/assets/Home/01.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Catering Service</h1>
                            <p className="mb-5">We Provide Food for Social Functions and Weddings</p>
                            <button className="btn btn-primary hover:animate-bounce ">Book Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Services;