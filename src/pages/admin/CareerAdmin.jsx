import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiArrowLeft,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";
import toast from "react-hot-toast";
import api, { normalizeCollection, normalizeStringList } from "../../api";

const CareerAdmin = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCareer, setEditingCareer] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    description: "",
    requirements: [""],
    location: "",
    deadline: "",
    isActive: true,
  });

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const res = await api.get("/careers");
      setCareers(normalizeCollection(res.data, ["careers"]));
    } catch {
      toast.error("Failed to fetch careers");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requirements = formData.requirements.filter((r) => r.trim());

    try {
      if (editingCareer) {
        await api.put(`/careers/${editingCareer._id}`, {
          ...formData,
          requirements,
        });
        toast.success("Updated");
      } else {
        await api.post("/careers", { ...formData, requirements });
        toast.success("Created");
      }

      fetchCareers();
      closeModal();
    } catch {
      toast.error("Operation failed");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingCareer(null);
    setFormData({
      title: "",
      department: "",
      description: "",
      requirements: [""],
      location: "",
      deadline: "",
      isActive: true,
    });
  };

  const handleEdit = (career) => {
    setEditingCareer(career);
    setFormData({
      title: career.title || "",
      department: career.department || "",
      description: career.description || "",
      requirements: normalizeStringList(career.requirements).length
        ? normalizeStringList(career.requirements)
        : [""],
      location: career.location || "",
      deadline: career.deadline ? career.deadline.slice(0, 10) : "",
      isActive: career.isActive ?? true,
    });
    setShowModal(true);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 mt-28 px-3">

      {/* HEADER */}
      <div className="flex flex-wrap gap-3 justify-between items-center bg-white p-4 rounded shadow">

        <div className="flex items-center gap-3">
          <Link to="/admin/dashboard">
            <FiArrowLeft />
          </Link>
          <h1 className="text-xl font-semibold">Career Management</h1>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
        >
          <FiPlus className="mr-2" />
          Add Career
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white mt-5 rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {["Title", "Dept", "Location", "Deadline", "Status", "Actions"].map(
                (h) => (
                  <th key={h} className="p-3 text-left">
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {careers.map((c) => (
              <tr key={c._id} className="border-t">
                <td className="p-3">{c.title}</td>
                <td className="p-3">{c.department}</td>
                <td className="p-3">{c.location || "-"}</td>
                <td className="p-3">
                  {c.deadline
                    ? new Date(c.deadline).toLocaleDateString()
                    : "-"}
                </td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      api
                        .put(`/careers/${c._id}`, { isActive: !c.isActive })
                        .then(fetchCareers)
                  }
                    className="flex items-center gap-1"
                  >
                    {c.isActive ? <FiToggleRight /> : <FiToggleLeft />}
                    {c.isActive ? "Active" : "Inactive"}
                  </button>
                </td>

                <td className="p-3 flex gap-3">
                  <button onClick={() => handleEdit(c)}>
                    <FiEdit2 />
                  </button>

                  <button
                    onClick={() =>
                      api.delete(`/careers/${c._id}`).then(fetchCareers)
                    }
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-20 overflow-y-auto z-50">

          <div className="bg-white w-full max-w-xl mx-3 p-5 rounded">

            <h2 className="text-lg mb-4">
              {editingCareer ? "Edit Career" : "Add Career"}
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                <input
                  placeholder="Title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="border p-2 rounded"
                  required
                />

                <input
                  placeholder="Department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="border p-2 rounded"
                  required
                />
              </div>

              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="border p-2 rounded w-full mt-3"
                rows="3"
              />

              <input
                placeholder="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="border p-2 rounded w-full mt-3"
              />

              <input
                type="date"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
                className="border p-2 rounded w-full mt-3"
              />

              <label className="flex items-center mt-3 gap-2">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) =>
                    setFormData({ ...formData, isActive: e.target.checked })
                  }
                />
                Active
              </label>

              <div className="flex justify-end gap-3 mt-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>

                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerAdmin;
