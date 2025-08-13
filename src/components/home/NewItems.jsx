import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchNewItems = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
        );
        console.log("New Items API Response:", response.data);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching new items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewItems();
  }, []);

  useEffect(() => {
    if (items.length > 0 && carouselRef.current && window.$ && !loading) {
      const $carousel = window.$(carouselRef.current);

      if ($carousel.hasClass("owl-loaded")) {
        $carousel.trigger("destroy.owl.carousel");
      }

      $carousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: false,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
        },
        navText: [
          '<i class="fa fa-chevron-left" style="font-size: 16px;"></i>',
          '<i class="fa fa-chevron-right" style="font-size: 16px;"></i>',
        ],
      });

      return () => {
        if ($carousel.hasClass("owl-loaded")) {
          $carousel.trigger("destroy.owl.carousel");
        }
      };
    }
  }, [items, loading]);

  const CountdownTimer = ({ expiryDate }) => {
    const [timeLeft, setTimeLeft] = useState({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      if (!expiryDate) return;

      const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const expiry = new Date(expiryDate).getTime();
        const difference = expiry - now;

        if (difference > 0) {
          const hours = Math.floor(difference / (1000 * 60 * 60));
          const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          setTimeLeft({ hours, minutes, seconds });
        } else {
          setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        }
      };

      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);

      return () => clearInterval(timer);
    }, [expiryDate]);

    if (!expiryDate) return null;

    return (
      <div className="de_countdown">
        {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </div>
    );
  };

  const SkeletonItem = () => (
    <div className="item">
      <div className="nft__item">
        <div className="author_list_pp">
          <div
            className="skeleton__avatar"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#e0e0e0",
              borderRadius: "50%",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          ></div>
        </div>
        <div className="nft__item_wrap">
          <div
            className="skeleton__image"
            style={{
              width: "100%",
              height: "200px",
              backgroundColor: "#e0e0e0",
              borderRadius: "10px",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          ></div>
        </div>
        <div className="nft__item_info">
          <div
            className="skeleton__title"
            style={{
              width: "60%",
              height: "20px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              marginBottom: "8px",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          ></div>
          <div
            className="skeleton__price"
            style={{
              width: "40%",
              height: "16px",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              animation: "pulse 1.5s ease-in-out infinite",
            }}
          ></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-lg-12">
            {loading ? (
              <div className="row">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                    key={index}
                  >
                    <SkeletonItem />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="owl-carousel owl-theme new__items--carousel"
                ref={carouselRef}
              >
                {items.map((item) => (
                  <div className="item" key={item.id}>
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <Link
                          to="/author"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Creator: Monica Lucas"
                        >
                          <img className="lazy" src={item.authorImage} alt="" />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>

                      {item.expiryDate && (
                        <CountdownTimer expiryDate={item.expiryDate} />
                      )}

                      <div className="nft__item_wrap">
                        <div className="nft__item_extra">
                          <div className="nft__item_buttons">
                            <button>Buy Now</button>
                            <div className="nft__item_share">
                              <h4>Share</h4>
                              <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-facebook fa-lg"></i>
                              </a>
                              <a href="" target="_blank" rel="noreferrer">
                                <i className="fa fa-twitter fa-lg"></i>
                              </a>
                              <a href="">
                                <i className="fa fa-envelope fa-lg"></i>
                              </a>
                            </div>
                          </div>
                        </div>

                        <Link to={`/item-details/${item.nftId}`}>
                          <img
                            src={item.nftImage}
                            className="lazy nft__item_preview"
                            alt={item.title}
                          />
                        </Link>
                      </div>
                      <div className="nft__item_info">
                        <Link to={`/item-details/${item.nftId}`}>
                          <h4>{item.title}</h4>
                        </Link>
                        <div className="nft__item_price">{item.price} ETH</div>
                        <div className="nft__item_like">
                          <i className="fa fa-heart"></i>
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default NewItems;
