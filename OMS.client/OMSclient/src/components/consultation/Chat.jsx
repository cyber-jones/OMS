import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages, setSelectedUser } from "../../redux/chat/chatSlice";
import { useSnackbar } from "notistack";
import useSocket from "../../hooks/useSocket";
import useAxiosAuthorization from "../../hooks/useAxiosAuth";
import { oms_server_dev_url } from "../../utils/SD";
import useMessage from "../../hooks/useMessages";

const Chat = () => {
  const [loading, setLoading] = useState(false);
  const { selectedUser, messages } = useSelector((state) => state.chat);
  const { authUser } = useSelector((state) => state.authUser);
  const { loading: loadingMessages, messages: chatMessages } = useMessage()
  const [text, setText] = useState(null);
  const [image, setImage] = useState(null);
  const { socket } = useSocket();
  const { onlineUsers } = useSelector((state) => state.chat);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const axiosAuth = useAxiosAuthorization(oms_server_dev_url.appointment);

  const handleSendMessage = async () => {
    const senderId = authUser?.user_Profile_Id;
    const recieverId =
      selectedUser?.patient_Id ||
      selectedUser?.doctor_Id ||
      selectedUser?.staff_Id;

    const newMessage = {
      sender_Id: senderId,
      reciever_Id: recieverId,
      text: text,
      image: image,
    };
    console.log(newMessage);

    setLoading(true);
    try {
      const res = await axiosAuth.post("/message", newMessage);

      console.log(res);
      if (res?.status !== 201 && res) {
        enqueueSnackbar(res?.data?.message || res?.statusText, {
          variant: "error",
        });
        return;
      }

      setMessages([...messages, res.data.newMessage]);
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || err.message, {
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
    socket.emit("new-message", newMessage);
  };

  useState(() => {
    if (!loadingMessages && chatMessages) setMessages(chatMessages);
    if (!socket) return;

    socket.on("send-message", (message) => {
      setMessages([...messages, message]);
    });

    return () => socket.off("send-message");
  }, []);

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
            <div className="w-12 h-12 bg-gray-950 rounded-full">
              {onlineUsers?.includes(
                selectedUser?.patient_Id ||
                  selectedUser?.doctor_Id ||
                  selectedUser?.staff_Id
              ) ? (
                <div className="relative w-4 h-4 bg-green-500 rounded-full left-7 top-9"></div>
              ) : (
                <div className="relative w-4 h-4 bg-red-500 rounded-full left-7 top-9"></div>
              )}
            </div>
            <div>
              <strong>
                {selectedUser?.first_Name} {selectedUser?.last_Name}
              </strong>
              <p className="text-sm">
                {onlineUsers?.includes(
                  selectedUser?.patient_Id ||
                    selectedUser?.doctor_Id ||
                    selectedUser?.staff_Id
                )
                  ? "online"
                  : "Offline"}
              </p>
            </div>
            <div className="flex flex-1 justify-end items-center gap-5 px-4">
              <p className="text-sm">
                {selectedUser ? "" : "Specialty: "}
                <i>{selectedUser?.specialty?.name}</i>
              </p>
              <i
                onClick={() => dispatch(setSelectedUser(null))}
                className="bi bi-people-fill text-2xl cursor-pointer"
              ></i>
            </div>
          </div>
          <div className="flex-1 w-full justify-center">
            {messages && messages.length > 0 ? (
              messages.map((message, index) => (
                <p key={index}>{messages.text}</p>
              ))
            ) : (
              <div className="w-full flex flex-col justify-center items-center h-full">
                <i className="bi bi-chat-left-dots text-[100px] text-pink-500 animate-bounce"></i>
                <p className="text-4xl mt-5">
                  <strong>HI</strong> {selectedUser?.doctor_Id ? "Dr" : null}{" "}
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
            <button disabled={loading}><i
              onClick={handleSendMessage}
              className="bi bi-send-fill text-2xl cursor-pointer"
            ></i></button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
