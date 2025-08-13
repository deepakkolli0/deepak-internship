import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EthImage from "../images/ethereum.svg";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  const { nftId } = useParams();
  const [nftData, setNftData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchNftData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
        );
        const nft = response.data.find(
          (item) => item.nftId.toString() === nftId
        );

        if (nft) {
          setNftData(nft);
        } else {
          console.log("NFT not found");
        }
      } catch (error) {
        console.error("Error fetching NFT data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNftData();
  }, [nftId]);

  if (loading) {
    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          <section aria-label="section" className="mt90 sm-mt-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <div
                    className="skeleton-image"
                    style={{
                      width: "100%",
                      height: "400px",
                      backgroundColor: "#e0e0e0",
                      borderRadius: "10px",
                      animation: "pulse 1.5s ease-in-out infinite",
                    }}
                  ></div>
                </div>
                <div className="col-md-6">
                  <div className="item_info">
                    <div
                      className="skeleton-title"
                      style={{
                        width: "70%",
                        height: "32px",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "4px",
                        marginBottom: "20px",
                        animation: "pulse 1.5s ease-in-out infinite",
                      }}
                    ></div>

                    <div className="item_info_counts">
                      <div className="item_info_views">
                        <i className="fa fa-eye"></i>
                        <div
                          className="skeleton-text"
                          style={{
                            width: "30px",
                            height: "16px",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "4px",
                            display: "inline-block",
                            marginLeft: "8px",
                            animation: "pulse 1.5s ease-in-out infinite",
                          }}
                        ></div>
                      </div>
                      <div className="item_info_like">
                        <i className="fa fa-heart"></i>
                        <div
                          className="skeleton-text"
                          style={{
                            width: "30px",
                            height: "16px",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "4px",
                            display: "inline-block",
                            marginLeft: "8px",
                            animation: "pulse 1.5s ease-in-out infinite",
                          }}
                        ></div>
                      </div>
                    </div>

                    <div
                      className="skeleton-description"
                      style={{
                        width: "100%",
                        height: "60px",
                        backgroundColor: "#e0e0e0",
                        borderRadius: "4px",
                        marginBottom: "20px",
                        animation: "pulse 1.5s ease-in-out infinite",
                      }}
                    ></div>

                    <div className="item__details--flex-row">
                      <div className="item__details--margin-right">
                        <h6>Owner</h6>
                        <div className="item__details--author">
                          <div className="item__details--author__avatar">
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
                          <div className="item__details--author__info">
                            <div
                              className="skeleton__text"
                              style={{
                                width: "100px",
                                height: "16px",
                                backgroundColor: "#e0e0e0",
                                borderRadius: "4px",
                                animation: "pulse 1.5s ease-in-out infinite",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="item__details--tab tab_simple">
                      <div className="item__details--tab__content">
                        <h6>Creator</h6>
                        <div className="item__details--author">
                          <div className="item__details--author__avatar">
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
                          <div className="item__details--author__info">
                            <div
                              className="skeleton__text"
                              style={{
                                width: "100px",
                                height: "16px",
                                backgroundColor: "#e0e0e0",
                                borderRadius: "4px",
                                animation: "pulse 1.5s ease-in-out infinite",
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="item__details--spacer"></div>
                      <h6>Price</h6>
                      <div className="item__details--price">
                        <img src={EthImage} alt="" />
                        <div
                          className="skeleton__text"
                          style={{
                            width: "60px",
                            height: "20px",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "4px",
                            display: "inline-block",
                            marginLeft: "8px",
                            animation: "pulse 1.5s ease-in-out infinite",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section" className="mt90 sm-mt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <img
                  src={nftData.nftImage}
                  className="img-fluid img-rounded mb-sm-30 nft-image"
                  alt={nftData.title}
                />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <h2>
                    {nftData.title} #{nftData.nftId}
                  </h2>

                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      100
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      74
                    </div>
                  </div>
                  <p>
                    This is a unique NFT from the {nftData.title} collection.
                    Each piece in this collection is carefully crafted and
                    represents a unique digital asset on the blockchain.
                  </p>
                  <div className="item__details--flex-row">
                    <div className="item__details--margin-right">
                      <h6>Owner</h6>
                      <div className="item__details--author">
                        <div className="item__details--author__avatar">
                          <Link to="/author">
                            <img
                              className="lazy"
                              src={nftData.authorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="item__details--author__info">
                          <Link to="/author">NFT Owner</Link>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className="item__details--tab tab_simple">
                    <div className="item__details--tab__content">
                      <h6>Creator</h6>
                      <div className="item__details--author">
                        <div className="item__details--author__avatar">
                          <Link to="/author">
                            <img
                              className="lazy"
                              src={nftData.authorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>
                        <div className="item__details--author__info">
                          <Link to="/author">NFT Creator</Link>
                        </div>
                      </div>
                    </div>
                    <div className="item__details--spacer"></div>
                    <h6>Price</h6>
                    <div className="item__details--price">
                      <img src={EthImage} alt="" />
                      <span>1.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItemDetails;
