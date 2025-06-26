/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages, setSelectedUser } from "../../redux/chat/chatSlice";
import { useSnackbar } from "notistack";
import useSocket from "../../hooks/useSocket";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { oms_server_production_url, oms_url } from "../../utils/SD";
import { Link } from "react-router-dom";
import { formatTime } from "../../utils/formatTime";
import toast from "react-hot-toast";

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const { selectedUser, messages } = useSelector((state) => state.chat);
  const { authUser } = useSelector((state) => state.authUser);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const { socket } = useSocket();
  const { onlineUsers } = useSelector((state) => state.chat);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const messageEndRef = useRef();
  const axiosAuth = useAxiosAuthorization(oms_server_production_url.appointment);
  const profileUrl = selectedUser?.mln
    ? `/doctor/${selectedUser?._id}`
    : `/patient/${selectedUser?._id}`;

  const handleSendMessage = async () => {
    if (text == "" && image == "") return;

    const senderId = authUser.email;
    const recieverId = selectedUser.email;

    const newMessage = {
      sender_Id: senderId,
      reciever_Id: recieverId,
      text: text,
      image: image,
    };

    setLoading(true);
    try {
      const res = await axiosAuth.post("/message", newMessage);

      if (res?.status !== 201 && res) {
        enqueueSnackbar(res?.data?.message || res?.statusText, {
          variant: "error",
        });
        return;
      }

      dispatch(setMessages([...messages, res.data.newMessage]));
      setText("");
      setImage("");
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
    socket.emit("new-message", newMessage);
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("new-message", (message) => {
      dispatch(setMessages([...messages, message]));
      { message?.text ? toast.promise(message.text) : toast.promise("New message: image");}
    });

    return () => socket.off("new-message");
  }, [messages, socket]);

  const handleImageUrl = (e) => {
    const file = e.target.files[0];
    const fileSize = 1048000;
    
    if (!file.type.startsWith("image/")) {
      enqueueSnackbar("Please select an image file", { variant: "error" });
      return;
    }

    if (file.size > fileSize) {
      enqueueSnackbar("Image size too large { maximum - 1mb}", {
        variant: "error",
      });
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

  const handleCloseChat = () => {
    dispatch(setMessages([]));
    dispatch(setSelectedUser(null));
  };

  useEffect(() => {
    if (messageEndRef.current && messages)
      messageEndRef.current.scrollIntoView({ behavior: "smooth" })
  }, [messages]);

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
            <Link className="bg-gray-950 rounded-full">
              <img
                src={
                  selectedUser?.profile_Url
                    ? selectedUser?.profile_Url
                    : selectedUser?.sex == "Male"
                    ? "/images/profile-masculine.jpeg"
                    : "/images/profile-femine.jpeg"
                }
                className="rounded-full w-10"
              />
            </Link>
            <div>
              <Link to={oms_url.profile + profileUrl}>
                <p className="text-sm md:text-lg ">
                  <strong>{selectedUser?.first_Name}</strong>{" "}
                  <strong>{selectedUser?.last_Name}</strong>
                </p>
              </Link>
              <div className="text-[9px] md:text-sm flex gap-2 justify-start items-center">
                <div>
                  {onlineUsers?.includes(selectedUser?.email)
                    ? "online"
                    : "Offline"}
                </div>
                {onlineUsers?.includes(selectedUser?.email) ? (
                  <div className="w-2 h-2 bg-green-500 rounded-full "></div>
                ) : (
                  <div className="w-2 h-2 bg-red-500 rounded-full "></div>
                )}
              </div>
            </div>
            <div className="flex flex-1 justify-end items-center gap-5 px-4">
              <p className="text-[9px] md:text-sm">
                {selectedUser ? "" : "Specialty: "}
                <i>{selectedUser?.specialty?.name}</i>
              </p>
              <i
                onClick={handleCloseChat}
                className="bi bi-people-fill text-2xl cursor-pointer"
              ></i>
            </div>
          </div>
          <div className="flex-1 w-full justify-center p-3 overflow-auto">
            {messages && messages.length > 0 ? (
              <>
                {messages.map((message, index) => (
                  // <p key={index}>{message.text}</p>
                  <div
                    ref={messageEndRef}
                    key={index}
                    className={`chat ${
                      message.sender_Id == authUser.email
                        ? "chat-end"
                        : "chat-start"
                    }`}
                  >
                    <div className="chat-header">
                      <time className="text-xs opacity-50">
                        {formatTime(message.createdAt)}
                      </time>
                    </div>
                    {message?.text ? (
                      <div
                        className={`chat-bubble ${
                          message.sender_Id == authUser.email
                            ? "bg-blue-300"
                            : null
                        }`}
                      >
                        {message.text}
                      </div>
                    ) : null}
                    {message?.image ? (
                      <div
                        className={`chat-bubble ${
                          message.sender_Id == authUser.email
                            ? "bg-blue-300"
                            : null
                        }`}
                      >
                        <img src={message.image} />
                      </div>
                    ) : null}
                    <div className="chat-footer opacity-50">Delivered</div>
                  </div>
                ))}
                {loading ? (
                  <div className="w-10 h-10 animate-ping text-black"></div>
                ) : null}
              </>
            ) : (
              <div className="w-full flex flex-col justify-center items-center h-full">
                <i className="bi bi-chat-left-dots text-[100px] text-pink-500 animate-bounce"></i>
                <p className="text-4xl mt-5">
                  <strong>HI</strong> {selectedUser?.MLN ? "Dr" : null}{" "}
                  {selectedUser?.last_Name}
                </p>
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
              disabled={loading}
              type="text"
              placeholder="Send Message"
              id="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="focus:outline-0 w-10/12 border p-3 border-gray-400 rounded-md"
            />
            <input
              disabled={loading}
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
            <button disabled={loading}>
              <i
                onClick={handleSendMessage}
                className="bi bi-send-fill text-2xl cursor-pointer"
              ></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
