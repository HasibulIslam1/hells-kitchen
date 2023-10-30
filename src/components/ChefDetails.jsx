

const ChefDetails = () => {
    return (
    //    Chef Details Data Added In 3 Cards all from daisyUI
       <div className="flex flex-row gap-4 justify-center py-8">

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/src/assets/ChefsPic/chef1 (1).jpg" alt="Shoes" /></figure>
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
                <figure><img src="/src/assets/ChefsPic/chef2.webp" alt="Shoes" /></figure>
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
                <figure><img src="/src/assets/ChefsPic/chef3.jpg" alt="Shoes" /></figure>
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