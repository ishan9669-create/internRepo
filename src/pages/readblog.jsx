import Footer from "../components/footer";
import '../css/read.css'
export default function Read(){
    return (
        <div>
             <main className="blog-container mt-20">
        <div className="blog-header">
            <a className="back-button" href="#">
                <i className="fas fa-arrow-left"></i> Back
            </a>
        </div>
        <article className="blog-content">
            <div className="blog-tag">Accounting</div>
            <h1 className="text-3xl font-bold">The Ultimate Guide to Maximizing Efficiency</h1>
            <p className="blog-intro">Lorem ipsum dolor, sit amet consectetur adipisicing elit. fugit perspiciatis quas voluptas ipsum id voluptatem itaque</p>
            <hr/>
            <div className="author-info">Pratik Shah • 10 min read</div>
            <div className="image-container">
                <img alt="A hand holding a dollar bill with a blurred background of trees" src="img/ExploreMore3.jpeg" />
            </div>
            <div className="text-content">
                <h2 className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa ut dui rutrum placerat. Duis nunc neque, porta quis feugiat in, interdum vel urna. Cras
                    faucibus interdum condimentum. Sed quis posuere dui. Cras at ornare tellus. Cras dignissim sed
                    lectus nec fringilla. Sed nec molestie eros. Integer sed euismod velit. Pellentesque consectetur
                    scelerisque lectus, eget tincidunt odio suscipit ut.
                </p>
                <p>
                    Nunc quis ultricies sem, ac efficitur libero. Ut ac massa ex. Morbi elementum sapien id purus
                    rhoncus, id dictum ex viverra. Curabitur nisi magna, malesuada lacinia nunc sed, semper sodales
                    neque. Nulla sem arcu, vulputate eget tristique nec, euismod vitae sem. Etiam nisi risus, accumsan
                    id lacus quis, congue sollicitudin erat. Ut malesuada lorem id erat semper, ac fringilla magna
                    sodales. Suspendisse potenti. Phasellus vulputate justo eget fringilla consectetur. Pellentesque nec
                    sem vitae mi sodales aliquet in eu nisi. Vestibulum vehicula metus ac finibus viverra. Proin
                    suscipit dolor sed odio fermentum, congue tincidunt sapien semper. Sed ornare dapibus ultricies.
                </p>
               
            </div>
            <div className="text-content">
                <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                    Lorem ipsum dolor sit amet </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa ut dui rutrum placerat. Duis nunc neque, porta quis feugiat in, interdum vel urna. Cras
                    faucibus interdum condimentum. Sed quis posuere dui. Cras at ornare tellus. Cras dignissim sed
                    lectus nec fringilla. Sed nec molestie eros. Integer sed euismod velit. Pellentesque consectetur
                    scelerisque lectus, eget tincidunt odio suscipit ut.
                </p>
                <div className="quote-content ">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa at dui rutrum placerat."
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa at dui rutrum placerat.</p>
                <ul className="list-content">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                    <li>Nullam id cursus ante. Phasellus aliquet</li>
                    <li>Porta quis feugiat in, interdum vel urna</li>
                </ul>
            </div>
            <div className="text-content">
                <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>
                    Lorem ipsum dolor sit amet </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                    massa ut dui rutrum placerat. Duis nunc neque, porta quis feugiat in, interdum vel urna. Cras
                    faucibus interdum condimentum. Sed quis posuere dui. Cras at ornare tellus. Cras dignissim sed
                    lectus nec fringilla. Sed nec molestie eros. Integer sed euismod velit. Pellentesque consectetur
                    scelerisque lectus, eget tincidunt odio suscipit ut.
                    Pellentesque consectetur scelerisque lectus, eget tincidunt odio suscipit ut.
                </p>
            </div>
            <blockquote className="quote-content">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id cursus ante. Phasellus aliquet
                massa at dui rutrum placerat."
            </blockquote>
            <ul className="list-content">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Nullam id cursus ante. Phasellus aliquet</li>
                <li>Porta quis feugiat in, interdum vel urna</li>
            </ul>
            <div className="blog-footer">
                <i class="fas fa-heart likes-icon"></i> 3
                <i class="fas fa-comment comments-icon"></i>
                <i class="fas fa-share shares-icon"></i>
            </div>
        </article>
    </main>

    <section className="card-container">
        <div className="header-container">
            <h2 className="section-header">Explore More</h2>
            <div className="view-more-btn">
                <button>View More <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
        <div className="cards-wrapper">
           
            <div className="card-item">
                <div className="card-image" style={{backgroundImage: "url('./ExploreMore1.jpeg')"}}></div>
                <div className="card-content">
                    <div className="card-category">Finance</div>
                    <h3 className="card-title">Top 5 Ways to Revolutionize Your Accounting Processes</h3>
                    <div className="card-read-time">5 min read</div>
                </div>
            </div>
            <div className="card-item">
                <div className="card-image" style={{backgroundImage: "url('./ExploreMore1.jpeg')"}}></div>
                <div className="card-content">
                    <div className="card-category">Banking</div>
                    <div className="card-title">The Ultimate Guide to Maximizing Efficiency</div>
                    <div className="card-read-time">10 min read</div>
                </div>
            </div>
            <div className="card-item">
                <div className="card-image" style={{backgroundImage: "url('./exploreMore2.jpeg')"}}></div>
                <div className="card-content">
                    <div className="card-category">Lorem Ipsum</div>
                    <div className="card-title">The Future of Financial Automation</div>
                    <div className="card-read-time">8 min read</div>
                </div>
            </div>
            <div className="card-item">
                <div className="card-image" style={{backgroundImage: "url('./ExploreMore3.jpeg')"}}></div>
                <div className="card-content">
                    <div className="card-category">Finance</div>
                    <div className="card-title">Top 5 Ways to Revolutionize Your Accounting Processes</div>
                    <div className="card-read-time">5 min read</div>
                </div>
            </div>
            
        </div>
    </section>

    <div className="demo">
        <h1>Transform Your Financial <br/>
            Processes with Neo CFO</h1>
        <button id="demobtn">Schedule a Demo <i class="fa-solid fa-arrow-up-right-from-square"></i></button>

    </div>

    <Footer/>
        </div>
    )
}