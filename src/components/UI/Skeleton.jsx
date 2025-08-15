import React from "react";

const Skeleton = ({ width, height, borderRadius }) => {
  return (
    <div
      className="skeleton-box"
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: "#e0e0e0",
        animation: "pulse 1.5s ease-in-out infinite",
      }}
    ></div>
  );
};

export const TopSellersSkeleton = () => {
  return (
    <li>
      <div className="author_list_pp">
        <Skeleton width="50px" height="50px" borderRadius="50%" />
      </div>
      <div className="author_list_info">
        <Skeleton width="80px" height="16px" borderRadius="4px" />
        <Skeleton width="60px" height="14px" borderRadius="4px" />
      </div>
    </li>
  );
};

export const TopSellersSkeletonList = () => {
  return (
    <>
      {Array.from({ length: 12 }, (_, index) => (
        <TopSellersSkeleton key={index} />
      ))}
    </>
  );
};

export const HotCollectionsSkeleton = () => {
  return (
    <div className="item">
      <div className="nft_coll">
        <div className="nft_wrap">
          <Skeleton width="100%" height="200px" borderRadius="10px" />
        </div>
        <div className="nft_coll_pp">
          <Skeleton width="50px" height="50px" borderRadius="50%" />
          <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info">
          <Skeleton width="60%" height="20px" borderRadius="4px" />
          <Skeleton width="40%" height="16px" borderRadius="4px" />
        </div>
      </div>
    </div>
  );
};

export const HotCollectionsSkeletonList = () => {
  return (
    <div className="row">
      {[1, 2, 3, 4].map((index) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
          <HotCollectionsSkeleton />
        </div>
      ))}
    </div>
  );
};

export const NewItemsSkeleton = () => {
  return (
    <div className="item">
      <div className="nft__item">
        <div className="author_list_pp">
          <Skeleton width="50px" height="50px" borderRadius="50%" />
        </div>
        <div className="nft__item_wrap">
          <Skeleton width="100%" height="200px" borderRadius="10px" />
        </div>
        <div className="nft__item_info">
          <Skeleton width="60%" height="20px" borderRadius="4px" />
          <Skeleton width="40%" height="16px" borderRadius="4px" />
        </div>
      </div>
    </div>
  );
};

export const NewItemsSkeletonList = () => {
  return (
    <div className="row">
      {[1, 2, 3, 4].map((index) => (
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
          <NewItemsSkeleton />
        </div>
      ))}
    </div>
  );
};

export const ExploreSkeleton = () => {
  return (
    <div
      className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
      style={{ display: "block", backgroundSize: "cover" }}
    >
      <div className="nft__item">
        <div className="author_list_pp">
          <Skeleton width="50px" height="50px" borderRadius="50%" />
        </div>
        <div className="nft__item_wrap">
          <Skeleton width="100%" height="200px" borderRadius="10px" />
        </div>
        <div className="nft__item_info">
          <Skeleton width="60%" height="20px" borderRadius="4px" />
          <Skeleton width="40%" height="16px" borderRadius="4px" />
        </div>
      </div>
    </div>
  );
};

export const ExploreSkeletonList = () => {
  return (
    <>
      {Array.from({ length: 8 }, (_, index) => (
        <ExploreSkeleton key={index} />
      ))}
    </>
  );
};

export const ItemDetailsSkeleton = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="nft__item_wrap">
            <Skeleton width="100%" height="400px" borderRadius="10px" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div className="nft__item_info">
            <Skeleton width="80%" height="32px" borderRadius="4px" />
            <Skeleton width="60%" height="24px" borderRadius="4px" />
            <Skeleton width="100%" height="16px" borderRadius="4px" />
            <Skeleton width="100%" height="16px" borderRadius="4px" />
            <Skeleton width="90%" height="80px" borderRadius="4px" />
          </div>
          <div className="nft__item_author">
            <div className="author_list_pp">
              <Skeleton width="50px" height="50px" borderRadius="50%" />
            </div>
            <div className="author_list_info">
              <Skeleton width="120px" height="16px" borderRadius="4px" />
            </div>
          </div>
          <div className="nft__item_author">
            <div className="author_list_pp">
              <Skeleton width="50px" height="50px" borderRadius="50%" />
            </div>
            <div className="author_list_info">
              <Skeleton width="100px" height="16px" borderRadius="4px" />
            </div>
          </div>
          <div className="nft__item_author">
            <div className="author_list_info">
              <Skeleton width="150px" height="16px" borderRadius="4px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
