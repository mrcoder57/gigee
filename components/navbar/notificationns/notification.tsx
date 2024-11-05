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
import Image from "next/image";
interface Notification {
  _id: string;
  message: string;
  userId: string;
  targetUserId: string;
  link: string;
  read: boolean;
}

export default function Notifications() {
  // const [notifications, setNotifications] = useState<Notification[] | null>(
  //   null
  // );
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);

  // const fetchNotifications = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await getNotifications();
  //     console.log("Fetched notifications:", response?.data.notifications);
  //     setNotifications(response?.data.notifications || []);
  //     setError(null); // Clear any previous error
  //   } catch (error) {
  //     console.error("Error fetching notifications:", error);
  //     setError("Failed to fetch notifications. Please try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchNotifications();

  //   socketInstance.on("connect", () => {
  //     console.log("Socket connected");
        
  //     socketInstance.on("send_notification", (data) => {
  //       console.log("Notification received:", data);

  //       const intendedUserId = data.targetUserId;

  //       if (userId === intendedUserId) {
          
  //         setNotifications((prevNotifications) =>
  //           prevNotifications ? [...prevNotifications, data] : [data]
  //         );
  //       }
  //       socketInstance.emit("receive_notification", data, intendedUserId);
  //     });
  //   });

   
  // }, []);

  // console.log("Current notifications:", notifications);
  const notifications = [
    {
      title: "Setting",
      description: "Update Dashboard",
      icon: "/setting-white.svg",
      gradient: "from-[#4E96FF] to-[#80C9FC]",
    },
   
    {
      title: "Event Update",
      description: "An event date update",
      icon: "/calendar.svg",
      gradient: "from-[#9E8FFF] to-[#EBCBFF]",
    },
    {
      title: "Profile",
      description: "Update Profile",
      icon: "/avatar-white.svg",
      gradient: "from-[#F97FD9] to-[#FFC1E6]",
    },
    {
      title: "Application Error",
      description: "Error occured",
      icon: "/notsign.svg",
      gradient: "from-[#FF8F8F] to-[#FFC1C1]",
    },
  ];

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="focus:outline-none">
    <Image src="/notification-bell.svg" alt="notification bell" width={23} height={23} />
     
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-[230px] h-[300px]">
      <DropdownMenuLabel className={` text-sm`}>
        Notifications
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {notifications.map((notification, index) => (
        <DropdownMenuItem key={index} className="h-[50px] mt-[3px] flex justify-between px-4 gap-x-2">
          <div className="flex flex-row gap-x-4 items-center justify-center">
            <div className={`w-10 h-10 bg-gradient-to-r ${notification.gradient} flex items-center justify-center rounded-full`}>
              <Image src={notification.icon} alt={notification.title} height={20} width={20} />
            </div>
            <div className="flex flex-col justify-start">
              <h4 className={` text-[14px] font-medium`}>{notification.title}</h4>
              <span className={`text-[#B5B5B5] text-[12px]`}>{notification.description}</span>
            </div>
          </div>
        </DropdownMenuItem>
      ))}
      <DropdownMenuSeparator className=" bg-[#B5B5B5]" />
      <div className="flex items-center justify-center">
        <p className={`text-[#B5B5B5] mt-1 text-[14px]`}>See All Notifications</p>
      </div>
    </DropdownMenuContent>
  </DropdownMenu>
  );
}
