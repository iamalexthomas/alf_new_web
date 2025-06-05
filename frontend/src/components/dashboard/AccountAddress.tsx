"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import AddAddress from "./AddAddress";
import EditAddress from "./EditAddress";
import { toast } from "react-hot-toast";

export default function AccountAddress() {
  const [activeEdit, setActiveEdit] = useState(false);
  const [activeAdd, setActiveAdd] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) throw new Error("User not authenticated");
      const response = await axios.get("/api/addresses", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setAddresses(response.data.addresses || []);
    } catch (error) {
      toast.error("Failed to load addresses");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (addressId) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      await axios.delete(`/api/addresses/${addressId}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      toast.success("Address deleted successfully");
      fetchAddresses();
    } catch (error) {
      toast.error("Failed to delete address");
      console.error(error);
    }
  };

  return (
    <div className="my-account-content account-address">
      <div className="text-center widget-inner-address">
        {loading ? (
          <p>Loading addresses...</p>
        ) : (
          <>
            <button
              className="tf-btn btn-fill animate-hover-btn btn-address mb_20"
              onClick={() => setActiveEdit(true)}
            >
              Add a new address
            </button>
            <AddAddress
              activeEdit={activeEdit}
              setActiveEdit={setActiveEdit}
              onSuccess={fetchAddresses}
            />
            {addresses.length > 0 ? (
              addresses.map((address) => (
                <div key={address._id} className="mb_20">
                  {address.isDefault && <h6 className="mb_20">Default</h6>}
                  <p>{address.firstName} {address.lastName}</p>
                  <p>{address.address}</p>
                  <p>{address.city}, {address.country}</p>
                  <p>{address.phone}</p>
                  <p className="mb_10">{address.postalCode}</p>
                  <div className="d-flex gap-10 justify-content-center">
                    <button
                      className="tf-btn btn-fill animate-hover-btn justify-content-center btn-edit-address"
                      onClick={() => setActiveAdd(address._id)}
                    >
                      <span>Edit</span>
                    </button>
                    <button
                      className="tf-btn btn-outline animate-hover-btn justify-content-center"
                      onClick={() => handleDelete(address._id)}
                    >
                      <span>Delete</span>
                    </button>
                  </div>
                  <EditAddress
                    activeAdd={activeAdd === address._id}
                    setActiveAdd={setActiveAdd}
                    address={address}
                    onSuccess={fetchAddresses}
                  />
                </div>
              ))
            ) : (
              <p>No addresses found.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}