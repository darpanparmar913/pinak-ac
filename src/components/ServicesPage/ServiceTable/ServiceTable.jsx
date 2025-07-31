import React, { useEffect, useState } from "react";

const ServiceTable = () => {
    const [services, setServices] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const [searchName, setSearchName] = useState("");
    const [yearFilter, setYearFilter] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const [editItem, setEditItem] = useState(null);
    const [editForm, setEditForm] = useState({
        fullName: "",
        mobileNumber: "",
        acType: "",
        profit: "",
        paymentMethod: "",
    });

    const handleEdit = (item) => {
        setEditItem(item);
        setEditForm({
            fullName: item.fullName,
            mobileNumber: item.mobileNumber,
            acType: item.acType,
            profit: item.profit,
            paymentMethod: item.paymentMethod,
        });
    };

    const handleUpdate = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/service/update/${editItem._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editForm),
            });

            const updated = await res.json();
            const updatedList = services.map((s) => (s._id === updated._id ? updated : s));
            setServices(updatedList);
            setFiltered(updatedList);
            setEditItem(null); // close modal
        } catch (error) {
            console.error("Failed to update:", error);
        }
    };


    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/service/service-list");
                const data = await res.json();
                setServices(data);
                setFiltered(data);
            } catch (error) {
                console.error("Error fetching service list:", error);
            }
        };

        fetchServices();
    }, []);

    // Handle filtering
    useEffect(() => {
        let filteredData = [...services];

        // Filter by name
        if (searchName) {
            filteredData = filteredData.filter((item) =>
                item.fullName.toLowerCase().includes(searchName.toLowerCase())
            );
        }

        // Filter by year
        if (yearFilter) {
            filteredData = filteredData.filter((item) => {
                const year = new Date(item.createdAt).getFullYear();
                return year.toString() === yearFilter;
            });
        }

        // Filter by date range
        if (fromDate && toDate) {
            filteredData = filteredData.filter((item) => {
                const date = new Date(item.createdAt);
                return date >= new Date(fromDate) && date <= new Date(toDate);
            });
        }

        setFiltered(filteredData);
    }, [searchName, yearFilter, fromDate, toDate, services]);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this service?")) return;
        try {
            await fetch(`http://localhost:5000/api/service/delete/${id}`, {
                method: "DELETE",
            });
            setServices(services.filter((item) => item._id !== id));
        } catch (err) {
            console.error("Failed to delete:", err);
        }
    };

    return (
        <>
            <div className="p-4 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Service List</h2>

                {/* Filter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        className="border px-3 py-2 rounded"
                    />

                    <select
                        value={yearFilter}
                        onChange={(e) => setYearFilter(e.target.value)}
                        className="border px-3 py-2 rounded"
                    >
                        <option value="">All Years</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                    </select>

                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="border px-3 py-2 rounded"
                    />

                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="border px-3 py-2 rounded"
                    />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-4 py-2 border">Name</th>
                                <th className="px-4 py-2 border">Mobile</th>
                                <th className="px-4 py-2 border">AC Type</th>
                                <th className="px-4 py-2 border">Service Date</th>
                                <th className="px-4 py-2 border">Profit (₹)</th>
                                <th className="px-4 py-2 border">Payment Method</th>
                                <th className="px-4 py-2 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">{item.fullName}</td>
                                    <td className="px-4 py-2 border">{item.mobileNumber}</td>
                                    <td className="px-4 py-2 border">{item.acType}</td>
                                    <td className="px-4 py-2 border">{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td className="px-4 py-2 border">{"₹" + item.profit}</td>
                                    <td className="px-4 py-2 border">{item.paymentMethod}</td>
                                    <td className="px-4 py-2 border space-x-2">
                                        <button onClick={() => handleEdit(item)} className="text-blue-600 hover:underline">Edit</button>
                                        <button onClick={() => handleDelete(item._id)} className="text-red-600 hover:underline">Delete</button>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center py-4">No results found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {editItem && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md w-full max-w-lg space-y-4">
                        <h3 className="text-xl font-bold">Edit Service</h3>

                        <input
                            type="text"
                            value={editForm.fullName}
                            onChange={(e) => setEditForm({ ...editForm, fullName: e.target.value })}
                            className="border w-full p-2 rounded"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            value={editForm.mobileNumber}
                            onChange={(e) => setEditForm({ ...editForm, mobileNumber: e.target.value })}
                            className="border w-full p-2 rounded"
                            placeholder="Mobile"
                        />
                        <select
                            value={editForm.acType}
                            onChange={(e) => setEditForm({ ...editForm, acType: e.target.value })}
                            className="border w-full p-2 rounded"
                        >
                            <option value="">Select AC Type</option>
                            <option value="split">Split</option>
                            <option value="cassette">Cassette</option>
                            <option value="window">Window</option>
                            <option value="tower">Tower</option>
                            <option value="ductable">Ductable</option>
                        </select>
                        <input
                            type="number"
                            value={editForm.profit}
                            onChange={(e) => setEditForm({ ...editForm, profit: e.target.value })}
                            className="border w-full p-2 rounded"
                            placeholder="Profit"
                        />
                        <select
                            value={editForm.paymentMethod}
                            onChange={(e) => setEditForm({ ...editForm, paymentMethod: e.target.value })}
                            className="border w-full p-2 rounded"
                        >
                            <option value="">Select Payment</option>
                            <option value="cashPayment">Cash Payment</option>
                            <option value="onlinePayment">Online Payment</option>
                        </select>

                        <div className="flex justify-end space-x-3 pt-3">
                            <button onClick={() => setEditItem(null)} className="px-4 py-2 border rounded hover:bg-gray-100">
                                Cancel
                            </button>
                            <button onClick={handleUpdate} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default ServiceTable;
