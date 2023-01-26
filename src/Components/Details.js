import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowLeftShort,
  ArrowRight,
  ArrowRightShort,
  ArrowsAngleExpand,
  BookmarkFill,
  CaretRightFill,
  DashSquare,
  EmojiSmileFill,
  HeartFill,
  InfoCircleFill,
  ListUl,
  PlusSquare,
  Repeat,
  SquareFill,
  StarFill,
  TextCenter,
  TypeBold,
  TypeItalic,
  TypeUnderline,
} from "react-bootstrap-icons";
import imgs from "../Constants/images";
function Details() {
  const str =
    "POPWINGS addition to every fashionable women's, to look glamorous and distinct in Women tops. Carved out of fine fabric. The sober summer shade suits every kind of complexion and even suits every purpose like leisure party and outings. This piece is a totally western wear with unique designs.";
  const [disp, setDisp] = useState(true);

  const stringDisp = () => {
    return str.length > 140 && disp ? str.substr(0, 140) + "...." : str;
  };
  const rating = [1, 2, 3, 4, 5];
  const size = ["S", "M", "L", "XL"];
  const [selected, setSelected] = useState();
  return (
    <div>
    <div className="row ps-4 pe-4 mt-4">
      <div className="col-2">
      <div className="goback">
        <ArrowLeft />
        GoBack
      </div>
      </div>
      <div className="col-10 d-flex align-items-center justify-content-end">
      <p style={{color:' rgb(217, 205, 220)'}}>Home/Detail Product/</p>
      <p style={{color:'rgb(127, 138, 255)'}}>Red suit Germa 66</p>
      </div>
    </div>
      <div className="row p-4">
        <div className="col-8 text-center d-flex justify-content-center align-items-center p-4">
          <h3 className="fw-bold">Vinsmoke Red Suit Germa Double Six66</h3>
          <div className="bestseller ">#01-Best Seller</div>
        </div>
        <div className="col-4 d-flex justify-content-end   p-4">
          <div className="socailIcons">
            <img src="https://www.pngrepo.com/png/217748/180/messenger-facebook.png" />
            <img src="https://www.pngrepo.com/png/157815/180/twitter.png" />
            <img src="https://www.pngrepo.com/png/13639/180/instagram.png" />
            <img src="https://www.pngrepo.com/png/452114/180/tiktok.png" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 displayImage">
          <img src="https://rukminim1.flixcart.com/image/832/832/ktd9mkw0/t-shirt/q/h/j/l-necktop-red-base-41-original-imag6qdhgygmybkh.jpeg?q=70" />
          <img src="https://rukminim1.flixcart.com/image/832/832/ktd9mkw0/t-shirt/n/a/d/l-necktop-red-base-41-original-imag6qdhg5mmwehz.jpeg?q=70" />
          <img src="https://rukminim1.flixcart.com/image/832/832/ktd9mkw0/t-shirt/6/d/y/l-necktop-red-base-41-original-imag6qdhyqpczxng.jpeg?q=70" />
        </div>
      </div>
      <div className="row p-4 ">
        <div className="col-md-8 col-sm-12 mt-2">
          <div className="row ps-5 pe-5">
            <div className="col-12 border-bottom border-1 border-secondary ">
              <div className="headings">
                <BookmarkFill size={20} color={"blue"} />
                <h5 className="pt-2  ms-2 fw-bold">Overview</h5>
              </div>
              <div>
                <p style={{ color: "gray", fontSize: 13 }}>{stringDisp()}</p>
                {disp ? (
                  <p
                    style={{
                      fontWeight: "bold",
                      color: "blue",

                      cursor: "pointer",
                      zIndex: 1,
                    }}
                    onClick={() => setDisp(!disp)}
                  >
                    Read more
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="row ps-5 pe-5 mt-4">
            <div className="col-12 border-bottom border-1 border-secondary ">
              <div className="headings">
                <BookmarkFill size={20} color={"blue"} />
                <h5 className="pt-2  ms-2 fw-bold">Rating & Review</h5>
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: "bold" }}>
                  Vinsmoke Red Suit Germa Double Six66
                </p>
              </div>
              <div className="row">
                <div className="col-4">
                  <h1>4.9</h1>
                  {rating.map((rate) => (
                    <StarFill color="gold" />
                  ))}
                  <p style={{ fontSize: 10, color: "gray" }}>40 Rating</p>
                </div>
                <div className="col-4">
                  {rating.map((rate) => (
                    <div className="rateNrange">
                      <div className="rateNrange">
                        <StarFill color="gold" />
                        <p className="pt-3 ms-2 " style={{ fontSize: 10 }}>
                          {rate}
                        </p>
                      </div>
                      <div className="rateNrange">
                        <input
                          type={"range"}
                          className="slider"
                          min={0}
                          max={5}
                          style={{
                            WebkitAppearance: "none",
                            background: `linear-gradient(90deg,rgb(105, 105, 219) ${
                              rate * 20
                            }%,white ${rate * 20}% )`,
                            borderRadius: 20,
                            border: "#d8dcf2 1px solid",
                            height: 8,
                          }}
                        />

                        <p className="pt-3 ms-2" style={{ fontSize: 10 }}>
                          {rate}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="border border-2">
            <p className="fw-bold ms-4">Select size</p>
            <div className="size ms-4">
              {size.map((size) => (
                <p
                  onClick={() => setSelected(size)}
                  className={`m-2 border rounded-circle text-center ${
                    size == selected && "bg-primary text-light"
                  }`}
                  style={{ width: 20, cursor: "default" }}
                >
                  {size}
                </p>
              ))}
            </div>
            <div className="d-flex justify-content-between mt-4  align-items-center guide ps-3 pe-3">
              <div className="d-flex justify-content-between text-secondary   align-items-center">
                <ArrowsAngleExpand size={18} />
                <p className="pt-2 ms-2">Size Guide Book</p>
              </div>

              <ArrowRight size={20} />
            </div>
            <div className="d-flex justify-content-between mt-4 p-2 ">
              <div className="rate">
                <p>$444,00</p>
              </div>
              <div className="d-flex justify-content-between w-50 ">
                <DashSquare size={30} className="cartButton" />

                <div>
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>2</p>
                </div>
                <PlusSquare size={30} className="cartButton" />
              </div>
            </div>
            <div className="d-flex info">
              <InfoCircleFill size={35} />
              <p style={{ fontSize: 12, marginTop: 10 }}>
                Order this product immediatly, will soon run out and this stock
                will no longer be available
              </p>
            </div>
            <div className="buyButton p-4">
              <div className="button  rounded">
                <div className="priceButton">
                  <h6 style={{ fontSize: 10 }}>Total Price</h6>
                  <h6>$444,00</h6>
                </div>
                <div className="buy">
                  <p>Buy Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row ps-5  mb-4">
        <div className="col-md-8 ">
          <div className="row">
            <div className="col-md-2 ">
              <div className="d-flex ">
                <p className="commentnum">10</p>
                <p
                  style={{ fontWeight: "bold", marginLeft: 10, marginRight: 5 }}
                >
                  Comments
                </p>
              </div>
            </div>
            <div className="col-md-10 ">
              <div className="row d-flex justify-content-around ">
                <p className="col-4 activeF">All Review | 10</p>
                <p className="col-4 commentFilter">With Picture | 5</p>
                <p className="col-4 commentFilter">5 Stars | 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row ps-5 pe-5">
        <div className="col-md-8  ">
          <div className="row ">
            <h6>Review your product</h6>
            <div className="col-12 border">
            
              <div className="container">
              
                <div className="row">
                  <div className="col-10 d-flex justify-content-evenly">
                    <TypeBold size={20} />
                    <TypeItalic size={20} />
                    <TypeUnderline size={20} />
                    <EmojiSmileFill size={20} />
                    <ListUl size={20} />
                    <TextCenter size={20} />
                  </div>
                  <div className="col-2 d-flex align-items-center">
                    <ArrowLeftShort size={20} />
                    <ArrowRightShort size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row "
            style={{ backgroundColor: "rgb(238, 235, 235)" }}
          >
          
            <div className="col-12 ">
              <textarea
                style={{
                  width: "100%",
                  height: 100,
                  borderWidth: 0,
                  backgroundColor: "rgb(238, 235, 235)",
                }}
              />
              <button className="commentBtn" >comment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 ps-5 ">
        <div className="col-8 border-bottom">
          <div className="row">
            <div className="col-sm-10">
              <div className="d-flex align-items-center fw-bold">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  height={50}
                  style={{ objectFit: "cover", borderRadius: 20 }}
                />
                <p className="ms-4">asdfghjh</p>
              </div>
            </div>
            <div className="col-sm-2 ">
              <div className="flexNalign " style={{ width: 80 }}>
                <p style={{ color: "GrayText" }}>2h</p>
                <p>5.0</p>
                <StarFill color="gold" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p className="grayText">
                I already bought this product and it turned out to be very good.
                hehe I can now save Luffy and other friends I will make liffy
                become the pirate king{" "}
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-4 d-flex justify-content-between align-items-center">
              <HeartFill color="red" />
              <div className="flexNalign ">
                <Repeat color="gray" size={18} className="pt-1" />
                <p>reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 ps-5 ">
        <div className="col-8 border-bottom">
          <div className="row">
            <div className="col-sm-10">
              <div className="d-flex align-items-center fw-bold">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  height={50}
                  style={{ objectFit: "cover", borderRadius: 20 }}
                />
                <p className="ms-4">asdfghjh</p>
              </div>
            </div>
            <div className="col-sm-2 ">
              <div className="flexNalign " style={{ width: 80 }}>
                <p style={{ color: "GrayText" }}>2h</p>
                <p>5.0</p>
                <StarFill color="gold" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p className="grayText">
                I already bought this product and it turned out to be very good.
                hehe I can now save Luffy and other friends I will make liffy
                become the pirate king{" "}
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-sm-4 d-flex justify-content-between align-items-center">
              <HeartFill color="red" />
              <div className="flexNalign ">
                <Repeat color="gray" size={18} className="pt-1" />
                <p>reply</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row ps-5 pe-5 ">
        <div className="col-12 mt-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="headings">
                <BookmarkFill size={20} color={"blue"} />
                <h5 className="pt-2  ms-2 fw-bold">Recent Products</h5>
              </div>
              <div className="view">
                <p style={{ marginTop: 10, marginRight: 5 }}>View All</p>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="recent ">
            {imgs.map((im) => (
              <div style={{ width: 250, marginLeft: "10px" }}>
                <img
                  src={im}
                  style={{ borderRadius: 10, objectFit: "cover" }}
                  height={200}
                  width={250}
                />
                <div className="flexNalign mt-2">
                  <p className="fw-bold">some name</p>
                  <p className="recentBtn">$64</p>
                </div>
                <div className="flexNalign">
                  <div className="flexNalign">
                    <StarFill color="gold" />
                    <p>4.8(87)</p>
                  </div>
                  <p className="recentBtn2 ">$96</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row ps-5 pe-5">
        <div className="col-12">
          <div className="row">
            <div className="col-12 d-flex justify-content-between">
              <div className="headings">
                <BookmarkFill size={20} color={"blue"} />
                <h5 className="pt-2  ms-2 fw-bold">Recent Products</h5>
              </div>
              <div className="view">
                <p style={{ marginTop: 10, marginRight: 5 }}>View All</p>
                <ArrowRight />
              </div>
            </div>
          </div>
          <div className="recent ">
            {imgs.map((im) => (
              <div style={{ width: 250, marginLeft: "10px" }}>
                <img
                  src={im}
                  style={{ borderRadius: 10, objectFit: "cover" }}
                  height={200}
                  width={250}
                />
                <div className="flexNalign mt-2">
                  <p className="fw-bold">some name</p>
                  <p className="recentBtn">$64</p>
                </div>
                <div className="flexNalign">
                  <div className="flexNalign">
                    <StarFill color="gold" />
                    <p>4.8(87)</p>
                  </div>
                  <p className="recentBtn2 ">$96</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer class=" text-center">
        <div class="container p-4 pt-5">
          <div class="row">
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0 ">
              <h2>OtFit</h2>

              <div class="text-center p-3">
                <p>OtFit, fit your wear with us</p>
                Copyright © 2020-2021 First Boulevard. All rights reserved.
              </div>
            </div>

            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">About Us</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-dark">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Track Record
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Professional Worker
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Pricing</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-dark">
                    About Product
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Management
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Media</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-dark">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-dark">
                    Terms & Service
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Contact</h5>

              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!" class="text-dark">
                    (077) 092 33 53
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="p-5 text-secondary infoText">By using this website ,you understand the information being presented is provide for informational purpose only</p>
        </div>

      </footer>
    </div>
  );
}

export default Details;
