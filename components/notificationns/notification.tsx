import { useState, useEffect } from "react";
import { getNotifications } from "@/utils/api-handler";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { socketInstance } from "@/utils/socket";
import { userId } from "@/utils/api-handler";
interface Notification {
  _id: string;
  message: string;
  userId: string;
  targetUserId: string;
  link: string;
  read: boolean;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[] | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const response = await getNotifications();
      console.log("Fetched notifications:", response?.data.notifications);
      setNotifications(response?.data.notifications || []);
      setError(null); // Clear any previous error
    } catch (error) {
      console.error("Error fetching notifications:", error);
      setError("Failed to fetch notifications. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();

    socketInstance.on("connect", () => {
      console.log("Socket connected");
        
      socketInstance.on("send_notification", (data) => {
        console.log("Notification received:", data);

        const intendedUserId = data.targetUserId;

        if (userId === intendedUserId) {
          
          setNotifications((prevNotifications) =>
            prevNotifications ? [...prevNotifications, data] : [data]
          );
        }
        socketInstance.emit("receive_notification", data, intendedUserId);
      });
    });

   
  }, []);

  console.log("Current notifications:", notifications);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none outline-none overflow-x-hidden hidden lg:block">
        <div className="w-16 h-10 p-3 flex items-center justify-center">
          <IoMdNotificationsOutline size={22} />{" "}
          {/* Adjust the size as needed */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSeparator />
        {loading ? (
          <div>Loading notifications...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : notifications && notifications.length === 0 ? (
          <div>No notifications available.</div>
        ) : (
          <div className="flex flex-col">
            {notifications?.map((noti) => (
              <DropdownMenuItem
                key={noti._id} // Provide unique key
                className="text-center hover:underline hover:text-gray-600 transition-colors duration-200"
              >
                {noti.message}
              </DropdownMenuItem>
            ))}
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
