

const Testimonials = () => {
    return (
        // These are also same Cards used on ChefsData Tab
        <div>
            <div className="flex flex-row gap-4 justify-center py-8">

                <div className="card card-compact w-96 bg-base-100 shadow-xl hover:origin-top-left  hover:rotate-12 hover:scale-110">
                    <figure><img src="/src/assets/Testimony/testimony1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Alexander Zvir</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat? Totam excepturi, ipsa repudiandae recusandae sed molestias harum dolor ex, obcaecati iste rem alias tempora ullam voluptatem veritatis amet sit ut, laboriosam eveniet distinctio possimus.</p>
                        <p>Age: 35</p>
                        <p>Rating: 4/5</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl hover:origin-top-left  hover:rotate-12 hover:scale-125">
                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2M-KcXf4PmnQG8GQxFFL94btd7u1zGhy-Q&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Douglas Pina</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis quo quibusdam, laborum quaerat blanditiis numquam veritatis commodi molestiae illum nobis!</p>
                        <p>Age: 27</p>
                        <p>Rating: 4.5/5</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl hover:origin-top-left  hover:rotate-12 hover:scale-125">
                    <figure><img src="/src/assets/Testimony/testimony2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Jimmy Croft</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus quis, maiores quibusdam perspiciatis eum excepturi reiciendis pariatur autem cum sequi, dicta ullam deleniti! Doloribus.</p>
                        <p>Age: 30</p>
                        <p>Rating: 5/5</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;