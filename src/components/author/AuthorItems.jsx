import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import NFTItem from "../reused/NFTItem";

const AuthorItems = () => {
  // Create mock item data for the static content
  const mockItem = {
    id: "author-item",
    nftId: "author-nft",
    title: "Pinky Ocean",
    price: "2.52",
    likes: "97",
    authorImage: AuthorImage,
    nftImage: nftImage,
    expiryDate: null, // No countdown for author items
  };

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {new Array(8).fill(0).map((_, index) => (
            <NFTItem
              key={index}
              item={mockItem}
              showCountdown={false}
              showShareButtons={true}
              showBuyButton={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;
