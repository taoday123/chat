import { useEffect, useState, useCallback } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
export const User = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const [isUpdate, setIsUpdate] = useState(false);

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Password",
      selector: (row) => row.password,
    },
  ];
  const clearAllState = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  const handleAddUser = async () => {
    if (email.trim === "") {
      return;
    }
    if (name.trim === "") {
      return;
    }
    if (password.trim === "") {
      return;
    }
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const resp = await axios.post(
          "http://localhost:8800/backend/users/add",
          {
            username: name,
            email,
            password,
          }
        );
        if (resp.status === 200) {
          alert("create success");
          setReload(true);
          setShowModal(false);

          clearAllState();
        }
      } catch (e) {
        alert("Có lỗi xảy ra");
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleDeleteUser = async () => {
    if (window.confirm("Bạn có chắc muốn xóa ? ")) {
      for (let row of selectedRows) {
        await deleteUser(row.id);
      }
      alert(`deleted ${selectedRows.length} success`);
      setReload(true);
      setToggleCleared(!toggleCleared);
      setSelectedRows([]);
    }
  };
  const deleteUser = async (id) => {
    try {
      setIsLoading(true);
      const resp = await axios.get(
        `http://localhost:8800/backend/users/delete/${id}`
      );
      if (resp.status === 200) {
        return true;
      }
    } catch (e) {
      setIsLoading(false);
      alert("Có lỗi xảy ra kho xóa user");
    }
  };
  const showUpdateModal = () => {
    setIsUpdate(true);
    setShowModal(true);
  };
  const handleUpdateUser = async () => {
    try {
      const id = selectedRows[0].id;
      setIsLoading(true);
      setTimeout(async () => {
        const resp = await axios.post(
          `http://localhost:8800/backend/users/update/${id}`,
          {
            username: name ? name : selectedRows[0].name,
            email: email ? email : selectedRows[0].email,
          }
        );
        if (resp.status === 200) {
          alert("update success");
          setReload(true);
          clearAllState();
          setIsUpdate(false);
          setShowModal(false);
          setSelectedRows([]);
          setToggleCleared(!toggleCleared);
        }
        setIsLoading(false);
      }, 1000);
    } catch (e) {
      alert("Có lỗi xảy ra");
    }
  };

  useEffect(() => {
    const bsSync = async () => {
      try {
        const resp = await axios.get("http://localhost:8800/backend/users", {
          headers: { "Content-Type": "application/json" },
        });
        if (resp.status === 200) {
          setData(await resp.data);
        }
      } catch (e) {
        alert("Có lỗi xảy ra");
      }
    };
    if (reload) {
      bsSync();
      setReload(false);
    }
  }, [reload]);
  return (
    <div id="layoutSidenav_content">
      <div className="container-fluid px-4 py-5 mt-5">
        <div className="card mb-4">
          <div className="card-header">
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="btn btn-info text-white"
            >
              Thêm mới
            </button>
            {selectedRows.length > 0 && (
              <button
                onClick={() => {
                  handleDeleteUser();
                }}
                className="btn btn-danger text-white mx-3"
              >
                Xóa {selectedRows.length} đã chọn
              </button>
            )}
            {selectedRows.length === 1 && (
              <button
                onClick={() => {
                  showUpdateModal();
                }}
                className="btn btn-warning text-white mx-3"
              >
                Sửa người dùng đã chọn
              </button>
            )}
          </div>
          <div className="card-body">
            <DataTable
              columns={columns}
              data={data}
              selectableRows
              onSelectedRowsChange={handleRowSelected}
              clearSelectedRows={toggleCleared}
              pagination
            />
          </div>
        </div>
      </div>
      {showModal && (
        <div
          class="modal fade show d-block"
          id="addUserModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {isUpdate ? "Cập nhật người dùng" : "Thêm mới người dùng"}
                </h5>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Tên
                    </label>
                    <input
                      onInput={(e) => {
                        setName(e.target.value);
                      }}
                      defaultValue={isUpdate ? selectedRows[0].username : ""}
                      placeholder="Nhập vào tên"
                      type="text"
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      defaultValue={isUpdate ? selectedRows[0].email : ""}
                      placeholder="Nhập vào email"
                      onInput={(e) => {
                        setEmail(e.target.value);
                      }}
                      class="form-control"
                      id="recipient-name"
                    />
                  </div>
                  {!isUpdate && (
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Password
                      </label>
                      <input
                        placeholder="Nhập vào password"
                        onInput={(e) => {
                          setPassword(e.target.value);
                        }}
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                  )}
                </form>
              </div>
              <div class="modal-footer">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Hủy
                </button>
                <button
                  onClick={isUpdate ? handleUpdateUser : handleAddUser}
                  type="button"
                  class="btn btn-primary"
                >
                  {isLoading ? (
                    <div
                      class="spinner-border spinner-border-sm"
                      role="status"
                    ></div>
                  ) : isUpdate ? (
                    "Cập nhật"
                  ) : (
                    "Tạo"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
