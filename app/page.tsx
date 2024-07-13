import UploadComponent from "@/components/imageUpload/upload";

import { Login } from "@/components/modal/modal1";
import Body from "@/components/modal/body";
export default function Home() {
  return (
    <div className=" flex justify-center space-y-20 ">
      <UploadComponent></UploadComponent>
      <div className="lg:hidden sm:block justify-center">
        <Login />
        
      </div>
      
    </div>
  );
}
