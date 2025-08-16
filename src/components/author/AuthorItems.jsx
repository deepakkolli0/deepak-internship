import React from "react";
import { Link } from "react-router-dom";
import NFTItem from "../reused/NFTItem";

const AuthorItems = ({ authorData }) => {
  if (!authorData || !authorData.nftCollection) {
    return (
      <div className="de_tab_content">
        <div className="tab-1">
          <div className="row">
            <div className="col-md-12 text-center">
              <h4>No NFTs found for this author</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {authorData.nftCollection.map((nft) => (
            <NFTItem
              key={nft.id}
              item={{
                id: nft.id,
                nftId: nft.nftId,
                title: nft.title,
                price: nft.price,
                likes: nft.likes,
                authorImage: authorData.authorImage,
                authorName: authorData.authorName,
                authorId: authorData.authorId,
                nftImage: nft.nftImage,
                expiryDate: null,
              }}
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
