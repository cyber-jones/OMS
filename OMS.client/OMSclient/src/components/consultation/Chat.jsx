import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../redux/chat/chatSlice";
import { useSnackbar } from "notistack";

const Chat = () => {
  const { selectedUser, messages } = useSelector((state) => state.chat);
  const [text, setText] = useState(null);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSendMessage = () => {
    console.log({ text, image });
  };

  const handleImageUrl = (e) => {
    const file = e.target.files[0];

    if (!file.type.startsWith("image/")) {
      enqueueSnackbar("Please select an image file", { variant: "error" });
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const handleCancleImage = () => {
    setImage(null);
    imageRef.current.value = null;
  };

  return (
    <>
      {selectedUser == null ? (
        <div className="w-[75%] hidden md:flex h-full justify-center items-center bg-gray-200 rounded-br-2xl">
          <img src="/images/chat-1.webp" alt="chat-empty" />
        </div>
      ) : (
        <div
          className={`w-full md:w-[75%] font-sans ${
            selectedUser ? "flex" : "hidden"
          } h-full justify-start items-center flex-col bg-gray-200 rounded-br-2xl`}
        >
          <div className="w-full h-14 flex gap-5 px-2 items-center">
            <div className="w-10 h-10 bg-gray-950 rounded-full"></div>
            <div>
              <strong>
                {selectedUser?.first_Name} {selectedUser?.last_Name}
              </strong>
              <p className="text-sm">Online</p>
            </div>
            <div className="flex flex-1 justify-end items-center gap-5 px-4">
              <p className="text-sm">
                {selectedUser ? "" : "Specialty: "}
                <i>{selectedUser?.specialty.name}</i>
              </p>
              <i
                onClick={() => dispatch(setSelectedUser(null))}
                className="bi bi-people-fill text-2xl cursor-pointer"
              ></i>
            </div>
          </div>
          <div className="flex-1 w-full justify-center">
            {messages.length > 1 ? (
              <p>HI</p>
            ) : (
              <div className="w-full flex flex-col justify-center items-center h-full">
                <i className="bi bi-chat-left-dots text-[100px] text-pink-500 animate-bounce"></i>
                <p className="text-4xl mt-5"><strong>HI</strong> Dr {selectedUser?.last_Name}</p>
              </div>
            )}
          </div>
          {image ? (
            <div className="w-full flex items-start">
              <div
                className="relative left-20 p-1 bg-red-500"
                onClick={handleCancleImage}
              >
                <i className="bi bi-x"></i>
              </div>
              <img src={image} className="h-20 w-20" alt="image preview" />
            </div>
          ) : null}
          <div className="w-full h-16 p-3 m-3 flex gap-5 items-center">
            <input
              type="text"
              placeholder="Send Message"
              id="message"
              onChange={(e) => setText(e.target.value)}
              className="focus:outline-0 w-10/12 border p-3 border-gray-400 rounded-md"
            />
            <input
              type="file"
              accept="image/*"
              ref={imageRef}
              id="image"
              hidden
              onChange={(e) => handleImageUrl(e)}
            />
            <i
              onClick={() => imageRef.current.click()}
              className="bi bi-image-fill text-2xl cursor-pointer"
            ></i>
            <i
              onClick={handleSendMessage}
              className="bi bi-send-fill text-2xl cursor-pointer"
            ></i>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
