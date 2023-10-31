

const Aboutus = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/src/assets/Home/banner.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                            <p className="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, nihil illo cumque laborum nam non ipsa obcaecati. Maiores quis at a unde ad, ratione laborum, delectus aspernatur ullam totam deserunt!</p>
                            <button className="btn btn-primary hover:animate-pulse">Order Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Aboutus;