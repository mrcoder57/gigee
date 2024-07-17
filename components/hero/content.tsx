import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
const Content = () => {
  return (
    <div className=" flex flex-col max-w-[650px]">
      {/* location */}
      <div className=" flex flex-col ">
        <div>
          <p className=" mt-10 text-2xl font-semibold">
            Los Angeles, California, Usa
          </p>
        </div>
      </div>
      {/* user portion */}
      <Separator orientation="horizontal" className=" mt-8" />
      <div className=" flex flex-row h-24 gap-4 items-center ">
        <div className="w-16 h-16 relative items-center justify-center ">
          <Image
            src="/images/sample.jpg"
            alt="VIP with Kevin Hart"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className=" flex flex-col">
          <p className=" text-xl font-semibold">Hosted by Ama chan</p>
          <p className=" text-gray-600 text-sm">username</p>
        </div>
      </div>
      <div>
        <Separator orientation="horizontal" />
        <p className=" text-sm ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          enim molestiae sit quos. Ex non exercitationem fugiat, corporis itaque
          esse deserunt delectus eius labore necessitatibus culpa voluptate
          laboriosam harum eos dolores, vero voluptas iusto tenetur aperiam
          libero quasi nostrum nemo iste numquam! Consequuntur, cumque
          consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Mollitia rem placeat cumque vel repellat et reiciendis ipsum illum,
          autem hic dolor quos? Consequuntur, possimus repellat aliquam quos
          exercitationem nam. Laboriosam, non? Quibusdam voluptates fugiat,
          dolore nisi, rem consequatur eveniet sunt deserunt libero, officiis ea
          corrupti accusamus soluta optio laborum repellat. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. 
          Itaque ullam veritatis delectus
          pariatur nemo praesentium, aut quam perferendis beatae facere possimus
          minus aliquam animi quo repellat facilis, unde, adipisci explicabo ab!
          Accusantium consequuntur possimus sequi iure, quibusdam autem illum,
          eos voluptas sit quae tempore, unde maiores. Deleniti, atque?
          Recusandae laudantium quas qui rerum nobis esse ipsam, eaque pariatur
          hic expedita. Assumenda temporibus exercitationem pariatur nam eveniet
          corrupti autem dicta libero quos cumque, hic veritatis, deleniti
          animi? Dolorum, eligendi, beatae atque eius nam vitae tenetur dolorem
          culpa quasi alias quae qui. Repellendus magni, adipisci sit deleniti
          ducimus consequuntur saepe. Assumenda, eligendi?
        </p>
      </div>
    </div>
  );
};

export default Content;
