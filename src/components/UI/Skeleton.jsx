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
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center">
                <Skeleton width="100%" height="400px" borderRadius="10px" />
              </div>
              <div className="col-md-6">
                <div className="item_info">
                  <Skeleton width="80%" height="32px" borderRadius="4px" />
                  <div className="item_info_counts">
                    <div className="item_info_views">
                      <i className="fa fa-eye"></i>
                      <Skeleton width="30px" height="16px" borderRadius="4px" />
                    </div>
                    <div className="item_info_like">
                      <i className="fa fa-heart"></i>
                      <Skeleton width="30px" height="16px" borderRadius="4px" />
                    </div>
                  </div>
                  <Skeleton width="100%" height="60px" borderRadius="4px" />
                  <div className="item__details--flex-row">
                    <div className="item__details--margin-right">
                      <h6>Owner</h6>
                      <div className="item__details--author">
                        <div className="item__details--author__avatar">
                          <Skeleton
                            width="50px"
                            height="50px"
                            borderRadius="50%"
                          />
                        </div>
                        <div className="item__details--author__info">
                          <Skeleton
                            width="120px"
                            height="16px"
                            borderRadius="4px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item__details--tab tab_simple">
                    <div className="item__details--tab__content">
                      <h6>Creator</h6>
                      <div className="item__details--author">
                        <div className="item__details--author__avatar">
                          <Skeleton
                            width="50px"
                            height="50px"
                            borderRadius="50%"
                          />
                        </div>
                        <div className="item__details--author__info">
                          <Skeleton
                            width="100px"
                            height="16px"
                            borderRadius="4px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="item__details--spacer"></div>
                    <h6>Price</h6>
                    <div className="item__details--price">
                      <img src="/images/ethereum.svg" alt="" />
                      <Skeleton width="60px" height="20px" borderRadius="4px" />
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

export const AuthorSkeleton = () => {
  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section
          id="profile_banner"
          aria-label="section"
          className="text-light"
          style={{
            background: "linear-gradient(45deg, #e0e0e0, #f5f5f5)",
            height: "200px",
            animation: "pulse 1.5s ease-in-out infinite",
          }}
        ></section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="d_profile de-flex">
                  <div className="de-flex-col">
                    <div className="profile_avatar">
                      <Skeleton
                        width="120px"
                        height="120px"
                        borderRadius="50%"
                      />
                      <i className="fa fa-check"></i>
                      <div className="profile_name">
                        <h4>
                          <Skeleton
                            width="200px"
                            height="24px"
                            borderRadius="4px"
                          />
                          <span className="profile_username">
                            <Skeleton
                              width="150px"
                              height="16px"
                              borderRadius="4px"
                            />
                          </span>
                          <span id="wallet" className="profile_wallet">
                            <Skeleton
                              width="300px"
                              height="14px"
                              borderRadius="4px"
                            />
                          </span>
                          <Skeleton
                            width="60px"
                            height="32px"
                            borderRadius="4px"
                          />
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="profile_follow de-flex">
                    <div className="de-flex-col">
                      <div className="profile_follower">
                        <Skeleton
                          width="120px"
                          height="16px"
                          borderRadius="4px"
                        />
                      </div>
                      <Skeleton
                        width="100px"
                        height="40px"
                        borderRadius="4px"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="de_tab tab_simple">
                  <div className="de_tab_content">
                    <div className="tab-1">
                      <div className="row">
                        {Array.from({ length: 8 }, (_, index) => (
                          <div
                            className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                            key={index}
                          >
                            <div
                              className="nft__item"
                              style={{ padding: "20px" }}
                            >
                              <div className="author_list_pp">
                                <Skeleton
                                  width="50px"
                                  height="50px"
                                  borderRadius="50%"
                                />
                              </div>
                              <div
                                className="nft__item_wrap"
                                style={{ height: "400px" }}
                              >
                                <Skeleton
                                  width="100%"
                                  height="100%"
                                  borderRadius="10px"
                                />
                              </div>
                              <div className="nft__item_info">
                                <Skeleton
                                  width="60%"
                                  height="20px"
                                  borderRadius="4px"
                                />
                                <Skeleton
                                  width="40%"
                                  height="16px"
                                  borderRadius="4px"
                                />
                                <Skeleton
                                  width="30%"
                                  height="16px"
                                  borderRadius="4px"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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

export default Skeleton;
