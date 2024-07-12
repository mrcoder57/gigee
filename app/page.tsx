import UploadComponent from "@/components/imageUpload/upload";
import { Login } from "@/components/modal/modal1";
export default function Home() {
  return (
    <div className=" flex justify-center space-y-20 ">
      <UploadComponent></UploadComponent>
      <Login></Login>
    </div>
  );
}
