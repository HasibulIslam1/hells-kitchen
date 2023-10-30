

const ChefDetails = () => {
    return (
        <div className="flex flex-row gap-4 justify-center py-8">

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74AGC5K7v53U-ekzWsNQV8CN-UjHUlHl3zg&usqp=CAU" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chef Mario Rossi</h2>
                    <p>Years Of Experience: 18</p>
                    <p>Number Of Recipes: 300</p>
                    <p>Likes: 10000</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Contact Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://assets.architecturaldigest.in/photos/600837f1e6e1f64740188ee5/16:9/pass/Italian-food_1-1366x768.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chef Anna Bianchi</h2>
                    <p>Years Of Experience: 18</p>
                    <p>Number Of Recipes: 300</p>
                    <p>Likes: 9000</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Contact Now</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://previews.123rf.com/images/auremar/auremar1209/auremar120900309/15072601-italian-chef.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chef Giuseppe Verdi</h2>
                    <p>Years Of Experience: 22</p>
                    <p>Number Of Recipes: 250</p>
                    <p>Likes: 8000</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Contact Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefDetails;