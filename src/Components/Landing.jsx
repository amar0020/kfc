import './Landing.css';
import { StyledLink } from './Menu/MenuStyledComponents';
const Landing = () => {

    return (
        <div>

            {/* <div className="headerBottom">
                <div className="headBottomParent">
                    <div className="headBottomTxt">LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</div>
                    <a href='/menu/beverages'> <button className="redbtn">Start Order</button></a> */}



                    
                        {/* <button className="redbtn">
                            Start Order
                        </button> */}
                    
                {/* </div>
            </div> */}

            <StyledLink to="product/category/match day special">
                <img class="carausel-image" alt="Qries" src="https://images.ctfassets.net/wtodlh47qxpt/bwwtSv4zmZZm42c5wSg8Z/bd28ca73bbefa15b45f14c994e72ed03/Matchday_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp"
                />
            </StyledLink>

            <div class="parentp-g-t">


                <div data-testid="pastorder-greeting-test" class="p-g-t">WELCOME TO KFC!</div>
            </div>

            <div class="browse-parent">
                <h2 class="browse">browse categories</h2>

                <div class="horizontal-line"></div>
            </div>




            <div class="nav">


                <a class="menu-cards" href="product/category/match day special"><img class='image'

                    src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3355.jpg?ver=14.71"
                    alt="" data-testid="" />
                    <div class="menu-text"> Match Day Specials </div>
                </a><a class="menu-cards" href="product/category/Chicken Buckets"><img class='image'

                    src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3131.jpg?ver=14.71"
                    alt="" data-testid="" />
                    <div class="menu-text"> Chicken Buckets </div>
                </a><a class="menu-cards" href="product/category/Biryani Buckets"><img class='image'

                    src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3342.jpg?ver=14.71"
                    alt="" data-testid="" />
                    <div class="menu-text"> Biryani Buckets </div>
                </a><a class="menu-cards" href="product/category/Box Melas"><img class='image'
                    src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3246.jpg?ver=14.71"
                    alt="" data-testid="" />
                    <div class="menu-text"> Box Meals </div>
                </a><a class="menu-cards" href="product/category/Burgers"><img class='image'
                    src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3132.jpg?ver=14.71"
                    alt="" data-testid="" />
                    <div class="menu-text"> Burgers </div>
                </a><a class="menu-cards" href="product/category/Stay Home Specials"><img class='image'

                    src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3311.jpg?ver=14.71"
                    alt="" data-testid="" />
                    <div class="menu-text"> Stay Home Specials </div>

                </a><a class="menu-cards" href="product/category/Beverages"><img class='image'
                    src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT3135.jpg?ver=14.71"
                    alt="" data-testid="" />
                    <div class="menu-text"> Beverages </div>
                </a>
                <div class="single-lickin-card menu-cards"><a class="full-lickin-card menu-cards"
                    href="/product"><img class='image'
                        src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" alt="View All Menu"
                        data-testid="" />
                    <div class="all-menu-text"> View All Menu<img
                        src="https://online.kfc.co.in/static/media/black_right_arrow.a801582c.svg" alt="View All Menu"
                    /></div>
                </a>

                </div>




            </div>
        </div>

    )

}

export default Landing