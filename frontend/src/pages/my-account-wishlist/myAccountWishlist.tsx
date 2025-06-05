import React from "react";
import LayoutV5 from "../../components/layouts/LayoutV5";

import Wishlist from "../../components/dashboard/Wishlist";
import DashboardNav from "../../components/dashboard/DashboardNav";


export const metadata = {
  title: "My Wishlist | Sytrobags",
  description: "View and manage your wishlist on Sytrobags.",
};

export default function Page() {
  return (
    <LayoutV5 breadCrumb="my-account-wishlist" title="My Wishlist">
      <div className="about-style-one-area default-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="row">
              <div className="col-lg-3">
                <DashboardNav />
              </div>
              <div className="col-lg-9">
                <Wishlist />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutV5>
  );
}