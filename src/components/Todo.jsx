import React, { useState } from "react";
import todo from "../image/todo.svg";

const Todo = () => {
  // const [item, setItem] = useState("");
  // const [itemlist, setItemList] = useState([]);
  // const [toggle, setToggle] = useState(true);
  // const [iseditItem, setIsEditItem] = useState(null);
  // const addItem = () => {
  //   if (item == "") {
  //     alert("Please add the item");
  //   } else if (item && !toggle) {
  //     setItemList(
  //       itemlist.map((elem) => {
  //         if (elem.id == iseditItem) {
  //           return { ...elem, name: item };
  //         }
  //         return elem;
  //       })
  //     );
  //     setToggle(true);
  //     setItem("");
  //     setIsEditItem(null);
  //   } else {
  //     const allItem = { id: new Date().getTime().toString(), name: item };
  //     setItemList([...itemlist, allItem]);
  //     setItem("");
  //   }
  // };
  // const del = (id) => {
  //   const updatedItems = itemlist.filter((elem) => {
  //     return id !== elem.id;
  //   });
  //   setItemList(updatedItems);
  // };
  // const removeAll = () => {
  //   setItemList([]);
  // };
  // const editItem = (id) => {
  //   setToggle(false);
  //   const edititem = itemlist.find((elem) => {
  //     return id === elem.id;
  //   });
  //   setItem(edititem.name);
  //   setIsEditItem(id);
  // };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="logo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍Add Item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            {toggle ? (
              <i
                className="fa fa-plus add-btn"
                title="add item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="update item"
                onClick={addItem}
              ></i>
            )}
          </div>
          <div className="showItems">
            {itemlist.map((current) => {
              return (
                <div className="eachItem" key={current.id}>
                  <h3>{current.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-edit add-btn"
                      title="edit item"
                      onClick={() => editItem(current.id)}
                    ></i>
                    <i
                      className="fa fa-trash add-btn"
                      title="delete item"
                      onClick={() => del(current.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove all"
              onClick={removeAll}
            >
              <span> Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
