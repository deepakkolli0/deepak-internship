import React from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "./CountdownTimer";

const NFTItem = ({
  item,
  className = "col-lg-3 col-md-6 col-sm-6 col-xs-12",
  showCountdown = true,
  showShareButtons = true,
  showBuyButton = true,
}) => {
  const authorLink = item.authorId ? `/author/${item.authorId}` : "/author";

  return (
    <div className={className}>
      <div className="nft__item" style={{ padding: "20px" }}>
        <div className="author_list_pp">
          <Link
            to={authorLink}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title={`Creator: ${item.authorName || "Unknown Author"}`}
          >
            <img className="lazy" src={item.authorImage} alt={item.title} />
            <i className="fa fa-check"></i>
          </Link>
        </div>

        {showCountdown && item.expiryDate && (
          <CountdownTimer expiryDate={item.expiryDate} />
        )}

        <div className="nft__item_wrap" style={{ height: "400px" }}>
          <div className="nft__item_extra">
            <div className="nft__item_buttons">
              {showBuyButton && <button>Buy Now</button>}
              {showShareButtons && (
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
              )}
            </div>
          </div>
          <Link to={`/item-details/${item.nftId}`}>
            <img
              src={item.nftImage}
              className="lazy nft__item_preview"
              alt={item.title}
              style={{ padding: "0", background: "none" }}
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
  );
};

export default NFTItem;
